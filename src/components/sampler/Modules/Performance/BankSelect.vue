<script setup lang="ts">
import { inject } from "vue";
import KeyDisplay from "@/components/ui/KeyDisplay.vue";
import { getKeyMapping } from "@/composables/Controler/KeyMapping";
import LedRed from "@/components/ui/LedRed.vue";

const dk: any = inject("dk");

// Get keyMapping from LocalStorage
let keyMapping: any = getKeyMapping("performance");

let handlePress = (key: string) => {
    dk.setBank();
};
let handleUnpress = (key: string) => {
    // console.log("handleUnpress");
};
</script>

<template>
    <div id="bank-select">
        <span class="button-text-container">
            <KeyDisplay
                class="select-button"
                :keyBoardInput="keyMapping.bankSelect.triggerKey"
                :label="keyMapping.bankSelect.label"
                :pressed="handlePress"
                :unpressed="handleUnpress"
            ></KeyDisplay>
            <span class="switch-text">
                <span class="switch-option">
                    <LedRed :status="dk.currentBank.value == 0"></LedRed>
                    <p>A</p>
                </span>
                <span class="switch-option">
                    <LedRed :status="dk.currentBank.value == 1"></LedRed>
                    <p>B</p>
                </span>
                <span class="switch-option">
                    <LedRed :status="dk.currentBank.value == 2"></LedRed>
                    <p>C</p>
                </span>
                <span class="switch-option">
                    <LedRed :status="dk.currentBank.value == 3"></LedRed>
                    <p>D</p>
                </span>
            </span>
        </span>
    </div>
</template>

<style scoped lang="scss">
#bank-select {
    display: grid;
    grid-template-rows: 10vw;
    align-items: center;
    justify-content: start;

    .button-text-container {
        display: grid;
        grid-template-columns: auto auto;
        gap: 1.5rem;
        width: 100%;
        align-items: center;

        .select-button {
            width: 4vw;
            height: 2vw;
        }

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
    }
}
</style>
