<script setup lang="ts">
// Contains the Pad Components that represent the input Button and the sliders

import ModuleTitle from "@/components/ui/ModuleTitle.vue";
import Pad from "@/components/Sampler/Pad.vue";
import TuneMixMulti from "./TuneMixMulti.vue";
import BankSelect from "./BankSelect.vue";
import { inject, ref } from "vue";
import * as Tone from "tone";
import type { trackArray, Track } from "@/composables/Track/GetTrackArray";

const osc = new Tone.Oscillator().toDestination();

let dk: any = inject("dk");
let metro = true;
let currentIndex = ref(0);
const changeMetro = () => {
    metro = !metro;
    console.log("metro = ", metro);
};

// repeated event every 8th note
Tone.Transport.scheduleRepeat((time) => {
    // use the callback time to schedule events
    // console.log("time", dk.transposeIndex.value % 4);
    if (dk.transposeIndex.value % 4 === 0) {
        if (metro) {
            osc.start(time).stop(time + 0.1);
        }
        currentIndex.value++;
    }
    console.log("transpose index", dk.transposeIndex.value);
    dk.trackBank.forEach((bank: trackArray) => {
        bank.forEach((track: Track) => {
            track.checkRecord(dk.transposeIndex.value % 16, time);
        });
    });
    // if (dk.record[dk.transposeIndex.value % 16] != null) {
    //     dk.record[dk.transposeIndex.value % 16]();
    // }
    dk.transposeIndex.value++;
}, "16n");
// transport must be started before it starts invoking events
</script>

<template>
    <div id="performance">
        <p>{{ "Current Index " + (currentIndex % 4) }}</p>
        <button @Click="changeMetro">stop metro</button>

        <ModuleTitle
            class="performance-title"
            title="Performance"
        ></ModuleTitle>
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
    grid-template-columns: 20% 80%;
    grid-template-rows: 12% auto;
    align-items: start;
    justify-content: start;

    .performance-title {
        grid-row: 1/2;
        grid-column: 1/3;
    }
    .control-ui {
        display: grid;
        grid-row: 2/3;
        grid-template-rows: 60% 40%;
        width: 100%;
        height: 100%;
        justify-content: start;
        align-items: center;
    }
    .track-container {
        display: grid;
        grid-row: 2/3;
        justify-content: center;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        width: 100%;
        height: 100%;
    }
}
</style>
