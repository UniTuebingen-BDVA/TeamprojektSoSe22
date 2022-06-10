<script setup>
import Highscore from './Highscore.vue';
import YoursFrame from './YoursFrame.vue';
import SolutionFrame from './SolutionFrame.vue';

</script>



<template>
    <div class="EndScreen">
        <p>Deine Lösung stimmt zu xx% mit der Vorhersage überein!</p>
        <p>Du konntest sogar xx Verbindungen mehr finden</p>
    </div>

    
    
    <div class="frames">
        <YoursFrame />
        <SolutionFrame />
    
    </div>
    
    <Highscore />
    
</template>




<style scoped>

.EndScreen{
    font-weight: 800;
    font-size: 14pt;
    text-align: center;
    border: double;
    border-color: var(--uni-color-gold);
}

.frames{
    display: flex;
    justify-content: center;
}
    
</style>



