<script setup>
import Highscore from './Highscore.vue';
import YoursFrame from './YoursFrame.vue';
import SolutionFrame from './SolutionFrame.vue';
import UniButton from '../UniButton.vue';
</script>



<template>
    <div class="EndScreen">
        <p>Deine Lösung stimmt zu xx% mit der Vorhersage überein!</p>
        <p>Du konntest sogar xx Verbindungen mehr finden</p>
    </div>

    
    
    <div class="frames">
        <div>
        <YoursFrame />
        <p>Deine Lösung</p>
        </div>
        
        
        
        <div>
        <SolutionFrame />
        <p>Nussinov Algorithmus</p>
        </div>
        
        
    
    </div>
    
    <Highscore />

    <div class="AbButton">
        <UniButton :primary-color="'black'" :filled="true" :text="'Nochmal'" class="general-buttons" v-on:click="$emit('stateChange', false)"/>
    </div>
    
</template>




<style scoped>

.EndScreen{
    font-weight: 800;
    font-size: 14pt;
    text-align: center;
    width: auto;
}

.general-buttons {
        height: 40px;
        width: 140px;
        margin-bottom: 20px;
    }

.AbButton{
    display: flex;
    justify-content: center;
}

.frames{
    display: flex;
    justify-content: center;
}

p{
    display: flex;
    justify-content: center;
    font-weight: 800;
    font-size: 14pt;
}
    
</style>



