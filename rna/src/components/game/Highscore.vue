<script setup>
    import UniButton from '../UniButton.vue';
</script>

<template>
    <div class="nText">
        <h1>Trage dich in der HighScore-Tabelle ein: </h1>
    </div>

        <div class="nEintrag">
    
            <input class="nInput" type="text" placeholder="Dein Name">
            <UniButton class="general-buttons" :primary-color="'black'" :filled="true" :text="'Senden'"/>
        </div>


        <div class="highscore">

            <table>

                HighScore-Tabelle

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
        background-color: rgb(226, 229, 230);
        border-style: solid;
        border-width: 1px;
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
        background-color: rgb(226, 229, 230);
        border: 2px solid rgb(50,65,75);;
        border-radius: 2px;
    }

    .general-buttons {
        height: 40px;
        width: 140px;
    }
    
    
    
</style>