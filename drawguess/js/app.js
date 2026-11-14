/**
 * app.js — 游戏逻辑与界面
 *
 * 角色说明：
 *  - 房主（主机）：权威状态机，管理回合、计时、判词、计分，并中转消息。
 *  - 客人：发送操作（画画/猜词/选词），接收广播并渲染。
 *  - 房主本人也是普通玩家，其逻辑 ID 为 Net.HOST_ID("__host__")，
 *    这样所有客户端看到的玩家 ID 体系是一致的。
 */
"use strict";

/* ================= 工具 ================= */
const $ = (s) => document.querySelector(s);
const rand = (n) => Math.floor(Math.random() * n);
const pickN = (arr, n) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = rand(i + 1); [a[i], a[j]] = [a[j], a[i]]; }
  return a.slice(0, n);
};
const norm = (s) => (s || "").trim().toLowerCase();

/* ================= 全局状态 ================= */
const S = {
  selfId: null,
  myName: "",
  roomCode: "",
  isHost: false,
  players: new Map(),     // id -> {id, name, score, online}
  order: [],              // 出画顺序（房主权威）
  phase: "menu",          // menu | lobby | choosing | drawing | reveal | over
  roundNo: 0,
  totalRounds: 2,
  drawerId: null,
  word: null,
  wordLen: 0,
  hintMask: [],
  choices: [],
  guessed: new Set(),
  strokes: [],            // 本回合笔画（规范化坐标）
  remain: 0,
  totalSec: 90,
  lastChatWasGuess: false,
};
const timers = { tick: null, pick: null, reveal: null };

/* ================= 画板 ================= */
const board = $("#board");
const ctx = board.getContext("2d");
const COLORS = ["#1e1e1e", "#e74c3c", "#f39c12", "#f7d038", "#2ecc71", "#3498db", "#9b59b6", "#ff9ff3", "#8b5a2b", "#7f8c8d"];
const SIZES = [3, 6, 12, 22];
const brush = { color: COLORS[0], size: 6, erase: false };

let curBatch = null;      // 正在书写的一笔 {c,w,erase,pts:[[x,y],...]}
let drawing = false;
let lastPt = null;
const flushTimer = setInterval(() => flushBatch(), 50);

function drawBatch(b) {
  const pts = b.pts;
  if (!pts || pts.length < 2) return;
  ctx.save();
  ctx.strokeStyle = b.erase ? "#ffffff" : b.c;
  ctx.lineWidth = b.erase ? b.w * 2.6 : b.w;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(pts[0][0] * board.width, pts[0][1] * board.height);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0] * board.width, pts[i][1] * board.height);
  ctx.stroke();
  ctx.restore();
}

function clearCanvas() { ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, board.width, board.height); }
function redrawAll() { clearCanvas(); for (const b of S.strokes) drawBatch(b); }

function flushBatch() {
  if (!curBatch || curBatch.pts.length === 0) return;
  const b = curBatch;
  curBatch = b.erase ? { c: b.c, w: b.w, erase: true, pts: [] } : { c: b.c, w: b.w, erase: false, pts: [] };
  S.strokes.push(b);
  if (S.isHost) {
    Net.broadcast({ t: "stroke", b });
  } else {
    Net.send(Net.HOST_ID, { t: "stroke", b });
  }
}

function boardPos(e) {
  const r = board.getBoundingClientRect();
  return [
    Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)).toFixed(3),
    Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)).toFixed(3),
  ];
}

function amDrawer() { return S.drawerId === S.selfId; }
function canDraw() { return S.phase === "drawing" && amDrawer(); }

