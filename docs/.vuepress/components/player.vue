<template>
  <div v-if="flag">
   <!-- <aplayer :audio="audio" :lrcType="3" fixed  />  -->
   <!-- <meting-js
    server="netease"
    type="playlist"
    id="60198">
  </meting-js> -->
  </div>
</template>
<script>
  // import 'APlayer/dist/APlayer.min.css';
  // import APlayer from 'APlayer';
  export default{
    data(){
      return {
        flag:false,
        audio: [
          {
            name: '东西（Cover：林俊呈）',
            artist: '纳豆',
            url: 'https://cdn.moefe.org/music/mp3/thing.mp3',
            cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
            lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc',
          },
          {
            name: '响喜乱舞（Cover：MARiA）',
            artist: '泠鸢yousa',
            url: 'https://cdn.moefe.org/music/mp3/kyoukiranbu.mp3',
            cover: 'https://p1.music.126.net/AUGVPQ_rVrngDH9ocQrn3Q==/109951163613037822.jpg?param=300y300', // prettier-ignore
            lrc: 'https://cdn.moefe.org/music/lrc/kyoukiranbu.lrc',
          },
          {
            name: '啵唧',
            artist: 'Hanser',
            url: 'https://cdn.moefe.org/music/mp3/kiss.mp3',
            cover: 'https://p1.music.126.net/K0-IPcIQ9QFvA0jXTBqoWQ==/109951163636756693.jpg?param=300y300', // prettier-ignore
            lrc: 'https://cdn.moefe.org/music/lrc/kiss.lrc',
          }
        ],
      }
    },
    mounted() {
      fetch('https://api.i-meto.com/meting/api?server=netease&type=playlist&id=2200340584&r=random')
        .then(res => {
            return res.json()
        })
        .then((data) => {
            this.audio=data 
            let list=[]
            this.audio.forEach(element => {
              this.list.push({
                name:element.name || element.title || "Audio name",
                artist: element.artist || element.author || "Audio artist",
                url: element.url,
                cover: element.cover || element.pic,
                lrc: element.lrc || element.lyric || "",
                type:element.type || "auto"
              })
            });
            this.flag = true; 
            let c = document.createElement("div")
            document.body.append(c)
            const ap = new APlayer({
              container: c,
              fixed: true,
              audio: this.list
            });
        })
    }
  }
</script>
 