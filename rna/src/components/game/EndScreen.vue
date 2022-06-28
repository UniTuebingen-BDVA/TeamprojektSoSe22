<script setup>
import Highscore from './Highscore.vue';
import YoursFrame from './YoursFrame.vue';
import SolutionFrame from './SolutionFrame.vue';
import UniButton from '../UniButton.vue';
</script>



<template>
    <div class="EndScreen">
        <p>Your solution matches </p>
            <div class="accordance">...%</div> 
        <p>with the algorithm.</p>
        
    </div>

    
    
    <div class="frames">
        <div>
        <YoursFrame />
        <p>Your solution</p>
        </div>
        
        
        
        <div>
        <SolutionFrame />
        <p>Nussinov Algorithm</p>
        </div>
        
        
    
    </div>
    
    <Highscore />

    <div class="AbButton">
        <UniButton :primary-color="'red'" :filled="true" :text="'Again'" class="general-buttons" v-on:click="$emit('stateChange', false)"/>
    </div>
    
</template>




<style scoped>

.EndScreen{
    font-weight: 800;
    font-size: 20pt;
    text-align: center;
    width: auto;
    justify-content: space-between;
}

.accordance{
    color: var(--uni-color-gold);
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

p{
    display: flex;
    justify-content: center;
    font-weight: 800;
    font-size: 16pt;
}
    
</style>



