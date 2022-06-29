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
        At last, and most importantly, you should know some things about the RNA molecule structure itself. <br>
        As said, the molecule is basically a linear sequence of its nucleotides, which also makes up its primary structure. <br>
        The next step is a little more complicated. Like in DNA, each nucleobase has a complementary base with which it can
        form a pair, in fact, adenine always wants to bind to a uracil base and guanine to a cytosine base. <br>
        As DNA is double-stranded, all nucleobases are already bound, but in a single-stranded RNA molecule this is not possible that easily.
        The RNA strand itself folds between complementary regions and this folding is called the secondary structure of the molecule. <br>
        Of course, it is highly unlikely that these folds will be a perfect match like in DNA, and in reality, many different structures can be found
        like helices, bulges, loops, and junctions.
      </p>
      <img class="nImage" src="../../assets/rna-structure-motifs.jpg">
      Great job reading everything! Now we can continue with the nussinov algorithm.
    </div>
    <UniButton class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Next &#x2192;'" :link="'../../pages/Tutorial/TutorialIntroductionPage.html'"/>
  </div>

</template>

<style scoped>
  .nImage{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    mix-blend-mode: multiply;
  }

</style>