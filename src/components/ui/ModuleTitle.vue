<script setup lang="ts">
// Define Props
interface Props {
    title: string;
}
const props = withDefaults(defineProps<Props>(), {
    title: "",
});
</script>

<template>
    <div id="module-title">
        <p>{{ props.title }}</p>
        <hr class="line" />
    </div>
</template>

<style lang="scss" scoped>
#module-title {
    display: grid;
    grid-template-rows: auto auto;
    p {
        font-size: 1.5rem;
        margin: 0rem;
        text-align: start;
    }
    .line {
        border: 1px solid var(--red);
        width: 100%;
        height: 0rem;
        align-self: end;
        margin: 0rem;
    }
}
</style>
