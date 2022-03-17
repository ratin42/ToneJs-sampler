<script setup lang="ts">
interface Props {
    status: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    status: false,
});
</script>

<template>
    <div class="led-red" v-bind:class="{ lighted: props.status }"></div>
</template>

<style scoped lang="scss">
.led-red {
    width: 12px;
    height: 12px;
    background-color: #940;
    border-radius: 50%;
    box-shadow: #000 0 0px 3px 1px, inset #600 0 -1px 21px;
    // box-shadow: #000 -0.5px 0.5px 3px 1px, inset #600 0 -1px 21px;
}
.lighted {
    background-color: #f00;
    box-shadow: #d70000 0 -1px 7px 1px, inset #b90000 0 -1px 9px,
        #f00 0 2px 12px;
}
</style>
