<script setup lang="ts">
import { inject } from "vue";

let dk: any = inject("dk");
console.log("screen", dk.screen.line.value[0]);
</script>

<template>
    <div id="screen">
        <div class="screen-surface">
            <p>{{ dk.screen.line.value[0] }}</p>
            <p>{{ dk.screen.line.value[1] }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#screen {
    .screen-surface {
        background-color: var(--green);
    }
}
</style>
