<script setup lang="ts">
import NussinovButton from "../../components/NussinovButton.vue";
import UniButton from "../../components/UniButton.vue";
import NussinovHeader from "../../components/NussinovHeader.vue";
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="tutorialBody">
    <UniButton
      class="teachingButton"
      :filled="false"
      :primary-color="'red'"
      :text="'Skip Tutorial'"
      :link="'../../pages/Levels/LevelStartPage.html'"
    />
    <div class="tutorialBox">
      <h3>Initialization</h3>
      <p>
        The first step is to create a table with the number of rows and columns
        equal to the length q of the RNA sequence.
      </p>
      <p>
        Then the cells (i,i) for i=1 to q and (i,i-1) for i=2 to q are filled
        with zeros.
      </p>
      <p><img src="../../assets/Initialization_colored.png" /></p>
      <p>With the RNA <b>AUGAC</b> it would look like this.</p>
      <p><img src="../../assets/TutorialMatrix_Initialisation_real.gif" /></p>
    </div>
    <!--<NussinovButton text="Next &#x2192;" link="../../pages/Tutorial/TutorialRecursionPage.html"></NussinovButton>-->
    <!--<NussinovButton text="Back &#x2192;" link="javascript:history.back()"></NussinovButton>-->
    <UniButton
      class="teachingButton"
      :filled="false"
      :primary-color="'red'"
      :text="'&#8592; Back'"
      :link="'javascript:history.back()'"
    />
    <UniButton
      class="teachingButton"
      :filled="false"
      :primary-color="'red'"
      :text="'Next &#x2192;'"
      :link="'../../pages/Tutorial/TutorialRecursionPage.html'"
    />
  </div>
</template>

<style scoped>
img {
  display: block;
  max-width: 50%;
  max-height: 25%;
  width: auto;
  height: auto;
  margin: auto;
}
</style>

<!--
 Der este Schritt besteht darin, eine Tabelle zu erstellen, wobei die Anzahl der Reihen und Spalten gleich der Länge q der RNA Sequenz sein sollte.
 Anschließend werden die Zellen (i,i) für i = 1 bis q und (i, i-1) für i = 2 bis q, mit Nullen gefüllt.
 Mit der RNA AUGAC würde dies so aussehen.

-->