<template>
    <div class="nHeader">
        <a href="./index.html">Teaching Nussinov</a> <!-- Links to front page -->
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
        height: 48px;
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
        margin-right: 500px;
        font-size: 25px;
        color: #434343;
        font-weight: 700;
        text-decoration: none;
    }
    .nPages > a{
        margin-left: 75px;
        padding: 25px;
        font-size: 20px;
        font-weight: 300;
        color: #444444;
        text-decoration: none;
    }
</style>
