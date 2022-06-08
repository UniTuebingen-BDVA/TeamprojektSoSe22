<script setup lang="ts">
  import NussinovButton from '/src/components/NussinovButton.vue';
  import NussinovHeader from '/src/components/NussinovHeader.vue';
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="nBody">
    <div class="nPlay">
      <div class="nFormula">
        <h3>Step 1: Try to fill in the first cell of the matrix.</h3>
        <img class ="nImage" src="/src/assets/table1.1.png">
      </div>
      <div class="nFormula">
        <p>Remember that you need this: </p>
        <img class="nImage_formula" src="/src/assets/formula.png">
      </div>
    </div>
    <div class="nButton">
      <div class="nButton_Help">
        <NussinovButton text="Need help?" link=""></NussinovButton>
      </div>
      <div class="nButton_Next">
      <NussinovButton text="Next" link=""></NussinovButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans'); /*May move all imports to central CSS file?*/
  .nBody{
    display: flex;
    justify-content: space-between;
    font-family: 'Open Sans';
    flex-direction: column;
    margin-top: 60px;
    margin-left: 42px;
  }
  .nPlay {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 500px;
  }
  .nText{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    font-family: 'Open Sans';
    align: left;
    padding-left: 75px;
    letter-spacing: 0.3em;
    line-height: 50px;
  }
  .nText > p{
    font-size: 30px;
    font-weight: 100;
    color: black;
    align: right;
  }
  .nButton {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 500px;
  }
  .nButton_Next {
    margin-left: 650px;
    margin-top: 150px;
  }
  .nButton_Help {
    margin-top: 150px;
    margin-left: 0;
  }
  .nImage {
    height: 300px;
    width: 350px;
    align: left;
  }
  .nImage_formula {
    height: 200px;
    width: 500px;
    align: right;
  }
  .nFormula {
    display: flex;
    flex-direction: column;
    align-items: right;
  }

</style>