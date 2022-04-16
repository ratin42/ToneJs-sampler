<script setup lang="ts">
import ModuleTitle from "@/components/ui/ModuleTitle.vue";
import KeyDisplayVue from "@/components/ui/KeyDisplay.vue";
import LedRed from "@/components/ui/LedRed.vue";
import { getKeyMapping } from "@/composables/Controler/KeyMapping";
import { inject, ref, Ref } from "vue";

let dk: any = inject("dk");
let keyMapping: any = getKeyMapping("setup");

const functions = [
    {
        name: "Multi Pitch",
        function: () => {
            console.log("helloloo");
        },
    },
    { name: "Multi Level", function: () => {} },
    { name: "Exit Multi Mode", function: () => {} },
    { name: "Define Mix", function: () => {} },
    { name: "Select Mix", function: () => {} },
    { name: "Loop/Truncate", function: () => {} },
    { name: "Delete Sound", function: () => {} },
    { name: "", function: () => {} },
    { name: "", function: () => {} },
    { name: "", function: () => {} },
];

let isOn: Ref<boolean> = ref(false);

const handlePress = (key: string) => {
    isOn.value = !isOn.value;
    if (isOn.value) {
        dk.setFunctionDescription(functions);
    } else {
        dk.resetFunctionDescription();
    }
};
const handleUnpress = (key: string) => {
    // console.log("handleUnpress");
};
</script>

<template>
    <div id="setup">
        <ModuleTitle class="title" title="Setup"></ModuleTitle>
        <span class="button-container">
            <KeyDisplayVue
                class="button"
                :keyBoardInput="keyMapping.triggerKey"
                :label="keyMapping.label.toUpperCase()"
                :pressed="handlePress"
                :unpressed="handleUnpress"
            >
            </KeyDisplayVue>
            <LedRed class="led" :status="isOn"></LedRed>
        </span>
    </div>
</template>

<style scoped lang="scss">
#setup {
    display: grid;
    grid-template-rows: 40% 60%;
    grid-template-columns: 5vw auto;
    .title {
        width: 60%;
        grid-column: 1/3;
    }
    .button-container {
        display: grid;
        grid-template-rows: 3vw auto;
        .button {
            font-size: 1.5rem;
            width: 5vw;
            height: 3vw;
            grid-column: 1/2;
            grid-row: 1/2;
        }
        .led {
            grid-column: 2/3;
            grid-row: 1/2;
            align-self: center;
            margin-left: 1.5rem;
        }
    }
}
</style>
