<script setup>

import NavBar from './components/Navbar.vue'
import GamingPage from './components/game/GamingPage.vue';
</script>

<template>
  <NavBar />
  <!-- ToDo: Landing Page -->
  <!-- ToDo: Learning Page -->
  <GamingPage />
</template>

<style>
#app {
  font-family: var(--uni-font);
  color: var(--uni-font-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
