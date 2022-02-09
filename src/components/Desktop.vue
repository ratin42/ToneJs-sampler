<script setup>
// import { useGetAudioContext } from "@/composables/WebAudioApi/AudioContext.js"
import * as Tone from "tone"
import { provide } from "vue"
import useErrorHandler from "@/composables/ErrorHandler.js"
import Sampler from "./sampler/Sampler.vue"
import { keyMapping } from "@/utils/keyMapping.ts"

import { useControlerContainer } from "@/composables/Controler/Container.js"

// Tone.setContext(new Tone.Context({ latencyHint: "interactive" }))

// Tone.debug = true

// useErrorHandler(props)
// const { audioContext } = useGetAudioContext()

let session = {
    controler: "keyboard",
}

provide("session", session)
provide("connectController", useControlerContainer)
provide("keyMapping", keyMapping)
</script>

<template>
    <div id="desktop">
        <button v-on:click="Tone.start()">Start Tone</button>
        <Sampler> </Sampler>
    </div>
</template>

<style>
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
