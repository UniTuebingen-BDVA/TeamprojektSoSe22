<template >
    <div class="game-frame">
        <div class="game">
            <RNAStructure 
                :sequence="getSequence" 
                :dotBracket="dotBracketStr" 
                :secondaryStructure="true" 
                @combine="editDotBracket"
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
    import {calculate_nussinov} from '../../scripts/nussinov';

    // ToDo: Change length and sequence by difficukty
    let getSequence = meaningfulSeq(10);
    let dotBracket = ('.'.repeat(getSequence.length)).split('');
    let dotBracketStr = ('.'.repeat(getSequence.length));
    const nussinovAnswer = calculate_nussinov(getSequence).secondary_structure;
    
    const gamestate = {
        correctAnswer: [], 
        userAnswer: [],
        usedSequence: String
    };

    const emit = defineEmits({
        gamestate: Object
    })

    const helpActive = ref(false);
    const showHelp = () => helpActive.value = !helpActive.value;

    function editDotBracket(indexes){

        //define Nodes clicked by user
        let clickedNodes = [];
        clickedNodes[0] = indexes[0].id; clickedNodes[1] = indexes[1].id; clickedNodes.sort();

        //check if index are matching brackets
        if(dotBracket[clickedNodes[0]] === '(' && dotBracket[clickedNodes[1]] === ')'){

            //If yes count if the number of open and closed brackets between them are the same
            let closedBrackets = 0; let openBrackets = 0;
            for(let i = clickedNodes[0] + 1; i < clickedNodes[1]; i++){
                (dotBracket[i] === ')') ? closedBrackets+1 : ((dotBracket[i] === '(') ? openBrackets+1 : NaN);
            }
            //If so replace brackets with '.' to remove the connection
            if(closedBrackets == openBrackets){
                dotBracket[clickedNodes[0]] = '.'; dotBracket[clickedNodes[1]] = '.';
            }
        }
        //check if nodes weren't clicked before
        else if(dotBracket[clickedNodes[0]] === '.' && dotBracket[clickedNodes[1]] === '.'){
            dotBracket[clickedNodes[0]] = '('; dotBracket[clickedNodes[1]] = ')';
        }
        else{
            //user clicked something wrong. Do nothing
        }
        //put user dotBracket in Gamestate and emit to active game
        gamestate.userAnswer = dotBracket;
        gamestate.correctAnswer = nussinovAnswer;
        gamestate.usedSequence = getSequence;
        emit('gamestate', gamestate);
        console.log(dotBracket);
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
        background-color: var(--secondary-color);
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