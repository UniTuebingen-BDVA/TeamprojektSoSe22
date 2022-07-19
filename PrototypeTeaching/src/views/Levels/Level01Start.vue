<script setup lang="ts">
  // import NussinovButton from '../../components/NussinovButton.vue';
  import UniButton from '../../components/UniButton.vue';
  import NussinovHeader from '../../components/NussinovHeader.vue';
  import NussinovTable from '@/components/NussinovTable.vue';
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="nBody">
    <h3>You chose: Level 1</h3>
    <div class="structure">
     <p>Structure: </p>
      <p id="border">GUAAGAUC</p>
    </div>
    <div class="table">
      <NussinovTable sequence="GUAAGAUC"></NussinovTable>
    </div>
    <div class="nButton">
      <!-- <NussinovButton text="Start" link="../../pages/Levels/Level01FirstStepPage.html"></NussinovButton> -->
      <UniButton class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Start'" :link="'../../pages/Levels/Level01FirstStep.html'"/>
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
    margin-top: 5em;
    margin-left: 2em;
  }
  .nButton {
    margin-left: 65%;
    
  }
  .nImage {
    height: 20em;
    width: 25em;
    align: left;
    margin-top: 1em; 
  }
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

  .table {
    align-self: flex-start;
  }

</style>