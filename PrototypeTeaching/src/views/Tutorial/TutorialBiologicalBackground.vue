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
      <p>
        To understand the nussinov algorithm, you need to know some things about RNA and their respectively secondary structures. 
        In case you are already familiar with this topic, click the button at the end of this page!
      </p>
      <p>
          Remember, DNA is a polymer made of two linked strands that wind around each other like a double helix.
          For now, the most important parts are the four bases, adenine, guanine, cytosine, and thymine. <br>
          RNA is closely related to DNA, but with some slight differences. It has only a single, helical strand of bases and contains the base uracil instead of thymine.
      </p>
      <p>
        So, what is it used for? <br>
        There are three types of RNA, which are all important in the synthesis of proteins. <br>
        The messenger RNA, short mRNA, carries the instructions from the DNA in the nucleus to the ribosomes in the cytoplasm. The ribosomes themselves
        are made up of around 50% of another type of RNA, the ribosomal RNA or rRNA. <br>
        At last, the protein synthesis can begin and the transfer RNA, or tRNA for short is responsible for carrying amino acids to the ribosome surface, linking
        them together after the instructions the mRNA gave and building the protein step by step.
      </p>
      <p>
        At last, you should know about the RNA molecule itself. <br>
        As said, the molecule is basically a linear sequence of nucleotides, which also makes up its primary structure. <br>
        The next step is a little more complicated. As most of you should know, each nucleobase has a complementary base with which it can
        form a pair, in fact, adenine always wants to bind to a uracil base and guanine to a cytosine base. <br>
        As DNA is double-stranded, all nucleobases are already bound, in a single-stranded RNA molecule a different path was taken.
        The RNA strand itself folds between complementary regions and this folding is called the secondary structure of the molecule. <br>
        Of cause it is highly unlikely that these folds will be a perfect match like in the DNA, and in reality, many different structures can be created
        like helices, bulges, loops and junctions.
      </p>
      <img class="nImage" src="../../assets/rna-structure-motifs.jpg">
      Great job reading everything! Now we can continue with the nussinov algorithm.
    </div>
    <!-- <NussinovButton text="Next &#x2192;" link="../../pages/Tutorial/TutorialStepperStartPage.html"></NussinovButton> -->
    <UniButton class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Next &#x2192;'" :link="'../../pages/Tutorial/TutorialStepperStartPage.html'"/>
  </div>
  
</template>

<style scoped>
  .nImage{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    mix-blend-mode: multiply;
  }

</style>