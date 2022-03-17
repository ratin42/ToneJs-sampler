<script setup lang="ts">
// Contains the Pad Components that represent the input Button and the sliders
// Create an array of Pad Engine and handle playing mode

import Performance from "@/components/Sampler/Modules/Performance/Performance.vue";
</script>

<template>
    <div id="sampler">
        <Performance></Performance>
    </div>
</template>

<style lang="scss" scoped>
#sampler {
    margin-top: 4rem;
    display: grid;
    justify-content: center;
}
</style>