board.addEventListener("pointerdown", (e) => {
  if (!canDraw()) return;
  board.setPointerCapture(e.pointerId);
  drawing = true;
  const p = boardPos(e);
  curBatch = { c: brush.color, w: brush.erase ? brush.size * 2.6 : brush.size, erase: brush.erase, pts: [p] };
  lastPt = p;
});
board.addEventListener("pointermove", (e) => {
  if (!drawing || !curBatch) return;
  const p = boardPos(e);
  // 本地实时画
  drawBatch({ c: brush.color, w: curBatch.w, erase: curBatch.erase, pts: [lastPt, p] });
  curBatch.pts.push(p);
  lastPt = p;
});
const endStroke = () => { if (drawing) { drawing = false; flushBatch(); curBatch = null; } };
board.addEventListener("pointerup", endStroke);
board.addEventListener("pointercancel", endStroke);

/* ================= 工具栏 ================= */
function buildToolbar() {
  const sw = $("#swatches");
  COLORS.forEach((c, i) => {
    const d = document.createElement("button");
    d.className = "swatch" + (i === 0 ? " active" : "");
    d.style.background = c;
    d.title = "颜色";
    d.onclick = () => {
      brush.color = c; brush.erase = false;
      document.querySelectorAll(".swatch").forEach((x) => x.classList.remove("active"));
      d.classList.add("active");
      $("#btn-eraser").classList.remove("active");
    };
    sw.appendChild(d);
  });
  const sz = $("#sizes");
  SIZES.forEach((s, i) => {
    const b = document.createElement("button");
    b.className = "size-dot" + (s === 6 ? " active" : "");
    const px = 6 + i * 5;
    b.style.width = px + "px"; b.style.height = px + "px";
    b.title = `笔刷 ${s}`;
    b.onclick = () => {
      brush.size = s;
      document.querySelectorAll(".size-dot").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
    };
    sz.appendChild(b);
  });
  $("#btn-eraser").onclick = () => {
    brush.erase = !brush.erase;
    $("#btn-eraser").classList.toggle("active", brush.erase);
  };
  $("#btn-undo").onclick = () => {
    if (!canDraw() || !S.strokes.length) return;
    if (S.isHost) { S.strokes.pop(); Net.broadcast({ t: "undo" }); redrawAll(); }
    else Net.send(Net.HOST_ID, { t: "undo" });
  };
  $("#btn-clear").onclick = () => {
    if (!canDraw()) return;
    if (S.isHost) { S.strokes = []; Net.broadcast({ t: "clear" }); redrawAll(); }
    else Net.send(Net.HOST_ID, { t: "clear" });
  };
}

function setDrawerUI() {
  $("#toolbar").classList.toggle("disabled", !canDraw());
  board.style.cursor = canDraw() ? "crosshair" : "default";
}

/* ================= 聊天 ================= */
function addChat(kind, who, text) {
  const log = $("#chat-log");
  const line = document.createElement("div");
  line.className = "chat-line " + kind;
  if (kind === "chat") {
    const w = document.createElement("span"); w.className = "who"; w.textContent = who;
    line.appendChild(w); line.appendChild(document.createTextNode(text));
  } else {
    line.textContent = text;
  }
  log.appendChild(line);
  log.scrollTop = log.scrollHeight;
  while (log.children.length > 200) log.removeChild(log.firstChild);
}

$("#chat-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const inp = $("#chat-input");
  const text = inp.value.trim();
  if (!text) return;
  inp.value = "";
  if (S.isHost) hostHandleChat(S.selfId, text);
  else Net.send(Net.HOST_ID, { t: "chat", text });
});

/* ================= 主菜单 ================= */
$("#btn-create").onclick = async () => {
  const name = $("#nick").value.trim() || "玩家";
  S.myName = name;
  const btn = $("#btn-create");
  btn.disabled = true; menuMsg("正在创建房间…");
  try {
    const code = await Net.host({
      msg: hostHandleMsg, join: hostOnJoin, close: hostOnLeave,
      err: () => {},
    });
    enterGame(code, true, name);
  } catch (e) {
    menuMsg("创建失败：" + (e.message || e.type || "未知错误"));
  } finally { btn.disabled = false; }
};

