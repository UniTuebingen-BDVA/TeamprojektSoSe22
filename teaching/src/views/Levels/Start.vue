<script setup lang="ts">
import UniButtonLink from "../../components/UniButtonLink.vue";
import NussinovHeader from "../../../../common/NussinovHeader.vue";
</script>

<template>
  <NussinovHeader></NussinovHeader>
  <div class="nBody">
    <h1>Select your level:</h1>
    <div class="nText">
      <div class="nParagraph">
        <UniButtonLink
          class="teachingButton"
          :filled="false"
          :primary-color="'red'"
          :text="'Beginner'"
          :link="'../../pages/Levels/Level1.html'"
        />
        <p>
          Starter Level: short and easy structures.  <br>
          In this level you have a
          helper.
        </p>
      </div>
      <div class="nParagraph">
        <UniButtonLink
          class="teachingButton"
          :filled="false"
          :primary-color="'red'"
          :text="'Intermediate'"
          :link="'../../pages/Levels/Level2.html'"
        />
        <p>
          Medium level: longer and more complex structures. You still have a
          helper.
        </p>
      </div>
      <div class="nParagraph">
        <UniButtonLink
          class="teachingButton"
          :filled="false"
          :primary-color="'red'"
          :text="'Expert'"
          :link="'../../pages/Levels/Level3.html'"
        />
        <p>
          Hard level: long and complex structures. <br>
          In this level you have no
          helper.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
.nBody {
  display: flex;
  justify-content: space-between;
  font-family: var(--uni-font);
  flex-direction: column;
  margin-top: 5em;
}
.nText {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  font-family: var(--uni-font);
  align-items: left;
  letter-spacing: 0.3em;
  line-height: 4em;
}
.nParagraph {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 25em;
  font-family: var(--uni-font);
  color: var(--uni-color-red);
  margin-top: 5em;
  letter-spacing: 0;
}
.nText > h1 {
  color: var(--uni-color-black);
  font-size: 5em;
  font-weight: 100;
  margin-left: 2em;
}
h1 {
  margin-left: 1.5em;
}
.nText > p {
  font-size: 3em;
  font-weight: 100;
  color: var(--uni-color-red);
}
</style>
