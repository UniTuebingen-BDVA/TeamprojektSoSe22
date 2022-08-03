<script setup lang="ts">
  import UniButtonLink from '../../components/UniButtonLink.vue';
  import NussinovHeader from '../../../../common/NussinovHeader.vue';
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="tutorialBody">
    <UniButtonLink class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Skip Tutorial'" :link="'../../pages/Levels/LevelStart.html'"/>
    <div class="tutorialBox">
      <p>
        So, what is RNA used for? <br>
        Actually, there are three types of RNA, which have all different functions and structures, but are all important in the synthesis of proteins.
      </p>
      <ol>
        <li>The messenger RNA (mRNA) carries a copy of the genetic code from the DNA, which basically contains the instructions to build a protein.
        This copy is now brought to the ribosomes in the cytoplasm.</li>
        <li>The ribosomes themselves are made up of another type of RNA, the ribosomal RNA (rRNA). The ribosomes are composed of a large and small subunit,
        each of which is made up of its own specific rRNA molecules. These molecules act as the site of protein synthesis.</li>
        <li>The transfer RNA (tRNA) is an essential part of this process, and responsible for carrying amino acids to the ribosome surface. There it will be bound to the
        growing polypeptide chain, following the sequence given by the mRNA.</li>
      </ol>
    </div>
    <UniButtonLink class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Next &#x2192;'" :link="'../../pages/Tutorial/BioBackgroundRNA2.html'"/>
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