$("#btn-join").onclick = async () => {
  const name = $("#nick").value.trim() || "玩家";
  const code = $("#code").value.trim().toUpperCase();
  if (!/^[A-Z0-9]{6}$/.test(code)) return menuMsg("请输入 6 位房间号");
  S.myName = name;
  const btn = $("#btn-join");
  btn.disabled = true; menuMsg("正在连接房间…");
  try {
    await Net.join(code, {
      msg: guestHandleMsg,
      close: () => { alert("与房主的连接已断开（房主可能关闭了页面）"); location.reload(); },
      err: () => {},
    });
    Net.send(Net.HOST_ID, { t: "join", name });
  } catch (e) {
    menuMsg(e.message || "加入失败");
  } finally { btn.disabled = false; }
};

function menuMsg(t) { $("#menu-msg").textContent = t; }

$("#btn-copy").onclick = () => {
  navigator.clipboard?.writeText(S.roomCode).then(() => {
    $("#btn-copy").textContent = "已复制";
    setTimeout(() => ($("#btn-copy").textContent = "复制"), 1200);
  }).catch(() => {});
};
$("#btn-exit").onclick = () => { if (confirm("确定退出房间？")) location.reload(); };

function enterGame(code, isHost, name) {
  S.roomCode = code;
  S.isHost = isHost;
  S.selfId = isHost ? Net.HOST_ID : Net.myId;
  S.players.set(S.selfId, { id: S.selfId, name, score: 0, online: true });
  $("#room-code").textContent = code;
  $("#screen-menu").classList.add("hidden");
  $("#screen-game").classList.remove("hidden");
  $("#chat-log").innerHTML = "";
  clearCanvas();
  buildToolbar();
  setDrawerUI();
  renderPlayers();
  updateWordBar();
  if (isHost) { S.phase = "lobby"; showLobbyOverlay(); }
}

/* ================= 房主：游戏逻辑 ================= */

function hostOnJoin(id) {
  // 等待客人发送 join{name} 后才算真正加入
}

function hostOnLeave(id) {
  const p = S.players.get(id);
  if (!p) return;
  p.online = false;
  Net.broadcast({ t: "playerOffline", id });
  addChat("system", "", `「${p.name}」离开了房间`);
  syncPlayers();
  // 画主掉线：跳过/结束当前回合
  if (id === S.drawerId && (S.phase === "choosing" || S.phase === "drawing")) {
    if (S.phase === "drawing") endRound("drawer-left");
    else { clearTimeout(timers.pick); skipDrawerLeft(); }
  }
}

function skipDrawerLeft() {
  addChat("system", "", "画主离开了，跳过本回合");
  Net.broadcast({ t: "system", text: "画主离开了，跳过本回合" });
  hideOverlay();
  S.phase = "reveal";
  timers.reveal = setTimeout(nextTurn, 1200);
}

function hostHandleMsg(from, m) {
  if (!m || typeof m.t !== "string") return;
  switch (m.t) {
    case "join": hostAddPlayer(from, m.name); break;
    case "stroke":
      if (from === S.drawerId && S.phase === "drawing") {
        S.strokes.push(m.b);
        Net.broadcast({ t: "stroke", b: m.b }, from);
        drawBatch(m.b);
      }
      break;
    case "undo":
      if (from === S.drawerId && S.strokes.length) {
        S.strokes.pop(); Net.broadcast({ t: "undo" }); redrawAll();
      }
      break;
    case "clear":
      if (from === S.drawerId) {
        S.strokes = []; Net.broadcast({ t: "clear" }); redrawAll();
      }
      break;
    case "chat": hostHandleChat(from, String(m.text || "").slice(0, 60)); break;
    case "pick":
      if (from === S.drawerId && S.phase === "choosing" && S.choices.includes(m.word)) {
        hostPickWord(m.word);
      }
      break;
  }
}

