<script setup lang="ts">
import KeyDisplay from "@/components/ui/KeyDisplay.vue";
import { inject } from "vue";
import * as Tone from "tone";

let keyMapping: any = inject("keyMapping");
let dk: any = inject("dk");

const handlePress = (key: string) => {
    dk.startTransport();
};
const handleUnpress = (key: string) => {
    // pass
};
</script>

<template>
    <div id="run-stop">
        <KeyDisplay
            :keyBoardInput="keyMapping.runStop.triggerKey"
            :label="keyMapping.runStop.label"
            :pressed="handlePress"
            :unpressed="handleUnpress"
        >
        </KeyDisplay>
    </div>
</template>

<style lang="scss" scoped>
#run-stop {
    width: 5vw;
    height: 5vw;
}
</style>
