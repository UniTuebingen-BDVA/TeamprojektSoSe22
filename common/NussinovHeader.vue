<script setup lang="ts">
import Logo from "./Logo.vue";
</script>

<template>
    <div class="nHeader">
        <logo></logo>
        <div class="nTitle">
            <a href="/TeamprojektSoSe22/index.html">Teaching Nussinov</a>
        </div>
        <div class="nPages">
            <a href="/TeamprojektSoSe22/PrototypeTeaching/src/pages/Tutorial/BioBackgroundRNA1.html">Teaching</a>
            <a href="/TeamprojektSoSe22/rna/game.html">Gaming</a>
        </div>
    </div>

    <a class="git-icon" href="https://github.com/UniTuebingen-BDVA/TeamprojektSoSe22/">
        <img src="../common/GitHub-Mark-64px.png">
    </a>

  <a class="legalNotice" href="/TeamprojektSoSe22/PrototypeTeaching/src/pages/legalNotice.html">
    <img src="/PrototypeTeaching/src/assets/legalNoticeIcon.png" width="70" height="70">
  </a>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&display=swap');
    .legalNotice {
      position: fixed;
      bottom: 10px;
      left: 10px;
    }
    .git-icon{
        position: fixed;
        bottom: 10px;
        right: 10px;
    }
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

a:hover {
  color: var(--uni-color-red);
}
</style>
