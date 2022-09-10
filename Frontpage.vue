<script setup lang="ts">
import UniButtonLink from "./teaching/src/components/UniButtonLink.vue";
import NussinovHeader from "./common/NussinovHeader.vue";
import RNAStructure from "./teaching/src/components/RNAStructure.vue";
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="nBody">
    <div class="nText">
      <h1>Welcome to <br><span>Teaching Nussinov</span></h1>
      <p>Learn the key ideas of dynamic programming algorithms <br> and how to use the Nussinov algorithm to correctly predict RNA structures</p><br>
      <div class="nButton">
        <UniButtonLink
          class="teachingButton"
          :filled="false"
          :primary-color="'red'"
          :text="'Start Tutorial'"
          :link="'./teaching/src/pages/Tutorial/BioBackgroundRNA1.html'"
        />
        <UniButtonLink
          class="teachingButton"
          :filled="false"
          :primary-color="'red'"
          :text="'Try the game'"
          :link="'./rna/game.html'"
        />
      </div>
    </div>
    <img class="nImage" src="./common/sars-cov-2-mrna-vaccine.png" />
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
.nBody {
  margin-top: 5%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.nImage {
  margin-right: 1.25%;
  max-width: 40%;
  min-width: 30%;
  width: auto;
  height: auto;
}

.nText {
  margin-top: 5%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  font-family: var(--uni-font);
  align-items: flex-start;
  width: 50%;
  height: 100%;
  padding-left: 10%;
  letter-spacing: 0.3em;
  line-height: 2.1875em;
}

.nText > h1 {
  color: #333333;
  font-size: 2.5em;
  font-weight: 100;
}
.nText > h1 > span {
  color: var(--uni-color-red);
  font-weight: 600;
}
.nText > p {
  font-size: 1.0625em;
  font-weight: 100;
  color: #999999;
}

.nButton {
  display: flex;
  letter-spacing: 0;
}
</style>