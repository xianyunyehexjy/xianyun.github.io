<template>
  <div>
    <div id="aplayer"></div>
  </div>
</template>
<script>

  export default{
    
    mounted() {
      const options =
          {
              container: document.getElementById('aplayer'),
              fixed: true,
              lrcType: 3,
              audio: [{
                  name: '前前前世',
                  artist: 'RADWIMPS',
                  url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.mp3',
                  cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.jpg',
                  lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.lrc',
                  theme: '#505d6b'
              }, {
                  name: 'トリカゴ',
                  artist: 'XX:me',
                  url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.mp3',
                  cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.jpg',
                  lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.lrc',
                  theme: '#46718b'
              }, {
                  name: '光るなら',
                  artist: 'Goose house',
                  url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.mp3',
                  cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg',
                  lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.lrc',
                  theme: '#ebd0c2'
              }]
          }
      const ap = new APlayer(options);
    }
  }
</script>
 