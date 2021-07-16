<template>
<div class="app">

  <!-- <div class="root triangle">
    <img class="bg" src="@/assets/img/bg-triangle.svg" alt="">
    <div class="buttons">
      <div class="line space">
        <div class="button paper">
          <div>
            <img src="@/assets/img/icon-paper.svg" alt="">
          </div>
        </div>
        <div class="button scissors">
          <div>
            <img src="@/assets/img/icon-scissors.svg" alt="">
          </div>
        </div>
      </div>
      <div class="line center">
        <div class="button rock">
          <div>
            <img src="@/assets/img/icon-rock.svg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="root pentagon">
    <img class="bg" src="@/assets/img/bg-pentagon.svg" alt="">
    <div class="buttons">
      <div class="line center">
        <div class="button scissors">
          <div>
            <img src="@/assets/img/icon-scissors.svg" alt="">
          </div>
        </div>
      </div>
      <div class="line space">
        <div class="button spock">
          <div>
            <img src="@/assets/img/icon-spock.svg" alt="">
          </div>
        </div>

        <div class="button paper">
          <div>
            <img src="@/assets/img/icon-paper.svg" alt="">
          </div>
        </div>
      </div>
      <div class="line space">
        <div class="button lizard">
          <div>
            <img src="@/assets/img/icon-scissors.svg" alt="">
          </div>
        </div>
        <div class="button rock">
          <div>
            <img src="@/assets/img/icon-rock.svg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {
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

.root {
  position: relative;
  .bg {
    height: 100%;
  }
  .buttons {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .line {
      display: flex;
      &.space {
        justify-content: space-between;
      }
      &.center {
        justify-content: center;
      }
      .button {
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        padding: 15px;
        position: relative;
        z-index: 1;
        border-bottom: 6px solid black;
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
          width: 100px;
          height: 100px;
          flex-shrink: 0;
          box-shadow: 0 4px 0  2px #ccc inset;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  &.triangle {
    .paper {
      transform: translateX(-50%) translateY(-50%);
    }
    .scissors {
      transform: translateX(50%) translateY(-50%);
    }
    .rock {
      transform: translateY(50%);
    }
  }
  &.pentagon {
    .paper {
      transform: translateX(50%) translateY(-50%);
    }
    .scissors {
      transform: translateY(-50%);
    }
    .rock {
      transform: translateY(-25%);
    }
    .lizard {
      transform: translateY(-25%);
    }
    .spock {
      transform: translateX(-50%) translateY(-50%);
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
