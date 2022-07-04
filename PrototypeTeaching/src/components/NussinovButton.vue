<script setup lang="ts">
defineProps<{
  text: string
  link: string
}>()
</script>

<template>
    <button type="button" class="nButton">
        <a v-bind:href="link">
            {{text}}
        </a>
    </button>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    .nButton{
        background-color: var(--uni-color-white);
        width: auto;
        height: 3em;
        border-color: var(--uni-color-red);
        border-width: 0.125em;
        border-style: solid;
        color: var(--uni-color-red);
        font-family: var(--uni-font);
        align-self: baseline;
        transition: background-color .3s;
    }
    .nButton > a {
        text-decoration: none;
        color: var(--uni-color-red);
        font-size: 1.5em;
        padding: 0.5em;
        font-weight: 550;
        transition: color .3s;
    }
    .nButton:hover{
        background-color: var(--uni-color-red);
    }
    a:hover{
        color: var(--uni-color-white);
    }
</style>
