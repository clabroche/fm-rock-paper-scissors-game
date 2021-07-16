<template>
<div class="app">
  <div class="header">
    <h1 v-if="mode==='pentagon'">Rock, paper, scissors, lizard, spock</h1>
    <h1 v-else>Rock, paper, scissors</h1>
    <select v-model="mode">
      <option value="triangle">Rock, paper, scissors</option>
      <option value="pentagon">Rock, paper, scissors, lizard, spock</option>
    </select>
  </div>
  <div class="root pentagon" v-if="mode === 'pentagon'">
    <img class="bg" src="@/assets/img/bg-pentagon.svg" alt="">
    <div class="buttons">
      <button-cmp icon="scissors"/>
      <button-cmp icon="spock"/>
      <button-cmp icon="paper"/>
      <button-cmp icon="lizard"/>
      <button-cmp icon="rock"/>
    </div>
  </div>
  <div class="root triangle" v-else>
    <img class="bg" src="@/assets/img/bg-triangle.svg" alt="">
    <div class="buttons">
      <button-cmp icon="scissors"/>
      <button-cmp icon="paper"/>
      <button-cmp icon="rock"/>
    </div>
  </div>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import ButtonCmp from "./components/Button.vue"

export default {
  name: 'App',
  components: { ButtonCmp },
  setup() {
    return {
      mode: ref('pentagon')
    }
  }
}
</script>

<style lang="scss">
@import './assets/css/reset.css';
@import './assets/css/colors.scss';
@import '~@fortawesome/fontawesome-free/css/all.min.css';
body, #app {
  background: rgb(30,31,41);
  background: radial-gradient(circle, hsl(214, 47%, 23%) 0%, hsl(237, 49%, 15%) 100%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items:center;
  overflow: hidden;
}
h1  {font-size: 2em;}
h2  {font-size: 1.9em;}
h3  {font-size: 1.8em;}
h4  {font-size: 1.7em;}
h5  {font-size: 1.6em;}
.app {
  display: flex;
  flex-direction: column;
  select {
    margin-bottom: 40px;
  }
}
.root {
  position: relative;
  padding: 40px;
  .bg {
    height: 330px;
    width: 330px;
  }
  .buttons {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
  }
  &.triangle {
    .buttons {
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(4, 1fr);
    }
    .paper {
      grid-row: 1;
      grid-column: 1;
    }
    .scissors {
      grid-row: 1;
      grid-column: 8;
    }
    .rock {
      grid-row: 4;
      grid-column: 1 / 9
    }
  }
  &.pentagon {
    .buttons {
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(4, 1fr);
    }
    .paper {
      grid-column: 6;
      grid-row: 2;
    }
    .scissors {
      grid-row: 1;
      grid-column: 1 / 7;
    }
    .rock {
      grid-column: 2;
      grid-row: 4;
    }
    .lizard {
      grid-row: 2;
      grid-column: 1;
    }
    .spock {
      grid-row: 4;
      grid-column: 5;
    }
  }
}
.app {
  display: flex;
  .root {
    margin: 0 100px;
  }
}
</style>
