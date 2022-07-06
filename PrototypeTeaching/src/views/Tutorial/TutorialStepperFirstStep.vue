<script setup lang="ts">
  import UniButton from '../../components/UniButton.vue';
  import NussinovHeader from '../../components/NussinovHeader.vue';
  import NussinovTable from '@/components/NussinovTable.vue';
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="tutorialBody">
    <UniButton class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Skip Tutorial'" :link="'../../pages/Levels/LevelStartPage.html'"/>
    <div class="tutorialBox">
      <p>Remember, you need this </p>
      <img src="../../assets/nussinov-cases-highlight.PNG">
      <p>Now you can try it out with the sequence GCAGUG</p>

      <NussinovTable sequence="GCAGUG"></NussinovTable>
      
      </div>
    <UniButton class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Next &#x2192;'" :link="'../../pages/Tutorial/TutorialStepperEndPage.html'"/>
  </div>
  
</template>

<style scoped>
    img {
        display: block;
        max-width: 65%;
        max-height: 25%;
        width: auto;
        height: auto;
        margin: auto;
    }
    .arr{
        color: var(--uni-color-red);
        top: 0.6em;
        position: relative;
    }
</style>