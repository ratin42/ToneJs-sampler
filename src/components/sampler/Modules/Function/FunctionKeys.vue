<script setup lang="ts">
import { inject } from "vue";
import ModuleTitle from "@/components/ui/ModuleTitle.vue";
import { getKeyMapping } from "@/composables/Controler/KeyMapping";
import KeyDisplay from "@/components/ui/KeyDisplay.vue";

let keyMapping: any = getKeyMapping("masterControl");
let dk: any = inject("dk");

const handlePress = (value: number) => {
    console.log("pressed ", value);
};
const handleUnpress = (value: number) => {
    console.log("unpressed ", value);
};
</script>

<template>
    <div id="function-keys">
        <ModuleTitle class="title" title="Function"></ModuleTitle>
        <!-- <span class="pad-wrapper"> -->
        <span
            class="pad-button-container"
            v-for="(item, index) in keyMapping.numPad"
        >
            <KeyDisplay
                class="numpad-button"
                name="button"
                :keyBoardInput="item.triggerKey"
                :label="item.label"
                :pressed="() => handlePress(item.value)"
                :unpressed="() => handleUnpress(item.value)"
            >
            </KeyDisplay>
            <label class="label-button" for="button">{{
                dk.functionDescription.value[index]
            }}</label>
        </span>
        <!-- </span> -->
    </div>
</template>

<style scoped lang="scss">
#function-keys {
    display: grid;
    grid-template-rows: 40% 60%;

    .title {
        grid-column: 1/2;
        grid-row: 1/2;
    }
    .pad-button-container {
        display: grid;
        grid-template-rows: 3vw auto;
        grid-row: 2/3;
        font-size: 1.5rem;
        width: 5vw;
        height: 5vw;

        .numpad-button {
            grid-row: 1/2;
        }
        .label-button {
            grid-row: 2/3;
            margin-top: 1rem;
        }
    }
}
</style>
