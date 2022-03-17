<script setup lang="ts">
import KeyDisplay from "@/components/ui/KeyDisplay.vue";
import LedRed from "@/components/ui/LedRed.vue";

let handlePress = (key: string) => {
    console.log("handlePress");
};

let handleUnpress = (key: string) => {
    console.log("handleUnpress");
};
let ledTuneDecay: boolean = true;
let ledMix: boolean = false;
let ledMultiMode: boolean = false;
</script>

<template>
    <div id="tune-mix-multi">
        <span class="button-text-container">
            <KeyDisplay
                class="switch-button"
                keyBoardInput="1"
                :pressed="handlePress"
                :unpressed="handleUnpress"
            ></KeyDisplay>
            <span class="switch-text">
                <span class="switch-option">
                    <LedRed :status="ledTuneDecay"></LedRed>
                    <p>Tune/Decay</p>
                </span>
                <span class="switch-option">
                    <LedRed :status="ledMix"></LedRed>
                    <p>Mix</p>
                </span>
                <span class="switch-option">
                    <LedRed :status="ledMultiMode"></LedRed>
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

    .button-text-container {
        display: grid;
        grid-template-columns: 30% 70%;
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
            width: 2vw;
            height: 2vw;
        }
    }
}
</style>
