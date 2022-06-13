<script setup lang="ts">
import { inject, reactive } from "vue";
import KeyDisplay from "@/components/ui/KeyDisplay.vue";
import Slider from "@/components/sampler/Slider.vue";

import { getKeyMapping } from "@/composables/Controler/KeyMapping";

// Define Props
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

// Get Global Object
const dk: any = inject("dk");

// Get keyMapping from LocalStorage
let keyMapping: any = getKeyMapping("sampler");
keyMapping = keyMapping[props.trackId];

// Get the pad and slider keysBindings from keyMapping object
let triggerKey = keyMapping.triggerKey;
let sliderUp = keyMapping.sliderUp;
let sliderDown = keyMapping.sliderDown;

// Call the global object function for press/unpress events
const handlePress = (key: string) => {
    dk.playSound(props.trackId, 127);
};
const handleUnpress = (key: string) => {
    dk.stopSound(props.trackId);
};

// Call the global object function to update the track's slider value
const updateSliderValue = (value: number) => {
    dk.handleSlider(props.trackId, value);
    console.log("trackMapping", dk.trackMapping);
};
const sliderIncrement = (key: string) => {
    dk.trackArray.value[props.trackId].sliderValue += 1;
    updateSliderValue(dk.trackArray.value[props.trackId].sliderValue);
};
const sliderDecrement = (key: string) => {
    dk.trackArray.value[props.trackId].sliderValue -= 1;
    updateSliderValue(dk.trackArray.value[props.trackId].sliderValue);
};
</script>

<template>
    <div class="track">
        <!-- Slider Component with screen for the sliderValue -->
        <Slider
            name="slider"
            class="slider"
            v-bind="props"
            :slider-down="sliderDown"
            :slider-up="sliderUp"
            :slider-value="dk.trackArray.value[props.trackId].sliderValue"
            :slider-increment="sliderIncrement"
            :slider-decrement="sliderDecrement"
        ></Slider>
        <label for="slider">{{ props.trackId + 1 }}</label>
        <div class="pad-content">
            <!-- The pad -->
            <KeyDisplay
                name="pad"
                :keyBoardInput="triggerKey"
                :pressed="handlePress"
                :unpressed="handleUnpress"
                v-bind="props"
            ></KeyDisplay>
        </div>
        <label for="pad">{{ props.trackId + 1 }}</label>
    </div>
</template>

<style lang="scss">
.track {
    display: grid;
    grid-template-rows: 60% 40%;
    justify-content: center;
    align-items: center;
    grid-template-rows: 55% 5% 35% 5%;

    .slider {
        grid-row: 1/2;
        height: 10vw;
        width: 5vw;
        // margin-bottom: 0.2rem;
    }
    .pad-content {
        display: grid;
        width: 5vw;
        height: 5vw;
        font-size: 1.5rem;
        align-self: end;
        margin-bottom: 0.6rem;
    }
}
</style>
