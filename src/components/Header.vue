<template>
    <div class="header">
    <h1 v-if="mode==='pentagon'">
      ROCK <br>
      PAPER <br>
      SCISSORS <br>
      LIZARD <br>
      SPOCK <br>
    </h1>
    <h1 v-else>
      ROCK <br>
      PAPER <br>
      SCISSORS <br>
    </h1>
    <div class="score-container">
      <div class="label">SCORE</div>
      <div class="score">{{score}}</div>
    </div>
  </div>
</template>

<script>
import game from '../services/game'
export default {
  setup() {
    return {
      score: game.score,
      mode: game.mode
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  border: 2px solid rgba(255,255,255,0.5);
  margin-bottom: 40px;
  padding: 15px 20px;
  box-sizing: border-box;
  border-radius: 5px;
  width: 90%;
  max-width: 800px;
  margin-top: 40px;
  h1 {
    font-weight: bold;
    font-size: 1.7em;
    line-height: 0.8;
  }
  .score-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    color: black;
    border-radius: 5px;
    padding: 0 50px;
    box-sizing: border-box;
    .label {
      color: blue;
      margin-bottom: 10px;
    }
    .score {
      font-size: 3em;
      font-weight: bold;
    }
  }
}
</style>