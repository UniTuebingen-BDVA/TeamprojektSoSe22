<script setup lang="ts">
  import NussinovButton from '/src/components/NussinovButton.vue';
  import NussinovHeader from '/src/components/NussinovHeader.vue';
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="nBody">
    <h1>Select your level:</h1>
    <div class="nText">
      <div class="nParagraph">
        <NussinovButton text="Level 1" link=""></NussinovButton> <!-- add link -->
        <p>Starter Level: short and easy structures. In this level you have a helper.</p>   
      </div>
      <div class="nParagraph">
        <NussinovButton text="Level 2" link=""></NussinovButton> 
        <p>Medium level: longer and more complex structures. In this level the helper helps less than in Level 1.</p> 
      </div>
      <div class="nParagraph">
        <NussinovButton text="Level 3" link=""></NussinovButton> 
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
    align-items: left;
    padding-left: 75px;
    letter-spacing: 0.3em;
    line-height: 50px;
  }
  .nParagraph {
    width: 350px;
    height: 200px;
    font-family: 'Open Sans';
    color: #a51e37;
  }
  .nText > h1{
    color: black;
    font-size: 46px;
    font-weight: 100;
  }
  .nText > p{
    font-size: 24px;
    font-weight: 100;
    color: #a51e37;
  }

</style>