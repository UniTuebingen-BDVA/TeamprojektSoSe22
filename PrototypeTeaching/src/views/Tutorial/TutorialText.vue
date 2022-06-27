<script setup lang="ts">
  // import NussinovButton from '../../components/NussinovButton.vue';
  import UniButton from '../../components/UniButton.vue';
  import NussinovHeader from '../../components/NussinovHeader.vue';
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="tutorialBody">
    <!-- <NussinovButton text="Skip Tutorial" link="../../pages/Levels/LevelStartPage.html"></NussinovButton> -->
    <UniButton class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Skip Tutorial'" :link="'../../pages/Levels/LevelStartPage.html'"/>
    <div class="tutorialBox">
      <p>Nussinov is an algorithm.</p>
      <p>A very nice algorithm.</p>
      <p>You need this for computing the matrix</p>
      <img src="../../assets/nussinov-cases.PNG">
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    <!-- <NussinovButton text="Next &#x2192;" link="../../pages/Tutorial/TutorialStepperStartPage.html"></NussinovButton> -->
    <UniButton class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Next &#x2192;'" :link="'../../pages/Tutorial/TutorialStepperStartPage.html'"/>
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
</style>