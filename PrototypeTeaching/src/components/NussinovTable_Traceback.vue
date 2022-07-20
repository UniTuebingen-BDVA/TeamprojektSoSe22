<script setup lang="ts">
import {create_filled_table, create_table} from "../scripts/table";
import {onMounted} from "vue";
import {calculate_nussinov} from "../scripts/nussinov"
import {validate_traceback} from "../scripts/validate_traceback";

const probs = defineProps({
  sequence: {
    type:String,
    required:true
  }
});

onMounted(() => {
  let nussinov = calculate_nussinov(probs.sequence);
  let backtrace_matrix = nussinov.backtrace;
  let nussinovMatrix = nussinov.matrix;
  create_filled_table(probs.sequence, nussinovMatrix);

  let first_cell = "";

  document.querySelector("#table").addEventListener("click", function(event){
    if (event.target.className == 'cell'){
      if(first_cell == "") {

        first_cell = event.target;

        if(first_cell.style.backgroundColor == "red"){
          first_cell.style.backgroundColor = "blue";
          return
        }

        first_cell.style.backgroundColor = "lightblue";

      }
      else {
        if(first_cell.style.backgroundColor == "lightblue"){
          first_cell.style.backgroundColor = "white";
        }
        if(first_cell.style.backgroundColor == "blue"){
          first_cell.style.backgroundColor = "red"
        }

        validate_traceback(first_cell ,event.target, backtrace_matrix)
        //console.log(first_cell);
        //console.log(event.target);
        first_cell = "";

      }
    };
  });
});

</script>

<template>
  <div id="table"></div>
</template>

<style scoped>
</style>