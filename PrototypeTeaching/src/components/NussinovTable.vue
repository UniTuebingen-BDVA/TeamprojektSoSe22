<script setup lang="ts">
import { create_table } from "../scripts/table";
import { onMounted } from "vue";
import { calculate_nussinov } from "../../../common/nussinov"
import { is_entire_table_filled, validate_fill } from "../scripts/validate_fill";
import {validate_traceback} from "../scripts/validate_traceback";

const probs = defineProps({
    sequence: {
        type: String,
        required: true
    }
});

let isFilled = false;

onMounted(() => {
    create_table(probs.sequence);
    let nussinov = calculate_nussinov(probs.sequence);
    let nussinovMatrix = nussinov.matrix;
    let nussinovBacktrace = nussinov.backtrace;
    let first_cell = "";

    document.querySelector("#table").addEventListener("click", function (event) {
        if (event.target.className == 'cell') {

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
                        return
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

                    validate_traceback(first_cell, event.target, nussinovBacktrace)

                    first_cell = "";

                }
            };
        }
    });
});

</script>

<template>
    <div id="table"></div>
</template>

<style scoped>
</style>
