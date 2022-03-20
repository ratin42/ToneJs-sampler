<script setup lang="ts">
import { inject } from "vue";
import KeyDisplay from "@/components/ui/KeyDisplay.vue";
import LedRed from "@/components/ui/LedRed.vue";
import { getKeyMapping } from "@/composables/Controler/KeyMapping";

const dk: any = inject("dk");

// Get keyMapping from LocalStorage
let keyMapping: any = getKeyMapping("performance");

let handlePress = (key: string) => {
    dk.setControlMode();
};
let handleUnpress = (key: string) => {
    // console.log("handleUnpress");
};
</script>

<template>
    <div id="tune-mix-multi">
        <span class="button-text-container">
            <KeyDisplay
                class="switch-button"
                :keyBoardInput="keyMapping.tuneMixMulti.triggerKey"
                :label="keyMapping.tuneMixMulti.label"
                :pressed="handlePress"
                :unpressed="handleUnpress"
            ></KeyDisplay>
            <span class="switch-text">
                <span class="switch-option">
                    <LedRed :status="dk.controlMode.value == 'tune'"></LedRed>
                    <p>Tune/Decay</p>
                </span>
                <span class="switch-option">
                    <LedRed :status="dk.controlMode.value == 'mix'"></LedRed>
                    <p>Mix</p>
                </span>
                <span class="switch-option">
                    <LedRed :status="dk.controlMode.value == 'multi'"></LedRed>
                    <p>Multi Mode</p>
                </span>
            </span>
        </span>
    </div>
</template>

<style scoped lang="scss">
#tune-mix-multi {
    display: grid;
    grid-template-rows: 10vw;
    align-items: center;
    justify-content: end;

    .button-text-container {
        display: grid;
        grid-template-columns: auto auto;
        gap: 1.5rem;
        width: 100%;
        align-items: center;

        .switch-text {
            display: grid;
            grid-gap: 0.4rem;
            .switch-option {
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            text-align: left;
            p {
                margin: 0rem;
                margin-left: 0.6rem;
            }
        }
        .switch-button {
            width: 4vw;
            height: 2vw;
        }
    }
}
</style>
