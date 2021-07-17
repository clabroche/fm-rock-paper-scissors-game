<template>
  <div class="result-root" v-if="currentMe">
    <div class="result me">
      YOU PICKED
      <button-cmp :icon="currentMe" :scale="2" :pulse="result === 1"/>
    </div>
    <div class="result opponent">
      THE HOUSE PICKED
      <button-cmp :icon="currentOpponent" :scale="2" :pulse="result === -1"/>
    </div>
    <div class="result text">
      <div class="text" v-if="result === 0">EQUALITY</div>
      <div class="text" v-if="result === -1">YOU LOSE</div>
      <div class="text" v-if="result === 1">YOU WIN</div>
      <button class="play-again" @click="reset()">PLAY AGAIN</button>
    </div>
  </div>
</template>

<script>
import game from '../services/game'
import ButtonCmp from "./Button.vue"
export default {
  components: {
    ButtonCmp,
  },
  setup() {
    return {
      result: game.result,
      currentMe: game.currentMe,
      currentOpponent: game.currentOpponent,
      reset: () => game.reset()
    }
  }
}
</script>

<style lang="scss" scoped>
.result-root {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: 80px;
  max-width: 900px;
}
.result.me {
  grid-column: 1;
  grid-row: 1;
}
.result.opponent {
  grid-column: 3;
  grid-row: 1;
}
.result {
  font-weight: bold;
  letter-spacing: 5px;
  font-size: 1.5em;
}
.result.text {
  grid-column: 2;
  grid-row: 1;
  .text {
    font-size: 2em;
    font-weight: bold;
  }
  .play-again {
    margin-top: 20px;
    background: white;
    cursor: pointer;
    border: none;
    padding: 10px 20px;
    font-size: 0.8em;
    border-radius: 4px;
    transition: 300ms;
    &:hover {
      transform: scale(1.5);
    }
  }
}

.button-root {
  margin-top: 40px;
  height: 250px;
}
@media screen and (max-width: 800px) {
  .result-root {
    margin: 0;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  .result.me {
    grid-column: 1;
    grid-row: 1;
  }
  .result.opponent {
    grid-column: 2;
    grid-row: 1;
  }
  .result.text {
    grid-column: 1/3;
    grid-row: 2;
    align-self: flex-start;
  }
  .button-root {
    margin: 0;
    transform: scale(0.8);
  }
}
</style>