<script setup>
import NussinovHeader from "../../common/NussinovHeader.vue";
import GamingPage from "./components/game/GamingPage.vue";
</script>

<template>
  <NussinovHeader />
  <GamingPage />
</template>

<style>
#game {
  font-family: var(--uni-font);
  color: var(--uni-font-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
