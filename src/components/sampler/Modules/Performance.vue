<script setup lang="ts">
// Contains the Pad Components that represent the input Button and the sliders

import { inject, ref } from "vue";

import Pad from "@/components/sampler/Pad.vue";
let keyMapping: any = inject("keyMapping");
</script>

<template>
    <div id="performance">
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
</style>
