<script setup lang="ts">
  import Logo from './Logo.vue';
</script>

<template>
    <div class="nHeader">
        <logo></logo>
        <div class="nTitle">
            <a href="./index.html">Teaching Nussinov</a>
        </div>
        <div class="nPages">
            <a href="./PrototypeTeaching/src/pages/Tutorial/BioBackgroundRNA1.html">Teaching</a> <!-- Add Link here-->
            <a href="./rna/game.html">Gaming</a> <!-- Add Link here -->
        </div>
    </div>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&display=swap');
    .nHeader{
        position: fixed;
        z-index: 1000;
        top: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: flex-start;
        background-color: #e3e3e3;
        height: 7.5%;
        align-items: center;
        font-family: var(--uni-font);
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
        padding: 5px;
    }
    .nPages{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 20%;
    }
    .nTitle {
        width: 80%;
    }
    .nTitle > a{
        font-size: 2em;
        color: #434343;
        font-weight: 700;
        text-decoration: none;
    }
    .nPages > a{
        margin: 0 5%;
        padding: 10%;
        font-size: 1.5em;
        font-weight: 300;
        color: #444444;
        text-decoration: none;
    }

    a:hover{
        color: var(--uni-color-red);
    }
</style>
