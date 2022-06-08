<template>
    <div class="nHeader">
        <a href="./index.html">Teaching Nussinov</a>
        <div class="nPages">
            <a href="">Teaching</a> <!-- Add Link here-->
            <a href="">Gaming</a> <!-- Add Link here -->
        </div>
    </div>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&display=swap');
    .nHeader{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: flex-start;
        background-color: #e3e3e3;
        height: 7.5%;
        align-items: center;
        font-family: 'Open Sans';
    }
    .nPages{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 20%;
    }
    .nHeader > a{
        width: 80%;
        margin-left: 2%;
        font-size: 2em;
        color: #434343;
        font-weight: 700;
        text-decoration: none;
    }
    .nPages > a{
        margin: 0 5%;
        padding: 10%;
        font-size: 1.5em;
        font-weight: 300;
        color: #444444;
        text-decoration: none;
    }
</style>
