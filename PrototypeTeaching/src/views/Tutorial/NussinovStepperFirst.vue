<script setup lang="ts">
  import UniButtonLink from '../../components/UniButtonLink.vue';
  import NussinovHeader from '../../../../common/NussinovHeader.vue';
  import StartButton from '../../components/StartButton.vue';
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="tutorialBody">
    <UniButtonLink class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Skip Tutorial'" :link="'../../pages/Levels/LevelStart.html'"/>
    <div class="tutorialBox">
      <p>Remember, you need this </p>
      <img src="../../assets/nussinov-cases_colored.png">
      <p>Now try it out yourself!</p>
      <StartButton :length = 6></StartButton>
      </div>
    <UniButtonLink class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Try it out!'" :link="'../../pages/Levels/LevelStart.html'"/>
  </div>
  
</template>

<style scoped>
    img {
        mix-blend-mode: multiply;
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