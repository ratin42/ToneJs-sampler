<script setup lang="ts">
// Contains the Pad Components that represent the input Button and the sliders
// Create an array of Pad Engine and handle playing mode

import Performance from "@/components/Sampler/Modules/Performance/Performance.vue";
import MasterControl from "@/components/Sampler/Modules/MasterControl/MasterControl.vue";
import Setup from "@/components/Sampler/Modules/Setup/Setup.vue";
import FunctionKeys from "@/components/Sampler/Modules/Function/FunctionKeys.vue";
</script>

<template>
    <div id="sampler">
        <span id="left-panel">
            <span class="function">
                <FunctionKeys class="keys"></FunctionKeys>
                <Setup class="setup"></Setup>
            </span>
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
        grid-template-rows: 50% 50%;
        align-items: center;

        .function {
            display: grid;
            grid-template-rows: 30% 70%;
            grid-template-columns: 15% 85%;
            height: 100%;
            // align-items: center;

            .keys {
                grid-column: 2/3;
                grid-row: 1/2;
            }
            .setup {
                grid-column: 1/2;
                grid-row: 1/2;
            }
        }

        .performance {
            grid-column: 1/2;
            grid-row: 2/3;
            height: 100%;
            width: 100%;
        }
    }
}
</style>
