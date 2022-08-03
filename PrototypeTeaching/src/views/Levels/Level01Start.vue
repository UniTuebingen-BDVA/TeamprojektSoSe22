<script setup lang="ts">
  import UniButtonLink from '../../components/UniButtonLink.vue';
  import NussinovHeader from '../../../../common/NussinovHeader.vue';
  import StartButton from '../../components/StartButton.vue';
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="tutorialBody">
    <div class="tutorialBox">
      <h3>You chose: Beginner</h3>
      <div class="structure">
      <p>Structure: </p>
        <p id="border">GACUC</p>
      </div>
      <p>Remember, you need this </p>
      <img src="../../assets/nussinov-cases.PNG">

      <StartButton :sequence="'GACUC'"></StartButton>
    </div>
    <!--<div class="flex">
        <UniButtonLink
          class="teachingButton"
          :filled ="false"
          :primary-color="'red'"
          :text="'Need help?'"
          :link="'../../pages/Levels/LevelHelp.html'"
        />
        <UniButtonLink
          class="teachingButton"
          :filled="false"
          :primary-color="'red'"
          :text="'Next &#x2192;'"
          :link="'../../pages/Levels/Level01FirstStep.html'"
        />
      </div>-->
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
  .structure{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
  }
  #border {
    background-color: lightgrey;
    width: 10em;
    height: 2em;
    text-align: center;
    border-radius: 2em;
    margin: 3em;
  }
  img {
    display: block;
    max-width: 65%;
    max-height: 25%;
    width: auto;
    height: auto;
    margin: auto;
    margin-bottom: 3em;
  }

</style>