<script setup lang="ts">
  import UniButtonLink from '../../components/UniButtonLink.vue';
  import NussinovHeader from '../../../../common/NussinovHeader.vue';
  import StartButton from '../../components/StartButton.vue';
  import { ref } from 'vue';
  import image_0 from '../../assets/nussinov-cases.png';
  import image_1 from '../../assets/nussinov-cases_1.jpg';
  import image_2 from '../../assets/nussinov-cases_2.jpg';
  import image_3 from '../../assets/nussinov-cases_3.jpg';
  import image_4 from '../../assets/nussinov-cases_4.jpg';

  function updateImage(id){
    switch (id) {
      case 1:
        document.getElementById('cases').src = image_1;
          break;
      case 2:
        document.getElementById('cases').src = image_2;
          break;
      case 3:
        document.getElementById('cases').src = image_3;
          break;
      case 4:
        document.getElementById('cases').src = image_4;
          break;
    }
  }
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="tutorialBody">
    <UniButtonLink
      class="teachingButton"
      :filled="false"
      :primary-color="'red'"
      :text="'Skip Tutorial'"
      :link="'../../pages/Levels/Start.html'"
    />
    <div class="tutorialBox">
      <p>Remember, you need this </p>
      <img id='cases' :src=image_0>
      <p>Now try it out yourself!</p>
      <StartButton :length = 6 :with-stepper="true" @update-image2="(i) => updateImage(i)"></StartButton>
      </div>
    <UniButtonLink class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Try it out!'" :link="'../../pages/Levels/Start.html'"/>
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
.arr {
  color: var(--uni-color-red);
  top: 0.6em;
  position: relative;
}
</style>