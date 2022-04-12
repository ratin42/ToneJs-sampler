<script setup lang="ts">
import ModuleTitle from "@/components/ui/ModuleTitle.vue";
import { getKeyMapping } from "@/composables/Controler/KeyMapping";
import KeyDisplay from "@/components/ui/KeyDisplay.vue";
let keyMapping: any = getKeyMapping("masterControl");

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
        <span class="pad-button-container" v-for="item in keyMapping.numPad">
            <KeyDisplay
                class="numpad-button"
                name="button"
                :keyBoardInput="item.triggerKey"
                :label="item.label"
                :pressed="() => handlePress(item.value)"
                :unpressed="() => handleUnpress(item.value)"
            >
            </KeyDisplay>
            <label for="button">{{ item.value.toString() }}</label>
        </span>
        <!-- </span> -->
    </div>
</template>

<style scoped lang="scss">
#function-keys {
    display: grid;
    grid-template-rows: 20% 80%;

    .title {
        grid-column: 1/2;
        grid-row: 1/2;
    }
    .pad-button-container {
        display: grid;
        // grid-template-columns: repeat(10, 1fr);
        grid-row: 2/3;
        font-size: 1.5rem;
        width: 5vw;
        height: 5vw;
    }
}
</style>
