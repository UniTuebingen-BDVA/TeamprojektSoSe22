<script setup lang="ts">
  import NussinovButton from '/src/components/NussinovButton.vue';
  import NussinovHeader from '/src/components/NussinovHeader.vue';
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
    <img class="nImage" src="/src/assets/tutorial-sequence.PNG">
    <div class="nButton">
        <NussinovButton text="Retry?" link="./index_level.html"></NussinovButton>
    </div>
        
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

.nBody{
    display: flex;
    justify-content: space-between;
    font-family: 'Open Sans';
    flex-direction: column;
    margin-top: 5em;
    margin-left: 2em;
    align-items: center;
}

.nBox {
    background-color: white;
    width: 20em;
    height: 10em;
    box-shadow: 1em 1.5em 1.5em rgb(0, 0, 0, 0.2);
    border-radius: 1.5em;
    text-align: center;
    margin-top: 5%;   
}
.nImage {
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