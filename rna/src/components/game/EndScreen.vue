<template>
  <div class="game-frame">
    <div class="game">
      <RNAStructure
          :sequence="getSequence"
          :dotBracket="dotBracketStr"
          :secondaryStructure="true"
          class="rna-structure"/>
    </div>
  </div>
</template>

<script setup>
import RNAStructure from '../RNAStructure.vue';
import {meaningfulSeq} from '../../../../common/RNA_Generator';
import {calculate_nussinov} from '../../../../common/nussinov';

let getSequence = meaningfulSeq(10);
let dotBracket = ('.'.repeat(getSequence.length)).split('');
let dotBracketStr = ('.'.repeat(getSequence.length));
console.log(getSequence)
console.log(dotBracketStr)
</script>

<style scoped>
    .game-frame {
      height: 70vh;
      width: 100%;
      padding: 0 1em 0 1em;
      border-style: solid;
      border-color: var(--uni-color-gold);
      border-width: 3px;
      border-radius: 10px;
      background-color: var(--secondary-color);
      position: relative;
    }
    .game {
      height: 100%;
      width: 100%;
    }
    .help {
      height: 20px;
      position: absolute;
      top:0;
      right:0;
      cursor: pointer;
    }
    .help > img {
      height: 100%;
      object-fit: contain;
    }
    .rna-structure {
      display: flex;
      max-width: 100%;
      min-width: 30%;
      max-height: 100%;
      width: auto;
      height: auto;
    }
</style>



