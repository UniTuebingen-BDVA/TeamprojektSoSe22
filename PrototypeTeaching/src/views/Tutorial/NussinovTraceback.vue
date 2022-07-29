<script setup lang="ts">
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
      :link="'../../pages/Levels/LevelStart.html'"
    />
    <div class="tutorialBox">
      <h3>Traceback</h3>
      <p style="display: flex">
        For the Traceback, we have to start in the top right corner an go
        through the table.<br />
        We just go from one cell to the cell from where we got the score.<br />
        Every time we got the score from case 3, we pair the two bases.<br />
        If a bifurcation (case 4) occurs, just complete the traceback for both
        cells.
        <img
          class="centerImg"
          style="max-width: 12%"
          src="../../assets/TutorialMatrix_Traceback.gif"
        />
      </p>
      <p>
        To annotate base pairs one can use the
        <a href="https://www.google.com/search?q=dot%20bracket%20notation%20rna"
          >dot bracket notation.</a
        >
      </p>
      <p>For the example above, we receive this result.</p>
      <p>
        <img
          class="centerImg"
          src="../../assets/TutorialExample_Traceback.png"
        />
      </p>
    </div>
    <div class="flex">
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
        :link="'../../pages/Tutorial/NussinovStepperFirst.html'"
      />
    </div>
  </div>
</template>

<style scoped>
.centerImg {
  display: block;
  max-width: 60%;
  max-height: 25%;
  width: auto;
  height: auto;
  margin: auto;
}
</style>
