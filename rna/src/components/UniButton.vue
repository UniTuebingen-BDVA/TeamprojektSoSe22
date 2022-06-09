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
        if(filled && primaryColor == "red"){
            return "filled-red";
        }
        if(filled && primaryColor == "gold"){
            return "filled-gold";
        }
        if(filled && primaryColor == "black"){
            return "filled-black";
        }
        if(!filled && primaryColor == "red"){
            return "inverted-red";
        }
        if(!filled && primaryColor == "gold"){
            return "iverted-gold";
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
    .filled-red{
        background-color: var(--uni-color-red);
        color: white;
    }
    .filled-red:hover{
        background-color: var(--uni-color-red-hover);
        color: white;
    }
    .filled-gold{
        background-color: var(--uni-color-gold);
        color: white;
    }
    .filled-gold:hover{
        background-color: var(--uni-color-gold-hover);
        color: white;
    }
    .filled-black{
        background-color: var(--uni-color-black);
        color: white;
    }
    .filled-black:hover{
        background-color: var(--uni-color-black-hover);
        color: white;
    }
    .inverted-red {
        border-color: var(--uni-color-red);
        border-style: solid;
        border-width: 1px;
        color: var(--uni-color-red);
    }
    .inverted-red:hover {
        background-color: var(--uni-color-red);
        border: none;
        color: white;
    }
    .inverted-gold {
        border-color: var(--uni-color-gold);
        border-style: solid;
        border-width: 1px;
        color: var(--uni-color-gold);
    }
    .inverted-gold:hover {
        background-color: var(--uni-color-gold);
        border: none;
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