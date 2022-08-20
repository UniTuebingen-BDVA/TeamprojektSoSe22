<template>
  <div class="nav-button">
    <span>{{ name }}</span>
  </div>
</template>
<script setup>
const props = defineProps({
  name: String,
  link: String,
});
</script>
<style scoped>
.nav-button {
  padding: 0 1em 0 1em;
  font-size: 14pt;
  align-content: center;
  cursor: pointer;
}
.nav-button:hover {
  color: var(--uni-color-red);
}
</style>
