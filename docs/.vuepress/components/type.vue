<template>
  <div style="text-align:center;font-size:25px;font-weight:300;">
    {{ obj.output }}
    <span class="typed-cursor">|</span>
    <p class="description">「{{ creator || '许剑煜' }}」</p>
  </div>
</template>
<script>
import EasyTyper from 'easy-typer-js'
export default {
  data() {
    return {
      obj: {
        output: '',
        isEnd: false,
        speed: 80,
        singleBack: false,
        sleep: 6000,
        type: 'rollback',
        backSpeed: 60,
        sentencePause: false
      },
      creator: '许剑煜'
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.fetchData()
    },
    fetchData() {
      // 一言Api进行打字机循环输出效果
      fetch('https://v1.hitokoto.cn')
        .then(res => {
          return res.json()
        })
        .then(({ hitokoto, creator }) => {
          this.creator = creator
          this.initTyped(hitokoto)
        })
    },
    initTyped(input, fn, hooks) {
      const obj = this.obj
      const typed = new EasyTyper(obj, input, this.init)
    }
  }
}
</script>

<style lang="stylus">
  .typed-cursor
    margin-left: 10px
    opacity: 1
    -webkit-animation: blink 0.7s infinite
    -moz-animation: blink 0.7s infinite
    animation: blink 0.7s infinite
  @keyframes blink
    0%
      opacity: 1
    50%
      opacity: 0
    100%
      opacity: 1
  
  @-webkit-keyframes blink
    0%
      opacity: 1
    50%
      opacity: 0
    100%
      opacity: 1
  
  @-moz-keyframes blink
    0%
      opacity: 1
    50%
      opacity: 0
    100%
      opacity: 1
  .description  
    text-align:center
    font-size: 20px;
    color: #6a8bad;


 
</style>