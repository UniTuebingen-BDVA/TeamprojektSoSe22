<template lang="">
    <div class="game-start-menu">
        <UniButton class="start-buttons" :primary-color="'red'" :filled="true" :text="'Leicht'"/>
        <UniButton class="start-buttons" :primary-color="'black'" :filled="false" :text="'Mittel'"/>
        <UniButton class="start-buttons" :primary-color="'gold'" :filled="true" :text="'Schwer'"/>
    </div>
</template>
<script setup>
    import UniButton from '../UniButton.vue';
</script>
<style scoped>
    .game-start-menu {
        display: flex;
        justify-content: space-between;
        padding: 2em 1em 2em 1em;
    }
    .start-buttons {
        height: 40px;
        width: 140px
    }
</style>