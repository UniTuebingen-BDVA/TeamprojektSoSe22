<template>
    <div :class="getStyle(filled, primaryColor) +' button'" :href="link">
        {{text}}
    </div>
</template>
<script setup>
    const props = defineProps({
        filled: Boolean,
        primaryColor: String,
        text: String,
        link: String
    })
    function getStyle(filled, primaryColor){

        if(filled && primaryColor == "black"){
            return "filled-black";
        }

        if(!filled && primaryColor == "black"){
            return "inverted-black";
        }
    } 
</script>
<style scoped>
    .button {
        text-align: center;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 16px;
        font-weight: 700;
        transition: all .2s ease-in;
        cursor: pointer;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }

    .filled-black{
        background-color: var(--uni-color-black);
        color: white;
    }
    .filled-black:hover{
        background-color: var(--uni-color-black-hover);
        color: white;
    }

    .inverted-black {
        border-color: var(--uni-color-black);
        border-style: solid;
        border-width: 1px;
        color: var(--uni-color-black);
    }
    .inverted-black:hover {
        background-color: var(--uni-color-black);
        border: none;
        color: white;
    }
</style>