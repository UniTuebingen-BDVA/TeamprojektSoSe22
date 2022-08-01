<template>
    <div class="help-page">
        <h2>Game instructions</h2>
        <ul>
            <li>First choose the difficulty</li>
            <li>Now you can independently form complementary base pairs of the RNA by clicking and dragging.</li>
            <li>When you are happy with your final result, you can send off your resulting RNA molecule.</li>
            <li>Your solution is now compared with the solution of the Nussinov algorithm, the greater the match, the better.</li>
            <li>If you like, you can now enter your name in the high score table and compare your result with others.</li>
        </ul>
    </div>
</template>
<script setup>

</script>
<style scoped>
    .help-page {
        height: 100%;
        width: 80%;
        position: absolute;
        top: 0;
        background: var(--secondary-color);
    }


    ul{
        font-size: 1.2em;
        font-family: var(--uni-font);
    }

</style>