<template>
  <div class="button-root" :class="icon">
    <div class="button" :class="icon">
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
    icon: {default: '', type: String}
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
  width: 100%;
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
  &:hover {
    transform: scale(1.1);
  }
  &.paper {
    background: hsl(230, 89%, 62%);
    background: radial-gradient(circle, hsl(230, 89%, 62%) 0%, hsl(230, 89%, 65%) 100%);
    border-color: hsl(230, 89%, 55%);
  }
  &.scissors {
    background: hsl(39, 89%, 49%);
    background: radial-gradient(circle, hsl(39, 89%, 49%) 0%, hsl(40, 84%, 53%) 100%);
    border-color: hsl(40, 84%, 40%);
  }
  &.rock {
    background: hsl(349, 71%, 52%);
    background: radial-gradient(circle, hsl(349, 71%, 52%) 0%, hsl(349, 70%, 56%) 100%);
    border-color: hsl(349, 70%, 40%);
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
  }
}

</style>