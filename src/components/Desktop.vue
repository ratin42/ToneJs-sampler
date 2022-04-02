<script setup lang="ts">
import * as Tone from "tone";
import { provide } from "vue";

import Sampler from "@/components/Sampler/Sampler.vue";
import { loadKeyMapping } from "@/composables/Controler/KeyMapping";
import { dk } from "@/composables/DiskoKaset";

// ORIGINAL SCREEN IS 16 * 2

// Tone.setContext(new Tone.Context({ latencyHint: "interactive" }))
// Tone.debug = true
// const { audioContext } = useGetAudioContext()
provide("dk", dk);
let wait = true;

if (!window.localStorage.getItem("keyMapping")) {
    loadKeyMapping();
    wait = false;
} else {
    wait = false;
}
</script>

<template>
    <div id="desktop">
        <span v-if="wait">
            <p>loading...</p>
        </span>
        <span class="sampler-container" v-else>
            <!-- <button v-on:click="Tone.start()">Start Tone</button> -->
            <Sampler> </Sampler>
        </span>
    </div>
</template>

<style lang="scss">
#desktop {
    width: 100%;
    height: 100%;
    margin: 0rem;

    label {
        font-size: var(--label);
        // font-weight: bold;
    }
}
.sampler-container {
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}
.noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>
