<template>
  <div>
    <p>只愿君心似我心，定不负相思意。</p>
    <div id="content"></div>
  </div>
</template>
<script>
function heart({
  count,
  ctx,
  width = window.innerWidth,
  height = window.innerHeight,
  heartSize = 7, // 心的大小
  heartSpeed = 1000 // 心的速度
}) {
  // 核心形状的类
  const { random, floor } = Math;
  this.textWidth = floor((count / 4) % width); // 文本宽度
  this.textHeight = floor(count / 8 / height); // 文本高度
  this.XMoveSpeed = random() * heartSize;
  this.YMoveSpeed = random() * heartSize; // 移动速度
  this.pathUnit = 2 + random() * heartSize; // 路径因子
  this.moveUnit = 0.1; // 移动因子
  this.isColorful = random() * 360;
  this.limitValue = heartSize + random() * heartSize; // 计算的临界值
  this.randomX = random(); // 随机的X坐标
  this.randomY = random(); // 随机的Y坐标
  this.renderHeartPath = () => {
    // 渲染爱心
    ctx.fillStyle = `hsla(${this.isColorful}, 90%, 65%, 1)`;
    ctx.beginPath();
    ctx.moveTo(
      this.randomX + 0.5 * this.pathUnit,
      this.randomY + 0.3 * this.pathUnit
    );
    ctx.bezierCurveTo(
      this.randomX + 0.1 * this.pathUnit,
      this.randomY,
      this.randomX,
      this.randomY + 0.6 * this.pathUnit,
      this.randomX + 0.5 * this.pathUnit,
      this.randomY + 0.9 * this.pathUnit
    );
    ctx.bezierCurveTo(
      this.randomX + 1 * this.pathUnit,
      this.randomY + 0.6 * this.pathUnit,
      this.randomX + 0.9 * this.pathUnit,
      this.randomY,
      this.randomX + 0.5 * this.pathUnit,
      this.randomY + 0.3 * this.pathUnit
    );
    ctx.closePath();
    ctx.fill();
  };
  this.setFontMoveType = () => {
    // 设置文字爱心移动速度
    if (this.randomX < this.textWidth - this.limitValue) {
      this.randomX = this.textWidth - this.limitValue;
      this.XMoveSpeed *= -0.8;
    }

    if (this.randomX > this.textWidth + this.limitValue) {
      this.randomX = this.textWidth + this.limitValue;
      this.XMoveSpeed *= -0.8;
    }

    if (this.randomY < this.textHeight - this.limitValue) {
      this.randomY = this.textHeight - this.limitValue;
      this.YMoveSpeed *= -0.8;
    }

    if (this.randomY > this.textHeight + this.limitValue) {
      this.randomY = this.textHeight + this.limitValue;
      this.YMoveSpeed *= -0.8;
    }
  };
  this.renderFontPath = () => {
    // 渲染文字路径
    if (this.XMoveSpeed > heartSpeed) {
      this.XMoveSpeed = heartSpeed;
    }
    if (this.YMoveSpeed > heartSpeed) {
      this.YMoveSpeed = heartSpeed;
    }
    this.randomX += this.XMoveSpeed * this.moveUnit;
    this.randomY += this.YMoveSpeed * this.moveUnit;
    this.setFontMoveType();
  };
}
export default {
  mounted() {
    let canvas = document.createElement("canvas");
    canvas.id = "canvas";
    document.getElementById("content").appendChild(canvas);
    let ctx = canvas.getContext("2d");
    canvas.width = 1200;
    canvas.height = 400;
    let renderBackground = () => {
      ctx.fillStyle = "#272D4D";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    renderBackground();
    ctx.fillStyle = "hsla(0, 0%, 0%, 1)";
    ctx.font = "Bold 9em sans-serif";
    let text = "I LOVE YOU".split("").join(String.fromCharCode(0x2006));
    ctx.fillText(
      text,
      (canvas.width - ctx.measureText(text).width) * 0.5,
      canvas.height * 0.5
    );
    let heartLists = []; // 存放爱心的列表
    let heartImage = ctx.getImageData(0, 0, canvas.width, canvas.height); // 爱心的每一帧图片
    let heartCount = 0; // 爱心数量
    for (let count = 0; count < heartImage.data.length; count += 4) {
      if (heartImage.data[count] === 0) {
        heartCount++;
        if (heartCount % 20 === 0) {
          let amour = new heart({
            count,
            ctx,
            width: canvas.width,
            height: canvas.height
          });
          amour.renderHeartPath();
          heartLists.push(amour);
        }
      }
    }
    const startDraw = () => {
      renderBackground();
      for (let count in heartLists) {
        let index = heartLists[count];
        index.renderFontPath();
        index.renderHeartPath();
      }
      if (canvas) {
        window.requestAnimationFrame(startDraw);
      }
    };
    startDraw();
  }
};
</script>
<style scoped>
#content{
  width: 100%;
  overflow:auto
}
</style>
