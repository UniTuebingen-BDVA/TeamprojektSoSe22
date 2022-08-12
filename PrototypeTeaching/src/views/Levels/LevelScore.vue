<script setup lang="ts">
  import UniButtonLink from '../../components/UniButtonLink.vue';
  import NussinovHeader from '../../../../common/NussinovHeader.vue';
  import RNAStructure from '../../components/RNAStructure.vue';
</script>

<template>
    <NussinovHeader></NussinovHeader>
    <div class="nBody">
        <div class="nBox">
            <p>You did well!</p>
            <p>You got 90% correct!</p>
            <div class="border">
                <p id="border"></p>
                <p id="border1"></p>
            </div> 
        </div>
    <RNAStructure class="rnaBox" :secondary-structure="true" :sequence="'GCAGUG'" :dot-bracket="'.((.))'"></RNAStructure>
    <div class="nButton">
       <UniButtonLink class="teachingButton" :filled ="false" :primary-color="'red'" :text="'Retry?'" :link="'../../pages/Levels/LevelStart.html'"/>
    </div>
        
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
.rnaBox{
    width: 30%;
}

.nBody{
    display: flex;
    justify-content: space-between;
    font-family: var(--uni-font);
    flex-direction: column;
    margin-top: 5em;
    margin-left: 2em;
    align-items: center;
}
.nBox {
    background-color: var(--uni-color-white);
    width: 20em;
    height: 10em;
    box-shadow: 1em 1.5em 1.5em rgb(0, 0, 0, 0.2);
    border-radius: 1.5em;
    text-align: center;
    margin-top: 5%;   
}
.nImage {
    align-items: right;
    height: 10em;
    width: 15em;
    margin-top: 5%;
    margin-bottom: 5%;
}
.nButton {
    margin-left: 0;
}
.border {
    margin-left: 3em;
}
#border {
    background-color: lightgrey;
    border-radius: 2em;
    height: 2em;
    width: 15em;
    position: absolute;
}
#border1 {
    background-color: lightgreen;
    border-radius: 2em;
    height: 2em;
    width: 12em;
    position: absolute;
}
</style>