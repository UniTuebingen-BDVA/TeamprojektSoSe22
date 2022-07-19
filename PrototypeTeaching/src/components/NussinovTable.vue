<script setup lang="ts">
import {create_table} from "../scripts/table";
import {onMounted} from "vue";
import {calculate_nussinov} from "../scripts/nussinov"
import {validate_fill} from "../scripts/validate_fill"; 

const probs = defineProps({
    sequence: {
        type:String,
        required:true
    }
});

onMounted(() => {
    create_table(probs.sequence);
    let nussinovMatrix = calculate_nussinov(probs.sequence).matrix;

    document.querySelector("#table").addEventListener("click", function(event){
        if (event.target.className == 'cell'){
            validate_fill(event.target, nussinovMatrix);
        }
    });
});

</script>

<template>
    <div id="table"></div>
</template>

<style scoped>
</style>
