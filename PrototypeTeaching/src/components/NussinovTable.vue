<script setup lang="ts">
import { create_table } from "../scripts/table";
import { onMounted } from "vue";
import { calculate_nussinov } from "../../../common/nussinov"
import { is_entire_table_filled, validate_fill, get_current_index } from "../scripts/validate_fill";
import { validate_traceback } from "../scripts/validate_traceback";

const probs = defineProps({
    sequence: {
        type: String,
        required: true
    }
});

let isFilled = false;
let isTracebackFinished = false;

onMounted(() => {
    create_table(probs.sequence);
    let nussinov = calculate_nussinov(probs.sequence);
    let nussinovMatrix = nussinov.matrix;
    let nussinovBacktrace = nussinov.backtrace;
    let first_cell = "";

    let table = document.querySelector("#table")?.querySelector("tbody");

    console.log(table);
    //should be list of lists in the future
    // list of clicked and accepted traceback cells
    let path = [ table.rows[1].cells[table.rows.length-1] ];

    table.addEventListener("click", function (event) {
        console.log(isTracebackFinished);
        if (event.target.className == 'cell' && !isTracebackFinished) {

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
                    if (first_cell.style.backgroundColor == "red") {
                        first_cell.style.backgroundColor = "blue";
                        return;
                    }

                    first_cell.style.backgroundColor = "lightblue";

                }
                else {
                    if (first_cell.style.backgroundColor == "lightblue") {
                        first_cell.style.backgroundColor = "white";
                    }

                    // if the cell already correct, it's marked with the red color
                    // (so no progress gets deleted)
                    if (first_cell.style.backgroundColor == "blue") {
                        first_cell.style.backgroundColor = "red"
                    }

                    if (validate_traceback(first_cell, event.target, nussinovBacktrace)){
                        // adds current valid cell to path
                        path.push(event.target); 
                        let pos = get_current_index(event.target);
                        
                        // diagonal is reached => stop traceback
                        // IGNORES BIFURCATION, this is naive implementation only
                        console.log(pos);
                        if (pos.x === pos.y){
                            isTracebackFinished = true;
                            console.log(path);
                        }
                    }
                    first_cell = "";
                }
            };
        }
    });
});

</script>

<template>
    <div v-if="isTracebackFinished">
        you are done!
    </div>

    <div id="table"></div>
</template>

<style scoped>
</style>
