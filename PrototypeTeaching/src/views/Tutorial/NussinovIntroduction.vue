<script setup lang="ts">
import NussinovHeader from "../../../../common/NussinovHeader.vue";
import UniButtonLink from "../../components/UniButtonLink.vue";
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="tutorialBody">
    <UniButtonLink
      class="teachingButton"
      :filled="false"
      :primary-color="'red'"
      :text="'Skip Tutorial'"
      :link="'../../pages/Levels/LevelStart.html'"
    />
    <div class="tutorialBox">
      <h3>Welcome to the Nussinov Tutorial:</h3>
      <p>
        Here you get a step-by-step explanation of the individual components of
        the Nussinov algorithm.
      </p>
      <p>
        If you already know the algorithm, just click on Skip Tutorial, as this
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
            <a href="../../pages/Tutorial/NussinovInitialization.html"
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
            <a href="../../pages/Tutorial/NussinovRecursion.html"
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
            <a href="../../pages/Tutorial/NussinovTraceback.html"
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
    <UniButtonLink
      class="teachingButton"
      :filled="false"
      :primary-color="'red'"
      :text="'Next &#x2192;'"
      :link="'../../pages/Tutorial/NussinovInitialization.html'"
    />
  </div>
</template>

<style scoped></style>