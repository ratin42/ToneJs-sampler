<script setup lang="ts">
import { inject } from "vue";

let dk: any = inject("dk");
let line1: string = dk.screen.line1;
let line2: string = dk.screen.line2;
</script>

<template>
    <div id="screen">
        <div class="screen-surface">
            <p>line1</p>
            <p>line2</p>
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
