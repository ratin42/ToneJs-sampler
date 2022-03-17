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
        <KeyDisplay
            keyBoardInput="1"
            :pressed="handlePress"
            :unpressed="handleUnpress"
        ></KeyDisplay>
        <p>hello</p>
    </div>
</template>
