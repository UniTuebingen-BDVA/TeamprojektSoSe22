<template>
    <div class="game-page">
        <ActiveGame v-if="!gameend" @stateChange="switchGameState"/>
        <EndScreen v-if="gameend"/>
    </div>
</template>
<script setup>
import {ref} from "vue"
import GameStart from './GameStart.vue';
import GameFrame from './GameFrame.vue';
import ActiveGame from './ActiveGame.vue';
import EndScreen from './EndScreen.vue';

const gameend = ref(false);
const bsp = ref("Nope");

const switchGameState = ()=> gameend.value = true;

</script>

<style scoped>
    .game-page {
        padding-top: 80px;
        max-width: 1200px;
        margin: 0 auto 0 auto;
        min-height: calc(100vh - 80px);
    }
</style>