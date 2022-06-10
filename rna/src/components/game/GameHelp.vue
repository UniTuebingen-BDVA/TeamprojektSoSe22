<template>
    <div class="help-page">
        <div class="close" v-on:click="$emit('closed',true)">
            <img src="../../assets/icon_close.svg"/>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped>
    .help-page {
        height: 100%;
        width: 100%;
        position: relative;
    }
    .close {
        position: absolute;
        top: 0;
        right: 0;
        height: 20px;
        cursor: pointer;
    }
    .close > img {
        height: 100%;
        object-fit: contain;
    }
</style>