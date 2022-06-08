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
      <NussinovButton text="Start" link=""></NussinovButton>
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
    font-size: 24px;
    font-weight: 100;
    color: #a51e37;
  }
  .nButton {
    margin-left: 650px;
    margin-top: 30px;
  }
  .nImage {
    height: 300px;
    width: 350px;
    align: left;
    margin-top: 20px; 
  }
  .structure{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
  }
  #border {
    background-color: lightgrey;
    width: 150px;
    height: 28px;
    text-align: center;
    border-radius: 10px;
    margin: 15px;
  }

</style>