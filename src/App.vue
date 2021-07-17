<template>
<div class="app">
  <rules/>
  <header-cmp/>
  <div class="page-container">
    <transition name="fade" mode="out-in">
      <choices v-if="!currentMe"/>
      <result v-else/>
    </transition>
  </div>
</div>
</template>

<script>
import Result from './components/Result.vue'
import Choices from './components/Choices.vue'
import Header from './components/Header.vue'
import game from './services/game'
import Rules from './components/Rules.vue'
export default {
  name: 'App',
  components: {
    Choices,
    Result,
    HeaderCmp: Header,
    Rules
  },
  setup() {
    return {
      currentMe: game.currentMe
    }
  }
}
</script>

<style lang="scss">
@import './assets/css/reset.css';
@import './assets/css/colors.scss';
@import './assets/fonts/BarlowSemiCondensed/index.css';
@import '~@fortawesome/fontawesome-free/css/all.min.css';
body {
  font-family: BarlowSemiCondensed;
}
body, #app {
  background: rgb(30,31,41);
  background: radial-gradient(circle, hsl(214, 47%, 23%) 0%, hsl(237, 49%, 15%) 100%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items:center;
  overflow: hidden;
  color: white;
  font-family: BarlowSemiCondensed;
}
h1  {font-size: 2em;}
h2  {font-size: 1.9em;}
h3  {font-size: 1.8em;}
h4  {font-size: 1.7em;}
h5  {font-size: 1.6em;}

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
.page-container {
  position: relative;
  display: flex;
  justify-content: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.3s ease;
  will-change: opacity transform;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
