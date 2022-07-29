<script setup lang="ts">
  import UniButton from '../../components/UniButton.vue';
  import NussinovHeader from '../../components/NussinovHeader.vue';
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="tutorialBody">
    <UniButton class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Skip Tutorial'" :link="'../../pages/Levels/LevelStart.html'"/>
    <div class="tutorialBox">
      <p>Finished!</p>
      <img src="../../assets/tutorial-sequence.PNG">
      </div>
      <UniButton class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Next &#x2192;'" :link="'../../pages/Levels/LevelStart.html'"/>
  </div>
  
</template>

<style scoped>
    img, .nTable {
        display: block;
        max-width: 50%;
        max-height: 25%;
        width: auto;
        height: auto;
        margin: auto;
    }
    .nTable{
      max-width: 35%;
      max-height: 10%;
    }
</style>