function hostAddPlayer(id, rawName) {
  if (S.players.has(id)) return;
  let name = (rawName || "玩家").slice(0, 10);
  const names = new Set([...S.players.values()].map((p) => p.name));
  if (names.has(name)) { let i = 2; while (names.has(name + i)) i++; name = name + i; }
  S.players.set(id, { id, name, score: 0, online: true });
  if (S.phase === "lobby") S.order.push(id);
  else if (!S.order.includes(id)) S.order.push(id); // 游戏中加入则排到队尾

  addChat("system", "", `「${name}」加入了房间`);
  // 给新玩家发完整同步
  Net.send(id, Object.assign({ t: "sync" }, buildSync(id, name)));
  syncPlayers();
  if (S.phase === "lobby") showLobbyOverlay();
}

function syncPlayers() {
  const list = [...S.players.values()].map((p) => ({ ...p }));
  Net.broadcast({ t: "players", list });
  renderPlayers(list);
}

function buildSync(forId, forName) {
  return {
    players: [...S.players.values()].map((p) => ({ ...p })),
    phase: S.phase, roundNo: S.roundNo, totalRounds: S.totalRounds,
    drawerId: S.drawerId, wordLen: S.word ? S.word.length : 0,
    remain: S.remain, totalSec: S.totalSec,
    hintMask: S.hintMask, strokes: S.strokes,
    // 画主本人或已揭晓阶段可以看到词
    word: (forId === S.drawerId || S.phase === "reveal" || S.phase === "over") ? S.word : null,
  };
}

/* --- 回合流程 --- */

function hostStartGame() {
  const online = S.order.filter((id) => S.players.get(id)?.online);
  if (online.length < 2) return;
  S.order = online;
  for (const p of S.players.values()) p.score = 0;
  S.roundNo = 1; S.turnIdx = 0;
  S.phase = "playing";
  syncPlayers();
  addChat("system", "", "游戏开始！");
  Net.broadcast({ t: "system", text: "游戏开始！" });
  beginTurn();
}

function beginTurn() {
  // 清理掉线玩家
  S.order = S.order.filter((id) => S.players.get(id)?.online);
  if (S.order.length < 2) {
    S.phase = "lobby";
    Net.broadcast(Object.assign({ t: "pauseToLobby" }, buildSync(null)));
    showLobbyOverlay();
    return;
  }
  if (S.turnIdx >= S.order.length) { S.turnIdx = 0; S.roundNo++; }
  if (S.roundNo > S.totalRounds) return hostGameOver();

  S.drawerId = S.order[S.turnIdx];
  S.phase = "choosing";
  S.choices = pickN(WORDS, 3);
  S.word = null; S.wordLen = 0; S.hintMask = []; S.strokes = []; S.guessed = new Set();

  const drawerName = S.players.get(S.drawerId).name;
  addChat("system", "", `轮到「${drawerName}」选词…`);
  Net.broadcast({ t: "choosing", drawerId: S.drawerId, drawerName });
  Net.send(S.drawerId, { t: "choose", words: S.choices, sec: 20 });
  if (S.drawerId === S.selfId) showChooseOverlay(S.choices, 20, true);
  syncPlayers();

  clearTimeout(timers.pick);
  timers.pick = setTimeout(() => hostPickWord(S.choices[rand(3)]), 20000); // 超时自动选
}

function hostPickWord(word) {
  if (S.phase !== "choosing") return;
  clearTimeout(timers.pick);
  S.word = word;
  S.wordLen = word.length;
  S.hintMask = new Array(word.length).fill(false);
  S.remain = S.totalSec;
  S.phase = "drawing";

  hideOverlay();
  redrawAll();
  updateWordBar(); updateTimer();
  setDrawerUI();

  const drawerName = S.players.get(S.drawerId).name;
  Net.broadcast({ t: "roundStart", drawerId: S.drawerId, drawerName, wordLen: S.wordLen, remain: S.remain, totalSec: S.totalSec, roundNo: S.roundNo, totalRounds: S.totalRounds });
  Net.send(S.drawerId, { t: "yourWord", word });
  addChat("system", "", `「${drawerName}」开始作画，限时 ${S.totalSec} 秒`);
  if (amDrawer()) { S.word = word; showSystem(`你抽到的词是「${word}」，开始画吧！`); }

  clearInterval(timers.tick);
  timers.tick = setInterval(() => {
    S.remain--;
    Net.broadcast({ t: "tick", remain: S.remain });
    updateTimer();
    if (S.remain === Math.floor(S.totalSec / 2) && S.wordLen > 1) {
      const hidden = S.hintMask.map((v, i) => (v ? -1 : i)).filter((i) => i >= 0);
      const idx = hidden[rand(hidden.length)];
      S.hintMask[idx] = S.word[idx];
      Net.broadcast({ t: "hint", idx, ch: S.word[idx] });
      updateWordBar();
    }
    if (S.remain <= 0) endRound("time");
  }, 1000);
}

