<template>
    <div class="nHeader">
        <a href="./index.html">Teaching Nussinov</a> <!-- Links to front page -->
        <div class="nPages">
            <a href="">Teaching Part</a> <!-- Add Link here-->
            <a href="">Gaming Part</a> <!-- Add Link here -->
        </div>
    </div>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    .nHeader{
        display: flex;
        justify-content: flex-start;
        background-color: #e3e3e3;
        width: 100%;
        height: 115px;
        align-items: center;
        font-family: 'Open Sans';
    }
    .nPages{
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .nHeader > a{
        margin-left: 50px;
        width: 50%;
        font-size: 38px;
        color: #333333;
        font-weight: 1000;
        text-decoration: none;
    }
    .nPages > a{
        margin-right: 50px;
        margin-left: 50px;
        padding: 50px;
        font-size: 28px;
        font-weight: 50;
        color: #444444;
        text-decoration: none;
    }
</style>
