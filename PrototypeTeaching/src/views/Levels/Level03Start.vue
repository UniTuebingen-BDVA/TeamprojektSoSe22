<script setup lang="ts">
  import UniButton from '../../components/UniButton.vue';
  import NussinovHeader from '../../components/NussinovHeader.vue';
  import StartButton from '../../components/StartButton.vue';
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="tutorialBody">
    <div class="tutorialBox">
      <h3>You chose: Expert</h3>
      <div class="structure">
      <p>Structure: </p>
        <p id="border">Random</p>
      </div>
      <p>Remember, you need this </p>
      <img src="../../assets/nussinov-cases.PNG">

      <StartButton :length=8></StartButton>
    </div>
    <!--<div class="flex">
        <UniButton
          class="teachingButton"
          :filled ="false"
          :primary-color="'red'"
          :text="'Need help?'"
          :link="'../../pages/Levels/LevelHelp.html'"
        />
        <UniButton
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