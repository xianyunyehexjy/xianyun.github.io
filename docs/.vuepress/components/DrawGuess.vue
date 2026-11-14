<template>
  <iframe
    class="drawguess-frame"
    :src="src"
    frameborder="0"
    allowfullscreen
  ></iframe>
</template>

<script>
export default {
  name: 'DrawGuess',
  computed: {
    // VuePress 1 没有 $withBase，改用 $site.base 手动拼接（开发与线上均正确）
    src() {
      const base = (this.$site && this.$site.base) || '/';
      return base + 'drawguess/index.html';
    },
  },
};
</script>

<style>
.drawguess-frame {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  border: none;
  background: #fff;
  z-index: 1000;
}
</style>
