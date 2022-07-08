<script setup lang="ts">
  // import NussinovButton from '../../components/NussinovButton.vue';
  import UniButton from '../../components/UniButton.vue';
  import NussinovHeader from '../../components/NussinovHeader.vue';
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="nBody">
    <h1>Select your level:</h1>
    <div class="nText">
      <div class="nParagraph">
        <!-- <NussinovButton text="Level 1" link="../../pages/Levels/Level01StartPage.html"></NussinovButton> -->
        <UniButton class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Level1'" :link="'../../pages/Levels/Level01Start.html'"/>
        <p>Starter Level: short and easy structures. In this level you have a helper.</p>   
      </div>
      <div class="nParagraph">
        <!-- <NussinovButton text="Level 2" link=""></NussinovButton> -->
        <UniButton class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Level 2'"/>
        <p>Medium level: longer and more complex structures. In this level the helper helps less than in Level 1.</p> 
      </div>
      <div class="nParagraph">
        <!-- <NussinovButton text="Level 3" link=""></NussinovButton> -->
        <UniButton class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Level 3'"/>
        <p>Hard level: long and complex structures. In this level you have no helper.</p>   
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans'); /*May move all imports to central CSS file?*/
  .nBody{
    display: flex;
    justify-content: space-between;
    font-family: var(--uni-font);
    flex-direction: column;
    margin-top: 3em;
  }
  .nText{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    font-family: var(--uni-font);
    align-items: left;
    /* padding-left: 10em; */
    letter-spacing: 0.3em;
    line-height: 4em;
  }
  .nParagraph {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 25em;
    font-family: var(--uni-font);
    color: var(--uni-color-red);
    margin-top: 5em;
    letter-spacing: 0;
  }
  .nText > h1{
    color: var(--uni-color-black);
    font-size: 5em;
    font-weight: 100;
    margin-left: 2em;
  }
  h1 {
    margin-left: 1.5em;
  }
  .nText > p{
    font-size: 3em;
    font-weight: 100;
    color: var(--uni-color-red);
  }

</style>