<script setup>
import DesktopVue from "@/components/Desktop.vue"
</script>

<template>
    <DesktopVue></DesktopVue>
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
html {
    height: 100%;
}
body {
    min-height: 100%;
    //     background-color: #1e1e1ec7;
}

html,
head,
button,
input,
body {
    cursor: url("/cursor.png"), auto;
}
</style>
