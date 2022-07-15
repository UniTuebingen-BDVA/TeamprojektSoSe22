<script setup lang="ts">
import {create_table} from "../scripts/table.js";
import {onMounted} from 'vue'

const probs = defineProps({
    sequence: {
        type:String,
        required:true
    }
});

onMounted(() => {
    create_table(probs.sequence)
    
    document.querySelector("#table").addEventListener("click", function(event){
        if (event.target.className == 'cell'){
            while (isNaN(parseInt(event.target.innerText))){
                event.target.innerText = parseInt(prompt("Cell entry:"));
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
