<script setup lang="ts">
import RunStop from "./RunStop.vue";
import Numpad from "./Numpad.vue";
import { getKeyMapping } from "@/composables/Controler/KeyMapping";
import { provide } from "vue";

let keyMapping: object = getKeyMapping("masterControl");
provide("keyMapping", keyMapping);
</script>

<template>
    <div id="master-control">
        <span class="numpad-player-control">
            <span class="numpad">
                <Numpad></Numpad>
            </span>
            <span class="player-control">
                <RunStop></RunStop>
            </span>
        </span>
    </div>
</template>

<style lang="scss" scoped>
#master-control {
    display: grid;
    grid-template-rows: 30% 20% 50%;

    .numpad-player-control {
        display: grid;
        grid-template-rows: 65% auto;
        grid-column: 1/2;
        grid-row: 3/4;

        .numpad {
            grid-column: 1/2;
            grid-row: 1/2;
        }
        .player-control {
            display: grid;
            grid-column: 1/2;
            grid-row: 2/3;
            align-items: center;
        }
    }
}
</style>
