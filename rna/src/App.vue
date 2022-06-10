<script setup>

import NavBar from './components/Navbar.vue'
import GamingPage from './components/game/GamingPage.vue';
import EndScreen from './components/game/EndScreen.vue';
</script>

<template>
  <NavBar />
  <!-- ToDo: Landing Page -->
  <!-- ToDo: Learning Page -->
  <GamingPage />
  
  <EndScreen />
  
</template>

<style>
#app {
  font-family: var(--uni-font);
  color: var(--uni-font-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
