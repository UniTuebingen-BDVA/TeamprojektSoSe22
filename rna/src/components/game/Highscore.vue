<script setup>
    import GeneralButton from '../GeneralButton.vue';
</script>

<template>
    <div class="nText">
        <h1>Trage dich in der HighScore-Tabelle ein: </h1>
    </div>

        <div class="nEintrag">
            <p>Name:</p>
            <input class="nInput" type="text">
            <GeneralButton class="general-buttons" :primary-color="'black'" :filled="true" :text="'Abgeben'"/>
        </div>

        <table class="nTabelle">
            <tr>
                <th>Name</th>
                <th>Übereinstimmung</th>
                <th>xx mehr Verbindungen</th>
            </tr>
            <tr>
                <td>    </td>
                <td>    </td>
                <td>    </td>
            </tr>
            <tr>
                <td>    </td>
                <td>    </td>
                <td>    </td>
            </tr>
        </table>

        
        <div class="AbButton">
        <GeneralButton class="general-buttons" :primary-color="'black'" :filled="true" :text="'Nochmal'"/>
        </div>


    


</template>


<style scoped>
    .general-buttons {
        height: 40px;
        width: 140px

    }

    table, th, td {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;
        margin-top: 20px;
        border: 1px solid black;
        border-collapse: collapse;
        font-weight: 800;
        font-size: 14pt;
    }

    p{
        font-weight: 800;
        font-size: 14pt;
    }

    h1{
        font-weight: 800;
        font-size: 16pt;
        text-align: center;
    }

    .nEintrag{
        display: flex;
        justify-content: center;
        padding: 2em 1em 2em 1em;
    }
    .AbButton{
        display: flex;
        justify-content: center;
    }
    
    
    
</style>