function hostHandleChat(fromId, text) {
  if (!text) return;
  const p = S.players.get(fromId);
  if (!p) return;
  if (S.phase === "drawing" && fromId !== S.drawerId && !S.guessed.has(fromId)) {
    if (S.word && norm(text) === norm(S.word)) return hostCorrect(fromId);
    // 提示猜词者（防剧透：只提示是否接近）
    Net.broadcast({ t: "chat", from: fromId, name: p.name, text });
    addChat("chat", p.name, text);
  } else {
    Net.broadcast({ t: "chat", from: fromId, name: p.name, text });
    addChat("chat", p.name, text);
  }
}

function hostCorrect(gid) {
  S.guessed.add(gid);
  const gp = S.players.get(gid);
  const dp = S.players.get(S.drawerId);
  const pts = 60 + Math.max(0, S.remain) * 2;
  gp.score += pts;
  if (dp) dp.score += 40;
  const text = `🎉「${gp.name}」猜对了！ +${pts}`;
  Net.broadcast({ t: "correct", id: gid, text });
  Net.broadcast({ t: "players", list: [...S.players.values()].map((p) => ({ ...p })) });
  addChat("guessed", "", text);
  renderPlayers();

  const alive = S.order.filter((id) => S.players.get(id)?.online && id !== S.drawerId);
  if (alive.every((id) => S.guessed.has(id))) endRound("all");
}

function endRound(reason) {
  if (S.phase !== "drawing") return;
  clearInterval(timers.tick);
  S.phase = "reveal";
  Net.broadcast({ t: "roundEnd", word: S.word, reason });
  showRoundEndOverlay(S.word, reason);
  syncPlayers();
  setDrawerUI();
  clearTimeout(timers.reveal);
  timers.reveal = setTimeout(nextTurn, 4000);
}

function nextTurn() {
  S.turnIdx++;
  beginTurn();
}

function hostGameOver() {
  S.phase = "over";
  const list = [...S.players.values()].map((p) => ({ ...p })).sort((a, b) => b.score - a.score);
  Net.broadcast({ t: "over", list });
  showOverOverlay(list);
  syncPlayers();
}

/* ================= 客人：消息处理 ================= */

