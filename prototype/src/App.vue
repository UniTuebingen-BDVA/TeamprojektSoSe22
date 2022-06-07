<script setup lang="ts">
  import NussinovButton from './components/NussinovButton.vue';
  import NussinovHeader from './components/NussinovHeader.vue';
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="nBody">
    <div class="nText">
      <h1>Welcome to <br> Serious Game  for <span>Nussinov</span></h1>
      <p>Learn the key ideas of dynamic programming algorithms <br> and how to use the Nussinov algorithm predict correct RNA-structures</p><br>
      <NussinovButton text="Start Tutorial" link=""></NussinovButton> <!-- add link -->
    </div>
    <img class = "nImage" src="./assets/rna-example.png">
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans'); /*May move all imports to central CSS file?*/
  .nBody{
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
  }

  .nImage{
    width: 35%;
    position: fixed;
    right: 0px;
  }
  
  .nText{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    font-family: 'Open Sans';
    align-items: left;
    width: 50%;
    height: 100%;
    position: absolute;
    left: 0px;
    padding-left: 75px;
    letter-spacing: 0.3em;
    line-height: 35px;
  }

  .nText > h1{
    color: #333333;
    font-size: 40px;
    font-weight: 100;
  }
  .nText > h1 > span{
    color: #a51e37;
    font-weight: 600;
  }
  .nText > p{
    font-size: 17px;
    font-weight: 100;
    color: #999999;
  }
</style>