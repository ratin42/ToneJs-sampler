<script setup>
// Contains the Pad Components that represent the input Button and the sliders
// Create an array of Pad Engine and handle playing mode

import { inject } from "vue";
import Pad from "./Pad.vue";

let keyMapping = inject("keyMapping");
const down = () => {
    console.log("down");
};
</script>

<template>
    <div id="sampler">
        <div class="track-container">
            <Pad class="pad" v-bind="keyMapping.sampler[0]"></Pad>
            <Pad class="pad" v-bind="keyMapping.sampler[1]"></Pad>
            <Pad class="pad" v-bind="keyMapping.sampler[2]"></Pad>
            <Pad class="pad" v-bind="keyMapping.sampler[3]"></Pad>
            <Pad class="pad" v-bind="keyMapping.sampler[4]"></Pad>
            <Pad class="pad" v-bind="keyMapping.sampler[5]"></Pad>
            <Pad class="pad" v-bind="keyMapping.sampler[6]"></Pad>
            <Pad class="pad" v-bind="keyMapping.sampler[7]"></Pad>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#sampler {
    margin-top: 4rem;
    display: grid;
    justify-content: center;
    .track-container {
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        width: 50vw;

        .track {
            display: grid;
            grid-template-rows: 10vw 5vw;
            .pad {
                width: 5vw;
                height: 5vw;
                grid-row: 2/3;
            }
        }
    }
}
</style>