function guestHandleMsg(m) {
  if (!m || typeof m.t !== "string") return;
  switch (m.t) {
    case "sync": applySync(m); break;
    case "players": renderPlayers(m.list); break;
    case "system": addChat("system", "", m.text); break;
    case "chat": addChat("chat", m.name, m.text); break;
    case "guessedSys": addChat("guessed", "", m.text); break;
    case "correct":
      addChat("guessed", "", m.text);
      if (m.id) { S.guessed.add(m.id); renderPlayers(); }
      break;
    case "choosing":
      S.phase = "choosing"; S.drawerId = m.drawerId;
      showChooseOverlay(null, 0, false, m.drawerName);
      updateWordBar(); setDrawerUI(); break;
    case "choose": showChooseOverlay(m.words, m.sec, true); break;
    case "roundStart":
      S.phase = "drawing"; S.drawerId = m.drawerId;
      S.wordLen = m.wordLen; S.hintMask = new Array(m.wordLen).fill(false);
      S.strokes = []; S.guessed = new Set();
      S.remain = m.remain; S.totalSec = m.totalSec;
      S.roundNo = m.roundNo; S.totalRounds = m.totalRounds;
      hideOverlay(); redrawAll(); updateWordBar(); updateTimer(); setDrawerUI();
      addChat("system", "", `「${m.drawerName}」开始作画，限时 ${S.totalSec} 秒`);
      break;
    case "yourWord": S.word = m.word; updateWordBar(); showSystem(`你抽到的词是「${m.word}」，开始画吧！`); break;
    case "stroke": S.strokes.push(m.b); drawBatch(m.b); break;
    case "undo": S.strokes.pop(); redrawAll(); break;
    case "clear": S.strokes = []; redrawAll(); break;
    case "tick": S.remain = m.remain; updateTimer(); break;
    case "hint": if (S.hintMask) S.hintMask[m.idx] = m.ch; updateWordBar(); break;
    case "roundEnd":
      S.phase = "reveal"; S.word = m.word;
      hideOverlay(); showRoundEndOverlay(m.word, m.reason); setDrawerUI(); break;
    case "pauseToLobby": applySync(Object.assign({ t: "sync" }, m)); break;
    case "over": S.phase = "over"; showOverOverlay(m.list); break;
  }
}

function applySync(m) {
  renderPlayers(m.players);
  m.players.forEach((p) => S.players.set(p.id, p));
  S.phase = m.phase; S.roundNo = m.roundNo; S.totalRounds = m.totalRounds;
  S.drawerId = m.drawerId; S.wordLen = m.wordLen || 0;
  S.remain = m.remain || 0; S.totalSec = m.totalSec || 90;
  S.hintMask = m.hintMask || []; S.strokes = m.strokes || [];
  if (m.word) S.word = m.word;
  redrawAll(); updateWordBar(); updateTimer(); setDrawerUI();
  if (m.phase === "lobby") showLobbyOverlay();
  else if (m.phase === "choosing") {
    const name = (S.players.get(m.drawerId) || {}).name || "玩家";
    showChooseOverlay(null, 0, false, name);
  } else if (m.phase === "reveal") showRoundEndOverlay(m.word, "");
  else hideOverlay();
}

/* ================= 界面渲染 ================= */

function renderPlayers(list) {
  if (!list) list = [...S.players.values()];
  const box = $("#players");
  box.innerHTML = "";
  const sorted = list.slice().sort((a, b) => b.score - a.score);
  if (!sorted.length) {
    box.innerHTML = `<div class="empty-hint">还没有其他玩家<br>把房间号 <b>${S.roomCode}</b> 发给好友吧！</div>`;
    return;
  }
  for (const p of sorted) {
    const d = document.createElement("div");
    d.className = "player" + (p.online === false ? " offline" : "") + (p.id === S.selfId ? " me" : "");
    let badge = "";
    if (S.phase === "drawing" && p.id === S.drawerId) badge = "🖌️";
    else if (S.guessed && S.guessed.has && S.guessed.has(p.id)) badge = "✅";
    d.innerHTML = `<span class="badge">${badge}</span><span class="name"></span><span class="score">${p.score || 0}</span>`;
    d.querySelector(".name").textContent = p.name;
    box.appendChild(d);
  }
}

function updateWordBar() {
  const bar = $("#word-bar");
  if (S.phase === "drawing" || S.phase === "reveal") {
    if (amDrawer() && S.word) {
      bar.innerHTML = `画这个词：<span class="reveal">${S.word}</span>`;
    } else if (S.phase === "reveal" && S.word) {
      bar.innerHTML = `答案：<span class="reveal">${S.word}</span>`;
    } else {
      let s = "";
      for (let i = 0; i < (S.wordLen || 0); i++) {
        const ch = S.hintMask && S.hintMask[i];
        s += ch ? ch : "＿";
      }
      bar.textContent = `提示（${S.wordLen} 个字）：` + s.split("").join(" ");
    }
  } else if (S.phase === "choosing") {
    bar.textContent = "画主正在选词…";
  } else {
    bar.textContent = "等待开始…";
  }
}

