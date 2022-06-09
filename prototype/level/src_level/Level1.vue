<!-- border anpassen -->
<script setup lang="ts">
  import NussinovButton from '/src/components/NussinovButton.vue';
  import NussinovHeader from '/src/components/NussinovHeader.vue';
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="nBody">
    <h3>You chose: Level 1</h3>
    <div class="structure">
     <p>Structure: </p>
      <p id="border">GUAAGAUC</p>
    </div>
    <img class ="nImage" src="/src/assets/table.png">
    <div class="nButton">
      <NussinovButton text="Start" link="./index_Level1_1.html"></NussinovButton>
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
    margin-top: 5em;
    margin-left: 2em;
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
    color: #a51e37;
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

</style>