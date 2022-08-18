<script setup lang="ts">
import NussinovTable from "./NussinovTable.vue";
import RNAStructure from "./RNAStructure.vue";
import { meaningfulSeq } from "../../../common/RNA_Generator";
import { ref } from "vue";

const probs = defineProps({
  length: {
    type: Number,
    default: 5,
  },
  sequence: {
    type: String,
    default: "",
  },
});
let sequence = ref("");
const start = ref(false);
if (probs.sequence == "") {
  sequence = ref(meaningfulSeq(probs.length));
} else {
  sequence = ref(probs.sequence);
}
</script>

<script></script>

<template>
  <button @click="start = !start" v-if="!start" type="button" class="nButton">
    {{ "Start" }}
  </button>
  <div class="flex-container" v-if="start">
    <div class="table">
      <NussinovTable :sequence="sequence"> </NussinovTable>
    </div>
    <!-- <div class="structure"><RNAStructure :sequence = sequence :secondary-structure = "false"></RNAStructure></div> -->
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
.nButton {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: max-content;
  height: 40px;
  font-family: var(--uni-font);
  padding: 10px;
  font-size: 20px;
  font-weight: 550;
  transition: color 0.3s;
  border: solid 2px var(--uni-color-red);
  background-color: transparent;
  color: var(--uni-color-red);
}
.nButton:hover {
  background-color: var(--uni-color-red-hover);
  color: white;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.table {
  flex: 0 1 60%;
}

.structure {
  flex: 0.5 1 40%;
}
</style>
