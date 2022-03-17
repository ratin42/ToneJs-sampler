<script setup lang="ts">
import KeyDisplay from "@/components/ui/KeyDisplay.vue";

let handlePress = (key: string) => {
    console.log("handlePress");
};

let handleUnpress = (key: string) => {
    console.log("handleUnpress");
};
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
                <p>Tune/Decay</p>
                <p>Mix</p>
                <p>Multi Mode</p>
            </span>
        </span>
    </div>
</template>

<style lang="scss">
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
            text-align: left;
            p {
                margin: 0rem;
            }
        }
        .switch-button {
            width: 2vw;
            height: 2vw;
        }
    }
}
</style>
