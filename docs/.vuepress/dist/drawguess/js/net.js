/**
 * net.js — P2P 连接层（基于 PeerJS）
 *
 * 架构：星型拓扑。
 *   房主（第一个创建房间的玩家）作为“主机”，负责游戏逻辑与消息中转；
 *   其他玩家（客人）通过 6 位房间号连接到房主的 Peer ID。
 *   所有绘图/聊天/游戏事件经房主广播，底层均为 WebRTC 点对点直连，
 *   PeerJS 官方公共信令服务器只负责“牵线”（交换连接信息），不参与数据传输。
 *
 * Peer ID 规则：'nhj-' + 6位房间号（房主），客人连接到该 ID。
 */
const Net = (() => {
  const PREFIX = "nhj-";
  const CODE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // 去掉易混淆的 I/1/O/0

  let peer = null;
  let conns = new Map();      // 房主侧：guestId -> DataConnection
  let hostConn = null;        // 客人侧：与房主的连接
  let myId = null;
  let isHost = false;
  let h = { msg: () => {}, join: () => {}, close: () => {}, err: () => {} };

  function newCode() {
    let s = "";
    for (let i = 0; i < 6; i++) s += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
    return s;
  }

  const PEER_OPTIONS = {
    host: "0.peerjs.com",
    port: 443,
    secure: true,
    path: "/",
    pingInterval: 2000,
    debug: 0,
    config: {
      iceServers: [
        { urls: "stun:stun.l.google.com:19302" },
        { urls: "stun:stun1.l.google.com:19302" },
      ],
    },
  };

  function newPeer(peerId) {
    return new Promise((resolve, reject) => {
      const p = new Peer(peerId, PEER_OPTIONS);
      const timer = setTimeout(() => reject(new Error("连接信令服务器超时，请检查网络")), 15000);
      p.on("open", (id) => { clearTimeout(timer); resolve(p); });
      p.on("disconnected", () => { if (!p.destroyed) p.reconnect(); });
      p.on("error", (e) => {
        clearTimeout(timer);
        if (e && (e.type === "network" || e.type === "disconnected")) {
          if (!p.destroyed) p.reconnect();
          return;
        }
        reject(e);
      });
    });
  }

  /* ---------------- 房主 ---------------- */

  async function host(handlers) {
    h = handlers;
    isHost = true;
    let lastErr = null;
    for (let i = 0; i < 4; i++) {
      const code = newCode();
      try {
        peer = await newPeer(PREFIX + code);
        peer.on("connection", setupHostConn);
        return code;
      } catch (e) {
        if (e && e.type === "unavailable-id") { lastErr = e; continue; } // 房间号碰撞，重试
        throw e;
      }
    }
    throw lastErr || new Error("创建房间失败");
  }

  function setupHostConn(c) {
    conns.set(c.peer, c);
    c.on("data", (d) => h.msg(c.peer, d));
    c.on("close", () => { conns.delete(c.peer); h.close(c.peer); });
    c.on("error", () => { conns.delete(c.peer); h.close(c.peer); });
    c.on("open", () => h.join(c.peer));
  }

  /* ---------------- 客人 ---------------- */

  async function join(code, handlers) {
    h = handlers;
    isHost = false;
    peer = await newPeer(undefined); // 随机分配 ID
    const target = PREFIX + code.toUpperCase();
    return new Promise((resolve, reject) => {
      const c = peer.connect(target, { reliable: true });
      const timer = setTimeout(() => {
        reject(new Error("找不到该房间，请确认房间号是否正确，且房主未关闭页面"));
      }, 12000);
      c.on("open", () => {
        clearTimeout(timer);
        hostConn = c;
        resolve();
      });
      c.on("error", (e) => { clearTimeout(timer); reject(e); });
      c.on("close", () => { if (hostConn === c) { hostConn = null; h.close("__host__"); } });
    });
  }

  /* ---------------- 收发 ---------------- */

  function send(id, msg) {
    if (isHost) {
      const c = conns.get(id);
      if (c && c.open) { try { c.send(msg); } catch (e) {} }
    } else if (hostConn && hostConn.open) {
      try { hostConn.send(msg); } catch (e) {}
    }
  }

  function broadcast(msg, exceptId = null) {
    if (!isHost) return;
    for (const [id, c] of conns) {
      if (id !== exceptId && c.open) { try { c.send(msg); } catch (e) {} }
    }
  }

  function connectedIds() {
    return isHost ? [...conns.keys()] : (hostConn && hostConn.open ? ["__host__"] : []);
  }

  function shutdown() {
    try {
      for (const c of conns.values()) c.close();
      if (hostConn) hostConn.close();
      if (peer) peer.destroy();
    } catch (e) {}
    conns = new Map(); hostConn = null; peer = null; myId = null; isHost = false;
  }

  return {
    host, join, send, broadcast, shutdown, connectedIds,
    get isHost() { return isHost; },
    get myId() { return isHost ? (peer && peer.id) : (peer && peer.id); },
    HOST_ID: "__host__", // 客人视角下房主的逻辑 ID
  };
})();
