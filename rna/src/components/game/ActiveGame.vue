<template>
    <div>
        <GameStart @gamestart="changeDifficulty"/>
        <GameFrame @gamestate="updateGamestate" :key="gameDifficulty"/>
        <div class="turn-in">
            <UniButton 
                :primary-color="'red'" 
                :filled="true" 
                :text="'Submit'" 
                class="turn-in-btn" 
                v-on:click="$emit('stateChange',gamestate)"
            />
        </div>
    </div>
</template>
<script setup>
    import {ref} from 'vue';
    import GameStart from './GameStart.vue';
    import GameFrame from './GameFrame.vue';
    import UniButton from '../UniButton.vue';

    const gamestate = {
        correctAnswer: [], 
        userAnswer: [],
        usedSequence: String
    };

    let gameDifficulty = ref(0);

    const emit = defineEmits({
        gamestate: Object,
        stateChange: Object,
        gameDifficulty: Number
    })

    function changeDifficulty(x){
        gameDifficulty.value = x;
    }

    function updateGamestate(updates){
        gamestate.userAnswer = updates.userAnswer;
        gamestate.correctAnswer = updates.correctAnswer;
        gamestate.usedSequence = updates.usedSequence;
    }
</script>
<style scoped>
    .turn-in {
        margin: 0 auto;
        padding: 2em 0;
        width: 100%;
    }
    .turn-in-btn {
        height: 40px;
        width: 140px;
        margin: 0 auto;
    }
</style>