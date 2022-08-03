<script setup lang="ts">
import NussinovHeader from "../../../../common/NussinovHeader.vue";
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
      <h3>Recursion</h3>

      <p style="display: flex">
        Now we want to fill the upper right half of the table.<br />
        To do this, we look at each cell individually and go through them in a
        defined order as shown in the example.
        <img
          class="centerImg"
          style="max-width: 12%"
          src="../../assets/TutorialMatrix_Recursion.gif"
        />
      </p>

      <p>To get a cell's score, we need to consider four different cases.</p>
      <p><img class="centerImg" src="../../assets/Recursion_Cases.png" /></p>
      <ol>
        <li>we add an unpaired base (i) to the beginning of the structure.</li>
        <li>we add an unpaired base (j) to the end of the structure.</li>
        <li>
          we pair the bases (i,j) and add them to the structure. In this case,
          the score is increased by 1.<br />
          Pairs are formed between canonical base pairs: (A, U) (G, C) and (G,
          U)
        </li>
        <li>
          we combine two optimal substructures that we already know from the
          previous calculations.
        </li>
      </ol>
      <p>
        For each cell we calculate we have to check all 4 cases and look for the
        case that gives us the maximum score
      </p>
      <p>
        In addition, we have to remember how we got the score for each cell.
        This is important for the Traceback. If there are more than one maxima,
        you can either choose one ore try to remember all of them. The Nussinov
        algorithem computes a set of optimal structures
      </p>
      <br />
      <p><img class="centerImg" src="../../assets/Recursion_formula.png" /></p>
      <p>Let's go through each case and see how this looks on an example.</p>
      <p>Given the Sequence ACCUGGA we now compute the score of Ɣ(2,6)</p>
      <p>We first look only at the first 3 cases</p>

      <br />

      <div class="parent">
        <img
          class="bsp"
          src="../../assets/TutorialExampleMatrix_Case1-3_v2.png"
        />

        <ul>
          <li style="color: green">Case1: Ɣ(i + 1, j) = Ɣ(3,6) = 1</li>
          <li style="color: deepskyblue">Case2: Ɣ(i, j - 1) = Ɣ(2,5) = 1</li>
          <li style="color: darkred">
            Case3: Ɣ( i + 1, j - 1) + δ(i,j) = Ɣ(3,5) + δ(2,6) = 1 + 1 = 2
          </li>
        </ul>
      </div>

      <br />

      <p>Now we compute case 4 (bifurcation):</p>
      <p>
        Case 4 is a special case because it includes a additional variable k
        which runs between i and j.
      </p>
      <p>So for cell Ɣ(2,6) we have a k 3, 4 and 5</p>
      <p>Thats why we have to compute multiple scores for this case.</p>

      <br />

      <div class="parent">
        <img class="bsp" src="../../assets/TutorialExampleMatrix_Case4.png" />

        <ul>
          <li style="color: green">
            Ɣ(i, k1) + Ɣ(k1+1, j)= Ɣ(2,3) Ɣ(4, 6)= 0 + 1
          </li>
          <li style="color: deepskyblue">
            Ɣ(i, k2) + Ɣ(k2+1, j)= Ɣ(2,4) Ɣ(5, 6)= 1 + 0
          </li>
          <li style="color: darkred">
            Ɣ(i, k3) + Ɣ(k3+1, j)= Ɣ(2,5) Ɣ(6, 6)= 1 + 0
          </li>
        </ul>
      </div>

      <br />

      <p>In our example, case 3 got us the maximum score of 2.</p>
      <br />
      <p>We have to repeat this step until we reach the upper right corner.</p>
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
        :link="'../../pages/Tutorial/NussinovTraceback.html'"
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

.bsp {
  display: inline-block;
  max-width: 25%;
  max-height: 25%;
  width: auto;
  height: auto;
  margin: auto;
}

@media (min-width: 768px) {
  .parent {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    width: 80%;
  }
}

li {
  padding: 0.5em;
}
</style>