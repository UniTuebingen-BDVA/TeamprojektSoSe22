<template >
    <div class="game-frame">
        <div class="game">

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

    const helpActive = ref(false);
    const showHelp = () => helpActive.value = !helpActive.value;
</script>
<style scoped>
    .game-frame {
        height: 70vh;
        width: 100%;
        padding: 0 1em 0 1em;
        border-style: solid;
        border-color: var(--uni-color-black);
        border-width: 1px;
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
</style>