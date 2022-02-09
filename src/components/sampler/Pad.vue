<script setup>
import { ref } from "vue"
import KeyDisplay from "@/components/ui/KeyDisplay.vue"
import Slider from "./Slider.vue"
import * as Tone from "tone"

const props = defineProps({
    keyId: Number,
    triggerKey: String,
    sliderUp: String,
    sliderDown: String,
    ledOne: Boolean,
    ledTwo: Boolean,
    ledThree: Boolean,
    ledFour: Boolean,
})
let sliderValue = ref(1)
let currentNote = "C4"
let offset = 0

const buffer = new Tone.ToneAudioBuffer("Starman.mp3", () => {
    console.log("loaded")
})

const instrument = new Tone.Player(buffer).toDestination()
// const pitchShift = new Tone.PitchShift(0).toDestination()
// instrument.connect(pitchShift)

const pressed = (key) => {
    instrument.start(0, offset)
}
const unpressed = (key) => {
    instrument.stop()
}

const changePlayerParameter = (value) => {
    // instrument.playbackRate = value
    offset = value
    // instrument.restart(0, offset)
}
const sliderIncrement = (key) => {
    sliderValue.value += 1
    changePlayerParameter(sliderValue.value)
}
const sliderDecrement = (key) => {
    sliderValue.value -= 1
    changePlayerParameter(sliderValue.value)
}
</script>

<template>
    <div class="track">
        <Slider
            class="slider"
            v-bind="props"
            :slider-value="sliderValue"
            :slider-increment="sliderIncrement"
            :slider-decrement="sliderDecrement"
        ></Slider>
        <div class="pad-content">
            <KeyDisplay
                :keyBoardInput="triggerKey"
                :pressed="pressed"
                :unpressed="unpressed"
                v-bind="props"
                :ledOne="false"
                :ledTwo="false"
                :ledThree="false"
                :ledFour="false"
            ></KeyDisplay>
        </div>
    </div>
</template>

<style lang="scss">
.track {
    display: grid;
    grid-template-rows: 10vw 5vw;
    grid-gap: 1rem;

    .slider {
        grid-row: 1/2;
        height: 10vw;
        width: 5vw;
    }
    .pad-content {
        display: grid;
        width: 5vw;
        height: 5vw;
        font-size: 1.5rem;
    }
}
</style>
