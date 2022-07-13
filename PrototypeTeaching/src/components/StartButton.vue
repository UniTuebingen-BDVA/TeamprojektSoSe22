<script setup lang="ts">
    import NussinovTable from "./NussinovTable.vue";
    import { ref} from 'vue'
    const probs = defineProps({
        text: String,
        length: {
            type: Number,
            default: 5
        }
    })
    const start = ref(false);
</script>

<template>
    <button @click="start = !start" type="button" class="nButton">{{text}}</button>
    <div v-if="start">Hi</div> <!--Works-->
    <NussinovTable v-if="start" sequence="AGGA" ></NussinovTable> <!--Doesn't work-->
    <div v-if="start"><NussinovTable sequence="AGGA" ></NussinovTable></div> <!--Doesn't work-->
    
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    .nButton{
        text-align: center;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 20px;
        font-weight: 550;
        transition: color .3s/* all .2s ease-in */;
        cursor: pointer;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        background-color: var(--uni-color-red);
        color: white;
    }
    .nButton:hover{
        background-color: var(--uni-color-red-hover);
        color: white;
    }
</style>
