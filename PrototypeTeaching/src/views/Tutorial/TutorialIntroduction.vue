<script setup lang="ts">
import NussinovButton from "../../components/NussinovButton.vue";
import NussinovHeader from "../../components/NussinovHeader.vue";
import UniButton from "../../components/UniButton.vue";
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
      <h3>Welcome to the Nussinov Tutorial:</h3>
      <p>
        Here you get a step-by-step explanation of the individual components of
        the Nussinov algorithm.
      </p>
      <p>
        If you already know the algorithm, just click on
        <a href="../../pages/Levels/LevelStartPage.html">Skip Tutorial</a> this
        will take you directly to the exercises.
      </p>
      <br />
      <p>
        The Nussinov is a fairly simple dynamic programming algorithm that, can
        determine the secondary structure of a given RNA.<br />
        The goal is to fill a dynamic programming table, which is used to
        determine the secondary structure.
      </p>
      <p>It consists of 3 main steps:</p>
      <div class="container">
        <ul class="ul_tut">
          <li class="li_tut">
            <a href="../../pages/Tutorial/TutorialInitializationPage.html"
              >The initialization</a
            ><br />
            <img
              src="../../assets/off-state-init.png"
              onmouseenter="this.src ='../../assets/TutorialMatrix_Initialisation.gif';"
              onmouseout="this.src = '../../assets/off-state-init.png';"
              alt="Here should be a matrix"
              width="200"
            />
          </li>
          <li class="li_tut">
            <a href="../../pages/Tutorial/TutorialRecursionPage.html"
              >The recursion</a
            ><br />
            <img
              src="../../assets/off-state-rec.png"
              onmouseenter="this.src ='../../assets/TutorialMatrix_Recursion.gif';"
              onmouseout="this.src = '../../assets/off-state-rec.png';"
              alt="Here should be a matrix"
              width="200"
            />
          </li>
          <li class="li_tut">
            <a href="../../pages/Tutorial/TutorialTracebackPage.html"
              >The traceback</a
            ><br />
            <img
              src="../../assets/off-state-trc.png"
              onmouseenter="this.src ='../../assets/TutorialMatrix_Traceback.gif';"
              onmouseout="this.src = '../../assets/off-state-trc.png';"
              alt="Here should be a matrix"
              width="200"
            />
          </li>
        </ul>
      </div>
    </div>
    <UniButton
      class="teachingButton"
      :filled="false"
      :primary-color="'red'"
      :text="'Next &#x2192;'"
      :link="'../../pages/Tutorial/TutorialInitializationPage.html'"
    />
  </div>
</template>

<style scoped></style>

<!--
Was ich alles machen muss:
1. Starter Page
Wilkommen beim Nussinov Tutorial:
Hier bekommst du Schritt für Schritt die einzlnen Komponenten des Nussinov Algorithmus erklärt.
Wenn du den Algorithmus bereits kennst, klicke einfach auf Skip.. so gelangst du direkt zu den Übungen.

Der Nussinov ist ein recht einfacher dynamischer programmier Algrithmus, der für eine gegebene Sequenz deren Secundärstruktur bestimmen kann.
Dabei besteht das Ziel darin, eine dynamische programmier Tabelle zu füllen, mithilfe deren man die Secundärstruktur bestimmt.

Er besteht aus 3 hauptschritten:
Der Inizialisierung
Der Recursion
Dem Traceback


-->