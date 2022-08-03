<script setup lang="ts">
  import UniButton from '../../components/UniButton.vue';
  import NussinovHeader from '../../../../common/NussinovHeader.vue';
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="nBody">
    <div class="nPlay">
      <div class="nTableFormula">
        <div class="nTable">
          <h3>Compare these values.</h3>
          <img class ="nImage" src="../../assets/table_help.png">
        </div>
        <div class="nFormula">
          <p>Remember that you need this: </p>
          <img class="nImage_formula" src="../../assets/nussinov-cases.png">
        </div>
      </div>
    </div>
    <div class="nButtons">
      <div class="nButton_Next">
       <UniButton class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Next'" :link="'../../pages/Levels/Level01FirstStep.html'"/>
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
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 3%;
 }
.nButtons {
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-top: 5%;
}
.nImage {
  height: 20em;
  width: 25em;
  align: left;
}
.nImage_formula {
  height: 11em;
  width: 40em;
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

</style>

