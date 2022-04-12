<script setup lang="ts">
import ModuleTitle from "@/components/ui/ModuleTitle.vue";
import KeyDisplayVue from "@/components/ui/KeyDisplay.vue";
import { getKeyMapping } from "@/composables/Controler/KeyMapping";
import { inject } from "vue";

let dk: any = inject("dk");
let keyMapping: any = getKeyMapping("setup");
const handlePress = (key: string) => {
    dk.setControlMode();
    console.log("handlepress");
};
const handleUnpress = (key: string) => {
    // console.log("handleUnpress");
};
</script>

<template>
    <div id="setup">
        <ModuleTitle class="title" title="Setup"></ModuleTitle>
        <KeyDisplayVue
            class="button"
            :keyBoardInput="keyMapping.triggerKey"
            :label="keyMapping.label.toUpperCase()"
            :pressed="handlePress"
            :unpressed="handleUnpress"
        >
        </KeyDisplayVue>
    </div>
</template>

<style scoped lang="scss">
#setup {
    .title {
        margin-bottom: 1rem;
        width: 60%;
    }
    .button {
        font-size: 1.5rem;
        width: 5vw;
        height: 5vw;
    }
}
</style>
