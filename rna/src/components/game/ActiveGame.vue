<template>
    <div>
        <GameStart/>
        <GameFrame />
        <div class="turn-in">
            <UniButton :primary-color="'red'" :filled="true" :text="'Submit'" class="turn-in-btn" v-on:click="$emit('stateChange',true)"/>
        </div>
    </div>
</template>
<script setup>
    import GameStart from './GameStart.vue';
    import GameFrame from './GameFrame.vue';
    import UniButton from '../UniButton.vue';

    
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