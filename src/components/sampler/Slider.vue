<script setup lang="ts">
import KeyDisplay from "@/components/ui/KeyDisplay.vue"

const props = defineProps({
    keyId: Number,
    sliderUp: String,
    sliderDown: String,
    sliderValue: Number,
    sliderIncrement: Function,
    sliderDecrement: Function,
})
</script>

<template>
    <div class="slider-content">
        <div class="slider-button slider-up">
            <KeyDisplay
                :keyId="props.keyId"
                :pressed="props.sliderIncrement"
                v-bind="props"
                :keyBoardInput="sliderUp"
            ></KeyDisplay>
        </div>
        <!-- <input
            type="range"
            min="1"
            max="100"
            value="50"
            class="slider-visual"
            id="myRange"
        /> -->
        <p style="align-self: center">
            {{ sliderValue.toFixed(2).toString() }}
        </p>
        <div class="slider-button slider-down">
            <KeyDisplay
                :keyId="props.keyId"
                :pressed="props.sliderDecrement"
                :keyBoardInput="sliderDown"
            ></KeyDisplay>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.slider {
    display: grid;
    grid-template-rows: 2vw 6vw 2vw;

    .slider-visual {
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        transform: rotate(90deg);
        width: 5vw;
        height: 6vw;
    }

    .slider-button {
        justify-self: center;
        font-size: 0.8rem;
        height: 2vw;
        width: 2vw;
    }
}
</style>
