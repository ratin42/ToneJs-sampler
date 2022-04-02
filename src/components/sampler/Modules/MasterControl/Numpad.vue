<script setup lang="ts">
import { inject } from "vue";
import KeyDisplay from "@/components/ui/KeyDisplay.vue";

let keyMapping: any = inject("keyMapping");

const handlePress = (value: number) => {
    console.log("pressed ", value);
};
const handleUnpress = (value: number) => {
    console.log("unpressed ", value);
};
const isZero = (value: number) => {
    return value === 0;
};
</script>

<template>
    <div id="num-pad">
        <span
            class="pad-button-container"
            v-bind:class="{ 'zero-button': isZero(item.value) }"
            v-for="item in keyMapping.numPad"
        >
            <label for="button">{{ item.value.toString() }}</label>
            <!-- <span class="key-wrapper"> -->
            <KeyDisplay
                class="numpad-button"
                name="button"
                :keyBoardInput="item.triggerKey"
                :label="item.label"
                :pressed="() => handlePress(item.value)"
                :unpressed="() => handleUnpress(item.value)"
            >
            </KeyDisplay>
            <!-- </span> -->
        </span>
        <span class="label-yes">
            <label for="">Yes</label>
        </span>
        <span class="label-no">
            <label for="">No</label>
        </span>
    </div>
</template>

<style lang="scss" scoped>
#num-pad {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 100%;
    width: 21vh;
    justify-self: center;

    .label-yes {
        grid-column: 1/2;
        grid-row: 4/5;
    }
    .label-no {
        grid-column: 3/4;
        grid-row: 4/5;
    }
    .pad-button-container {
        display: grid;
        grid-template-rows: 25% 75%;
        aspect-ratio: 1/1; // display: grid;
        // margin: 0.5rem;
        // margin-top: 1rem;

        .numpad-button {
            width: 50%;
            height: 67%;
            justify-self: center;
            align-self: center;
        }
    }
    .zero-button {
        grid-column: 2/3;
    }
}
</style>
