<script setup lang="ts">
import UniButtonLink from "../../components/UniButtonLink.vue";
import NussinovHeader from "../../../../common/NussinovHeader.vue";
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="tutorialBody">
    <UniButtonLink
      class="teachingButton"
      :filled="false"
      :primary-color="'red'"
      :text="'Skip Tutorial'"
      :link="'../../pages/Levels/Start.html'"
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
        :link="'../../pages/Tutorial/NussinovRecursion.html'"
      />
    </div>
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
