<script setup lang="ts">
import { ref } from "vue";
import KeyDisplay from "@/components/ui/KeyDisplay.vue";
import Slider from "@/components/sampler/Slider.vue";

import { layoutHandler } from "@/composables/Track/LayoutHandler";

interface Props {
    trackId: number;
    ledOne?: boolean;
    ledTwo?: boolean;
    ledThree?: boolean;
    ledFour?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    trackId: 0,
    ledOne: false,
    ledTwo: false,
    ledThree: false,
    ledFour: false,
});

// Get keyMapping from LocalStorage
let keyMapping: any = window.localStorage.getItem("keyMapping");
if (keyMapping) {
    keyMapping = JSON.parse(keyMapping).sampler[props.trackId];
} else {
    console.log("ERROR: keyMapping not found");
}

// Setup the Pad character
let triggerKey = keyMapping.triggerKey;
let sliderUp = keyMapping.sliderUp;
let sliderDown = keyMapping.sliderDown;

let sliderValue = ref(1);

// Call the global object function for press/unpress events
const handlePress = (key: string) => {
    layoutHandler.playSound(props.trackId, 127);
};
const handleUnpress = (key: string) => {
    layoutHandler.stopSound(props.trackId);
};

// Call the global object function to update the track's slider value
const updatePlayerValue = (value: number) => {
    // layoutHandler.sliderChange(props.trackId, value);
    console.log("slider change");
};
const sliderIncrement = (key: string) => {
    sliderValue.value += 1;
    updatePlayerValue(sliderValue.value);
};
const sliderDecrement = (key: string) => {
    sliderValue.value -= 1;
    updatePlayerValue(sliderValue.value);
};
</script>

<template>
    <div class="track">
        <Slider
            class="slider"
            v-bind="props"
            :slider-down="sliderDown"
            :slider-up="sliderUp"
            :slider-value="sliderValue"
            :slider-increment="sliderIncrement"
            :slider-decrement="sliderDecrement"
        ></Slider>
        <div class="pad-content">
            <KeyDisplay
                :keyBoardInput="triggerKey"
                :pressed="handlePress"
                :unpressed="handleUnpress"
                v-bind="props"
            ></KeyDisplay>
        </div>
    </div>
</template>

<style lang="scss">
.track {
    display: grid;
    grid-template-rows: 10vw 5vw;
    grid-gap: 5rem;

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