function updateTimer() {
  const el = $("#timer");
  if (S.phase !== "drawing") { el.classList.add("hidden"); $("#round-info").textContent = roundInfoText(); return; }
  el.classList.remove("hidden");
  el.textContent = S.remain + "s";
  el.classList.toggle("urgent", S.remain <= 10);
  $("#round-info").textContent = roundInfoText();
}

function roundInfoText() {
  if (S.phase === "lobby") return "等待开始";
  if (S.roundNo > 0) return `第 ${S.roundNo} / ${S.totalRounds} 轮`;
  return "";
}

function showSystem(text) { addChat("system", "", text); }

/* --- 覆盖层 --- */
function showOverlay(html) { const o = $("#overlay"); o.innerHTML = html; o.classList.remove("hidden"); }
function hideOverlay() { $("#overlay").classList.add("hidden"); }

function showLobbyOverlay() {
  const isHost = S.isHost;
  const cnt = [...S.players.values()].filter((p) => p.online).length;
  const btnHtml = isHost
    ? `<button id="ov-start" class="btn primary" ${cnt < 2 ? "disabled" : ""}>▶ 开始游戏（至少 2 人）</button>`
    : `<p class="tip">等待房主开始游戏…</p>`;
  showOverlay(`
    <h2>房间 ${S.roomCode}</h2>
    <p>当前 ${cnt} 人在房间</p>
    ${btnHtml}
    <p class="tip">每人画 1 次 × ${S.totalRounds} 轮，猜对越快分越高！</p>`);
  const b = $("#ov-start");
  if (b) b.onclick = () => { hideOverlay(); hostStartGame(); };
}

function showChooseOverlay(words, sec, isMe, drawerName) {
  if (isMe && words) {
    let left = sec;
    showOverlay(`
      <h2>请选择你要画的词</h2>
      <div class="word-choices"></div>
      <p id="ov-cd" style="color:var(--acc2)">超时将自动随机选词（${left}s）</p>`);
    const box = document.querySelector("#overlay .word-choices");
    words.forEach((w) => {
      const b = document.createElement("button");
      b.className = "word-btn"; b.textContent = w;
      b.onclick = () => {
        hideOverlay();
        if (S.isHost) hostPickWord(w);
        else Net.send(Net.HOST_ID, { t: "pick", word: w });
      };
      box.appendChild(b);
    });
    const cd = setInterval(() => {
      left--;
      const el = $("#ov-cd");
      if (!el) return clearInterval(cd);
      el.textContent = `超时将自动随机选词（${left}s）`;
    }, 1000);
  } else {
    showOverlay(`<h2>🖌️ 「${drawerName || "玩家"}」正在选词…</h2><p>请稍等</p>`);
  }
}

function showRoundEndOverlay(word, reason) {
  const why = reason === "time" ? "时间到！" : reason === "all" ? "所有人都猜对啦！" : reason === "drawer-left" ? "画主离开" : "回合结束";
  showOverlay(`
    <h2>${why}</h2>
    ${word ? `<p>答案：</p><div class="big-word">${word}</div>` : ""}
    <p style="color:var(--dim)">即将进入下一回合…</p>`);
}

function showOverOverlay(list) {
  const medal = ["🥇", "🥈", "🥉"];
  const rows = list.map((p, i) => {
    const m = medal[i] || `${i + 1}.`;
    return `<div class="${i === 0 ? "top1" : ""}">${m} ${p.name} — ${p.score} 分</div>`;
  }).join("");
  const btn = S.isHost ? `<button id="ov-again" class="btn primary">🔁 再来一局</button>` : "";
  showOverlay(`
    <h2>🏁 游戏结束</h2>
    <div class="rank-list">${rows}</div>
    ${btn}`);
  const b = $("#ov-again");
  if (b) b.onclick = () => { hideOverlay(); hostStartGame(); };
}

/* ================= 启动 ================= */
clearCanvas();
renderPlayers();
