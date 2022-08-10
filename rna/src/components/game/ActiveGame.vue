<template>
  <div>
    <GameStart @gamestart="changeDifficulty" />
    <h1 @privateError="createError">Error: {{ errorMessage }}</h1>
    <GameFrame @gamestate="updateGameState" :key="gameDifficulty" />
    <div class="turn-in">
      <UniButton
        :primary-color="'red'"
        :filled="true"
        :text="'Submit'"
        class="turn-in-btn"
        v-on:click="$emit('stateChange', gameState)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import GameStart from "./GameStart.vue";
import GameFrame from "./GameFrame.vue";
import UniButton from "../UniButton.vue";

const gameState = {
  correctAnswer: [],
  userAnswer: [],
  usedSequence: String,
};

let gameDifficulty = ref(0);

const emit = defineEmits({
  gameState: Object,
  stateChange: Object,
  gameDifficulty: Number,
});

function changeDifficulty(x) {
  gameDifficulty.value = x;
}

function updateGameState(updates) {
  gameState.userAnswer = updates.userAnswer;
  gameState.correctAnswer = updates.correctAnswer;
  gameState.usedSequence = updates.usedSequence;
}

function createError(error) {
  const errorMessage = error;
  console.log("Triggert");
}
</script>

<style scoped>
.turn-in {
  margin: 0 auto;
  padding: 2em 0;
  width: 100%;
}
.turn-in-btn {
  height: 40px;
  width: 140px;
  margin: 0 auto;
}
</style>
