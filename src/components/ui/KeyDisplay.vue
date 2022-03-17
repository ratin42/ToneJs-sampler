<script setup lang="ts">
import { ref, withDefaults } from "vue";

interface Props {
    keyBoardInput: string;
    label?: string;
    pressed: Function;
    unpressed?: Function;
    ledOne?: boolean;
    ledTwo?: boolean;
    ledThree?: boolean;
    ledFour?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    keyBoardInput: "",
    label: "",
    pressed: () => {},
    unpressed: () => {},
    ledOne: false,
    ledTwo: false,
    ledThree: false,
    ledFour: false,
});

let pressedStatus = ref(false);

const trigger = () => {
    pressedStatus.value = true;
    props.pressed(props.keyBoardInput);
};

const untrigger = () => {
    if (pressedStatus.value) {
        props.unpressed(props.keyBoardInput);
        pressedStatus.value = false;
    }
};

window.addEventListener("keydown", (e) => {
    e.preventDefault();
    // console.log(e.key);
    if (e.key === props.keyBoardInput) {
        if (!pressedStatus.value) {
            trigger();
        }
    }
});
window.addEventListener("keyup", (e) => {
    if (e.key === props.keyBoardInput) {
        untrigger();
    }
});
</script>

<template>
    <div
        class="key-content noselect"
        v-bind:class="{ 'key-pressed': pressedStatus }"
        @mousedown="trigger()"
        @mouseup="untrigger()"
    >
        <div class="led-container">
            <div class="led" v-bind:class="{ 'led-1': props.ledOne }"></div>
            <div class="led" v-bind:class="{ 'led-2': props.ledTwo }"></div>
            <div class="led" v-bind:class="{ 'led-3': props.ledThree }"></div>
            <div class="led" v-bind:class="{ 'led-4': props.ledFour }"></div>
        </div>
        <span class="input-display">
            {{ props.label ? props.label : props.keyBoardInput.toUpperCase() }}
        </span>
    </div>
</template>

<style lang="scss">
.key-content {
    display: grid;
    grid-template-rows: 10% auto;
    width: 100%;
    height: 100%;

    border-radius: 0.7rem;

    // light mode
    border-style: solid;
    border-color: var(--brand-yellow);
    border-width: 2px;
    background: var(--screen-black);
    box-shadow: -0.388em 0.5em 0.438em #d9aa2b, 0.5em -0.5em 1.063em #ffe63b;

    // dark mode
    // background: #312f28;
    // box-shadow: -14px 14px 20px #2a2822, 14px -14px 29px #38362e;

    &.key-pressed {
        border-radius: 0.7rem;

        // light mode
        background: #312f28;
        background-image: linear-gradient(37deg, #444238, #212223) !important;

        // dark mode
        // background: #312f28;
        // box-shadow: inset -14px 14px 20px #2a2822, inset 14px -14px 29px #38362e;

        transition: box-shadow 0.05s ease-in-out, background-image 2s;

        .input-display {
            font-size: calc(100% - 0.1rem);
        }
        .led-container {
            .led {
                transform: translate(2px, 2px);
            }
        }
    }

    .led-container {
        grid-row: 1/2;
        grid-column: 1/2;
        display: flex;
        flex-direction: row;
        padding-left: 0.2rem;
        padding-top: 0.2rem;
        .led {
            display: none;
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            margin-right: 0.3rem;
            background-color: inherit;
            box-shadow: 0.03rem 0.03rem 0.08rem black inset,
                -0.03rem -0.03rem 0.08rem white inset;
        }
        .led-1 {
            display: block;
            background-color: orange;
            box-shadow: 0.03rem 0.03rem 0.08rem black inset,
                -0.03rem -0.03rem 0.08rem white inset;
        }
        .led-2 {
            display: block;
            background-color: purple;
        }
        .led-3 {
            display: block;
            background-color: rgb(0, 190, 0);
        }
        .led-4 {
            display: block;
            background-color: rgb(0, 183, 255);
        }
    }

    .input-display {
        color: var(--device-yellow);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        grid-row: 1/3;
        grid-column: 1/3;
        justify-self: center;
        align-self: center;
        // font-size: 1.5rem;
        text-align: center;
    }
}
</style>
