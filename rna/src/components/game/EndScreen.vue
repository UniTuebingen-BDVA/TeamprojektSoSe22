<script setup>
import UniButton from "../UniButton.vue";
import RNAStructure from "../RNAStructure.vue";

const props = defineProps({
  gamestate: Object,
});

let foundBasepairs = 0;
let possibleBasepairs = 0;

for (const index in props.gamestate.correctAnswer) {
  if (props.gamestate.correctAnswer[index] === "(") {
    possibleBasepairs += 1;
  }
}
for (const index in props.gamestate.userAnswer) {
  if (props.gamestate.userAnswer[index] === "(") {
    foundBasepairs += 1;
  }
}
</script>

<template>
  <div class="EndScreen">
    <h2>
      You found {{ foundBasepairs }} of {{ possibleBasepairs }} Basepairs with
      the algorithm.
    </h2>
  </div>

  <div class="frames">
    <div>
      <div class="frame">
        <RNAStructure
          :sequence="gamestate.usedSequence"
          :dotBracket="gamestate.userAnswer.join('')"
          :secondaryStructure="true"
          class="rna-structure"
        />
      </div>
      <h2>Your solution</h2>
    </div>

    <div>
      <div class="frame">
        <RNAStructure
          :sequence="gamestate.usedSequence"
          :dotBracket="gamestate.correctAnswer.join('')"
          :secondaryStructure="true"
          class="rna-structure"
        />
      </div>
      <h2>Nussinov Algorithm</h2>
    </div>
  </div>

  <div class="AbButton">
    <UniButton
      :primary-color="'red'"
      :filled="true"
      :text="'Retry?'"
      class="general-buttons"
      v-on:click="$emit('stateChange', false)"
    />
  </div>
</template>

<style scoped>
.EndScreen {
  text-align: center;
  width: auto;
  justify-content: space-between;
}

.rna-structure {
  display: flex;
  max-width: 100%;
  min-width: 30%;
  max-height: 100%;
  width: auto;
  height: auto;
}

.general-buttons {
  height: 40px;
  width: 140px;
  margin-bottom: 20px;
}

.AbButton {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.frames {
  display: flex;
  justify-content: center;
}

h2 {
  display: flex;
  justify-content: center;
}

.frame {
  width: 600px;
  height: 550px;
  margin-right: 10px;
  border-style: solid;
  border-color: var(--uni-color-gold);
  border-width: 3px;
  border-radius: 10px;
  background-color: #f3f3f3;
}

p {
  font-weight: 800;
  font-size: 14pt;
}
</style>
