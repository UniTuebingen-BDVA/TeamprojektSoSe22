<template >
    <div class="game-frame">
        <div class="game">
            <RNAStructure 
                :sequence="'AAAGGGGUUU'" 
                :dotBracket="'.........'" 
                :secondaryStructure="true" 
                @combine="editDotBracket"
                :key = "dotBracket"
                class="rna-structure"/>
        </div>
        <div class="help" v-on:click="showHelp">
            <img v-if="!helpActive"  src="../../assets/icon_help.svg" />
            <img v-if="helpActive"  src="../../assets/icon_close.svg" />
        </div>
        <GameHelp v-if="helpActive"/>
    </div>
</template>
<script setup>
    import {ref} from 'vue';
    import GameHelp from './GameHelp.vue';
    import RNAStructure from '../RNAStructure.vue';
    import {meaningfulSeq} from '../../scripts/RNA_Generator';
    import {calculate_nussinov} from '../../scripts/nussinov'

    // ToDo: Change length and sequence by difficukty
    let getSequence = meaningfulSeq(10);
    let dotBracket = ref('.'.repeat(getSequence.length));
    const nussinovAnswer = calculate_nussinov(getSequence).secondary_structure.toString();

    const helpActive = ref(false);
    const showHelp = () => helpActive.value = !helpActive.value;

    function editDotBracket(i){
        console.log(i);
        //check if index was clicked before.
        //If yes check if other index 2 belongs to index 1
        //otherwise combine index 1 and 2 in dot bracket notation and reload rna component
    }
</script>
<style scoped>
    .game-frame {
        height: 70vh;
        width: 100%;
        padding: 0 1em 0 1em;
        border-style: solid;
        border-color: var(--uni-color-gold);
        border-width: 3px;
        border-radius: 10px;
        background-color: #f3f3f3;
        position: relative;
    }
    .game {
        height: 100%;
        width: 100%;
    }
    .help {
        height: 20px;
        position: absolute;
        top:0;
        right:0;
        cursor: pointer;
    }
    .help > img {
        height: 100%;
        object-fit: contain;
    }
    .rna-structure {
        display: flex;
        max-width: 100%;
        min-width: 30%;
        max-height: 100%;
        width: auto;
        height: auto;
    }
</style>