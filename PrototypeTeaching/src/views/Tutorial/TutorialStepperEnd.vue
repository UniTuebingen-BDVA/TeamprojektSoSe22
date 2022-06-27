<script setup lang="ts">
  // import NussinovButton from '../../components/NussinovButton.vue';
  import UniButton from '../../components/UniButton.vue';
  import NussinovHeader from '../../components/NussinovHeader.vue';
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="tutorialBody">
    <!-- <NussinovButton text="Skip Tutorial" link="../../pages/Levels/LevelStartPage.html"></NussinovButton> -->
    <UniButton :filled ="true" :primary-color="'red'" :text="'Skip Tutorial'" :link="'../../pages/Levels/LevelStartPage.html'"/>
    <div class="tutorialBox">
      <p>Remember, you need this </p>
      <img src="../../assets/nussinov-cases-highlight.PNG">
      <p>Now you can try it out with the sequence GCAGUG</p>
      <img class="nTable" src="../../assets/tutorial-table-end.JPG">
      <p>Finished!</p>
      <img src="../../assets/tutorial-sequence.PNG">
      </div>
      <!-- <NussinovButton text="Next &#x2192;" link="../../pages/Levels/LevelStartPage.html"></NussinovButton>  -->
      <UniButton class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Next &#x2192;'" :link="'../../pages/Levels/LevelStartPage.html'"/>
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