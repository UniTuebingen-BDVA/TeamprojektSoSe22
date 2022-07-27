<script setup lang="ts">
import {create_table} from "../scripts/table";
import {onMounted} from "vue";
import {calculate_nussinov} from "../scripts/nussinov"
import {is_entire_table_filled, validate_fill} from "../scripts/validate_fill"; 

const probs = defineProps({
    sequence: {
        type:String,
        required:true
    }
});

let isFilled = false;

onMounted(() => {
    create_table(probs.sequence);
    let nussinovMatrix = calculate_nussinov(probs.sequence).matrix;

    document.querySelector("#table").addEventListener("click", function(event){
        if (event.target.className == 'cell'){

            // fill stage
            if(!isFilled){
                validate_fill(event.target, nussinovMatrix);
                isFilled = is_entire_table_filled(event.target);
            }
            
            // traceback stage 
            else {

            }
        }
    });
});

</script>

<template>
    <div id="table"></div>
</template>

<style scoped>
</style>
