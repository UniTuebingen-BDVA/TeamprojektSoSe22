<script setup lang="ts">
  import NussinovButton from '/src/components/NussinovButton.vue';
  import NussinovHeader from '/src/components/NussinovHeader.vue';
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="nBody">
    <div class="nPlay">
        <div class="nFormula">
            <p id="right">You did well! Your answer is correct. Keep going.</p>
            <h3>Step 2: Try to fill in the next two cells of the matrix.</h3>
            <img class ="nImage" src="/src/assets/table1.2.png">
        </div>
        <div class="nFormula">
            <p>Remember that you need this: </p>
            <img class="nImage_formula" src="/src/assets/formula.png">
        </div>
    </div>
    <div class="nButton">
        <div class="nButton_Help">
            <NussinovButton text="Need help?" link="./index_level_help.html"></NussinovButton>
        </div>
        <div class="nButton_Next">
        <NussinovButton text="Next" link="./index_level_wrong.html"></NussinovButton>
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
    margin-top: 3em;
    margin-left: 2em;
  }
  .nPlay {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 30em;
  }
  .nText{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    font-family: 'Open Sans';
    align: left;
    padding-left: 10em;
    letter-spacing: 0.3em;
    line-height: 5em;
  }
  .nText > p{
    font-size: 8em;
    font-weight: 100;
    color: lightgreen;
    align: right;
  }
  .nButton {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 30em;
  }
  .nButton_Next {
    margin-left: 50%;
    margin-top: 5em;
  }
  .nButton_Help {
    margin-top: 5em;
    margin-left: 0;
  }
  .nImage {
    height: 20em;
    width: 25em;
    align: left;
  }
  .nImage_formula {
    height: 13em;
    width: 35em;
    align: right;
  }
  .nFormula {
    display: flex;
    flex-direction: column;
    align-items: right;
  }
  #right {
      color: lightgreen;
      font-weight: bold;
      font-size: 1.5em;
  }

</style>