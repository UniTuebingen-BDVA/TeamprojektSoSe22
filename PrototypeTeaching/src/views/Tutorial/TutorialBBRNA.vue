<script setup lang="ts">
  import UniButton from '../../components/UniButton.vue';
  import NussinovHeader from '../../components/NussinovHeader.vue';
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="tutorialBody">
    <UniButton class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Skip Tutorial'" :link="'../../pages/Levels/LevelStartPage.html'"/>
    <div class="tutorialBox">
      <p>
        Welcome to our little tutorial about RNA secondary structures and the nussinov algorithm! <br>
        Feel free to skip this part if you are already familiar with this topic.
      </p>
      <div class="twoColumns">
        <img class="nImage" src="../../assets/dna-vs-rna.jpg">
        <p>
          RNA, short for ribonucleic acid, is pretty similar to DNA. <br>
          DNA, the deoxyribonucleic acid, is a polymer made of two linked strands that wind around each other like a double helix.
          For now, the most important parts are the four nucleotides, called adenine, guanine, cytosine, and thymine, which also connect the two strands
          by hydrogen bonds. When we line these nucleobases into a sequence, we get a genetic code. This genetic code give the instructions on how
          to make a specific protein.<br>
          RNA on the other hand has only a single, helical strand and contains the nucleotide uracil instead of thymine. The other bases are staying the same.
        </p>
      </div>
    </div>
    <UniButton class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Next &#x2192;'" :link="'../../pages/Tutorial/TutorialBBRNATypesPage.html'"/>
  </div>
  
</template>

<style scoped>

  .twoColumns{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  .twoColumns > p{
    display: block;
    width: 50%;
  }
  .nImage{
    margin-left: auto;
    margin-right: auto;
    width: 45%;
    height: 45%;
    mix-blend-mode: multiply;
  }

</style>