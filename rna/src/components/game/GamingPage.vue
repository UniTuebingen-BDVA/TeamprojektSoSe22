<template>
  <div class="game-page">
    <ActiveGame v-if="!gameEnd" @stateChange="endGame" />
    <EndScreen
      v-if="gameEnd"
      @stateChange="restartGame"
      :key="gameState"
      :gamestate="gameState"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ActiveGame from "./ActiveGame.vue";
import EndScreen from "./EndScreen.vue";

const gameEnd = ref(false);
let gameState = {
  userAnswer: [],
  correctAnswer: [],
  usedSequence: String,
};

const endGame = (state) => {
  gameEnd.value = true;
  gameState.userAnswer = state.userAnswer;
  gameState.correctAnswer = state.correctAnswer;
  gameState.usedSequence = state.usedSequence;
};
const restartGame = () => (gameEnd.value = false);
</script>

<style scoped>
.game-page {
  padding-top: 80px;
  max-width: 1200px;
  margin: 0 auto 0 auto;
  min-height: calc(100vh - 80px);
}
</style>
