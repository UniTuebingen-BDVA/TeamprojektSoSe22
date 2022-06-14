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
        background-color: #ffffff;
        width: auto;
        height: 40px;
        border-color: #a51e37;
        border-width: 2px;
        border-style: solid;
        color: #a51e37;
        font-family: 'Open Sans';
        align-self: baseline;
        transition: background-color .3s;
    }
    .nButton > a {
        text-decoration: none;
        color: #a51e37;
        font-size: 20px;
        padding: 10px;
        font-weight: 550;
        transition: color .3s;
    }
    .nButton:hover{
        background-color: #a51e37;
    }
    a:hover{
        color: #ffffff;
    }
</style>
