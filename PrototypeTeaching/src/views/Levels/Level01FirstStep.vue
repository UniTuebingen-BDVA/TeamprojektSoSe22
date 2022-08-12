<script setup lang="ts">
  import UniButtonLink from '../../components/UniButtonLink.vue';
  import NussinovHeader from '../../../../common/NussinovHeader.vue';
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
        <UniButtonLink class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Need help?'" :link="'../../pages/Levels/LevelHelp.html'"/>
        <UniButtonLink class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Next'" :link="'../../pages/Levels/LevelCorrect.html'"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
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
.nImage_formula {
  height: 11em;
  width: 40em;
  align-self: flex-end;
  mix-blend-mode: multiply;
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