<template>
  <div class="game-page">
    <ActiveGame v-if="!gameend" @stateChange="endGame" />
    <EndScreen
      v-if="gameend"
      @stateChange="restartGame"
      :key="gamestate"
      :gamestate="gamestate"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import GameStart from "./GameStart.vue";
import GameFrame from "./GameFrame.vue";
import ActiveGame from "./ActiveGame.vue";
import EndScreen from "./EndScreen.vue";

const gameend = ref(false);
let gamestate = {
  userAnswer: [],
  correctAnswer: [],
  usedSequence: String,
};

const endGame = (state) => {
  gameend.value = true;
  gamestate.userAnswer = state.userAnswer;
  gamestate.correctAnswer = state.correctAnswer;
  gamestate.usedSequence = state.usedSequence;
};
const restartGame = () => (gameend.value = false);
</script>

<style scoped>
.game-page {
  padding-top: 80px;
  max-width: 1200px;
  margin: 0 auto 0 auto;
  min-height: calc(100vh - 80px);
}
</style>
