<script setup>
    import UniButton from '../UniButton.vue';
</script>

<template>
    <div class="nText">
        <h1>Subscribe to the HighScore table: </h1>
    </div>

        <div class="nEintrag">
    
            <input class="nInput" type="text" placeholder="your name">
            <UniButton class="general-buttons" :primary-color="'red'" :filled="false" :text="'Send'"/>
        </div>


        <div class="highscore">
            
            <h1>HighScore</h1>
            
            
            <table>

                

            </table>

        </div>

</template>


<style scoped>
    
    table, th, td {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;
        margin-top: 20px;
        border: 1px solid black;
        border-radius: 4px;
        border-collapse: collapse;
        font-weight: 800;
        font-size: 14pt;
    }

    .highscore{
        width: 600px;
        height: 350px;
        background-color: #f3f3f3;
        border-style: solid;
        border-width: 3px;
        border-radius: 10px;
        border-color: var(--uni-color-gold);
        margin: auto;
        padding: 10px;
        overflow: scroll;
        margin-top: 20px;
    }

    .name{
        font-weight: 800;
        font-size: 14pt;
        margin-right: 10px;
        width: 10%;
        height: 35px;
        text-align: left;
    }

    h1{
        font-weight: 800;
        font-size: 16pt;
        text-align: center;
    }

    .nEintrag{
        display: flex;
        justify-content: center;
        margin-right: 5px;
    }

    .AbButton{
        display: flex;
        justify-content: center;
    }

    .nInput{
        margin-right: 10px;
        width: 10%;
        height: 35px;
        background-color: #f3f3f3;
        border-color: var(--uni-color-black);
        border-style: solid;
        border-width: 2px;
        border-radius: 10px;
    }

    .general-buttons {
        height: 40px;
        width: 140px;
    }
    
    
    
</style>