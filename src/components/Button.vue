<template>
  <div class="button-root" :class="icon">
    <template v-if="pulse">
      <div class="pulse" v-for="i in 4" :key="i" :class="'pulse-' + (i -1)"></div>
    </template>
    <div class="button" :class="icon" :style="{transform: `scale(${scale})`}">
      <div class="">
        <img :src="svg[icon]" :alt="'icon-' + icon">
      </div>
    </div>
  </div>
</template>

<script>
import scissorsSVG from '@/assets/img/icon-scissors.svg'
import spockSVG from '@/assets/img/icon-spock.svg'
import paperSVG from '@/assets/img/icon-paper.svg'
import lizardSVG from '@/assets/img/icon-lizard.svg'
import rockSVG from '@/assets/img/icon-rock.svg'
export default {
  props: {
    /** @type {'lizard' | 'spock' | 'rock' | 'scissors' | 'paper'} */
    icon: {default: '', type: String},
    scale: {default: 1, type: Number},
    pulse: {default: false, type: Boolean},
  },
  setup() {
    return {
      svg: {
        lizard: lizardSVG,
        spock: spockSVG,
        paper: paperSVG,
        rock: rockSVG,
        scissors: scissorsSVG,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.button-root {
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  z-index: 1;
  border-bottom: 6px solid black;
  width: 120px;
  height: 120px;
  transition: 300ms;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    & {
      width: 90px;
      height: 90px;
    }
  }
  &:hover {
    transform: scale(1.1);
  }
  &.paper {
    background: hsl(230, 89%, 62%);
    background: radial-gradient(circle, hsl(230, 89%, 62%) 0%, hsl(230, 89%, 65%) 100%);
    border-bottom-color: hsl(230, 89%, 55%);
  }
  &.scissors {
    background: hsl(39, 89%, 49%);
    background: radial-gradient(circle, hsl(39, 89%, 49%) 0%, hsl(40, 84%, 53%) 100%);
    border-bottom-color: hsl(40, 84%, 40%);
  }
  &.rock {
    background: hsl(349, 71%, 52%);
    background: radial-gradient(circle, hsl(349, 71%, 52%) 0%, hsl(349, 70%, 56%) 100%);
    border-bottom-color: hsl(349, 70%, 40%);
  }
  &.lizard {
    background: hsl(261, 73%, 60%);
    background: radial-gradient(circle, hsl(261, 73%, 60%) 0%, hsl(261, 72%, 63%) 100%);
  }
  &.spock {
    background: hsl(189, 59%, 53%);
    background: radial-gradient(circle, hsl(189, 59%, 53%) 0%, hsl(189, 58%, 57%) 100%);
  }

  &>div {
    border-radius: 50%;
    background-color: #fff;
    flex-shrink: 0;
    box-shadow: 0 4px 0  2px #ccc inset;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    img {
      padding: 15px;
      width: 40px;
      height: 40px;
    }
    @media screen and (max-width: 800px) {
      img {
        padding: 15px;
        width: 20px;
        height: 20px;
      }
    }
  }
}

.pulse {
  width: 90px;
  height: 90px;
  position: absolute;
  background-color: rgba(255,255,255,0.2);
  pointer-events: none;
  border-radius: 50%;
  animation-name: pulse;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
}

@for $i from 0 through 3 {
  .pulse-#{$i} {
    animation-delay: $i * 250ms;
  }
}

@keyframes pulse {
  from {
    width: 90px;
    height: 90px;
    opacity: 1;
  } to {
    width: 500px;
    height: 500px;
    opacity: 0;
  }
}
</style>