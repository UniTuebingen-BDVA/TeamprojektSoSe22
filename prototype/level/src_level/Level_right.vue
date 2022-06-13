<script setup lang="ts">
  import NussinovButton from '/src/components/NussinovButton.vue';
  import NussinovHeader from '/src/components/NussinovHeader.vue';
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="nBody">
    <div class="nPlay">
      <p id="right">You did well! Your answer is correct. Keep going.</p>
      <div class="nTableFormula">
        <div class="nTable">
          <h3>Step 2: Try to fill in the next two cells of the matrix.</h3>
          <img class ="nImage" src="/src/assets/table1.2.png">
        </div>
        <div class="nFormula">
          <p>Remember that you need this:</p>
          <img class="nImage_formula" src="/src/assets/formula.png">
        </div>
      </div>
      <div class="nButtons">
        <NussinovButton text="Need help?" link="./index_level_help.html"></NussinovButton>
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
  align-items: stretch;
  flex-direction: column;
  justify-content: flex-start;
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
.nTableFormula {
  display:flex;
  flex-direction: row;
  justify-content: space-around;
 }
.nText > p{
  font-size: 8em;
  font-weight: 100;
  color: lightgreen;
  align: right;
}
.nButtons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5%;
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
.nTable {
  display: flex;
  flex-direction: column;
  align-items: left;
}
#right {
  color: lightgreen;
  font-weight: bold;
  font-size: 1.5em;
}

</style>