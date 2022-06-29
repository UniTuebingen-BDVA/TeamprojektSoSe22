<script setup>
import Highscore from './Highscore.vue';
import YoursFrame from './YoursFrame.vue';
import SolutionFrame from './SolutionFrame.vue';
import UniButton from '../UniButton.vue';
</script>



<template>
    <div class="EndScreen">
        <h2>Your solution matches </h2>
            <div class="accordance">...%</div> 
        <h2>with the algorithm.</h2>
        
    </div>

    
    
    <div class="frames">
        <div>
        <YoursFrame />
        <h2>Your solution</h2>
        </div>
        
        
        
        <div>
        <SolutionFrame />
        <h2>Nussinov Algorithm</h2>
        </div>
        
        
    
    </div>
    
    <Highscore />

    <div class="AbButton">
        <UniButton :primary-color="'red'" :filled="true" :text="'Retry?'" class="general-buttons" v-on:click="$emit('stateChange', false)"/>
    </div>
    
</template>




<style scoped>

.EndScreen{
    
    text-align: center;
    width: auto;
    justify-content: space-between;
}

.accordance{
    color: var(--uni-color-gold);
    font-size: 2.5em;
}



.general-buttons {
        height: 40px;
        width: 140px;
        margin-bottom: 20px;
    }

.AbButton{
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.frames{
    display: flex;
    justify-content: center;
}

h2{
    display: flex;
    justify-content: center;
    
    
}
    
</style>



