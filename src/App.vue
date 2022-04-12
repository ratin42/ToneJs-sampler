<script setup>
import DesktopVue from "@/components/Desktop.vue";
</script>

<template>
    <div id="container">
        <DesktopVue></DesktopVue>
    </div>
</template>

<style lang="scss">
#container {
    width: 100vw;
    height: 100vh;
}
#app {
    // font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    font-family: futura-pt, Avenir, -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;

    // light mode
    // color: #2c3e50;

    // dark mode
    // color: var(--device-yellow);
    // margin-top: 60px;
}
body {
    width: 100vw;
    height: 100vh;
    // overflow: hidden;
    margin: 0rem;
    padding: 0rem;
    color: var(--psd-darkest-grey);
}

html,
head,
button,
input,
body {
    cursor: url("/cursor.png"), auto;

    // light mode
    background-color: var(--disko-background);

    // dark mode
    // background-color: #312f28;
}
</style>
