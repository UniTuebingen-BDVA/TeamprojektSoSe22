<template>
    <div class="nText">
        <h1>Trage dich in der HighScore-Tabelle ein: </h1>

        <div class="nEintrag">
            <p class="nName">Name:</p>
            <input class="nInput" type="text">
            <button type="button" class="nButton">Senden</button>
        </div>

        <table class="nTabelle">
            <tr>
                <th>Name</th>
                <th>Übereinstimmung</th>
                <th>xx mehr Verbindungen</th>
            </tr>
            <tr>
                <td>a</td>
                <td>b</td>
                <td>c</td>
            </tr>
            <tr>
                <td>x</td>
                <td>y</td>
                <td>z</td>
            </tr>
        </table>

         <button type="button" class="nButton">Nochmal</button>


    </div>


</template>

<script></script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
    .nButton{
        background-color: #ffffff;
        width: auto;
        height: 40px;
        border-color: #a51e37;
        border-width: 2px;
        border-style: solid;
        color: #a51e37;
        font-family: 'Open Sans';
        align-self: baseline;
    }
    
    .nName{
        float: left;
    }

    table, th, td {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;
        margin-top: 20px;
        border: 1px solid black;
        border-collapse: collapse;
    }
    
    
</style>