<template>
  <div class="root" v-if="mode === 'pentagon'" :class="{chosen: currentMe, [mode]: true}">
    <img class="bg" src="@/assets/img/bg-pentagon.svg" alt="" v-if="!currentMe">
    <div class="buttons">
      <button-cmp icon="scissors" @click="select('scissors')"/>
      <button-cmp icon="spock" @click="select('spock')"/>
      <button-cmp icon="paper" @click="select('paper')"/>
      <button-cmp icon="lizard" @click="select('lizard')"/>
      <button-cmp icon="rock" @click="select('rock')"/>
    </div>
  </div>
  <div class="root triangle" v-else>
    <img class="bg" src="@/assets/img/bg-triangle.svg" alt="">
    <div class="buttons">
      <button-cmp icon="scissors" @click="select('scissors')"/>
      <button-cmp icon="paper" @click="select('paper')"/>
      <button-cmp icon="rock" @click="select('rock')"/>
    </div>
  </div>
</template>

<script>
import game from '../services/game'
import ButtonCmp from "./Button.vue"
export default {
  components: {
    ButtonCmp
  },
  setup() {
    return {
      select: (choice) => game.select(choice),
      mode: game.mode,
      currentMe: game.currentMe
    }
  }
}
</script>

<style lang="scss" scoped>
.root {
  position: relative;
  padding: 40px;
  width: 330px;
  height: 330px;
  margin: 0 100px;
  .bg {
    height: 330px;
    width: 330px;
  }
  @media screen and (max-width: 800px) {
    width: 200px;
    height: 200px;
    .bg {
      height: 200px;
      width: 200px;
    }
  }
  .buttons {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    transition: 300ms;
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
</style>