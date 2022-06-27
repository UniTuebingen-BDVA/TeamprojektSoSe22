<script setup lang="ts">
  // import NussinovButton from '../../components/NussinovButton.vue';
  import UniButton from '../../components/UniButton.vue';
  import NussinovHeader from '../../components/NussinovHeader.vue';
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="tutorialBody">
    <!-- <NussinovButton text="Skip Tutorial" link="../../pages/Levels/LevelStartPage.html"></NussinovButton> -->
    <UniButton class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Skip Tutorial'" :link="'../../pages/Levels/LevelStartPage.html'"/>
    <div class="tutorialBox">
      <p>Remember, you need this </p>
      <img src="../../assets/nussinov-cases-highlight.PNG">
      <p>Now you can try it out with the sequence GCAGUG</p>
      <table class="dpMatrix">
        <thead>
          <tr>
            <th>D</th>
            <th></th>
            <th>G1</th>
            <th>C2</th>
            <th>A3</th>
            <th>G4</th>
            <th>U5</th>
            <th>G6</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>G1</td>
            <td>0</td>
            <td>0 <span class="arr">&#x2193;</span></td>
            <td style="border: 2px solid #a51e37;"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>C2</td>
            <td></td>
            <td>0</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>A3</td>
            <td></td>
            <td></td>
            <td>0</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>G4</td>
            <td></td>
            <td></td>
            <td></td>
            <td>0</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>U5</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>0</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>G6</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>0</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      </div>
    <!-- <NussinovButton text="Next &#x2192;" link="../../pages/Tutorial/TutorialStepperEndPage.html"></NussinovButton>  -->
    <UniButton class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Next &#x2192;'" :link="'../../pages/Tutorial/TutorialStepperEndPage.html'"/>
  </div>
  
</template>

<style scoped>
    img {
        display: block;
        max-width: 65%;
        max-height: 25%;
        width: auto;
        height: auto;
        margin: auto;
    }
    .arr{
        color: var(--uni-color-red);
        top: 0.6em;
        position: relative;
    }
</style>