<template>
	<div class="content">
		<div class="snow" v-for="item in list"></div>
		<div class="text">Happy New Year!</div>
		<!-- <div class="btn-container">
				<a href="https://ftopia.cn" target="_blank" rel="noreferrer">
					<div class="gradient-heart-shape"></div>
				</a>
			</div> -->
	</div>
</template>
<script>
export default {
	name: 'year',
	data() {
		return {
			list: [],
		};
	},
	mounted() {
		for (let i = 0; i < 200; i++) {
			this.list.push(1);
		}
	},
};
</script>
<style lang="stylus" scoped>
.content {
  height: 100vh;
  overflow: hidden;
  background: radial-gradient(ellipse at bottom,#12171d 0,#020d44 100%) !important;
  text-align: center;
  font-family: "Kaushan Script",cursive;
  -webkit-filter: drop-shadow(0 0 10px #fff);
  filter: drop-shadow(0 0 10px #fff)
}

@font-face {
  font-family: 'Kaushan Script';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/kaushanscript/v9/vm8vdRfvXFLG3OLnsO15WYS5DG72wNJHMw.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Kaushan Script';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/kaushanscript/v9/vm8vdRfvXFLG3OLnsO15WYS5DG74wNI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}


.text {
  color: #fff;
  font-size: 4em;
  font-family: Kaushan Script;
  filter: drop-shadow(0 0 10px #fff);
  -webkit-filter: drop-shadow(0 0 10px #fff);
}

.btn-container {
    position: absolute;
    right: 5vh;
    bottom: 5vh
}




.snow {
    position: absolute;
    width: 10px;
    height: 10px;
    // background: #f9f9c7;
    // border-radius: 50%;
    background-image: linear-gradient(180deg,#edcf6a,#fbe98d);
    box-shadow: 0 0 20px rgba(0,0,0,.8);
    opacity: .7;
    transform: rotate(45deg);
    filter: drop-shadow(0 0 10px #fff);
    -webkit-filter: drop-shadow(0 0 10px #fff);
}


.snow:after , .snow:before {
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 100%;
    width: 100%;
    height: 100%;
    content: ""
}

.snow:before {
    background-image: linear-gradient(180deg,#edcf6a,#fbe98d);
    transform: translateX(-50%)
}

.snow:after {
    background-image: linear-gradient(180deg,#edcf6a 50%,transparent 0,transparent);
    transform: translateY(-50%)
}

.snow:first-child {
    opacity: .3299;
    transform: translate(10.0546vw,-10px) scale(.703);
    -webkit-animation: fall-1 10s linear -13s infinite;
    animation: fall-1 10s linear -13s infinite
}

@-webkit-keyframes fall-1 {
    40.871% {
        transform: translate(12.6492vw,40.871vh) scale(.703)
    }

    to {
        transform: translate(11.3519vw,100vh) scale(.703)
    }
}

@keyframes fall-1 {
    40.871% {
        transform: translate(12.6492vw,40.871vh) scale(.703)
    }

    to {
        transform: translate(11.3519vw,100vh) scale(.703)
    }
}

.snow:nth-child(2) {
    opacity: .5991;
    transform: translate(98.3435vw,-10px) scale(.6698);
    -webkit-animation: fall-2 11s linear -16s infinite;
    animation: fall-2 11s linear -16s infinite
}

@-webkit-keyframes fall-2 {
    73.002% {
        transform: translate(89.997vw,73.002vh) scale(.6698)
    }

    to {
        transform: translate(94.17025vw,100vh) scale(.6698)
    }
}

@keyframes fall-2 {
    73.002% {
        transform: translate(89.997vw,73.002vh) scale(.6698)
    }

    to {
        transform: translate(94.17025vw,100vh) scale(.6698)
    }
}

.snow:nth-child(3) {
    opacity: .4061;
    transform: translate(71.1001vw,-10px) scale(.7418);
    -webkit-animation: fall-3 16s linear -19s infinite;
    animation: fall-3 16s linear -19s infinite
}

@-webkit-keyframes fall-3 {
    34.376% {
        transform: translate(72.2001vw,34.376vh) scale(.7418)
    }

    to {
        transform: translate(71.6501vw,100vh) scale(.7418)
    }
}

@keyframes fall-3 {
    34.376% {
        transform: translate(72.2001vw,34.376vh) scale(.7418)
    }

    to {
        transform: translate(71.6501vw,100vh) scale(.7418)
    }
}

.snow:nth-child(4) {
    opacity: .5947;
    transform: translate(12.9733vw,-10px) scale(.8534);
    -webkit-animation: fall-4 14s linear -24s infinite;
    animation: fall-4 14s linear -24s infinite
}

@-webkit-keyframes fall-4 {
    49.984% {
        transform: translate(19.9826vw,49.984vh) scale(.8534)
    }

    to {
        transform: translate(16.47795vw,100vh) scale(.8534)
    }
}

@keyframes fall-4 {
    49.984% {
        transform: translate(19.9826vw,49.984vh) scale(.8534)
    }

    to {
        transform: translate(16.47795vw,100vh) scale(.8534)
    }
}

.snow:nth-child(5) {
    opacity: .6236;
    transform: translate(22.3129vw,-10px) scale(.5944);
    -webkit-animation: fall-5 27s linear -22s infinite;
    animation: fall-5 27s linear -22s infinite
}

@-webkit-keyframes fall-5 {
    37.519% {
        transform: translate(30.1447vw,37.519vh) scale(.5944)
    }

    to {
        transform: translate(26.2288vw,100vh) scale(.5944)
    }
}

@keyframes fall-5 {
    37.519% {
        transform: translate(30.1447vw,37.519vh) scale(.5944)
    }

    to {
        transform: translate(26.2288vw,100vh) scale(.5944)
    }
}

.snow:nth-child(6) {
    opacity: .2123;
    transform: translate(57.2251vw,-10px) scale(.5071);
    -webkit-animation: fall-6 26s linear -29s infinite;
    animation: fall-6 26s linear -29s infinite
}

@-webkit-keyframes fall-6 {
    30.131% {
        transform: translate(59.3025vw,30.131vh) scale(.5071)
    }

    to {
        transform: translate(58.2638vw,100vh) scale(.5071)
    }
}

@keyframes fall-6 {
    30.131% {
        transform: translate(59.3025vw,30.131vh) scale(.5071)
    }

    to {
        transform: translate(58.2638vw,100vh) scale(.5071)
    }
}

.snow:nth-child(7) {
    opacity: .8532;
    transform: translate(12.3347vw,-10px) scale(.3193);
    -webkit-animation: fall-7 19s linear -10s infinite;
    animation: fall-7 19s linear -10s infinite
}

@-webkit-keyframes fall-7 {
    74.142% {
        transform: translate(19.7884vw,74.142vh) scale(.3193)
    }

    to {
        transform: translate(16.06155vw,100vh) scale(.3193)
    }
}

@keyframes fall-7 {
    74.142% {
        transform: translate(19.7884vw,74.142vh) scale(.3193)
    }

    to {
        transform: translate(16.06155vw,100vh) scale(.3193)
    }
}

.snow:nth-child(8) {
    opacity: .6696;
    transform: translate(65.8187vw,-10px) scale(.7826);
    -webkit-animation: fall-8 30s linear -28s infinite;
    animation: fall-8 30s linear -28s infinite
}

@-webkit-keyframes fall-8 {
    78.08% {
        transform: translate(57.7201vw,78.08vh) scale(.7826)
    }

    to {
        transform: translate(61.7694vw,100vh) scale(.7826)
    }
}

@keyframes fall-8 {
    78.08% {
        transform: translate(57.7201vw,78.08vh) scale(.7826)
    }

    to {
        transform: translate(61.7694vw,100vh) scale(.7826)
    }
}

.snow:nth-child(9) {
    opacity: .1696;
    transform: translate(80.2604vw,-10px) scale(.6768);
    -webkit-animation: fall-9 28s linear -13s infinite;
    animation: fall-9 28s linear -13s infinite
}

@-webkit-keyframes fall-9 {
    71.18% {
        transform: translate(72.1472vw,71.18vh) scale(.6768)
    }

    to {
        transform: translate(76.2038vw,100vh) scale(.6768)
    }
}

@keyframes fall-9 {
    71.18% {
        transform: translate(72.1472vw,71.18vh) scale(.6768)
    }

    to {
        transform: translate(76.2038vw,100vh) scale(.6768)
    }
}

.snow:nth-child(10) {
    opacity: .1098;
    transform: translate(12.2759vw,-10px) scale(.7592);
    -webkit-animation: fall-10 17s linear -11s infinite;
    animation: fall-10 17s linear -11s infinite
}

@-webkit-keyframes fall-10 {
    79.612% {
        transform: translate(20.2548vw,79.612vh) scale(.7592)
    }

    to {
        transform: translate(16.26535vw,100vh) scale(.7592)
    }
}

@keyframes fall-10 {
    79.612% {
        transform: translate(20.2548vw,79.612vh) scale(.7592)
    }

    to {
        transform: translate(16.26535vw,100vh) scale(.7592)
    }
}

.snow:nth-child(11) {
    opacity: .5045;
    transform: translate(93.7244vw,-10px) scale(.8509);
    -webkit-animation: fall-11 12s linear -21s infinite;
    animation: fall-11 12s linear -21s infinite
}

@-webkit-keyframes fall-11 {
    61.607% {
        transform: translate(94.8537vw,61.607vh) scale(.8509)
    }

    to {
        transform: translate(94.28905vw,100vh) scale(.8509)
    }
}

@keyframes fall-11 {
    61.607% {
        transform: translate(94.8537vw,61.607vh) scale(.8509)
    }

    to {
        transform: translate(94.28905vw,100vh) scale(.8509)
    }
}

.snow:nth-child(12) {
    opacity: .9123;
    transform: translate(99.3042vw,-10px) scale(.6183);
    -webkit-animation: fall-12 17s linear -17s infinite;
    animation: fall-12 17s linear -17s infinite
}

@-webkit-keyframes fall-12 {
    52.047% {
        transform: translate(91.3429vw,52.047vh) scale(.6183)
    }

    to {
        transform: translate(95.32355vw,100vh) scale(.6183)
    }
}

@keyframes fall-12 {
    52.047% {
        transform: translate(91.3429vw,52.047vh) scale(.6183)
    }

    to {
        transform: translate(95.32355vw,100vh) scale(.6183)
    }
}

.snow:nth-child(13) {
    opacity: .5145;
    transform: translate(13.0385vw,-10px) scale(.6964);
    -webkit-animation: fall-13 12s linear -26s infinite;
    animation: fall-13 12s linear -26s infinite
}

@-webkit-keyframes fall-13 {
    43.979% {
        transform: translate(15.9241vw,43.979vh) scale(.6964)
    }

    to {
        transform: translate(14.4813vw,100vh) scale(.6964)
    }
}

@keyframes fall-13 {
    43.979% {
        transform: translate(15.9241vw,43.979vh) scale(.6964)
    }

    to {
        transform: translate(14.4813vw,100vh) scale(.6964)
    }
}

.snow:nth-child(14) {
    opacity: .8537;
    transform: translate(94.4999vw,-10px) scale(.7762);
    -webkit-animation: fall-14 23s linear -6s infinite;
    animation: fall-14 23s linear -6s infinite
}

@-webkit-keyframes fall-14 {
    39.315% {
        transform: translate(94.5364vw,39.315vh) scale(.7762)
    }

    to {
        transform: translate(94.51815vw,100vh) scale(.7762)
    }
}

@keyframes fall-14 {
    39.315% {
        transform: translate(94.5364vw,39.315vh) scale(.7762)
    }

    to {
        transform: translate(94.51815vw,100vh) scale(.7762)
    }
}

.snow:nth-child(15) {
    opacity: .1421;
    transform: translate(91.9114vw,-10px) scale(.2253);
    -webkit-animation: fall-15 24s linear -30s infinite;
    animation: fall-15 24s linear -30s infinite
}

@-webkit-keyframes fall-15 {
    44.766% {
        transform: translate(85.1792vw,44.766vh) scale(.2253)
    }

    to {
        transform: translate(88.5453vw,100vh) scale(.2253)
    }
}

@keyframes fall-15 {
    44.766% {
        transform: translate(85.1792vw,44.766vh) scale(.2253)
    }

    to {
        transform: translate(88.5453vw,100vh) scale(.2253)
    }
}

.snow:nth-child(16) {
    opacity: .4334;
    transform: translate(3.5421vw,-10px) scale(.7727);
    -webkit-animation: fall-16 20s linear -11s infinite;
    animation: fall-16 20s linear -11s infinite
}

@-webkit-keyframes fall-16 {
    62.725% {
        transform: translate(5.6395vw,62.725vh) scale(.7727)
    }

    to {
        transform: translate(4.5908vw,100vh) scale(.7727)
    }
}

@keyframes fall-16 {
    62.725% {
        transform: translate(5.6395vw,62.725vh) scale(.7727)
    }

    to {
        transform: translate(4.5908vw,100vh) scale(.7727)
    }
}

.snow:nth-child(17) {
    opacity: .792;
    transform: translate(25.1499vw,-10px) scale(.6186);
    -webkit-animation: fall-17 14s linear -11s infinite;
    animation: fall-17 14s linear -11s infinite
}

@-webkit-keyframes fall-17 {
    64.585% {
        transform: translate(30.7391vw,64.585vh) scale(.6186)
    }

    to {
        transform: translate(27.9445vw,100vh) scale(.6186)
    }
}

@keyframes fall-17 {
    64.585% {
        transform: translate(30.7391vw,64.585vh) scale(.6186)
    }

    to {
        transform: translate(27.9445vw,100vh) scale(.6186)
    }
}

.snow:nth-child(18) {
    opacity: .8519;
    transform: translate(66.4319vw,-10px) scale(.2206);
    -webkit-animation: fall-18 18s linear -26s infinite;
    animation: fall-18 18s linear -26s infinite
}

@-webkit-keyframes fall-18 {
    43.513% {
        transform: translate(61.7537vw,43.513vh) scale(.2206)
    }

    to {
        transform: translate(64.0928vw,100vh) scale(.2206)
    }
}

@keyframes fall-18 {
    43.513% {
        transform: translate(61.7537vw,43.513vh) scale(.2206)
    }

    to {
        transform: translate(64.0928vw,100vh) scale(.2206)
    }
}

.snow:nth-child(19) {
    opacity: .5148;
    transform: translate(68.2026vw,-10px) scale(.5378);
    -webkit-animation: fall-19 24s linear -9s infinite;
    animation: fall-19 24s linear -9s infinite
}

@-webkit-keyframes fall-19 {
    44.117% {
        transform: translate(77.9558vw,44.117vh) scale(.5378)
    }

    to {
        transform: translate(73.0792vw,100vh) scale(.5378)
    }
}

@keyframes fall-19 {
    44.117% {
        transform: translate(77.9558vw,44.117vh) scale(.5378)
    }

    to {
        transform: translate(73.0792vw,100vh) scale(.5378)
    }
}

.snow:nth-child(20) {
    opacity: .1201;
    transform: translate(99.6782vw,-10px) scale(.8051);
    -webkit-animation: fall-20 20s linear -24s infinite;
    animation: fall-20 20s linear -24s infinite
}

@-webkit-keyframes fall-20 {
    59.021% {
        transform: translate(109.2657vw,59.021vh) scale(.8051)
    }

    to {
        transform: translate(104.47195vw,100vh) scale(.8051)
    }
}

@keyframes fall-20 {
    59.021% {
        transform: translate(109.2657vw,59.021vh) scale(.8051)
    }

    to {
        transform: translate(104.47195vw,100vh) scale(.8051)
    }
}

.snow:nth-child(21) {
    opacity: .2766;
    transform: translate(83.4556vw,-10px) scale(.1414);
    -webkit-animation: fall-21 14s linear -28s infinite;
    animation: fall-21 14s linear -28s infinite
}

@-webkit-keyframes fall-21 {
    40.922% {
        transform: translate(81.6054vw,40.922vh) scale(.1414)
    }

    to {
        transform: translate(82.5305vw,100vh) scale(.1414)
    }
}

@keyframes fall-21 {
    40.922% {
        transform: translate(81.6054vw,40.922vh) scale(.1414)
    }

    to {
        transform: translate(82.5305vw,100vh) scale(.1414)
    }
}

.snow:nth-child(22) {
    opacity: .0095;
    transform: translate(45.1826vw,-10px) scale(.7949);
    -webkit-animation: fall-22 11s linear -29s infinite;
    animation: fall-22 11s linear -29s infinite
}

@-webkit-keyframes fall-22 {
    31.574% {
        transform: translate(43.5211vw,31.574vh) scale(.7949)
    }

    to {
        transform: translate(44.35185vw,100vh) scale(.7949)
    }
}

@keyframes fall-22 {
    31.574% {
        transform: translate(43.5211vw,31.574vh) scale(.7949)
    }

    to {
        transform: translate(44.35185vw,100vh) scale(.7949)
    }
}

.snow:nth-child(23) {
    opacity: .944;
    transform: translate(1.167vw,-10px) scale(.6953);
    -webkit-animation: fall-23 14s linear -17s infinite;
    animation: fall-23 14s linear -17s infinite
}

@-webkit-keyframes fall-23 {
    32.571% {
        transform: translate(.0744vw,32.571vh) scale(.6953)
    }

    to {
        transform: translate(.6207vw,100vh) scale(.6953)
    }
}

@keyframes fall-23 {
    32.571% {
        transform: translate(.0744vw,32.571vh) scale(.6953)
    }

    to {
        transform: translate(.6207vw,100vh) scale(.6953)
    }
}

.snow:nth-child(24) {
    opacity: .4651;
    transform: translate(88.6812vw,-10px) scale(.4554);
    -webkit-animation: fall-24 19s linear -11s infinite;
    animation: fall-24 19s linear -11s infinite
}

@-webkit-keyframes fall-24 {
    64.815% {
        transform: translate(93.9828vw,64.815vh) scale(.4554)
    }

    to {
        transform: translate(91.332vw,100vh) scale(.4554)
    }
}

@keyframes fall-24 {
    64.815% {
        transform: translate(93.9828vw,64.815vh) scale(.4554)
    }

    to {
        transform: translate(91.332vw,100vh) scale(.4554)
    }
}

.snow:nth-child(25) {
    opacity: .4612;
    transform: translate(33.1312vw,-10px) scale(.0526);
    -webkit-animation: fall-25 24s linear -3s infinite;
    animation: fall-25 24s linear -3s infinite
}

@-webkit-keyframes fall-25 {
    34.834% {
        transform: translate(39.2157vw,34.834vh) scale(.0526)
    }

    to {
        transform: translate(36.17345vw,100vh) scale(.0526)
    }
}

@keyframes fall-25 {
    34.834% {
        transform: translate(39.2157vw,34.834vh) scale(.0526)
    }

    to {
        transform: translate(36.17345vw,100vh) scale(.0526)
    }
}

.snow:nth-child(26) {
    opacity: .2837;
    transform: translate(79.4384vw,-10px) scale(.0336);
    -webkit-animation: fall-26 15s linear -28s infinite;
    animation: fall-26 15s linear -28s infinite
}

@-webkit-keyframes fall-26 {
    34.133% {
        transform: translate(75.4819vw,34.133vh) scale(.0336)
    }

    to {
        transform: translate(77.46015vw,100vh) scale(.0336)
    }
}

@keyframes fall-26 {
    34.133% {
        transform: translate(75.4819vw,34.133vh) scale(.0336)
    }

    to {
        transform: translate(77.46015vw,100vh) scale(.0336)
    }
}

.snow:nth-child(27) {
    opacity: .3854;
    transform: translate(64.87vw,-10px) scale(.5444);
    -webkit-animation: fall-27 28s linear -1s infinite;
    animation: fall-27 28s linear -1s infinite
}

@-webkit-keyframes fall-27 {
    49.164% {
        transform: translate(73.6173vw,49.164vh) scale(.5444)
    }

    to {
        transform: translate(69.24365vw,100vh) scale(.5444)
    }
}

@keyframes fall-27 {
    49.164% {
        transform: translate(73.6173vw,49.164vh) scale(.5444)
    }

    to {
        transform: translate(69.24365vw,100vh) scale(.5444)
    }
}

.snow:nth-child(28) {
    opacity: .8438;
    transform: translate(24.432vw,-10px) scale(.7679);
    -webkit-animation: fall-28 12s linear -30s infinite;
    animation: fall-28 12s linear -30s infinite
}

@-webkit-keyframes fall-28 {
    68.413% {
        transform: translate(26.1323vw,68.413vh) scale(.7679)
    }

    to {
        transform: translate(25.28215vw,100vh) scale(.7679)
    }
}

@keyframes fall-28 {
    68.413% {
        transform: translate(26.1323vw,68.413vh) scale(.7679)
    }

    to {
        transform: translate(25.28215vw,100vh) scale(.7679)
    }
}

.snow:nth-child(29) {
    opacity: .0516;
    transform: translate(7.611vw,-10px) scale(.3721);
    -webkit-animation: fall-29 15s linear -24s infinite;
    animation: fall-29 15s linear -24s infinite
}

@-webkit-keyframes fall-29 {
    40.108% {
        transform: translate(-.295vw,40.108vh) scale(.3721)
    }

    to {
        transform: translate(3.658vw,100vh) scale(.3721)
    }
}

@keyframes fall-29 {
    40.108% {
        transform: translate(-.295vw,40.108vh) scale(.3721)
    }

    to {
        transform: translate(3.658vw,100vh) scale(.3721)
    }
}

.snow:nth-child(30) {
    opacity: .33;
    transform: translate(63.2443vw,-10px) scale(.0493);
    -webkit-animation: fall-30 29s linear -19s infinite;
    animation: fall-30 29s linear -19s infinite
}

@-webkit-keyframes fall-30 {
    75.298% {
        transform: translate(67.0476vw,75.298vh) scale(.0493)
    }

    to {
        transform: translate(65.14595vw,100vh) scale(.0493)
    }
}

@keyframes fall-30 {
    75.298% {
        transform: translate(67.0476vw,75.298vh) scale(.0493)
    }

    to {
        transform: translate(65.14595vw,100vh) scale(.0493)
    }
}

.snow:nth-child(31) {
    opacity: .6777;
    transform: translate(77.6571vw,-10px) scale(.7889);
    -webkit-animation: fall-31 18s linear -8s infinite;
    animation: fall-31 18s linear -8s infinite
}

@-webkit-keyframes fall-31 {
    60.855% {
        transform: translate(70.9859vw,60.855vh) scale(.7889)
    }

    to {
        transform: translate(74.3215vw,100vh) scale(.7889)
    }
}

@keyframes fall-31 {
    60.855% {
        transform: translate(70.9859vw,60.855vh) scale(.7889)
    }

    to {
        transform: translate(74.3215vw,100vh) scale(.7889)
    }
}

.snow:nth-child(32) {
    opacity: .3298;
    transform: translate(.8017vw,-10px) scale(.2473);
    -webkit-animation: fall-32 11s linear -18s infinite;
    animation: fall-32 11s linear -18s infinite
}

@-webkit-keyframes fall-32 {
    52.073% {
        transform: translate(8.2631vw,52.073vh) scale(.2473)
    }

    to {
        transform: translate(4.5324vw,100vh) scale(.2473)
    }
}

@keyframes fall-32 {
    52.073% {
        transform: translate(8.2631vw,52.073vh) scale(.2473)
    }

    to {
        transform: translate(4.5324vw,100vh) scale(.2473)
    }
}

.snow:nth-child(33) {
    opacity: .8275;
    transform: translate(15.0231vw,-10px) scale(.4651);
    -webkit-animation: fall-33 17s linear -13s infinite;
    animation: fall-33 17s linear -13s infinite
}

@-webkit-keyframes fall-33 {
    42.775% {
        transform: translate(15.3585vw,42.775vh) scale(.4651)
    }

    to {
        transform: translate(15.1908vw,100vh) scale(.4651)
    }
}

@keyframes fall-33 {
    42.775% {
        transform: translate(15.3585vw,42.775vh) scale(.4651)
    }

    to {
        transform: translate(15.1908vw,100vh) scale(.4651)
    }
}

.snow:nth-child(34) {
    opacity: .1146;
    transform: translate(68.4612vw,-10px) scale(.4037);
    -webkit-animation: fall-34 30s linear -30s infinite;
    animation: fall-34 30s linear -30s infinite
}

@-webkit-keyframes fall-34 {
    38.325% {
        transform: translate(75.4221vw,38.325vh) scale(.4037)
    }

    to {
        transform: translate(71.94165vw,100vh) scale(.4037)
    }
}

@keyframes fall-34 {
    38.325% {
        transform: translate(75.4221vw,38.325vh) scale(.4037)
    }

    to {
        transform: translate(71.94165vw,100vh) scale(.4037)
    }
}

.snow:nth-child(35) {
    opacity: .1941;
    transform: translate(27.6229vw,-10px) scale(.2611);
    -webkit-animation: fall-35 26s linear -26s infinite;
    animation: fall-35 26s linear -26s infinite
}

@-webkit-keyframes fall-35 {
    40.128% {
        transform: translate(28.2608vw,40.128vh) scale(.2611)
    }

    to {
        transform: translate(27.94185vw,100vh) scale(.2611)
    }
}

@keyframes fall-35 {
    40.128% {
        transform: translate(28.2608vw,40.128vh) scale(.2611)
    }

    to {
        transform: translate(27.94185vw,100vh) scale(.2611)
    }
}

.snow:nth-child(36) {
    opacity: .2263;
    transform: translate(46.5413vw,-10px) scale(.609);
    -webkit-animation: fall-36 13s linear -13s infinite;
    animation: fall-36 13s linear -13s infinite
}

@-webkit-keyframes fall-36 {
    61.086% {
        transform: translate(55.9185vw,61.086vh) scale(.609)
    }

    to {
        transform: translate(51.2299vw,100vh) scale(.609)
    }
}

@keyframes fall-36 {
    61.086% {
        transform: translate(55.9185vw,61.086vh) scale(.609)
    }

    to {
        transform: translate(51.2299vw,100vh) scale(.609)
    }
}

.snow:nth-child(37) {
    opacity: .4239;
    transform: translate(51.6245vw,-10px) scale(.3578);
    -webkit-animation: fall-37 21s linear -25s infinite;
    animation: fall-37 21s linear -25s infinite
}

@-webkit-keyframes fall-37 {
    61.106% {
        transform: translate(46.2455vw,61.106vh) scale(.3578)
    }

    to {
        transform: translate(48.935vw,100vh) scale(.3578)
    }
}

@keyframes fall-37 {
    61.106% {
        transform: translate(46.2455vw,61.106vh) scale(.3578)
    }

    to {
        transform: translate(48.935vw,100vh) scale(.3578)
    }
}

.snow:nth-child(38) {
    opacity: .8959;
    transform: translate(73.2015vw,-10px) scale(.2706);
    -webkit-animation: fall-38 13s linear -6s infinite;
    animation: fall-38 13s linear -6s infinite
}

@-webkit-keyframes fall-38 {
    65.679% {
        transform: translate(68.9994vw,65.679vh) scale(.2706)
    }

    to {
        transform: translate(71.10045vw,100vh) scale(.2706)
    }
}

@keyframes fall-38 {
    65.679% {
        transform: translate(68.9994vw,65.679vh) scale(.2706)
    }

    to {
        transform: translate(71.10045vw,100vh) scale(.2706)
    }
}

.snow:nth-child(39) {
    opacity: .4926;
    transform: translate(16.0285vw,-10px) scale(.6614);
    -webkit-animation: fall-39 28s linear -21s infinite;
    animation: fall-39 28s linear -21s infinite
}

@-webkit-keyframes fall-39 {
    57.226% {
        transform: translate(7.8708vw,57.226vh) scale(.6614)
    }

    to {
        transform: translate(11.94965vw,100vh) scale(.6614)
    }
}

@keyframes fall-39 {
    57.226% {
        transform: translate(7.8708vw,57.226vh) scale(.6614)
    }

    to {
        transform: translate(11.94965vw,100vh) scale(.6614)
    }
}

.snow:nth-child(40) {
    opacity: .7211;
    transform: translate(65.5408vw,-10px) scale(.1252);
    -webkit-animation: fall-40 22s linear -26s infinite;
    animation: fall-40 22s linear -26s infinite
}

@-webkit-keyframes fall-40 {
    46.936% {
        transform: translate(68.2992vw,46.936vh) scale(.1252)
    }

    to {
        transform: translate(66.92vw,100vh) scale(.1252)
    }
}

@keyframes fall-40 {
    46.936% {
        transform: translate(68.2992vw,46.936vh) scale(.1252)
    }

    to {
        transform: translate(66.92vw,100vh) scale(.1252)
    }
}

.snow:nth-child(41) {
    opacity: .6957;
    transform: translate(76.017vw,-10px) scale(.9186);
    -webkit-animation: fall-41 27s linear -28s infinite;
    animation: fall-41 27s linear -28s infinite
}

@-webkit-keyframes fall-41 {
    68.365% {
        transform: translate(82.0366vw,68.365vh) scale(.9186)
    }

    to {
        transform: translate(79.0268vw,100vh) scale(.9186)
    }
}

@keyframes fall-41 {
    68.365% {
        transform: translate(82.0366vw,68.365vh) scale(.9186)
    }

    to {
        transform: translate(79.0268vw,100vh) scale(.9186)
    }
}

.snow:nth-child(42) {
    opacity: .5423;
    transform: translate(19.0429vw,-10px) scale(.8004);
    -webkit-animation: fall-42 25s linear -29s infinite;
    animation: fall-42 25s linear -29s infinite
}

@-webkit-keyframes fall-42 {
    77.012% {
        transform: translate(21.5194vw,77.012vh) scale(.8004)
    }

    to {
        transform: translate(20.28115vw,100vh) scale(.8004)
    }
}

@keyframes fall-42 {
    77.012% {
        transform: translate(21.5194vw,77.012vh) scale(.8004)
    }

    to {
        transform: translate(20.28115vw,100vh) scale(.8004)
    }
}

.snow:nth-child(43) {
    opacity: .9323;
    transform: translate(38.0224vw,-10px) scale(.3931);
    -webkit-animation: fall-43 25s linear -7s infinite;
    animation: fall-43 25s linear -7s infinite
}

@-webkit-keyframes fall-43 {
    53.776% {
        transform: translate(28.4984vw,53.776vh) scale(.3931)
    }

    to {
        transform: translate(33.2604vw,100vh) scale(.3931)
    }
}

@keyframes fall-43 {
    53.776% {
        transform: translate(28.4984vw,53.776vh) scale(.3931)
    }

    to {
        transform: translate(33.2604vw,100vh) scale(.3931)
    }
}

.snow:nth-child(44) {
    opacity: .986;
    transform: translate(64.6048vw,-10px) scale(.9665);
    -webkit-animation: fall-44 26s linear -26s infinite;
    animation: fall-44 26s linear -26s infinite
}

@-webkit-keyframes fall-44 {
    51.473% {
        transform: translate(73.8442vw,51.473vh) scale(.9665)
    }

    to {
        transform: translate(69.2245vw,100vh) scale(.9665)
    }
}

@keyframes fall-44 {
    51.473% {
        transform: translate(73.8442vw,51.473vh) scale(.9665)
    }

    to {
        transform: translate(69.2245vw,100vh) scale(.9665)
    }
}

.snow:nth-child(45) {
    opacity: .7968;
    transform: translate(23.5625vw,-10px) scale(.2566);
    -webkit-animation: fall-45 10s linear -13s infinite;
    animation: fall-45 10s linear -13s infinite
}

@-webkit-keyframes fall-45 {
    36.649% {
        transform: translate(30.9966vw,36.649vh) scale(.2566)
    }

    to {
        transform: translate(27.27955vw,100vh) scale(.2566)
    }
}

@keyframes fall-45 {
    36.649% {
        transform: translate(30.9966vw,36.649vh) scale(.2566)
    }

    to {
        transform: translate(27.27955vw,100vh) scale(.2566)
    }
}

.snow:nth-child(46) {
    opacity: .8923;
    transform: translate(3.4148vw,-10px) scale(.8238);
    -webkit-animation: fall-46 29s linear -30s infinite;
    animation: fall-46 29s linear -30s infinite
}

@-webkit-keyframes fall-46 {
    71.365% {
        transform: translate(6.5223vw,71.365vh) scale(.8238)
    }

    to {
        transform: translate(4.96855vw,100vh) scale(.8238)
    }
}

@keyframes fall-46 {
    71.365% {
        transform: translate(6.5223vw,71.365vh) scale(.8238)
    }

    to {
        transform: translate(4.96855vw,100vh) scale(.8238)
    }
}

.snow:nth-child(47) {
    opacity: .5019;
    transform: translate(84.8062vw,-10px) scale(.0494);
    -webkit-animation: fall-47 13s linear -4s infinite;
    animation: fall-47 13s linear -4s infinite
}

@-webkit-keyframes fall-47 {
    41.246% {
        transform: translate(88.306vw,41.246vh) scale(.0494)
    }

    to {
        transform: translate(86.5561vw,100vh) scale(.0494)
    }
}

@keyframes fall-47 {
    41.246% {
        transform: translate(88.306vw,41.246vh) scale(.0494)
    }

    to {
        transform: translate(86.5561vw,100vh) scale(.0494)
    }
}

.snow:nth-child(48) {
    opacity: .6688;
    transform: translate(30.0205vw,-10px) scale(.9503);
    -webkit-animation: fall-48 25s linear -12s infinite;
    animation: fall-48 25s linear -12s infinite
}

@-webkit-keyframes fall-48 {
    54.438% {
        transform: translate(33.8925vw,54.438vh) scale(.9503)
    }

    to {
        transform: translate(31.9565vw,100vh) scale(.9503)
    }
}

@keyframes fall-48 {
    54.438% {
        transform: translate(33.8925vw,54.438vh) scale(.9503)
    }

    to {
        transform: translate(31.9565vw,100vh) scale(.9503)
    }
}

.snow:nth-child(49) {
    opacity: .7709;
    transform: translate(46.2297vw,-10px) scale(.1465);
    -webkit-animation: fall-49 16s linear -3s infinite;
    animation: fall-49 16s linear -3s infinite
}

@-webkit-keyframes fall-49 {
    78.337% {
        transform: translate(38.8927vw,78.337vh) scale(.1465)
    }

    to {
        transform: translate(42.5612vw,100vh) scale(.1465)
    }
}

@keyframes fall-49 {
    78.337% {
        transform: translate(38.8927vw,78.337vh) scale(.1465)
    }

    to {
        transform: translate(42.5612vw,100vh) scale(.1465)
    }
}

.snow:nth-child(50) {
    opacity: .724;
    transform: translate(67.4168vw,-10px) scale(.0373);
    -webkit-animation: fall-50 13s linear -1s infinite;
    animation: fall-50 13s linear -1s infinite
}

@-webkit-keyframes fall-50 {
    46.622% {
        transform: translate(75.7079vw,46.622vh) scale(.0373)
    }

    to {
        transform: translate(71.56235vw,100vh) scale(.0373)
    }
}

@keyframes fall-50 {
    46.622% {
        transform: translate(75.7079vw,46.622vh) scale(.0373)
    }

    to {
        transform: translate(71.56235vw,100vh) scale(.0373)
    }
}

.snow:nth-child(51) {
    opacity: .2511;
    transform: translate(2.4593vw,-10px) scale(.7331);
    -webkit-animation: fall-51 28s linear -3s infinite;
    animation: fall-51 28s linear -3s infinite
}

@-webkit-keyframes fall-51 {
    40.633% {
        transform: translate(4.6121vw,40.633vh) scale(.7331)
    }

    to {
        transform: translate(3.5357vw,100vh) scale(.7331)
    }
}

@keyframes fall-51 {
    40.633% {
        transform: translate(4.6121vw,40.633vh) scale(.7331)
    }

    to {
        transform: translate(3.5357vw,100vh) scale(.7331)
    }
}

.snow:nth-child(52) {
    opacity: .2468;
    transform: translate(49.7021vw,-10px) scale(.0225);
    -webkit-animation: fall-52 15s linear -16s infinite;
    animation: fall-52 15s linear -16s infinite
}

@-webkit-keyframes fall-52 {
    55.833% {
        transform: translate(46.7281vw,55.833vh) scale(.0225)
    }

    to {
        transform: translate(48.2151vw,100vh) scale(.0225)
    }
}

@keyframes fall-52 {
    55.833% {
        transform: translate(46.7281vw,55.833vh) scale(.0225)
    }

    to {
        transform: translate(48.2151vw,100vh) scale(.0225)
    }
}

.snow:nth-child(53) {
    opacity: .5137;
    transform: translate(68.7409vw,-10px) scale(.9335);
    -webkit-animation: fall-53 25s linear -29s infinite;
    animation: fall-53 25s linear -29s infinite
}

@-webkit-keyframes fall-53 {
    30.121% {
        transform: translate(67.9163vw,30.121vh) scale(.9335)
    }

    to {
        transform: translate(68.3286vw,100vh) scale(.9335)
    }
}

@keyframes fall-53 {
    30.121% {
        transform: translate(67.9163vw,30.121vh) scale(.9335)
    }

    to {
        transform: translate(68.3286vw,100vh) scale(.9335)
    }
}

.snow:nth-child(54) {
    opacity: .1836;
    transform: translate(17.8429vw,-10px) scale(.7571);
    -webkit-animation: fall-54 17s linear -11s infinite;
    animation: fall-54 17s linear -11s infinite
}

@-webkit-keyframes fall-54 {
    52.459% {
        transform: translate(22.9656vw,52.459vh) scale(.7571)
    }

    to {
        transform: translate(20.40425vw,100vh) scale(.7571)
    }
}

@keyframes fall-54 {
    52.459% {
        transform: translate(22.9656vw,52.459vh) scale(.7571)
    }

    to {
        transform: translate(20.40425vw,100vh) scale(.7571)
    }
}

.snow:nth-child(55) {
    opacity: .2028;
    transform: translate(94.9491vw,-10px) scale(.7361);
    -webkit-animation: fall-55 21s linear -11s infinite;
    animation: fall-55 21s linear -11s infinite
}

@-webkit-keyframes fall-55 {
    77.686% {
        transform: translate(99.8167vw,77.686vh) scale(.7361)
    }

    to {
        transform: translate(97.3829vw,100vh) scale(.7361)
    }
}

@keyframes fall-55 {
    77.686% {
        transform: translate(99.8167vw,77.686vh) scale(.7361)
    }

    to {
        transform: translate(97.3829vw,100vh) scale(.7361)
    }
}

.snow:nth-child(56) {
    opacity: .167;
    transform: translate(73.5647vw,-10px) scale(.588);
    -webkit-animation: fall-56 16s linear -16s infinite;
    animation: fall-56 16s linear -16s infinite
}

@-webkit-keyframes fall-56 {
    64.17% {
        transform: translate(74.8812vw,64.17vh) scale(.588)
    }

    to {
        transform: translate(74.22295vw,100vh) scale(.588)
    }
}

@keyframes fall-56 {
    64.17% {
        transform: translate(74.8812vw,64.17vh) scale(.588)
    }

    to {
        transform: translate(74.22295vw,100vh) scale(.588)
    }
}

.snow:nth-child(57) {
    opacity: .2811;
    transform: translate(96.3299vw,-10px) scale(.7556);
    -webkit-animation: fall-57 15s linear -18s infinite;
    animation: fall-57 15s linear -18s infinite
}

@-webkit-keyframes fall-57 {
    55.16% {
        transform: translate(89.7071vw,55.16vh) scale(.7556)
    }

    to {
        transform: translate(93.0185vw,100vh) scale(.7556)
    }
}

@keyframes fall-57 {
    55.16% {
        transform: translate(89.7071vw,55.16vh) scale(.7556)
    }

    to {
        transform: translate(93.0185vw,100vh) scale(.7556)
    }
}

.snow:nth-child(58) {
    opacity: .6216;
    transform: translate(12.8925vw,-10px) scale(.945);
    -webkit-animation: fall-58 13s linear -18s infinite;
    animation: fall-58 13s linear -18s infinite
}

@-webkit-keyframes fall-58 {
    54.234% {
        transform: translate(20.7361vw,54.234vh) scale(.945)
    }

    to {
        transform: translate(16.8143vw,100vh) scale(.945)
    }
}

@keyframes fall-58 {
    54.234% {
        transform: translate(20.7361vw,54.234vh) scale(.945)
    }

    to {
        transform: translate(16.8143vw,100vh) scale(.945)
    }
}

.snow:nth-child(59) {
    opacity: .555;
    transform: translate(87.2247vw,-10px) scale(.239);
    -webkit-animation: fall-59 22s linear -28s infinite;
    animation: fall-59 22s linear -28s infinite
}

@-webkit-keyframes fall-59 {
    39.72% {
        transform: translate(93.3273vw,39.72vh) scale(.239)
    }

    to {
        transform: translate(90.276vw,100vh) scale(.239)
    }
}

@keyframes fall-59 {
    39.72% {
        transform: translate(93.3273vw,39.72vh) scale(.239)
    }

    to {
        transform: translate(90.276vw,100vh) scale(.239)
    }
}

.snow:nth-child(60) {
    opacity: .5323;
    transform: translate(53.4493vw,-10px) scale(.95);
    -webkit-animation: fall-60 20s linear -4s infinite;
    animation: fall-60 20s linear -4s infinite
}

@-webkit-keyframes fall-60 {
    55.177% {
        transform: translate(59.6631vw,55.177vh) scale(.95)
    }

    to {
        transform: translate(56.5562vw,100vh) scale(.95)
    }
}

@keyframes fall-60 {
    55.177% {
        transform: translate(59.6631vw,55.177vh) scale(.95)
    }

    to {
        transform: translate(56.5562vw,100vh) scale(.95)
    }
}

.snow:nth-child(61) {
    opacity: .4526;
    transform: translate(78.8911vw,-10px) scale(.1745);
    -webkit-animation: fall-61 29s linear -5s infinite;
    animation: fall-61 29s linear -5s infinite
}

@-webkit-keyframes fall-61 {
    63.487% {
        transform: translate(88.6903vw,63.487vh) scale(.1745)
    }

    to {
        transform: translate(83.7907vw,100vh) scale(.1745)
    }
}

@keyframes fall-61 {
    63.487% {
        transform: translate(88.6903vw,63.487vh) scale(.1745)
    }

    to {
        transform: translate(83.7907vw,100vh) scale(.1745)
    }
}

.snow:nth-child(62) {
    opacity: .6514;
    transform: translate(33.1227vw,-10px) scale(.9208);
    -webkit-animation: fall-62 19s linear -8s infinite;
    animation: fall-62 19s linear -8s infinite
}

@-webkit-keyframes fall-62 {
    34.155% {
        transform: translate(42.6105vw,34.155vh) scale(.9208)
    }

    to {
        transform: translate(37.8666vw,100vh) scale(.9208)
    }
}

@keyframes fall-62 {
    34.155% {
        transform: translate(42.6105vw,34.155vh) scale(.9208)
    }

    to {
        transform: translate(37.8666vw,100vh) scale(.9208)
    }
}

.snow:nth-child(63) {
    opacity: .6414;
    transform: translate(16.202vw,-10px) scale(.1794);
    -webkit-animation: fall-63 28s linear -15s infinite;
    animation: fall-63 28s linear -15s infinite
}

@-webkit-keyframes fall-63 {
    69.952% {
        transform: translate(16.9405vw,69.952vh) scale(.1794)
    }

    to {
        transform: translate(16.57125vw,100vh) scale(.1794)
    }
}

@keyframes fall-63 {
    69.952% {
        transform: translate(16.9405vw,69.952vh) scale(.1794)
    }

    to {
        transform: translate(16.57125vw,100vh) scale(.1794)
    }
}

.snow:nth-child(64) {
    opacity: .3091;
    transform: translate(37.0654vw,-10px) scale(.5101);
    -webkit-animation: fall-64 29s linear -12s infinite;
    animation: fall-64 29s linear -12s infinite
}

@-webkit-keyframes fall-64 {
    59.031% {
        transform: translate(37.9875vw,59.031vh) scale(.5101)
    }

    to {
        transform: translate(37.52645vw,100vh) scale(.5101)
    }
}

@keyframes fall-64 {
    59.031% {
        transform: translate(37.9875vw,59.031vh) scale(.5101)
    }

    to {
        transform: translate(37.52645vw,100vh) scale(.5101)
    }
}

.snow:nth-child(65) {
    opacity: .9152;
    transform: translate(28.5455vw,-10px) scale(.9624);
    -webkit-animation: fall-65 15s linear -4s infinite;
    animation: fall-65 15s linear -4s infinite
}

@-webkit-keyframes fall-65 {
    60.97% {
        transform: translate(35.7905vw,60.97vh) scale(.9624)
    }

    to {
        transform: translate(32.168vw,100vh) scale(.9624)
    }
}

@keyframes fall-65 {
    60.97% {
        transform: translate(35.7905vw,60.97vh) scale(.9624)
    }

    to {
        transform: translate(32.168vw,100vh) scale(.9624)
    }
}

.snow:nth-child(66) {
    opacity: .3084;
    transform: translate(89.7715vw,-10px) scale(.0727);
    -webkit-animation: fall-66 16s linear -21s infinite;
    animation: fall-66 16s linear -21s infinite
}

@-webkit-keyframes fall-66 {
    42.933% {
        transform: translate(91.2vw,42.933vh) scale(.0727)
    }

    to {
        transform: translate(90.48575vw,100vh) scale(.0727)
    }
}

@keyframes fall-66 {
    42.933% {
        transform: translate(91.2vw,42.933vh) scale(.0727)
    }

    to {
        transform: translate(90.48575vw,100vh) scale(.0727)
    }
}

.snow:nth-child(67) {
    opacity: .6289;
    transform: translate(63.7663vw,-10px) scale(.7692);
    -webkit-animation: fall-67 28s linear -10s infinite;
    animation: fall-67 28s linear -10s infinite
}

@-webkit-keyframes fall-67 {
    48.062% {
        transform: translate(65.2491vw,48.062vh) scale(.7692)
    }

    to {
        transform: translate(64.5077vw,100vh) scale(.7692)
    }
}

@keyframes fall-67 {
    48.062% {
        transform: translate(65.2491vw,48.062vh) scale(.7692)
    }

    to {
        transform: translate(64.5077vw,100vh) scale(.7692)
    }
}

.snow:nth-child(68) {
    opacity: .2884;
    transform: translate(50.7562vw,-10px) scale(.4258);
    -webkit-animation: fall-68 26s linear -7s infinite;
    animation: fall-68 26s linear -7s infinite
}

@-webkit-keyframes fall-68 {
    73.496% {
        transform: translate(49.9055vw,73.496vh) scale(.4258)
    }

    to {
        transform: translate(50.33085vw,100vh) scale(.4258)
    }
}

@keyframes fall-68 {
    73.496% {
        transform: translate(49.9055vw,73.496vh) scale(.4258)
    }

    to {
        transform: translate(50.33085vw,100vh) scale(.4258)
    }
}

.snow:nth-child(69) {
    opacity: .329;
    transform: translate(32.8553vw,-10px) scale(.9324);
    -webkit-animation: fall-69 16s linear -29s infinite;
    animation: fall-69 16s linear -29s infinite
}

@-webkit-keyframes fall-69 {
    66.562% {
        transform: translate(23.1474vw,66.562vh) scale(.9324)
    }

    to {
        transform: translate(28.00135vw,100vh) scale(.9324)
    }
}

@keyframes fall-69 {
    66.562% {
        transform: translate(23.1474vw,66.562vh) scale(.9324)
    }

    to {
        transform: translate(28.00135vw,100vh) scale(.9324)
    }
}

.snow:nth-child(70) {
    opacity: .1657;
    transform: translate(39.2416vw,-10px) scale(.2939);
    -webkit-animation: fall-70 12s linear -19s infinite;
    animation: fall-70 12s linear -19s infinite
}

@-webkit-keyframes fall-70 {
    32.945% {
        transform: translate(30.0176vw,32.945vh) scale(.2939)
    }

    to {
        transform: translate(34.6296vw,100vh) scale(.2939)
    }
}

@keyframes fall-70 {
    32.945% {
        transform: translate(30.0176vw,32.945vh) scale(.2939)
    }

    to {
        transform: translate(34.6296vw,100vh) scale(.2939)
    }
}

.snow:nth-child(71) {
    opacity: .1685;
    transform: translate(3.5159vw,-10px) scale(.1293);
    -webkit-animation: fall-71 15s linear -22s infinite;
    animation: fall-71 15s linear -22s infinite
}

@-webkit-keyframes fall-71 {
    70.797% {
        transform: translate(-3.1255vw,70.797vh) scale(.1293)
    }

    to {
        transform: translate(.1952vw,100vh) scale(.1293)
    }
}

@keyframes fall-71 {
    70.797% {
        transform: translate(-3.1255vw,70.797vh) scale(.1293)
    }

    to {
        transform: translate(.1952vw,100vh) scale(.1293)
    }
}

.snow:nth-child(72) {
    opacity: .1247;
    transform: translate(45.8191vw,-10px) scale(.2159);
    -webkit-animation: fall-72 10s linear -6s infinite;
    animation: fall-72 10s linear -6s infinite
}

@-webkit-keyframes fall-72 {
    77.655% {
        transform: translate(37.9571vw,77.655vh) scale(.2159)
    }

    to {
        transform: translate(41.8881vw,100vh) scale(.2159)
    }
}

@keyframes fall-72 {
    77.655% {
        transform: translate(37.9571vw,77.655vh) scale(.2159)
    }

    to {
        transform: translate(41.8881vw,100vh) scale(.2159)
    }
}

.snow:nth-child(73) {
    opacity: .4753;
    transform: translate(24.0242vw,-10px) scale(.3692);
    -webkit-animation: fall-73 23s linear -24s infinite;
    animation: fall-73 23s linear -24s infinite
}

@-webkit-keyframes fall-73 {
    44.93% {
        transform: translate(27.8269vw,44.93vh) scale(.3692)
    }

    to {
        transform: translate(25.92555vw,100vh) scale(.3692)
    }
}

@keyframes fall-73 {
    44.93% {
        transform: translate(27.8269vw,44.93vh) scale(.3692)
    }

    to {
        transform: translate(25.92555vw,100vh) scale(.3692)
    }
}

.snow:nth-child(74) {
    opacity: .1856;
    transform: translate(69.4126vw,-10px) scale(.723);
    -webkit-animation: fall-74 10s linear -5s infinite;
    animation: fall-74 10s linear -5s infinite
}

@-webkit-keyframes fall-74 {
    58.536% {
        transform: translate(79.0082vw,58.536vh) scale(.723)
    }

    to {
        transform: translate(74.2104vw,100vh) scale(.723)
    }
}

@keyframes fall-74 {
    58.536% {
        transform: translate(79.0082vw,58.536vh) scale(.723)
    }

    to {
        transform: translate(74.2104vw,100vh) scale(.723)
    }
}

.snow:nth-child(75) {
    opacity: .1989;
    transform: translate(78.0916vw,-10px) scale(.659);
    -webkit-animation: fall-75 29s linear -2s infinite;
    animation: fall-75 29s linear -2s infinite
}

@-webkit-keyframes fall-75 {
    76.18% {
        transform: translate(82.0682vw,76.18vh) scale(.659)
    }

    to {
        transform: translate(80.0799vw,100vh) scale(.659)
    }
}

@keyframes fall-75 {
    76.18% {
        transform: translate(82.0682vw,76.18vh) scale(.659)
    }

    to {
        transform: translate(80.0799vw,100vh) scale(.659)
    }
}

.snow:nth-child(76) {
    opacity: .9584;
    transform: translate(79.4924vw,-10px) scale(.0317);
    -webkit-animation: fall-76 10s linear -9s infinite;
    animation: fall-76 10s linear -9s infinite
}

@-webkit-keyframes fall-76 {
    31.55% {
        transform: translate(87.6873vw,31.55vh) scale(.0317)
    }

    to {
        transform: translate(83.58985vw,100vh) scale(.0317)
    }
}

@keyframes fall-76 {
    31.55% {
        transform: translate(87.6873vw,31.55vh) scale(.0317)
    }

    to {
        transform: translate(83.58985vw,100vh) scale(.0317)
    }
}

.snow:nth-child(77) {
    opacity: .8208;
    transform: translate(67.0787vw,-10px) scale(.4817);
    -webkit-animation: fall-77 13s linear -4s infinite;
    animation: fall-77 13s linear -4s infinite
}

@-webkit-keyframes fall-77 {
    45.815% {
        transform: translate(74.1664vw,45.815vh) scale(.4817)
    }

    to {
        transform: translate(70.62255vw,100vh) scale(.4817)
    }
}

@keyframes fall-77 {
    45.815% {
        transform: translate(74.1664vw,45.815vh) scale(.4817)
    }

    to {
        transform: translate(70.62255vw,100vh) scale(.4817)
    }
}

.snow:nth-child(78) {
    opacity: .2627;
    transform: translate(55.8189vw,-10px) scale(.4392);
    -webkit-animation: fall-78 14s linear -3s infinite;
    animation: fall-78 14s linear -3s infinite
}

@-webkit-keyframes fall-78 {
    40.463% {
        transform: translate(62.1513vw,40.463vh) scale(.4392)
    }

    to {
        transform: translate(58.9851vw,100vh) scale(.4392)
    }
}

@keyframes fall-78 {
    40.463% {
        transform: translate(62.1513vw,40.463vh) scale(.4392)
    }

    to {
        transform: translate(58.9851vw,100vh) scale(.4392)
    }
}

.snow:nth-child(79) {
    opacity: .8743;
    transform: translate(79.303vw,-10px) scale(.1445);
    -webkit-animation: fall-79 14s linear -25s infinite;
    animation: fall-79 14s linear -25s infinite
}

@-webkit-keyframes fall-79 {
    63.889% {
        transform: translate(75.7429vw,63.889vh) scale(.1445)
    }

    to {
        transform: translate(77.52295vw,100vh) scale(.1445)
    }
}

@keyframes fall-79 {
    63.889% {
        transform: translate(75.7429vw,63.889vh) scale(.1445)
    }

    to {
        transform: translate(77.52295vw,100vh) scale(.1445)
    }
}

.snow:nth-child(80) {
    opacity: .822;
    transform: translate(58.6113vw,-10px) scale(.3875);
    -webkit-animation: fall-80 13s linear -23s infinite;
    animation: fall-80 13s linear -23s infinite
}

@-webkit-keyframes fall-80 {
    41.449% {
        transform: translate(48.7049vw,41.449vh) scale(.3875)
    }

    to {
        transform: translate(53.6581vw,100vh) scale(.3875)
    }
}

@keyframes fall-80 {
    41.449% {
        transform: translate(48.7049vw,41.449vh) scale(.3875)
    }

    to {
        transform: translate(53.6581vw,100vh) scale(.3875)
    }
}

.snow:nth-child(81) {
    opacity: .072;
    transform: translate(3.4284vw,-10px) scale(.0679);
    -webkit-animation: fall-81 26s linear -19s infinite;
    animation: fall-81 26s linear -19s infinite
}

@-webkit-keyframes fall-81 {
    32.201% {
        transform: translate(-.7021vw,32.201vh) scale(.0679)
    }

    to {
        transform: translate(1.36315vw,100vh) scale(.0679)
    }
}

@keyframes fall-81 {
    32.201% {
        transform: translate(-.7021vw,32.201vh) scale(.0679)
    }

    to {
        transform: translate(1.36315vw,100vh) scale(.0679)
    }
}

.snow:nth-child(82) {
    opacity: .8733;
    transform: translate(27.8982vw,-10px) scale(.351);
    -webkit-animation: fall-82 11s linear -7s infinite;
    animation: fall-82 11s linear -7s infinite
}

@-webkit-keyframes fall-82 {
    35.258% {
        transform: translate(28.592vw,35.258vh) scale(.351)
    }

    to {
        transform: translate(28.2451vw,100vh) scale(.351)
    }
}

@keyframes fall-82 {
    35.258% {
        transform: translate(28.592vw,35.258vh) scale(.351)
    }

    to {
        transform: translate(28.2451vw,100vh) scale(.351)
    }
}

.snow:nth-child(83) {
    opacity: .4188;
    transform: translate(96.3518vw,-10px) scale(.5247);
    -webkit-animation: fall-83 21s linear -25s infinite;
    animation: fall-83 21s linear -25s infinite
}

@-webkit-keyframes fall-83 {
    52.582% {
        transform: translate(96.0172vw,52.582vh) scale(.5247)
    }

    to {
        transform: translate(96.1845vw,100vh) scale(.5247)
    }
}

@keyframes fall-83 {
    52.582% {
        transform: translate(96.0172vw,52.582vh) scale(.5247)
    }

    to {
        transform: translate(96.1845vw,100vh) scale(.5247)
    }
}

.snow:nth-child(84) {
    opacity: .743;
    transform: translate(17.6419vw,-10px) scale(.7908);
    -webkit-animation: fall-84 23s linear -2s infinite;
    animation: fall-84 23s linear -2s infinite
}

@-webkit-keyframes fall-84 {
    55.715% {
        transform: translate(14.4127vw,55.715vh) scale(.7908)
    }

    to {
        transform: translate(16.0273vw,100vh) scale(.7908)
    }
}

@keyframes fall-84 {
    55.715% {
        transform: translate(14.4127vw,55.715vh) scale(.7908)
    }

    to {
        transform: translate(16.0273vw,100vh) scale(.7908)
    }
}

.snow:nth-child(85) {
    opacity: .5149;
    transform: translate(7.6844vw,-10px) scale(.9881);
    -webkit-animation: fall-85 10s linear -16s infinite;
    animation: fall-85 10s linear -16s infinite
}

@-webkit-keyframes fall-85 {
    55.873% {
        transform: translate(13.9529vw,55.873vh) scale(.9881)
    }

    to {
        transform: translate(10.81865vw,100vh) scale(.9881)
    }
}

@keyframes fall-85 {
    55.873% {
        transform: translate(13.9529vw,55.873vh) scale(.9881)
    }

    to {
        transform: translate(10.81865vw,100vh) scale(.9881)
    }
}

.snow:nth-child(86) {
    opacity: .405;
    transform: translate(72.823vw,-10px) scale(.9301);
    -webkit-animation: fall-86 22s linear -21s infinite;
    animation: fall-86 22s linear -21s infinite
}

@-webkit-keyframes fall-86 {
    50.308% {
        transform: translate(74.6002vw,50.308vh) scale(.9301)
    }

    to {
        transform: translate(73.7116vw,100vh) scale(.9301)
    }
}

@keyframes fall-86 {
    50.308% {
        transform: translate(74.6002vw,50.308vh) scale(.9301)
    }

    to {
        transform: translate(73.7116vw,100vh) scale(.9301)
    }
}

.snow:nth-child(87) {
    opacity: .6607;
    transform: translate(15.5175vw,-10px) scale(.2539);
    -webkit-animation: fall-87 22s linear -11s infinite;
    animation: fall-87 22s linear -11s infinite
}

@-webkit-keyframes fall-87 {
    63.666% {
        transform: translate(22.2171vw,63.666vh) scale(.2539)
    }

    to {
        transform: translate(18.8673vw,100vh) scale(.2539)
    }
}

@keyframes fall-87 {
    63.666% {
        transform: translate(22.2171vw,63.666vh) scale(.2539)
    }

    to {
        transform: translate(18.8673vw,100vh) scale(.2539)
    }
}

.snow:nth-child(88) {
    opacity: .9587;
    transform: translate(22.1044vw,-10px) scale(.9794);
    -webkit-animation: fall-88 23s linear -30s infinite;
    animation: fall-88 23s linear -30s infinite
}

@-webkit-keyframes fall-88 {
    35.258% {
        transform: translate(26.1244vw,35.258vh) scale(.9794)
    }

    to {
        transform: translate(24.1144vw,100vh) scale(.9794)
    }
}

@keyframes fall-88 {
    35.258% {
        transform: translate(26.1244vw,35.258vh) scale(.9794)
    }

    to {
        transform: translate(24.1144vw,100vh) scale(.9794)
    }
}

.snow:nth-child(89) {
    opacity: .0131;
    transform: translate(40.4135vw,-10px) scale(.9467);
    -webkit-animation: fall-89 19s linear -6s infinite;
    animation: fall-89 19s linear -6s infinite
}

@-webkit-keyframes fall-89 {
    68.765% {
        transform: translate(41.2419vw,68.765vh) scale(.9467)
    }

    to {
        transform: translate(40.8277vw,100vh) scale(.9467)
    }
}

@keyframes fall-89 {
    68.765% {
        transform: translate(41.2419vw,68.765vh) scale(.9467)
    }

    to {
        transform: translate(40.8277vw,100vh) scale(.9467)
    }
}

.snow:nth-child(90) {
    opacity: .1384;
    transform: translate(99.4317vw,-10px) scale(.5999);
    -webkit-animation: fall-90 29s linear -26s infinite;
    animation: fall-90 29s linear -26s infinite
}

@-webkit-keyframes fall-90 {
    52.097% {
        transform: translate(103.2336vw,52.097vh) scale(.5999)
    }

    to {
        transform: translate(101.33265vw,100vh) scale(.5999)
    }
}

@keyframes fall-90 {
    52.097% {
        transform: translate(103.2336vw,52.097vh) scale(.5999)
    }

    to {
        transform: translate(101.33265vw,100vh) scale(.5999)
    }
}

.snow:nth-child(91) {
    opacity: .1018;
    transform: translate(89.2198vw,-10px) scale(.4169);
    -webkit-animation: fall-91 28s linear -17s infinite;
    animation: fall-91 28s linear -17s infinite
}

@-webkit-keyframes fall-91 {
    39.045% {
        transform: translate(79.4477vw,39.045vh) scale(.4169)
    }

    to {
        transform: translate(84.33375vw,100vh) scale(.4169)
    }
}

@keyframes fall-91 {
    39.045% {
        transform: translate(79.4477vw,39.045vh) scale(.4169)
    }

    to {
        transform: translate(84.33375vw,100vh) scale(.4169)
    }
}

.snow:nth-child(92) {
    opacity: .1662;
    transform: translate(30.6505vw,-10px) scale(.0789);
    -webkit-animation: fall-92 27s linear -14s infinite;
    animation: fall-92 27s linear -14s infinite
}

@-webkit-keyframes fall-92 {
    70.996% {
        transform: translate(39.4967vw,70.996vh) scale(.0789)
    }

    to {
        transform: translate(35.0736vw,100vh) scale(.0789)
    }
}

@keyframes fall-92 {
    70.996% {
        transform: translate(39.4967vw,70.996vh) scale(.0789)
    }

    to {
        transform: translate(35.0736vw,100vh) scale(.0789)
    }
}

.snow:nth-child(93) {
    opacity: .3255;
    transform: translate(91.8621vw,-10px) scale(.7639);
    -webkit-animation: fall-93 15s linear -19s infinite;
    animation: fall-93 15s linear -19s infinite
}

@-webkit-keyframes fall-93 {
    33.636% {
        transform: translate(96.2579vw,33.636vh) scale(.7639)
    }

    to {
        transform: translate(94.06vw,100vh) scale(.7639)
    }
}

@keyframes fall-93 {
    33.636% {
        transform: translate(96.2579vw,33.636vh) scale(.7639)
    }

    to {
        transform: translate(94.06vw,100vh) scale(.7639)
    }
}

.snow:nth-child(94) {
    opacity: .4533;
    transform: translate(10.0956vw,-10px) scale(.7968);
    -webkit-animation: fall-94 20s linear -18s infinite;
    animation: fall-94 20s linear -18s infinite
}

@-webkit-keyframes fall-94 {
    34.823% {
        transform: translate(6.8607vw,34.823vh) scale(.7968)
    }

    to {
        transform: translate(8.47815vw,100vh) scale(.7968)
    }
}

@keyframes fall-94 {
    34.823% {
        transform: translate(6.8607vw,34.823vh) scale(.7968)
    }

    to {
        transform: translate(8.47815vw,100vh) scale(.7968)
    }
}

.snow:nth-child(95) {
    opacity: .8573;
    transform: translate(8.6839vw,-10px) scale(.1147);
    -webkit-animation: fall-95 15s linear -30s infinite;
    animation: fall-95 15s linear -30s infinite
}

@-webkit-keyframes fall-95 {
    74.068% {
        transform: translate(.4461vw,74.068vh) scale(.1147)
    }

    to {
        transform: translate(4.565vw,100vh) scale(.1147)
    }
}

@keyframes fall-95 {
    74.068% {
        transform: translate(.4461vw,74.068vh) scale(.1147)
    }

    to {
        transform: translate(4.565vw,100vh) scale(.1147)
    }
}

.snow:nth-child(96) {
    opacity: .984;
    transform: translate(49.8108vw,-10px) scale(.766);
    -webkit-animation: fall-96 16s linear -20s infinite;
    animation: fall-96 16s linear -20s infinite
}

@-webkit-keyframes fall-96 {
    54.842% {
        transform: translate(56.5394vw,54.842vh) scale(.766)
    }

    to {
        transform: translate(53.1751vw,100vh) scale(.766)
    }
}

@keyframes fall-96 {
    54.842% {
        transform: translate(56.5394vw,54.842vh) scale(.766)
    }

    to {
        transform: translate(53.1751vw,100vh) scale(.766)
    }
}

.snow:nth-child(97) {
    opacity: .9775;
    transform: translate(87.5795vw,-10px) scale(.4998);
    -webkit-animation: fall-97 13s linear -3s infinite;
    animation: fall-97 13s linear -3s infinite
}

@-webkit-keyframes fall-97 {
    44.708% {
        transform: translate(96.2616vw,44.708vh) scale(.4998)
    }

    to {
        transform: translate(91.92055vw,100vh) scale(.4998)
    }
}

@keyframes fall-97 {
    44.708% {
        transform: translate(96.2616vw,44.708vh) scale(.4998)
    }

    to {
        transform: translate(91.92055vw,100vh) scale(.4998)
    }
}

.snow:nth-child(98) {
    opacity: .3108;
    transform: translate(31.1432vw,-10px) scale(.3506);
    -webkit-animation: fall-98 10s linear -14s infinite;
    animation: fall-98 10s linear -14s infinite
}

@-webkit-keyframes fall-98 {
    51.447% {
        transform: translate(21.5099vw,51.447vh) scale(.3506)
    }

    to {
        transform: translate(26.32655vw,100vh) scale(.3506)
    }
}

@keyframes fall-98 {
    51.447% {
        transform: translate(21.5099vw,51.447vh) scale(.3506)
    }

    to {
        transform: translate(26.32655vw,100vh) scale(.3506)
    }
}

.snow:nth-child(99) {
    opacity: .53;
    transform: translate(1.7315vw,-10px) scale(.5697);
    -webkit-animation: fall-99 22s linear -29s infinite;
    animation: fall-99 22s linear -29s infinite
}

@-webkit-keyframes fall-99 {
    46.487% {
        transform: translate(6.6182vw,46.487vh) scale(.5697)
    }

    to {
        transform: translate(4.17485vw,100vh) scale(.5697)
    }
}

@keyframes fall-99 {
    46.487% {
        transform: translate(6.6182vw,46.487vh) scale(.5697)
    }

    to {
        transform: translate(4.17485vw,100vh) scale(.5697)
    }
}

.snow:nth-child(100) {
    opacity: .1669;
    transform: translate(51.3375vw,-10px) scale(.7988);
    -webkit-animation: fall-100 13s linear -11s infinite;
    animation: fall-100 13s linear -11s infinite
}

@-webkit-keyframes fall-100 {
    50.695% {
        transform: translate(59.9734vw,50.695vh) scale(.7988)
    }

    to {
        transform: translate(55.65545vw,100vh) scale(.7988)
    }
}

@keyframes fall-100 {
    50.695% {
        transform: translate(59.9734vw,50.695vh) scale(.7988)
    }

    to {
        transform: translate(55.65545vw,100vh) scale(.7988)
    }
}

.snow:nth-child(101) {
    opacity: .2648;
    transform: translate(91.1425vw,-10px) scale(.2534);
    -webkit-animation: fall-101 13s linear -10s infinite;
    animation: fall-101 13s linear -10s infinite
}

@-webkit-keyframes fall-101 {
    48.054% {
        transform: translate(88.692vw,48.054vh) scale(.2534)
    }

    to {
        transform: translate(89.91725vw,100vh) scale(.2534)
    }
}

@keyframes fall-101 {
    48.054% {
        transform: translate(88.692vw,48.054vh) scale(.2534)
    }

    to {
        transform: translate(89.91725vw,100vh) scale(.2534)
    }
}

.snow:nth-child(102) {
    opacity: .918;
    transform: translate(66.9485vw,-10px) scale(.4355);
    -webkit-animation: fall-102 20s linear -5s infinite;
    animation: fall-102 20s linear -5s infinite
}

@-webkit-keyframes fall-102 {
    57.816% {
        transform: translate(63.7753vw,57.816vh) scale(.4355)
    }

    to {
        transform: translate(65.3619vw,100vh) scale(.4355)
    }
}

@keyframes fall-102 {
    57.816% {
        transform: translate(63.7753vw,57.816vh) scale(.4355)
    }

    to {
        transform: translate(65.3619vw,100vh) scale(.4355)
    }
}

.snow:nth-child(103) {
    opacity: .9284;
    transform: translate(49.7989vw,-10px) scale(.6794);
    -webkit-animation: fall-103 20s linear -3s infinite;
    animation: fall-103 20s linear -3s infinite
}

@-webkit-keyframes fall-103 {
    48.53% {
        transform: translate(52.1952vw,48.53vh) scale(.6794)
    }

    to {
        transform: translate(50.99705vw,100vh) scale(.6794)
    }
}

@keyframes fall-103 {
    48.53% {
        transform: translate(52.1952vw,48.53vh) scale(.6794)
    }

    to {
        transform: translate(50.99705vw,100vh) scale(.6794)
    }
}

.snow:nth-child(104) {
    opacity: .8704;
    transform: translate(86.1236vw,-10px) scale(.3648);
    -webkit-animation: fall-104 15s linear -8s infinite;
    animation: fall-104 15s linear -8s infinite
}

@-webkit-keyframes fall-104 {
    32.391% {
        transform: translate(77.0888vw,32.391vh) scale(.3648)
    }

    to {
        transform: translate(81.6062vw,100vh) scale(.3648)
    }
}

@keyframes fall-104 {
    32.391% {
        transform: translate(77.0888vw,32.391vh) scale(.3648)
    }

    to {
        transform: translate(81.6062vw,100vh) scale(.3648)
    }
}

.snow:nth-child(105) {
    opacity: .6263;
    transform: translate(2.5137vw,-10px) scale(.0076);
    -webkit-animation: fall-105 15s linear -30s infinite;
    animation: fall-105 15s linear -30s infinite
}

@-webkit-keyframes fall-105 {
    48.23% {
        transform: translate(10.5779vw,48.23vh) scale(.0076)
    }

    to {
        transform: translate(6.5458vw,100vh) scale(.0076)
    }
}

@keyframes fall-105 {
    48.23% {
        transform: translate(10.5779vw,48.23vh) scale(.0076)
    }

    to {
        transform: translate(6.5458vw,100vh) scale(.0076)
    }
}

.snow:nth-child(106) {
    opacity: .2115;
    transform: translate(48.5685vw,-10px) scale(.1062);
    -webkit-animation: fall-106 26s linear -18s infinite;
    animation: fall-106 26s linear -18s infinite
}

@-webkit-keyframes fall-106 {
    70.596% {
        transform: translate(50.467vw,70.596vh) scale(.1062)
    }

    to {
        transform: translate(49.51775vw,100vh) scale(.1062)
    }
}

@keyframes fall-106 {
    70.596% {
        transform: translate(50.467vw,70.596vh) scale(.1062)
    }

    to {
        transform: translate(49.51775vw,100vh) scale(.1062)
    }
}

.snow:nth-child(107) {
    opacity: .8263;
    transform: translate(60.1819vw,-10px) scale(.4827);
    -webkit-animation: fall-107 26s linear -13s infinite;
    animation: fall-107 26s linear -13s infinite
}

@-webkit-keyframes fall-107 {
    47.222% {
        transform: translate(66.0133vw,47.222vh) scale(.4827)
    }

    to {
        transform: translate(63.0976vw,100vh) scale(.4827)
    }
}

@keyframes fall-107 {
    47.222% {
        transform: translate(66.0133vw,47.222vh) scale(.4827)
    }

    to {
        transform: translate(63.0976vw,100vh) scale(.4827)
    }
}

.snow:nth-child(108) {
    opacity: .4674;
    transform: translate(2.7817vw,-10px) scale(.7477);
    -webkit-animation: fall-108 19s linear -4s infinite;
    animation: fall-108 19s linear -4s infinite
}

@-webkit-keyframes fall-108 {
    54.597% {
        transform: translate(-1.2443vw,54.597vh) scale(.7477)
    }

    to {
        transform: translate(.7687vw,100vh) scale(.7477)
    }
}

@keyframes fall-108 {
    54.597% {
        transform: translate(-1.2443vw,54.597vh) scale(.7477)
    }

    to {
        transform: translate(.7687vw,100vh) scale(.7477)
    }
}

.snow:nth-child(109) {
    opacity: .3002;
    transform: translate(62.1322vw,-10px) scale(.8292);
    -webkit-animation: fall-109 10s linear -28s infinite;
    animation: fall-109 10s linear -28s infinite
}

@-webkit-keyframes fall-109 {
    47.385% {
        transform: translate(61.6574vw,47.385vh) scale(.8292)
    }

    to {
        transform: translate(61.8948vw,100vh) scale(.8292)
    }
}

@keyframes fall-109 {
    47.385% {
        transform: translate(61.6574vw,47.385vh) scale(.8292)
    }

    to {
        transform: translate(61.8948vw,100vh) scale(.8292)
    }
}

.snow:nth-child(110) {
    opacity: .879;
    transform: translate(41.6098vw,-10px) scale(.3924);
    -webkit-animation: fall-110 20s linear -20s infinite;
    animation: fall-110 20s linear -20s infinite
}

@-webkit-keyframes fall-110 {
    65.649% {
        transform: translate(34.6809vw,65.649vh) scale(.3924)
    }

    to {
        transform: translate(38.14535vw,100vh) scale(.3924)
    }
}

@keyframes fall-110 {
    65.649% {
        transform: translate(34.6809vw,65.649vh) scale(.3924)
    }

    to {
        transform: translate(38.14535vw,100vh) scale(.3924)
    }
}

.snow:nth-child(111) {
    opacity: .1407;
    transform: translate(51.589vw,-10px) scale(.5107);
    -webkit-animation: fall-111 15s linear -11s infinite;
    animation: fall-111 15s linear -11s infinite
}

@-webkit-keyframes fall-111 {
    39.884% {
        transform: translate(48.2143vw,39.884vh) scale(.5107)
    }

    to {
        transform: translate(49.90165vw,100vh) scale(.5107)
    }
}

@keyframes fall-111 {
    39.884% {
        transform: translate(48.2143vw,39.884vh) scale(.5107)
    }

    to {
        transform: translate(49.90165vw,100vh) scale(.5107)
    }
}

.snow:nth-child(112) {
    opacity: .4033;
    transform: translate(50.4622vw,-10px) scale(.0612);
    -webkit-animation: fall-112 22s linear -29s infinite;
    animation: fall-112 22s linear -29s infinite
}

@-webkit-keyframes fall-112 {
    68.716% {
        transform: translate(52.3834vw,68.716vh) scale(.0612)
    }

    to {
        transform: translate(51.4228vw,100vh) scale(.0612)
    }
}

@keyframes fall-112 {
    68.716% {
        transform: translate(52.3834vw,68.716vh) scale(.0612)
    }

    to {
        transform: translate(51.4228vw,100vh) scale(.0612)
    }
}

.snow:nth-child(113) {
    opacity: .9659;
    transform: translate(47.5973vw,-10px) scale(.4287);
    -webkit-animation: fall-113 15s linear -21s infinite;
    animation: fall-113 15s linear -21s infinite
}

@-webkit-keyframes fall-113 {
    55.917% {
        transform: translate(55.3309vw,55.917vh) scale(.4287)
    }

    to {
        transform: translate(51.4641vw,100vh) scale(.4287)
    }
}

@keyframes fall-113 {
    55.917% {
        transform: translate(55.3309vw,55.917vh) scale(.4287)
    }

    to {
        transform: translate(51.4641vw,100vh) scale(.4287)
    }
}

.snow:nth-child(114) {
    opacity: .0166;
    transform: translate(68.2774vw,-10px) scale(.8175);
    -webkit-animation: fall-114 30s linear -30s infinite;
    animation: fall-114 30s linear -30s infinite
}

@-webkit-keyframes fall-114 {
    78.626% {
        transform: translate(72.6372vw,78.626vh) scale(.8175)
    }

    to {
        transform: translate(70.4573vw,100vh) scale(.8175)
    }
}

@keyframes fall-114 {
    78.626% {
        transform: translate(72.6372vw,78.626vh) scale(.8175)
    }

    to {
        transform: translate(70.4573vw,100vh) scale(.8175)
    }
}

.snow:nth-child(115) {
    opacity: .1831;
    transform: translate(66.973vw,-10px) scale(.7727);
    -webkit-animation: fall-115 20s linear -22s infinite;
    animation: fall-115 20s linear -22s infinite
}

@-webkit-keyframes fall-115 {
    77.523% {
        transform: translate(61.4823vw,77.523vh) scale(.7727)
    }

    to {
        transform: translate(64.22765vw,100vh) scale(.7727)
    }
}

@keyframes fall-115 {
    77.523% {
        transform: translate(61.4823vw,77.523vh) scale(.7727)
    }

    to {
        transform: translate(64.22765vw,100vh) scale(.7727)
    }
}

.snow:nth-child(116) {
    opacity: .475;
    transform: translate(93.7778vw,-10px) scale(.3799);
    -webkit-animation: fall-116 27s linear -10s infinite;
    animation: fall-116 27s linear -10s infinite
}

@-webkit-keyframes fall-116 {
    51.66% {
        transform: translate(93.5569vw,51.66vh) scale(.3799)
    }

    to {
        transform: translate(93.66735vw,100vh) scale(.3799)
    }
}

@keyframes fall-116 {
    51.66% {
        transform: translate(93.5569vw,51.66vh) scale(.3799)
    }

    to {
        transform: translate(93.66735vw,100vh) scale(.3799)
    }
}

.snow:nth-child(117) {
    opacity: .8927;
    transform: translate(52.9999vw,-10px) scale(.6683);
    -webkit-animation: fall-117 19s linear -11s infinite;
    animation: fall-117 19s linear -11s infinite
}

@-webkit-keyframes fall-117 {
    40.183% {
        transform: translate(47.7527vw,40.183vh) scale(.6683)
    }

    to {
        transform: translate(50.3763vw,100vh) scale(.6683)
    }
}

@keyframes fall-117 {
    40.183% {
        transform: translate(47.7527vw,40.183vh) scale(.6683)
    }

    to {
        transform: translate(50.3763vw,100vh) scale(.6683)
    }
}

.snow:nth-child(118) {
    opacity: .7698;
    transform: translate(2.3141vw,-10px) scale(.6952);
    -webkit-animation: fall-118 22s linear -22s infinite;
    animation: fall-118 22s linear -22s infinite
}

@-webkit-keyframes fall-118 {
    58.336% {
        transform: translate(12.0017vw,58.336vh) scale(.6952)
    }

    to {
        transform: translate(7.1579vw,100vh) scale(.6952)
    }
}

@keyframes fall-118 {
    58.336% {
        transform: translate(12.0017vw,58.336vh) scale(.6952)
    }

    to {
        transform: translate(7.1579vw,100vh) scale(.6952)
    }
}

.snow:nth-child(119) {
    opacity: .9289;
    transform: translate(19.9518vw,-10px) scale(.3212);
    -webkit-animation: fall-119 22s linear -11s infinite;
    animation: fall-119 22s linear -11s infinite
}

@-webkit-keyframes fall-119 {
    58.826% {
        transform: translate(26.1203vw,58.826vh) scale(.3212)
    }

    to {
        transform: translate(23.03605vw,100vh) scale(.3212)
    }
}

@keyframes fall-119 {
    58.826% {
        transform: translate(26.1203vw,58.826vh) scale(.3212)
    }

    to {
        transform: translate(23.03605vw,100vh) scale(.3212)
    }
}

.snow:nth-child(120) {
    opacity: .4064;
    transform: translate(71.3627vw,-10px) scale(.1034);
    -webkit-animation: fall-120 13s linear -21s infinite;
    animation: fall-120 13s linear -21s infinite
}

@-webkit-keyframes fall-120 {
    57.599% {
        transform: translate(74.8899vw,57.599vh) scale(.1034)
    }

    to {
        transform: translate(73.1263vw,100vh) scale(.1034)
    }
}

@keyframes fall-120 {
    57.599% {
        transform: translate(74.8899vw,57.599vh) scale(.1034)
    }

    to {
        transform: translate(73.1263vw,100vh) scale(.1034)
    }
}

.snow:nth-child(121) {
    opacity: .0408;
    transform: translate(14.7069vw,-10px) scale(.2785);
    -webkit-animation: fall-121 18s linear -30s infinite;
    animation: fall-121 18s linear -30s infinite
}

@-webkit-keyframes fall-121 {
    34.656% {
        transform: translate(8.9843vw,34.656vh) scale(.2785)
    }

    to {
        transform: translate(11.8456vw,100vh) scale(.2785)
    }
}

@keyframes fall-121 {
    34.656% {
        transform: translate(8.9843vw,34.656vh) scale(.2785)
    }

    to {
        transform: translate(11.8456vw,100vh) scale(.2785)
    }
}

.snow:nth-child(122) {
    opacity: .7798;
    transform: translate(75.388vw,-10px) scale(.1181);
    -webkit-animation: fall-122 19s linear -30s infinite;
    animation: fall-122 19s linear -30s infinite
}

@-webkit-keyframes fall-122 {
    51.125% {
        transform: translate(75.9937vw,51.125vh) scale(.1181)
    }

    to {
        transform: translate(75.69085vw,100vh) scale(.1181)
    }
}

@keyframes fall-122 {
    51.125% {
        transform: translate(75.9937vw,51.125vh) scale(.1181)
    }

    to {
        transform: translate(75.69085vw,100vh) scale(.1181)
    }
}

.snow:nth-child(123) {
    opacity: .7968;
    transform: translate(28.1861vw,-10px) scale(.66);
    -webkit-animation: fall-123 24s linear -30s infinite;
    animation: fall-123 24s linear -30s infinite
}

@-webkit-keyframes fall-123 {
    56.385% {
        transform: translate(18.3862vw,56.385vh) scale(.66)
    }

    to {
        transform: translate(23.28615vw,100vh) scale(.66)
    }
}

@keyframes fall-123 {
    56.385% {
        transform: translate(18.3862vw,56.385vh) scale(.66)
    }

    to {
        transform: translate(23.28615vw,100vh) scale(.66)
    }
}

.snow:nth-child(124) {
    opacity: .7042;
    transform: translate(89.4215vw,-10px) scale(.19);
    -webkit-animation: fall-124 30s linear -20s infinite;
    animation: fall-124 30s linear -20s infinite
}

@-webkit-keyframes fall-124 {
    57.733% {
        transform: translate(82.3049vw,57.733vh) scale(.19)
    }

    to {
        transform: translate(85.8632vw,100vh) scale(.19)
    }
}

@keyframes fall-124 {
    57.733% {
        transform: translate(82.3049vw,57.733vh) scale(.19)
    }

    to {
        transform: translate(85.8632vw,100vh) scale(.19)
    }
}

.snow:nth-child(125) {
    opacity: .204;
    transform: translate(91.4506vw,-10px) scale(.2128);
    -webkit-animation: fall-125 28s linear -20s infinite;
    animation: fall-125 28s linear -20s infinite
}

@-webkit-keyframes fall-125 {
    65.756% {
        transform: translate(94.0701vw,65.756vh) scale(.2128)
    }

    to {
        transform: translate(92.76035vw,100vh) scale(.2128)
    }
}

@keyframes fall-125 {
    65.756% {
        transform: translate(94.0701vw,65.756vh) scale(.2128)
    }

    to {
        transform: translate(92.76035vw,100vh) scale(.2128)
    }
}

.snow:nth-child(126) {
    opacity: .9783;
    transform: translate(26.0973vw,-10px) scale(.9696);
    -webkit-animation: fall-126 27s linear -15s infinite;
    animation: fall-126 27s linear -15s infinite
}

@-webkit-keyframes fall-126 {
    60.5% {
        transform: translate(21.2331vw,60.5vh) scale(.9696)
    }

    to {
        transform: translate(23.6652vw,100vh) scale(.9696)
    }
}

@keyframes fall-126 {
    60.5% {
        transform: translate(21.2331vw,60.5vh) scale(.9696)
    }

    to {
        transform: translate(23.6652vw,100vh) scale(.9696)
    }
}

.snow:nth-child(127) {
    opacity: .6942;
    transform: translate(76.5582vw,-10px) scale(.5583);
    -webkit-animation: fall-127 19s linear -14s infinite;
    animation: fall-127 19s linear -14s infinite
}

@-webkit-keyframes fall-127 {
    78.214% {
        transform: translate(68.1962vw,78.214vh) scale(.5583)
    }

    to {
        transform: translate(72.3772vw,100vh) scale(.5583)
    }
}

@keyframes fall-127 {
    78.214% {
        transform: translate(68.1962vw,78.214vh) scale(.5583)
    }

    to {
        transform: translate(72.3772vw,100vh) scale(.5583)
    }
}

.snow:nth-child(128) {
    opacity: .8332;
    transform: translate(82.7465vw,-10px) scale(.5147);
    -webkit-animation: fall-128 19s linear -12s infinite;
    animation: fall-128 19s linear -12s infinite
}

@-webkit-keyframes fall-128 {
    68.829% {
        transform: translate(89.0096vw,68.829vh) scale(.5147)
    }

    to {
        transform: translate(85.87805vw,100vh) scale(.5147)
    }
}

@keyframes fall-128 {
    68.829% {
        transform: translate(89.0096vw,68.829vh) scale(.5147)
    }

    to {
        transform: translate(85.87805vw,100vh) scale(.5147)
    }
}

.snow:nth-child(129) {
    opacity: .5539;
    transform: translate(26.2633vw,-10px) scale(.2736);
    -webkit-animation: fall-129 27s linear -27s infinite;
    animation: fall-129 27s linear -27s infinite
}

@-webkit-keyframes fall-129 {
    70.606% {
        transform: translate(24.5584vw,70.606vh) scale(.2736)
    }

    to {
        transform: translate(25.41085vw,100vh) scale(.2736)
    }
}

@keyframes fall-129 {
    70.606% {
        transform: translate(24.5584vw,70.606vh) scale(.2736)
    }

    to {
        transform: translate(25.41085vw,100vh) scale(.2736)
    }
}

.snow:nth-child(130) {
    opacity: .9017;
    transform: translate(72.5137vw,-10px) scale(.1775);
    -webkit-animation: fall-130 26s linear -19s infinite;
    animation: fall-130 26s linear -19s infinite
}

@-webkit-keyframes fall-130 {
    73.116% {
        transform: translate(62.9726vw,73.116vh) scale(.1775)
    }

    to {
        transform: translate(67.74315vw,100vh) scale(.1775)
    }
}

@keyframes fall-130 {
    73.116% {
        transform: translate(62.9726vw,73.116vh) scale(.1775)
    }

    to {
        transform: translate(67.74315vw,100vh) scale(.1775)
    }
}

.snow:nth-child(131) {
    opacity: .5303;
    transform: translate(66.138vw,-10px) scale(.1906);
    -webkit-animation: fall-131 19s linear -9s infinite;
    animation: fall-131 19s linear -9s infinite
}

@-webkit-keyframes fall-131 {
    70.334% {
        transform: translate(60.5613vw,70.334vh) scale(.1906)
    }

    to {
        transform: translate(63.34965vw,100vh) scale(.1906)
    }
}

@keyframes fall-131 {
    70.334% {
        transform: translate(60.5613vw,70.334vh) scale(.1906)
    }

    to {
        transform: translate(63.34965vw,100vh) scale(.1906)
    }
}

.snow:nth-child(132) {
    opacity: .6598;
    transform: translate(5.55vw,-10px) scale(.1062);
    -webkit-animation: fall-132 14s linear -4s infinite;
    animation: fall-132 14s linear -4s infinite
}

@-webkit-keyframes fall-132 {
    34.714% {
        transform: translate(7.2403vw,34.714vh) scale(.1062)
    }

    to {
        transform: translate(6.39515vw,100vh) scale(.1062)
    }
}

@keyframes fall-132 {
    34.714% {
        transform: translate(7.2403vw,34.714vh) scale(.1062)
    }

    to {
        transform: translate(6.39515vw,100vh) scale(.1062)
    }
}

.snow:nth-child(133) {
    opacity: .693;
    transform: translate(81.6772vw,-10px) scale(.1652);
    -webkit-animation: fall-133 18s linear -5s infinite;
    animation: fall-133 18s linear -5s infinite
}

@-webkit-keyframes fall-133 {
    65.944% {
        transform: translate(78.3712vw,65.944vh) scale(.1652)
    }

    to {
        transform: translate(80.0242vw,100vh) scale(.1652)
    }
}

@keyframes fall-133 {
    65.944% {
        transform: translate(78.3712vw,65.944vh) scale(.1652)
    }

    to {
        transform: translate(80.0242vw,100vh) scale(.1652)
    }
}

.snow:nth-child(134) {
    opacity: .2175;
    transform: translate(91.8323vw,-10px) scale(.7296);
    -webkit-animation: fall-134 24s linear -30s infinite;
    animation: fall-134 24s linear -30s infinite
}

@-webkit-keyframes fall-134 {
    59.737% {
        transform: translate(83.9076vw,59.737vh) scale(.7296)
    }

    to {
        transform: translate(87.86995vw,100vh) scale(.7296)
    }
}

@keyframes fall-134 {
    59.737% {
        transform: translate(83.9076vw,59.737vh) scale(.7296)
    }

    to {
        transform: translate(87.86995vw,100vh) scale(.7296)
    }
}

.snow:nth-child(135) {
    opacity: .1142;
    transform: translate(12.2734vw,-10px) scale(.7751);
    -webkit-animation: fall-135 28s linear -16s infinite;
    animation: fall-135 28s linear -16s infinite
}

@-webkit-keyframes fall-135 {
    74.291% {
        transform: translate(13.124vw,74.291vh) scale(.7751)
    }

    to {
        transform: translate(12.6987vw,100vh) scale(.7751)
    }
}

@keyframes fall-135 {
    74.291% {
        transform: translate(13.124vw,74.291vh) scale(.7751)
    }

    to {
        transform: translate(12.6987vw,100vh) scale(.7751)
    }
}

.snow:nth-child(136) {
    opacity: .4404;
    transform: translate(79.9841vw,-10px) scale(.5345);
    -webkit-animation: fall-136 13s linear -4s infinite;
    animation: fall-136 13s linear -4s infinite
}

@-webkit-keyframes fall-136 {
    78.967% {
        transform: translate(80.534vw,78.967vh) scale(.5345)
    }

    to {
        transform: translate(80.25905vw,100vh) scale(.5345)
    }
}

@keyframes fall-136 {
    78.967% {
        transform: translate(80.534vw,78.967vh) scale(.5345)
    }

    to {
        transform: translate(80.25905vw,100vh) scale(.5345)
    }
}

.snow:nth-child(137) {
    opacity: .308;
    transform: translate(90.476vw,-10px) scale(.4389);
    -webkit-animation: fall-137 30s linear -23s infinite;
    animation: fall-137 30s linear -23s infinite
}

@-webkit-keyframes fall-137 {
    72.296% {
        transform: translate(81.0713vw,72.296vh) scale(.4389)
    }

    to {
        transform: translate(85.77365vw,100vh) scale(.4389)
    }
}

@keyframes fall-137 {
    72.296% {
        transform: translate(81.0713vw,72.296vh) scale(.4389)
    }

    to {
        transform: translate(85.77365vw,100vh) scale(.4389)
    }
}

.snow:nth-child(138) {
    opacity: .7903;
    transform: translate(70.2244vw,-10px) scale(.2427);
    -webkit-animation: fall-138 30s linear -5s infinite;
    animation: fall-138 30s linear -5s infinite
}

@-webkit-keyframes fall-138 {
    60.416% {
        transform: translate(71.8063vw,60.416vh) scale(.2427)
    }

    to {
        transform: translate(71.01535vw,100vh) scale(.2427)
    }
}

@keyframes fall-138 {
    60.416% {
        transform: translate(71.8063vw,60.416vh) scale(.2427)
    }

    to {
        transform: translate(71.01535vw,100vh) scale(.2427)
    }
}

.snow:nth-child(139) {
    opacity: .5719;
    transform: translate(35.985vw,-10px) scale(.7141);
    -webkit-animation: fall-139 28s linear -18s infinite;
    animation: fall-139 28s linear -18s infinite
}

@-webkit-keyframes fall-139 {
    51.332% {
        transform: translate(43.4958vw,51.332vh) scale(.7141)
    }

    to {
        transform: translate(39.7404vw,100vh) scale(.7141)
    }
}

@keyframes fall-139 {
    51.332% {
        transform: translate(43.4958vw,51.332vh) scale(.7141)
    }

    to {
        transform: translate(39.7404vw,100vh) scale(.7141)
    }
}

.snow:nth-child(140) {
    opacity: .1609;
    transform: translate(54.1182vw,-10px) scale(.7087);
    -webkit-animation: fall-140 13s linear -7s infinite;
    animation: fall-140 13s linear -7s infinite
}

@-webkit-keyframes fall-140 {
    60.282% {
        transform: translate(62.7577vw,60.282vh) scale(.7087)
    }

    to {
        transform: translate(58.43795vw,100vh) scale(.7087)
    }
}

@keyframes fall-140 {
    60.282% {
        transform: translate(62.7577vw,60.282vh) scale(.7087)
    }

    to {
        transform: translate(58.43795vw,100vh) scale(.7087)
    }
}

.snow:nth-child(141) {
    opacity: .6021;
    transform: translate(80.5318vw,-10px) scale(.7257);
    -webkit-animation: fall-141 16s linear -24s infinite;
    animation: fall-141 16s linear -24s infinite
}

@-webkit-keyframes fall-141 {
    58.744% {
        transform: translate(77.0645vw,58.744vh) scale(.7257)
    }

    to {
        transform: translate(78.79815vw,100vh) scale(.7257)
    }
}

@keyframes fall-141 {
    58.744% {
        transform: translate(77.0645vw,58.744vh) scale(.7257)
    }

    to {
        transform: translate(78.79815vw,100vh) scale(.7257)
    }
}

.snow:nth-child(142) {
    opacity: .2831;
    transform: translate(1.4641vw,-10px) scale(.3332);
    -webkit-animation: fall-142 11s linear -14s infinite;
    animation: fall-142 11s linear -14s infinite
}

@-webkit-keyframes fall-142 {
    55.689% {
        transform: translate(-5.6049vw,55.689vh) scale(.3332)
    }

    to {
        transform: translate(-2.0704vw,100vh) scale(.3332)
    }
}

@keyframes fall-142 {
    55.689% {
        transform: translate(-5.6049vw,55.689vh) scale(.3332)
    }

    to {
        transform: translate(-2.0704vw,100vh) scale(.3332)
    }
}

.snow:nth-child(143) {
    opacity: .1039;
    transform: translate(6.4003vw,-10px) scale(.5052);
    -webkit-animation: fall-143 23s linear -25s infinite;
    animation: fall-143 23s linear -25s infinite
}

@-webkit-keyframes fall-143 {
    73.345% {
        transform: translate(2.8692vw,73.345vh) scale(.5052)
    }

    to {
        transform: translate(4.63475vw,100vh) scale(.5052)
    }
}

@keyframes fall-143 {
    73.345% {
        transform: translate(2.8692vw,73.345vh) scale(.5052)
    }

    to {
        transform: translate(4.63475vw,100vh) scale(.5052)
    }
}

.snow:nth-child(144) {
    opacity: .728;
    transform: translate(92.3418vw,-10px) scale(.5238);
    -webkit-animation: fall-144 20s linear -7s infinite;
    animation: fall-144 20s linear -7s infinite
}

@-webkit-keyframes fall-144 {
    60.145% {
        transform: translate(90.0561vw,60.145vh) scale(.5238)
    }

    to {
        transform: translate(91.19895vw,100vh) scale(.5238)
    }
}

@keyframes fall-144 {
    60.145% {
        transform: translate(90.0561vw,60.145vh) scale(.5238)
    }

    to {
        transform: translate(91.19895vw,100vh) scale(.5238)
    }
}

.snow:nth-child(145) {
    opacity: .8129;
    transform: translate(76.1165vw,-10px) scale(.7827);
    -webkit-animation: fall-145 30s linear -24s infinite;
    animation: fall-145 30s linear -24s infinite
}

@-webkit-keyframes fall-145 {
    31.471% {
        transform: translate(75.9504vw,31.471vh) scale(.7827)
    }

    to {
        transform: translate(76.03345vw,100vh) scale(.7827)
    }
}

@keyframes fall-145 {
    31.471% {
        transform: translate(75.9504vw,31.471vh) scale(.7827)
    }

    to {
        transform: translate(76.03345vw,100vh) scale(.7827)
    }
}

.snow:nth-child(146) {
    opacity: .4392;
    transform: translate(76.3642vw,-10px) scale(.6056);
    -webkit-animation: fall-146 19s linear -16s infinite;
    animation: fall-146 19s linear -16s infinite
}

@-webkit-keyframes fall-146 {
    38.464% {
        transform: translate(69.5862vw,38.464vh) scale(.6056)
    }

    to {
        transform: translate(72.9752vw,100vh) scale(.6056)
    }
}

@keyframes fall-146 {
    38.464% {
        transform: translate(69.5862vw,38.464vh) scale(.6056)
    }

    to {
        transform: translate(72.9752vw,100vh) scale(.6056)
    }
}

.snow:nth-child(147) {
    opacity: .5604;
    transform: translate(85.8142vw,-10px) scale(.0287);
    -webkit-animation: fall-147 10s linear -25s infinite;
    animation: fall-147 10s linear -25s infinite
}

@-webkit-keyframes fall-147 {
    40.768% {
        transform: translate(87.6962vw,40.768vh) scale(.0287)
    }

    to {
        transform: translate(86.7552vw,100vh) scale(.0287)
    }
}

@keyframes fall-147 {
    40.768% {
        transform: translate(87.6962vw,40.768vh) scale(.0287)
    }

    to {
        transform: translate(86.7552vw,100vh) scale(.0287)
    }
}

.snow:nth-child(148) {
    opacity: .7749;
    transform: translate(3.4487vw,-10px) scale(.7106);
    -webkit-animation: fall-148 13s linear -12s infinite;
    animation: fall-148 13s linear -12s infinite
}

@-webkit-keyframes fall-148 {
    74.618% {
        transform: translate(3.7055vw,74.618vh) scale(.7106)
    }

    to {
        transform: translate(3.5771vw,100vh) scale(.7106)
    }
}

@keyframes fall-148 {
    74.618% {
        transform: translate(3.7055vw,74.618vh) scale(.7106)
    }

    to {
        transform: translate(3.5771vw,100vh) scale(.7106)
    }
}

.snow:nth-child(149) {
    opacity: .6519;
    transform: translate(53.9249vw,-10px) scale(.7509);
    -webkit-animation: fall-149 16s linear -20s infinite;
    animation: fall-149 16s linear -20s infinite
}

@-webkit-keyframes fall-149 {
    54.916% {
        transform: translate(54.6455vw,54.916vh) scale(.7509)
    }

    to {
        transform: translate(54.2852vw,100vh) scale(.7509)
    }
}

@keyframes fall-149 {
    54.916% {
        transform: translate(54.6455vw,54.916vh) scale(.7509)
    }

    to {
        transform: translate(54.2852vw,100vh) scale(.7509)
    }
}

.snow:nth-child(150) {
    opacity: .3878;
    transform: translate(56.4259vw,-10px) scale(.1441);
    -webkit-animation: fall-150 15s linear -4s infinite;
    animation: fall-150 15s linear -4s infinite
}

@-webkit-keyframes fall-150 {
    66.015% {
        transform: translate(48.4989vw,66.015vh) scale(.1441)
    }

    to {
        transform: translate(52.4624vw,100vh) scale(.1441)
    }
}

@keyframes fall-150 {
    66.015% {
        transform: translate(48.4989vw,66.015vh) scale(.1441)
    }

    to {
        transform: translate(52.4624vw,100vh) scale(.1441)
    }
}

.snow:nth-child(151) {
    opacity: .0391;
    transform: translate(28.5284vw,-10px) scale(.5418);
    -webkit-animation: fall-151 16s linear -16s infinite;
    animation: fall-151 16s linear -16s infinite
}

@-webkit-keyframes fall-151 {
    67.078% {
        transform: translate(32.6244vw,67.078vh) scale(.5418)
    }

    to {
        transform: translate(30.5764vw,100vh) scale(.5418)
    }
}

@keyframes fall-151 {
    67.078% {
        transform: translate(32.6244vw,67.078vh) scale(.5418)
    }

    to {
        transform: translate(30.5764vw,100vh) scale(.5418)
    }
}

.snow:nth-child(152) {
    opacity: .5544;
    transform: translate(89.8464vw,-10px) scale(.7151);
    -webkit-animation: fall-152 30s linear -23s infinite;
    animation: fall-152 30s linear -23s infinite
}

@-webkit-keyframes fall-152 {
    54.906% {
        transform: translate(90.0633vw,54.906vh) scale(.7151)
    }

    to {
        transform: translate(89.95485vw,100vh) scale(.7151)
    }
}

@keyframes fall-152 {
    54.906% {
        transform: translate(90.0633vw,54.906vh) scale(.7151)
    }

    to {
        transform: translate(89.95485vw,100vh) scale(.7151)
    }
}

.snow:nth-child(153) {
    opacity: .1408;
    transform: translate(31.6618vw,-10px) scale(.5222);
    -webkit-animation: fall-153 15s linear -17s infinite;
    animation: fall-153 15s linear -17s infinite
}

@-webkit-keyframes fall-153 {
    73.336% {
        transform: translate(38.6944vw,73.336vh) scale(.5222)
    }

    to {
        transform: translate(35.1781vw,100vh) scale(.5222)
    }
}

@keyframes fall-153 {
    73.336% {
        transform: translate(38.6944vw,73.336vh) scale(.5222)
    }

    to {
        transform: translate(35.1781vw,100vh) scale(.5222)
    }
}

.snow:nth-child(154) {
    opacity: .7113;
    transform: translate(30.3695vw,-10px) scale(.406);
    -webkit-animation: fall-154 16s linear -17s infinite;
    animation: fall-154 16s linear -17s infinite
}

@-webkit-keyframes fall-154 {
    41.583% {
        transform: translate(21.7709vw,41.583vh) scale(.406)
    }

    to {
        transform: translate(26.0702vw,100vh) scale(.406)
    }
}

@keyframes fall-154 {
    41.583% {
        transform: translate(21.7709vw,41.583vh) scale(.406)
    }

    to {
        transform: translate(26.0702vw,100vh) scale(.406)
    }
}

.snow:nth-child(155) {
    opacity: .6323;
    transform: translate(30.3848vw,-10px) scale(.5097);
    -webkit-animation: fall-155 21s linear -10s infinite;
    animation: fall-155 21s linear -10s infinite
}

@-webkit-keyframes fall-155 {
    57.74% {
        transform: translate(22.4562vw,57.74vh) scale(.5097)
    }

    to {
        transform: translate(26.4205vw,100vh) scale(.5097)
    }
}

@keyframes fall-155 {
    57.74% {
        transform: translate(22.4562vw,57.74vh) scale(.5097)
    }

    to {
        transform: translate(26.4205vw,100vh) scale(.5097)
    }
}

.snow:nth-child(156) {
    opacity: .2656;
    transform: translate(1.7676vw,-10px) scale(.349);
    -webkit-animation: fall-156 23s linear -19s infinite;
    animation: fall-156 23s linear -19s infinite
}

@-webkit-keyframes fall-156 {
    30.441% {
        transform: translate(-.8544vw,30.441vh) scale(.349)
    }

    to {
        transform: translate(.4566vw,100vh) scale(.349)
    }
}

@keyframes fall-156 {
    30.441% {
        transform: translate(-.8544vw,30.441vh) scale(.349)
    }

    to {
        transform: translate(.4566vw,100vh) scale(.349)
    }
}

.snow:nth-child(157) {
    opacity: .8718;
    transform: translate(55.2309vw,-10px) scale(.1404);
    -webkit-animation: fall-157 25s linear -4s infinite;
    animation: fall-157 25s linear -4s infinite
}

@-webkit-keyframes fall-157 {
    71.678% {
        transform: translate(52.2056vw,71.678vh) scale(.1404)
    }

    to {
        transform: translate(53.71825vw,100vh) scale(.1404)
    }
}

@keyframes fall-157 {
    71.678% {
        transform: translate(52.2056vw,71.678vh) scale(.1404)
    }

    to {
        transform: translate(53.71825vw,100vh) scale(.1404)
    }
}

.snow:nth-child(158) {
    opacity: .4222;
    transform: translate(74.993vw,-10px) scale(.0767);
    -webkit-animation: fall-158 17s linear -6s infinite;
    animation: fall-158 17s linear -6s infinite
}

@-webkit-keyframes fall-158 {
    73.307% {
        transform: translate(72.7118vw,73.307vh) scale(.0767)
    }

    to {
        transform: translate(73.8524vw,100vh) scale(.0767)
    }
}

@keyframes fall-158 {
    73.307% {
        transform: translate(72.7118vw,73.307vh) scale(.0767)
    }

    to {
        transform: translate(73.8524vw,100vh) scale(.0767)
    }
}

.snow:nth-child(159) {
    opacity: .5995;
    transform: translate(44.0617vw,-10px) scale(.4689);
    -webkit-animation: fall-159 22s linear -24s infinite;
    animation: fall-159 22s linear -24s infinite
}

@-webkit-keyframes fall-159 {
    69.683% {
        transform: translate(53.1839vw,69.683vh) scale(.4689)
    }

    to {
        transform: translate(48.6228vw,100vh) scale(.4689)
    }
}

@keyframes fall-159 {
    69.683% {
        transform: translate(53.1839vw,69.683vh) scale(.4689)
    }

    to {
        transform: translate(48.6228vw,100vh) scale(.4689)
    }
}

.snow:nth-child(160) {
    opacity: .4028;
    transform: translate(16.6061vw,-10px) scale(.8859);
    -webkit-animation: fall-160 11s linear -24s infinite;
    animation: fall-160 11s linear -24s infinite
}

@-webkit-keyframes fall-160 {
    62.919% {
        transform: translate(23.2975vw,62.919vh) scale(.8859)
    }

    to {
        transform: translate(19.9518vw,100vh) scale(.8859)
    }
}

@keyframes fall-160 {
    62.919% {
        transform: translate(23.2975vw,62.919vh) scale(.8859)
    }

    to {
        transform: translate(19.9518vw,100vh) scale(.8859)
    }
}

.snow:nth-child(161) {
    opacity: .9271;
    transform: translate(57.4758vw,-10px) scale(.0769);
    -webkit-animation: fall-161 22s linear -24s infinite;
    animation: fall-161 22s linear -24s infinite
}

@-webkit-keyframes fall-161 {
    48.167% {
        transform: translate(61.8627vw,48.167vh) scale(.0769)
    }

    to {
        transform: translate(59.66925vw,100vh) scale(.0769)
    }
}

@keyframes fall-161 {
    48.167% {
        transform: translate(61.8627vw,48.167vh) scale(.0769)
    }

    to {
        transform: translate(59.66925vw,100vh) scale(.0769)
    }
}

.snow:nth-child(162) {
    opacity: .2392;
    transform: translate(29.81vw,-10px) scale(.3289);
    -webkit-animation: fall-162 10s linear -7s infinite;
    animation: fall-162 10s linear -7s infinite
}

@-webkit-keyframes fall-162 {
    73.968% {
        transform: translate(24.6014vw,73.968vh) scale(.3289)
    }

    to {
        transform: translate(27.2057vw,100vh) scale(.3289)
    }
}

@keyframes fall-162 {
    73.968% {
        transform: translate(24.6014vw,73.968vh) scale(.3289)
    }

    to {
        transform: translate(27.2057vw,100vh) scale(.3289)
    }
}

.snow:nth-child(163) {
    opacity: .8659;
    transform: translate(88.445vw,-10px) scale(.2408);
    -webkit-animation: fall-163 29s linear -19s infinite;
    animation: fall-163 29s linear -19s infinite
}

@-webkit-keyframes fall-163 {
    67.379% {
        transform: translate(90.9087vw,67.379vh) scale(.2408)
    }

    to {
        transform: translate(89.67685vw,100vh) scale(.2408)
    }
}

@keyframes fall-163 {
    67.379% {
        transform: translate(90.9087vw,67.379vh) scale(.2408)
    }

    to {
        transform: translate(89.67685vw,100vh) scale(.2408)
    }
}

.snow:nth-child(164) {
    opacity: .3835;
    transform: translate(79.2813vw,-10px) scale(.2754);
    -webkit-animation: fall-164 25s linear -10s infinite;
    animation: fall-164 25s linear -10s infinite
}

@-webkit-keyframes fall-164 {
    37.903% {
        transform: translate(76.553vw,37.903vh) scale(.2754)
    }

    to {
        transform: translate(77.91715vw,100vh) scale(.2754)
    }
}

@keyframes fall-164 {
    37.903% {
        transform: translate(76.553vw,37.903vh) scale(.2754)
    }

    to {
        transform: translate(77.91715vw,100vh) scale(.2754)
    }
}

.snow:nth-child(165) {
    opacity: .1635;
    transform: translate(85.0566vw,-10px) scale(.7218);
    -webkit-animation: fall-165 16s linear -2s infinite;
    animation: fall-165 16s linear -2s infinite
}

@-webkit-keyframes fall-165 {
    51.735% {
        transform: translate(94.4579vw,51.735vh) scale(.7218)
    }

    to {
        transform: translate(89.75725vw,100vh) scale(.7218)
    }
}

@keyframes fall-165 {
    51.735% {
        transform: translate(94.4579vw,51.735vh) scale(.7218)
    }

    to {
        transform: translate(89.75725vw,100vh) scale(.7218)
    }
}

.snow:nth-child(166) {
    opacity: .5998;
    transform: translate(6.1157vw,-10px) scale(.5238);
    -webkit-animation: fall-166 23s linear -8s infinite;
    animation: fall-166 23s linear -8s infinite
}

@-webkit-keyframes fall-166 {
    62.953% {
        transform: translate(1.931vw,62.953vh) scale(.5238)
    }

    to {
        transform: translate(4.02335vw,100vh) scale(.5238)
    }
}

@keyframes fall-166 {
    62.953% {
        transform: translate(1.931vw,62.953vh) scale(.5238)
    }

    to {
        transform: translate(4.02335vw,100vh) scale(.5238)
    }
}

.snow:nth-child(167) {
    opacity: .3435;
    transform: translate(64.5023vw,-10px) scale(.1068);
    -webkit-animation: fall-167 23s linear -26s infinite;
    animation: fall-167 23s linear -26s infinite
}

@-webkit-keyframes fall-167 {
    66.628% {
        transform: translate(56.6878vw,66.628vh) scale(.1068)
    }

    to {
        transform: translate(60.59505vw,100vh) scale(.1068)
    }
}

@keyframes fall-167 {
    66.628% {
        transform: translate(56.6878vw,66.628vh) scale(.1068)
    }

    to {
        transform: translate(60.59505vw,100vh) scale(.1068)
    }
}

.snow:nth-child(168) {
    opacity: .7614;
    transform: translate(99.3424vw,-10px) scale(.6248);
    -webkit-animation: fall-168 20s linear -26s infinite;
    animation: fall-168 20s linear -26s infinite
}

@-webkit-keyframes fall-168 {
    50.685% {
        transform: translate(91.9575vw,50.685vh) scale(.6248)
    }

    to {
        transform: translate(95.64995vw,100vh) scale(.6248)
    }
}

@keyframes fall-168 {
    50.685% {
        transform: translate(91.9575vw,50.685vh) scale(.6248)
    }

    to {
        transform: translate(95.64995vw,100vh) scale(.6248)
    }
}

.snow:nth-child(169) {
    opacity: .6617;
    transform: translate(9.9762vw,-10px) scale(.3705);
    -webkit-animation: fall-169 25s linear -21s infinite;
    animation: fall-169 25s linear -21s infinite
}

@-webkit-keyframes fall-169 {
    66.447% {
        transform: translate(1.6801vw,66.447vh) scale(.3705)
    }

    to {
        transform: translate(5.82815vw,100vh) scale(.3705)
    }
}

@keyframes fall-169 {
    66.447% {
        transform: translate(1.6801vw,66.447vh) scale(.3705)
    }

    to {
        transform: translate(5.82815vw,100vh) scale(.3705)
    }
}

.snow:nth-child(170) {
    opacity: .0974;
    transform: translate(67.1437vw,-10px) scale(.7499);
    -webkit-animation: fall-170 22s linear -4s infinite;
    animation: fall-170 22s linear -4s infinite
}

@-webkit-keyframes fall-170 {
    49.101% {
        transform: translate(71.8233vw,49.101vh) scale(.7499)
    }

    to {
        transform: translate(69.4835vw,100vh) scale(.7499)
    }
}

@keyframes fall-170 {
    49.101% {
        transform: translate(71.8233vw,49.101vh) scale(.7499)
    }

    to {
        transform: translate(69.4835vw,100vh) scale(.7499)
    }
}

.snow:nth-child(171) {
    opacity: .4532;
    transform: translate(7.7589vw,-10px) scale(.5784);
    -webkit-animation: fall-171 19s linear -16s infinite;
    animation: fall-171 19s linear -16s infinite
}

@-webkit-keyframes fall-171 {
    38.278% {
        transform: translate(6.0676vw,38.278vh) scale(.5784)
    }

    to {
        transform: translate(6.91325vw,100vh) scale(.5784)
    }
}

@keyframes fall-171 {
    38.278% {
        transform: translate(6.0676vw,38.278vh) scale(.5784)
    }

    to {
        transform: translate(6.91325vw,100vh) scale(.5784)
    }
}

.snow:nth-child(172) {
    opacity: .957;
    transform: translate(2.0834vw,-10px) scale(.9309);
    -webkit-animation: fall-172 12s linear -4s infinite;
    animation: fall-172 12s linear -4s infinite
}

@-webkit-keyframes fall-172 {
    50.365% {
        transform: translate(-.7046vw,50.365vh) scale(.9309)
    }

    to {
        transform: translate(.6894vw,100vh) scale(.9309)
    }
}

@keyframes fall-172 {
    50.365% {
        transform: translate(-.7046vw,50.365vh) scale(.9309)
    }

    to {
        transform: translate(.6894vw,100vh) scale(.9309)
    }
}

.snow:nth-child(173) {
    opacity: .7309;
    transform: translate(18.2793vw,-10px) scale(.9623);
    -webkit-animation: fall-173 22s linear -3s infinite;
    animation: fall-173 22s linear -3s infinite
}

@-webkit-keyframes fall-173 {
    56.769% {
        transform: translate(27.994vw,56.769vh) scale(.9623)
    }

    to {
        transform: translate(23.13665vw,100vh) scale(.9623)
    }
}

@keyframes fall-173 {
    56.769% {
        transform: translate(27.994vw,56.769vh) scale(.9623)
    }

    to {
        transform: translate(23.13665vw,100vh) scale(.9623)
    }
}

.snow:nth-child(174) {
    opacity: .1451;
    transform: translate(73.1421vw,-10px) scale(.4834);
    -webkit-animation: fall-174 19s linear -1s infinite;
    animation: fall-174 19s linear -1s infinite
}

@-webkit-keyframes fall-174 {
    67.691% {
        transform: translate(70.0888vw,67.691vh) scale(.4834)
    }

    to {
        transform: translate(71.61545vw,100vh) scale(.4834)
    }
}

@keyframes fall-174 {
    67.691% {
        transform: translate(70.0888vw,67.691vh) scale(.4834)
    }

    to {
        transform: translate(71.61545vw,100vh) scale(.4834)
    }
}

.snow:nth-child(175) {
    opacity: .8667;
    transform: translate(37.5468vw,-10px) scale(.4215);
    -webkit-animation: fall-175 25s linear -13s infinite;
    animation: fall-175 25s linear -13s infinite
}

@-webkit-keyframes fall-175 {
    33.75% {
        transform: translate(33.8236vw,33.75vh) scale(.4215)
    }

    to {
        transform: translate(35.6852vw,100vh) scale(.4215)
    }
}

@keyframes fall-175 {
    33.75% {
        transform: translate(33.8236vw,33.75vh) scale(.4215)
    }

    to {
        transform: translate(35.6852vw,100vh) scale(.4215)
    }
}

.snow:nth-child(176) {
    opacity: .6359;
    transform: translate(92.9235vw,-10px) scale(.4749);
    -webkit-animation: fall-176 15s linear -30s infinite;
    animation: fall-176 15s linear -30s infinite
}

@-webkit-keyframes fall-176 {
    59.56% {
        transform: translate(97.8955vw,59.56vh) scale(.4749)
    }

    to {
        transform: translate(95.4095vw,100vh) scale(.4749)
    }
}

@keyframes fall-176 {
    59.56% {
        transform: translate(97.8955vw,59.56vh) scale(.4749)
    }

    to {
        transform: translate(95.4095vw,100vh) scale(.4749)
    }
}

.snow:nth-child(177) {
    opacity: .4634;
    transform: translate(25.7735vw,-10px) scale(.6708);
    -webkit-animation: fall-177 16s linear -28s infinite;
    animation: fall-177 16s linear -28s infinite
}

@-webkit-keyframes fall-177 {
    67.795% {
        transform: translate(31.1075vw,67.795vh) scale(.6708)
    }

    to {
        transform: translate(28.4405vw,100vh) scale(.6708)
    }
}

@keyframes fall-177 {
    67.795% {
        transform: translate(31.1075vw,67.795vh) scale(.6708)
    }

    to {
        transform: translate(28.4405vw,100vh) scale(.6708)
    }
}

.snow:nth-child(178) {
    opacity: .2404;
    transform: translate(18.9983vw,-10px) scale(.2121);
    -webkit-animation: fall-178 14s linear -11s infinite;
    animation: fall-178 14s linear -11s infinite
}

@-webkit-keyframes fall-178 {
    36.27% {
        transform: translate(10.4105vw,36.27vh) scale(.2121)
    }

    to {
        transform: translate(14.7044vw,100vh) scale(.2121)
    }
}

@keyframes fall-178 {
    36.27% {
        transform: translate(10.4105vw,36.27vh) scale(.2121)
    }

    to {
        transform: translate(14.7044vw,100vh) scale(.2121)
    }
}

.snow:nth-child(179) {
    opacity: .7825;
    transform: translate(65.7742vw,-10px) scale(.5879);
    -webkit-animation: fall-179 28s linear -15s infinite;
    animation: fall-179 28s linear -15s infinite
}

@-webkit-keyframes fall-179 {
    48.889% {
        transform: translate(59.3235vw,48.889vh) scale(.5879)
    }

    to {
        transform: translate(62.54885vw,100vh) scale(.5879)
    }
}

@keyframes fall-179 {
    48.889% {
        transform: translate(59.3235vw,48.889vh) scale(.5879)
    }

    to {
        transform: translate(62.54885vw,100vh) scale(.5879)
    }
}

.snow:nth-child(180) {
    opacity: .9906;
    transform: translate(30.0186vw,-10px) scale(.0412);
    -webkit-animation: fall-180 25s linear -17s infinite;
    animation: fall-180 25s linear -17s infinite
}

@-webkit-keyframes fall-180 {
    34.334% {
        transform: translate(32.7034vw,34.334vh) scale(.0412)
    }

    to {
        transform: translate(31.361vw,100vh) scale(.0412)
    }
}

@keyframes fall-180 {
    34.334% {
        transform: translate(32.7034vw,34.334vh) scale(.0412)
    }

    to {
        transform: translate(31.361vw,100vh) scale(.0412)
    }
}

.snow:nth-child(181) {
    opacity: .6817;
    transform: translate(28.3716vw,-10px) scale(.0678);
    -webkit-animation: fall-181 12s linear -23s infinite;
    animation: fall-181 12s linear -23s infinite
}

@-webkit-keyframes fall-181 {
    69.006% {
        transform: translate(24.9809vw,69.006vh) scale(.0678)
    }

    to {
        transform: translate(26.67625vw,100vh) scale(.0678)
    }
}

@keyframes fall-181 {
    69.006% {
        transform: translate(24.9809vw,69.006vh) scale(.0678)
    }

    to {
        transform: translate(26.67625vw,100vh) scale(.0678)
    }
}

.snow:nth-child(182) {
    opacity: .9323;
    transform: translate(46.7395vw,-10px) scale(.7641);
    -webkit-animation: fall-182 28s linear -22s infinite;
    animation: fall-182 28s linear -22s infinite
}

@-webkit-keyframes fall-182 {
    40.674% {
        transform: translate(39.814vw,40.674vh) scale(.7641)
    }

    to {
        transform: translate(43.27675vw,100vh) scale(.7641)
    }
}

@keyframes fall-182 {
    40.674% {
        transform: translate(39.814vw,40.674vh) scale(.7641)
    }

    to {
        transform: translate(43.27675vw,100vh) scale(.7641)
    }
}

.snow:nth-child(183) {
    opacity: .4042;
    transform: translate(60.4803vw,-10px) scale(.7188);
    -webkit-animation: fall-183 28s linear -17s infinite;
    animation: fall-183 28s linear -17s infinite
}

@-webkit-keyframes fall-183 {
    41.048% {
        transform: translate(56.9663vw,41.048vh) scale(.7188)
    }

    to {
        transform: translate(58.7233vw,100vh) scale(.7188)
    }
}

@keyframes fall-183 {
    41.048% {
        transform: translate(56.9663vw,41.048vh) scale(.7188)
    }

    to {
        transform: translate(58.7233vw,100vh) scale(.7188)
    }
}

.snow:nth-child(184) {
    opacity: .6713;
    transform: translate(92.8826vw,-10px) scale(.9954);
    -webkit-animation: fall-184 29s linear -18s infinite;
    animation: fall-184 29s linear -18s infinite
}

@-webkit-keyframes fall-184 {
    54.788% {
        transform: translate(87.3606vw,54.788vh) scale(.9954)
    }

    to {
        transform: translate(90.1216vw,100vh) scale(.9954)
    }
}

@keyframes fall-184 {
    54.788% {
        transform: translate(87.3606vw,54.788vh) scale(.9954)
    }

    to {
        transform: translate(90.1216vw,100vh) scale(.9954)
    }
}

.snow:nth-child(185) {
    opacity: .7637;
    transform: translate(30.3368vw,-10px) scale(.409);
    -webkit-animation: fall-185 27s linear -11s infinite;
    animation: fall-185 27s linear -11s infinite
}

@-webkit-keyframes fall-185 {
    38.076% {
        transform: translate(34.7968vw,38.076vh) scale(.409)
    }

    to {
        transform: translate(32.5668vw,100vh) scale(.409)
    }
}

@keyframes fall-185 {
    38.076% {
        transform: translate(34.7968vw,38.076vh) scale(.409)
    }

    to {
        transform: translate(32.5668vw,100vh) scale(.409)
    }
}

.snow:nth-child(186) {
    opacity: .2148;
    transform: translate(24.7476vw,-10px) scale(.7874);
    -webkit-animation: fall-186 14s linear -18s infinite;
    animation: fall-186 14s linear -18s infinite
}

@-webkit-keyframes fall-186 {
    71.856% {
        transform: translate(24.9892vw,71.856vh) scale(.7874)
    }

    to {
        transform: translate(24.8684vw,100vh) scale(.7874)
    }
}

@keyframes fall-186 {
    71.856% {
        transform: translate(24.9892vw,71.856vh) scale(.7874)
    }

    to {
        transform: translate(24.8684vw,100vh) scale(.7874)
    }
}

.snow:nth-child(187) {
    opacity: .1589;
    transform: translate(21.3621vw,-10px) scale(.0959);
    -webkit-animation: fall-187 12s linear -21s infinite;
    animation: fall-187 12s linear -21s infinite
}

@-webkit-keyframes fall-187 {
    56.523% {
        transform: translate(21.1587vw,56.523vh) scale(.0959)
    }

    to {
        transform: translate(21.2604vw,100vh) scale(.0959)
    }
}

@keyframes fall-187 {
    56.523% {
        transform: translate(21.1587vw,56.523vh) scale(.0959)
    }

    to {
        transform: translate(21.2604vw,100vh) scale(.0959)
    }
}

.snow:nth-child(188) {
    opacity: .9824;
    transform: translate(10.1097vw,-10px) scale(.0782);
    -webkit-animation: fall-188 23s linear -21s infinite;
    animation: fall-188 23s linear -21s infinite
}

@-webkit-keyframes fall-188 {
    59.66% {
        transform: translate(15.0835vw,59.66vh) scale(.0782)
    }

    to {
        transform: translate(12.5966vw,100vh) scale(.0782)
    }
}

@keyframes fall-188 {
    59.66% {
        transform: translate(15.0835vw,59.66vh) scale(.0782)
    }

    to {
        transform: translate(12.5966vw,100vh) scale(.0782)
    }
}

.snow:nth-child(189) {
    opacity: .6291;
    transform: translate(45.822vw,-10px) scale(.7636);
    -webkit-animation: fall-189 15s linear -30s infinite;
    animation: fall-189 15s linear -30s infinite
}

@-webkit-keyframes fall-189 {
    30.278% {
        transform: translate(43.2173vw,30.278vh) scale(.7636)
    }

    to {
        transform: translate(44.51965vw,100vh) scale(.7636)
    }
}

@keyframes fall-189 {
    30.278% {
        transform: translate(43.2173vw,30.278vh) scale(.7636)
    }

    to {
        transform: translate(44.51965vw,100vh) scale(.7636)
    }
}

.snow:nth-child(190) {
    opacity: .316;
    transform: translate(80.5888vw,-10px) scale(.6177);
    -webkit-animation: fall-190 23s linear -14s infinite;
    animation: fall-190 23s linear -14s infinite
}

@-webkit-keyframes fall-190 {
    47.628% {
        transform: translate(88.3199vw,47.628vh) scale(.6177)
    }

    to {
        transform: translate(84.45435vw,100vh) scale(.6177)
    }
}

@keyframes fall-190 {
    47.628% {
        transform: translate(88.3199vw,47.628vh) scale(.6177)
    }

    to {
        transform: translate(84.45435vw,100vh) scale(.6177)
    }
}

.snow:nth-child(191) {
    opacity: .031;
    transform: translate(76.23vw,-10px) scale(.7045);
    -webkit-animation: fall-191 25s linear -10s infinite;
    animation: fall-191 25s linear -10s infinite
}

@-webkit-keyframes fall-191 {
    58.453% {
        transform: translate(79.3916vw,58.453vh) scale(.7045)
    }

    to {
        transform: translate(77.8108vw,100vh) scale(.7045)
    }
}

@keyframes fall-191 {
    58.453% {
        transform: translate(79.3916vw,58.453vh) scale(.7045)
    }

    to {
        transform: translate(77.8108vw,100vh) scale(.7045)
    }
}

.snow:nth-child(192) {
    opacity: .0873;
    transform: translate(40.3116vw,-10px) scale(.6451);
    -webkit-animation: fall-192 15s linear -7s infinite;
    animation: fall-192 15s linear -7s infinite
}

@-webkit-keyframes fall-192 {
    43.062% {
        transform: translate(36.4919vw,43.062vh) scale(.6451)
    }

    to {
        transform: translate(38.40175vw,100vh) scale(.6451)
    }
}

@keyframes fall-192 {
    43.062% {
        transform: translate(36.4919vw,43.062vh) scale(.6451)
    }

    to {
        transform: translate(38.40175vw,100vh) scale(.6451)
    }
}

.snow:nth-child(193) {
    opacity: .1651;
    transform: translate(44.3021vw,-10px) scale(.3952);
    -webkit-animation: fall-193 26s linear -30s infinite;
    animation: fall-193 26s linear -30s infinite
}

@-webkit-keyframes fall-193 {
    32.981% {
        transform: translate(44.4482vw,32.981vh) scale(.3952)
    }

    to {
        transform: translate(44.37515vw,100vh) scale(.3952)
    }
}

@keyframes fall-193 {
    32.981% {
        transform: translate(44.4482vw,32.981vh) scale(.3952)
    }

    to {
        transform: translate(44.37515vw,100vh) scale(.3952)
    }
}

.snow:nth-child(194) {
    opacity: .9316;
    transform: translate(70.9798vw,-10px) scale(.4184);
    -webkit-animation: fall-194 13s linear -3s infinite;
    animation: fall-194 13s linear -3s infinite
}

@-webkit-keyframes fall-194 {
    65.085% {
        transform: translate(75.4552vw,65.085vh) scale(.4184)
    }

    to {
        transform: translate(73.2175vw,100vh) scale(.4184)
    }
}

@keyframes fall-194 {
    65.085% {
        transform: translate(75.4552vw,65.085vh) scale(.4184)
    }

    to {
        transform: translate(73.2175vw,100vh) scale(.4184)
    }
}

.snow:nth-child(195) {
    opacity: .6905;
    transform: translate(71.4136vw,-10px) scale(.2042);
    -webkit-animation: fall-195 23s linear -22s infinite;
    animation: fall-195 23s linear -22s infinite
}

@-webkit-keyframes fall-195 {
    39.671% {
        transform: translate(70.9798vw,39.671vh) scale(.2042)
    }

    to {
        transform: translate(71.1967vw,100vh) scale(.2042)
    }
}

@keyframes fall-195 {
    39.671% {
        transform: translate(70.9798vw,39.671vh) scale(.2042)
    }

    to {
        transform: translate(71.1967vw,100vh) scale(.2042)
    }
}

.snow:nth-child(196) {
    opacity: .8482;
    transform: translate(31.5449vw,-10px) scale(.9148);
    -webkit-animation: fall-196 21s linear -29s infinite;
    animation: fall-196 21s linear -29s infinite
}

@-webkit-keyframes fall-196 {
    71.252% {
        transform: translate(35.2153vw,71.252vh) scale(.9148)
    }

    to {
        transform: translate(33.3801vw,100vh) scale(.9148)
    }
}

@keyframes fall-196 {
    71.252% {
        transform: translate(35.2153vw,71.252vh) scale(.9148)
    }

    to {
        transform: translate(33.3801vw,100vh) scale(.9148)
    }
}

.snow:nth-child(197) {
    opacity: .3258;
    transform: translate(20.2915vw,-10px) scale(.3747);
    -webkit-animation: fall-197 12s linear -12s infinite;
    animation: fall-197 12s linear -12s infinite
}

@-webkit-keyframes fall-197 {
    55.873% {
        transform: translate(19.2818vw,55.873vh) scale(.3747)
    }

    to {
        transform: translate(19.78665vw,100vh) scale(.3747)
    }
}

@keyframes fall-197 {
    55.873% {
        transform: translate(19.2818vw,55.873vh) scale(.3747)
    }

    to {
        transform: translate(19.78665vw,100vh) scale(.3747)
    }
}

.snow:nth-child(198) {
    opacity: .8221;
    transform: translate(52.6565vw,-10px) scale(.6823);
    -webkit-animation: fall-198 27s linear -21s infinite;
    animation: fall-198 27s linear -21s infinite
}

@-webkit-keyframes fall-198 {
    75.295% {
        transform: translate(51.3151vw,75.295vh) scale(.6823)
    }

    to {
        transform: translate(51.9858vw,100vh) scale(.6823)
    }
}

@keyframes fall-198 {
    75.295% {
        transform: translate(51.3151vw,75.295vh) scale(.6823)
    }

    to {
        transform: translate(51.9858vw,100vh) scale(.6823)
    }
}

.snow:nth-child(199) {
    opacity: .8949;
    transform: translate(1.189vw,-10px) scale(.4801);
    -webkit-animation: fall-199 18s linear -29s infinite;
    animation: fall-199 18s linear -29s infinite
}

@-webkit-keyframes fall-199 {
    73.481% {
        transform: translate(-5.7407vw,73.481vh) scale(.4801)
    }

    to {
        transform: translate(-2.27585vw,100vh) scale(.4801)
    }
}

@keyframes fall-199 {
    73.481% {
        transform: translate(-5.7407vw,73.481vh) scale(.4801)
    }

    to {
        transform: translate(-2.27585vw,100vh) scale(.4801)
    }
}

.snow:nth-child(200) {
    opacity: .391;
    transform: translate(64.7491vw,-10px) scale(.2034);
    -webkit-animation: fall-200 10s linear -1s infinite;
    animation: fall-200 10s linear -1s infinite
}

@-webkit-keyframes fall-200 {
    66.551% {
        transform: translate(67.367vw,66.551vh) scale(.2034)
    }

    to {
        transform: translate(66.05805vw,100vh) scale(.2034)
    }
}

@keyframes fall-200 {
    66.551% {
        transform: translate(67.367vw,66.551vh) scale(.2034)
    }

    to {
        transform: translate(66.05805vw,100vh) scale(.2034)
    }
}

.gradient-heart-shape {
    position: relative;
    width: 40px;
    height: 40px;
    background-image: linear-gradient(180deg,#edcf6a,#fbe98d);
    box-shadow: 0 0 20px rgba(0,0,0,.8);
    opacity: .7;
    transform: rotate(45deg)
}

.gradient-heart-shape:after , .gradient-heart-shape:before {
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 100%;
    width: 100%;
    height: 100%;
    content: ""
}

.gradient-heart-shape:before {
    background-image: linear-gradient(180deg,#edcf6a,#fbe98d);
    transform: translateX(-50%)
}

.gradient-heart-shape:after {
    background-image: linear-gradient(180deg,#edcf6a 50%,transparent 0,transparent);
    transform: translateY(-50%)
}
</style>
