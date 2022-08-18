<template>
  <div id="outer-div">
    <div class="logo">
      <Logo />
      <span class="logo-title"> Serious Game - RNA Faltung </span>
    </div>
    <div class="navigation">
      <NaVButton class="nav-button" :name="'Einführung'" />
      <NaVButton class="nav-button" :name="'Spielen'" />
      <NaVButton class="nav-button" :name="'Lernen'" />
    </div>
  </div>
</template>

<script setup>
import Logo from "./Logo.vue";
import NaVButton from "./NaVButton.vue";
</script>

<style scoped>
#outer-div {
  height: 70px;
  min-width: 100%;
  position: fixed;
  display: flex;
  padding: 0 1em 0 1em;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  justify-content: space-between;
}
.logo {
  display: flex;
  height: 100%;
  align-items: center;
}
.logo > .logo-title {
  font-weight: 800;
  font-size: 14pt;
}
.navigation {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 1em;
}
</style>
