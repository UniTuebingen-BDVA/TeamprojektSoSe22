<script setup lang="ts">
  // import NussinovButton from '../../components/NussinovButton.vue';
  import UniButton from '../../components/UniButton.vue';
  import NussinovHeader from '../../components/NussinovHeader.vue';
  import NussinovTable from '../../components/NussinovTable.vue';
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="nBody">
    <div class="nPlay">
      <div class="nTableFormula">
        <div class="nTable">
          <h3>Step 1: Try to fill in the first cell of the matrix.</h3>
          <NussinovTable sequence="GUAAGAUC"></NussinovTable>
        </div>
        <div class="nFormula">
          <p>Remember that you need this:</p>
          <img class="nImage_formula" src="../../assets/nussinov-cases.png">
        </div>
      </div>
      <div class="nButtons">
        <!-- <NussinovButton text="Need help?" link="../../pages/Levels/LevelHelpPage.html"></NussinovButton> -->
        <UniButton class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Need help?'" :link="'../../pages/Levels/LevelHelp.html'"/>
        <!-- <NussinovButton text="Next" link="../../pages/Levels/LevelCorrectPage.html"></NussinovButton> -->
        <UniButton class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Next'" :link="'../../pages/Levels/LevelCorrect.html'"/>
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
  margin-left: 2em;
}
.nPlay {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: flex-start;
} 
.nTableFormula {
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 3%;
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
  align-self: flex-start;
}
.nImage_formula {
  height: 11em;
  width: 40em;
  align-self: flex-end;
}
.nFormula {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: baseline;
}
.nTable {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

</style>