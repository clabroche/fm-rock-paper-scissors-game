import { ref } from "vue"

class Game {
  constructor() {
    /** @type {import('vue').Ref<'pentagon' | 'triangle'>} */
    this.mode = ref('pentagon')
    /** @type {import('vue').Ref<'lizard' | 'spock' | 'scissors' | 'paper' | 'rock'>} */
    this.currentMe = ref(null)
    /** @type {import('vue').Ref<'lizard' | 'spock' | 'scissors' | 'paper' | 'rock'>} */
    this.currentOpponent = ref(null)
    this.result = ref(0)
    this.score = ref(0)
    this.beats = {
      lizard: ['spock', 'paper'],
      spock: ['scissors', 'rock'],
      scissors: ['paper', 'lizard'],
      paper: ['rock', 'spock'],
      rock: ['lizard', 'scissors'],
    }
    this.allPossibilities = Object.keys(this.beats)
    this.load()
  }
  launchBattle() {
    if (this.currentMe.value === this.currentOpponent.value) this.result.value = 0
    else if (this.beats[this.currentMe.value].includes(this.currentOpponent.value)) {
      this.result.value = 1
      this.score.value++
    } else {
      this.result.value = -1
      this.score.value--
    }
    this.save()
  }
  /** @return {'lizard' | 'spock' | 'scissors' | 'paper' | 'rock' } */
  getRandom() {
    // @ts-ignore
    return this.allPossibilities[Math.floor(Math.random() * this.allPossibilities.length)]
  }
  select(choice) {
    if (this.currentMe.value) return
    this.currentMe.value = choice
    this.currentOpponent.value = this.getRandom()
    this.launchBattle()
  }
  reset() {
    this.currentMe.value = null
    this.currentOpponent.value = null
    this.result.value = 0
    console.log('reset')
  }
  save() {
    localStorage.setItem('rock-paper-scissors', this.score.value.toString())
  }
  load() {
    const value = +localStorage.getItem('rock-paper-scissors')
    console.log(value)
    this.score.value = Number.isNaN(value) ? 0 : value
  }
}
export default new Game()