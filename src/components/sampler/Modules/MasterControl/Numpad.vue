<script setup lang="ts">
import { inject } from "vue";
import KeyDisplay from "@/components/ui/KeyDisplay.vue";

let keyMapping: any = inject("keyMapping");
console.log("keyMapping", keyMapping);

const handlePress = (value: number) => {
    console.log("pressed ", value);
};
const handleUnpress = (value: number) => {
    console.log("unpressed ", value);
};
</script>

<template>
    <div id="num-pad">
        <span class="pad-button-container" v-for="item in keyMapping.numPad">
            <KeyDisplay
                class="num-pad-button"
                :keyBoardInput="item.triggerKey"
                :label="item.label"
                :pressed="() => handlePress(item.value)"
                :unpressed="() => handleUnpress(item.value)"
            >
            </KeyDisplay>
        </span>
    </div>
</template>

<style lang="scss" scoped>
#num-pad {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
}
</style>
