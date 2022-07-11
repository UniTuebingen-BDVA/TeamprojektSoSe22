<script setup lang="ts">
import {create_table} from "../scripts/table.js";

const probs = defineProps({
    sequence: String
});

document.addEventListener("DOMContentLoaded", function(){
    let seq = probs.sequence;
    create_table(seq);

    document.querySelector("#table").addEventListener("click", function(event){
        if (event.target.className == 'cell'){
            event.target.innerHTML = parseInt(prompt("Cell entry:"));
        }
    });
});

</script>

<template>
    <div id="table"></div>
</template>

<style scoped>
</style>
