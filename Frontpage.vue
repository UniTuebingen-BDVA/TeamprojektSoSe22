<script setup lang="ts">
  import UniButton from './PrototypeTeaching/src/components/UniButton.vue';
  import NussinovHeader from './common/NussinovHeader.vue';
  import RNAStructure from './PrototypeTeaching/src/components/RNAStructure.vue';
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="nBody">
    <div class="nText">
      <h1>Welcome to <br> Serious Game  for <span>Nussinov</span></h1>
      <p>Learn the key ideas of dynamic programming algorithms <br> and how to use the Nussinov algorithm predict correct RNA-structures</p><br>
      <div class="nButton">
        <UniButton class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Start Tutorial'" :link="'./PrototypeTeaching/src/pages/Tutorial/BioBackgroundRNA1.html'"/>
        <UniButton class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Try the game'" :link="'./rna/game.html'"/>
      </div>
    </div>
    <div class="nImage">
      <RNAStructure :length=12 :secondary-structure="true"></RNAStructure>
    </div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
  .nBody{
    margin-top: 5%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  .nImage{
    max-width: 40%;
    min-width: 30%;
    width: auto;
    height: auto;
  }
  
  .nText{
    margin-top: 5%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    font-family: var(--uni-font);
    align-items: flex-start;
    width: 50%;
    height: 100%;
    padding-left: 10%;
    letter-spacing: 0.3em;
    line-height: 2.1875em; /* 35px */
  }

  .nText > h1{
    color: #333333;
    font-size: 2.5em; /* 40px */
    font-weight: 100;
  }
  .nText > h1 > span{
    color: var(--uni-color-red);
    font-weight: 600;
  }
  .nText > p{
    font-size: 1.0625em; /* 17px */
    font-weight: 100;
    color: #999999;
  }

  .nButton{
    display: flex;
    letter-spacing: 0;
  }

</style>