<template lang="">
    <div class="game-start-menu">
        <UniButton class="start-buttons" :primary-color="'red'" :filled="false" :text="'Easy'"/>
        <UniButton class="start-buttons" :primary-color="'red'" :filled="false" :text="'Medium'"/>
        <UniButton class="start-buttons" :primary-color="'red'" :filled="false" :text="'Hard'"/>
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
        margin: 0 auto;
        width: 100%;
    }
    .start-buttons {
        height: 40px;
        width: 140px
    }
</style>