<script setup lang="ts">
import UniButtonLink from "../../components/UniButtonLink.vue";
import NussinovHeader from "../../../../common/NussinovHeader.vue";
import StartButton from "../../components/StartButton.vue";
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="tutorialBody">
    <div class="tutorialBox">
      <h3>You chose: Expert</h3>
      <div class="structure">
        <p>Structure:</p>
        <p id="border">Random</p>
      </div>
      <p>Remember, you need this</p>
      <img src="../../assets/nussinov-cases.png" />

      <StartButton :length=8 :helper="false"></StartButton>
    </div>
    <UniButtonLink
      class="teachingButton leftButton"
      :filled="false"
      :primary-color="'red'"
      :text="'Return to Level Selector'"
      :link="'../../pages/Levels/LevelStart.html'"
    />
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
.leftButton {
  float: left !important;
}
.structure {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
#border {
  background-color: lightgrey;
  width: 10em;
  height: 2em;
  text-align: center;
  border-radius: 2em;
  margin: 3em;
}
img {
  mix-blend-mode: multiply;
  display: block;
  max-width: 65%;
  max-height: 25%;
  width: auto;
  height: auto;
  margin: auto;
  margin-bottom: 3em;
}
</style>
