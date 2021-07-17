<template>
  <modal ref="rulesModal" :noActions="true" width="max-content" :closeCross="true">
    <template #header>
      RULES
    </template>
    <template #body>
      <div class="body">
        <img src="@/assets/img/image-rules-bonus.svg" alt="">
      </div>
    </template>
  </modal>
  <button class="rules-button" @click="open">
    RULES
  </button>
</template>

<script>
import { ref } from '@vue/reactivity'
import Modal from './Modal.vue'
export default {
  components: { Modal },
  setup() {
    const rulesModal = ref(null)
    return {
      rulesModal,
      open() {
        rulesModal.value.open()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.rules-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 40px;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  cursor: pointer;
}
.body {
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    margin: auto;
  }
}
</style>