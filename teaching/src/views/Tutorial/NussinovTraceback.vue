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
      <h3>Traceback</h3>
      <p style="display: flex">
        For the Traceback, we have to start in the top right corner and go
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
      <p>Note that the minimal loop length is also an important parameter for 
      good secondary structure predictions because loops always have a 
      destabilizing effect on the structure whereas helicals have a stabilizing 
      effect.</p> <br>
      <p>On the next page you will find a stepper which shows you  how to fill the table. 
      If you don't want to see this you can click the Button "Try it out!" to skip this part.</p>
    </div>
    <div class="flex">
      <UniButtonLink
        class="teachingButton"
        :filled="false"
        :primary-color="'red'"
        :text="'&#8592; Back'"
        :link="'javascript:history.back()'"
      />
      <UniButtonLink
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
