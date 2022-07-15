<script setup lang="ts">
    import NussinovTable from "./NussinovTable.vue";
    import RNAStructure from "./RNAStructure.vue";
    import { meaningfulSeq } from "../scripts/RNA_Generator";
    import { ref} from 'vue'
    const probs = defineProps({
        length: {
            type: Number,
            default: 5
        }
    })
    const start = ref(false);
    const sequence = ref(meaningfulSeq(probs.length));
</script>

<script>
    
</script>

<template>
    <button @click="start = !start" v-if="!start" type="button" class="nButton">{{"Start"}}</button>
    <div class="twoColumns" v-if="start">
        <div class="nTable"><NussinovTable :sequence = sequence> </NussinovTable> </div>
        <div class="nImage"><RNAStructure :sequence = sequence :secondary-structure = "false"></RNAStructure></div>
    </div>
    
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    .nButton{
        text-align: center;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 20px;
        font-weight: 550;
        transition: color .3s/* all .2s ease-in */;
        cursor: pointer;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        background-color: var(--uni-color-red);
        color: white;
    }
    .nButton:hover{
        background-color: var(--uni-color-red-hover);
        color: white;
    }

    .twoColumns{
        margin-top: 5%;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }

    .nImage{
        max-width: 40%;
        min-width: 30%;
        width: auto;
        height: auto;
    }
    .nTable{
        margin-top: 5%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 50%;
        height: 100%;
    }
</style>
