<script setup lang="ts">
// Contains the Pad Components that represent the input Button and the sliders
// Create an array of Pad Engine and handle playing mode

import Performance from "@/components/Sampler/Modules/Performance/Performance.vue";
import MasterControl from "@/components/Sampler/Modules/MasterControl/MasterControl.vue";
</script>

<template>
    <div id="sampler">
        <span id="left-panel">
            <Performance class="performance"></Performance>
        </span>
        <MasterControl></MasterControl>
    </div>
</template>

<style lang="scss" scoped>
#sampler {
    margin: 0rem;
    display: grid;
    grid-template-columns: 80% 20%;
    justify-content: center;
    width: 97vw;
    height: 91vh;

    #left-panel {
        display: grid;
        grid-template-rows: 30% 20% 50%;
        align-items: center;

        .performance {
            grid-column: 1/2;
            grid-row: 3/4;
            height: 100%;
            width: 100%;
        }
    }
}
</style>
