<script setup lang="ts">
import { create_table } from "../scripts/table";
import { onMounted, ref } from "vue";
import { calculate_nussinov } from "../../../common/nussinov";
import {
  is_entire_table_filled,
  validate_fill,
} from "../scripts/validate_fill";
import { validate_traceback } from "../scripts/validate_traceback";
import { PathNode, addBasePair } from "../scripts/traceback_binary_tree";
import RNAStructure from "./RNAStructure.vue";

let pairCounter = 0;
let isFilled = false;
let isTracebackFinished = ref(false);

const probs = defineProps({
  sequence: {
    type: String,
    required: true,
  },
});

let res = {
  finishScreen: false.toString(),
  sequence: probs.sequence,
  dotBracket: ".".repeat(probs.sequence.length),
};

function updateResult(seq: string, dotBracket: string, finishScreen: string) {
  res.sequence = seq;
  res.dotBracket = dotBracket;
  res.finishScreen = finishScreen;
}

onMounted(() => {
  create_table(probs.sequence);
  let nussinov = calculate_nussinov(probs.sequence);
  let maxScore = nussinov.max_score;
  let nussinovMatrix = nussinov.matrix;
  let nussinovBacktrace = nussinov.backtrace;
  let first_cell: string | EventTarget | null = "";
  let dotBracket_str = ".".repeat(probs.sequence.length);

  let table = document.querySelector("#table")!.querySelector("tbody");

  table!.addEventListener("click", function (event) {
    if (event.target!.className == "cell" && !isTracebackFinished.value) {
      // fill stage
      if (!isFilled) {
        validate_fill(event.target, nussinovMatrix);
        isFilled = is_entire_table_filled(event.target);
      }

      // traceback stage
      else {
        if (first_cell == "") {
          first_cell = event.target;

          // if the cell was already correct, it's marked with a different color
          if (first_cell!.style.backgroundColor == "red") {
            first_cell!.style.backgroundColor = "blue";
            return;
          }

          first_cell!.style.backgroundColor = "lightblue";
        } else {
          if (first_cell!.style.backgroundColor == "lightblue") {
            first_cell!.style.backgroundColor = "white";
          }

          // if the cell already correct, it's marked with the red color
          // (so no progress gets deleted)
          if (first_cell!.style.backgroundColor == "blue") {
            first_cell!.style.backgroundColor = "red";
          }

          if (validate_traceback(first_cell, event.target, nussinovBacktrace)) {
            let crtNode = new PathNode(event.target!);
            let prevNode = new PathNode(first_cell!);

            if (
              crtNode.pos.x == prevNode.pos.x + 1 &&
              crtNode.pos.y == prevNode.pos.y - 1
            ) {
              dotBracket_str = addBasePair(dotBracket_str, prevNode.pos);
              pairCounter++;
            }
            if (pairCounter == maxScore) {
              isTracebackFinished.value = true;
              updateResult(probs.sequence, dotBracket_str, true.toString());
            }
          }
          first_cell = "";
        }
      }
    }
  });
});
</script>

<template>
  <div class="flex-container">
    <div class="tableScreen">
      <p id="tracebackDone" v-if="isTracebackFinished">You are done!</p>
      <div id="table"></div>
    </div>

    <div class="finishScreen">
      <p v-if="isTracebackFinished">
        The secondary-structure of this sequence is:
      </p>
      <RNAStructure
        :key="res.finishScreen"
        :sequence="probs.sequence"
        :secondary-structure="true"
        :dotBracket="res.dotBracket"
      ></RNAStructure>
    </div>
  </div>
</template>

<style scoped>
.flex-container {
  display: flex;
  flex-wrap: nowrap;
  align-items: baseline;
  justify-content: space-evenly;
}
.tableScreen {
  flex: 0 1 30%;
}
.finishScreen {
  flex: 0.5 1 50%;
}
.flex-container > div {
  margin: 0% 2.5%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
}

#tracebackDone {
  margin-top: 2em;
  color: black;
  position: relative;
  text-align: center;
}
</style>
