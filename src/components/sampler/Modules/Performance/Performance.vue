<script setup lang="ts">
// Contains the Pad Components that represent the input Button and the sliders

import Pad from "@/components/Sampler/Pad.vue";
import TuneMixMulti from "./TuneMixMulti.vue";
import BankSelect from "./BankSelect.vue";
</script>

<template>
    <div id="performance">
        <span class="control-ui">
            <TuneMixMulti></TuneMixMulti>
            <BankSelect></BankSelect>
        </span>
        <div class="track-container">
            <Pad class="pad" :trackId="0" :disabled="false"></Pad>
            <Pad class="pad" :trackId="1" :disabled="false"></Pad>
            <Pad class="pad" :trackId="2" :disabled="false"></Pad>
            <Pad class="pad" :trackId="3" :disabled="false"></Pad>
            <Pad class="pad" :trackId="4" :disabled="false"></Pad>
            <Pad class="pad" :trackId="5" :disabled="false"></Pad>
            <Pad class="pad" :trackId="6" :disabled="false"></Pad>
            <Pad class="pad" :trackId="7" :disabled="false"></Pad>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#performance {
    display: grid;
    grid-template-columns: 10vw 60vw;
    gap: 2rem;

    .control-ui {
        display: grid;
        grid-template-rows: auto auto;
    }
    .track-container {
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        width: 60vw;
    }
}
</style>
