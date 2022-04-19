// Main object
// Handle playing mode
// Get from 'GetTrackArray' an array of 8 Track Objects

import { ref, Ref } from "vue";
import { getNewTrackArray } from "./Track/GetTrackArray";
import { DkScreen } from "./DkScreen";
import { setTrackMapping } from "./Track/TrackMapping";
import type { TrackMapping } from "./Track/TrackMapping";
import type { trackArray } from "./Track/GetTrackArray";
import { sliderControlMode } from "@/composables/SliderMode/ControlModeStruct";
import * as Tone from "tone";

interface DkFunctions {
    name?: string;
    function?: Function;
}

const initFunctions: DkFunctions[] = [
    { name: "D", function: () => {} },
    { name: "I", function: () => {} },
    { name: "S", function: () => {} },
    { name: "K", function: () => {} },
    { name: "O", function: () => {} },
    { name: "K", function: () => {} },
    { name: "A", function: () => {} },
    { name: "S", function: () => {} },
    { name: "E", function: () => {} },
    { name: "T", function: () => {} },
];

class DiskoKaset {
    trackBank: trackArray[] = [];
    trackArray: Ref<trackArray> = ref([]);
    trackMapping: Ref<TrackMapping[]> = ref([]);
    controlMode: Ref<string> = ref("");
    currentBank: Ref<number> = ref(0);
    screen: DkScreen = new DkScreen();
    transposeIndex: Ref<number> = ref(0);
    functionDescription: Ref<DkFunctions[]> = ref(initFunctions);
    trackPlayCallBack: Function | null = null;

    constructor() {
        this.trackBank = getNewTrackArray();
        this.trackArray.value = this.trackBank[0];
        this.trackMapping.value = setTrackMapping(this.trackArray);
    }

    trackIdToBank(trackId: number) {
        return trackId + this.currentBank.value * 8;
    }

    startTransport() {
        // Called by RunStop component to start the transport
        if (Tone.Transport.state === "started") {
            Tone.Transport.stop();
        } else {
            Tone.Transport.start();
        }
    }

    resetTrackPlayCallBack() {
        this.trackPlayCallBack = null;
    }

    playSound(trackId: number) {
        console.time("playSound");
        if (this.trackPlayCallBack) {
            this.trackPlayCallBack(trackId);
        }
        this.trackMapping.value[trackId].play(
            this.trackMapping.value[trackId].pitch
        );
        //     // let index = (this.transposeIndex.value % 16) - 1;
        //     // if (index < 0) {
        //     //     index = 15;
        //     // }
        //     // track.record[index] = 1;
    }
    stopSound(trackId: number) {
        this.trackMapping.value[trackId].stop();
    }

    // ******************************************************
    // Function Description
    // ******************************************************
    setFunctionDescription(functions: DkFunctions[]) {
        this.functionDescription.value = functions;
    }
    resetFunctionDescription() {
        this.functionDescription.value = initFunctions;
        this.screen.resetLine();
    }

    setBank() {
        // Called by BankSelect component to switch between banks
        let newBank = (this.currentBank.value + 1) % 4;
        this.currentBank.value = newBank;
        this.trackArray.value = this.trackBank[newBank];
        this.trackMapping.value = setTrackMapping(this.trackArray);
        this.controlModeBind();
    }

    // ******************************************************
    // Control Mode handler
    // ******************************************************
    setControlMode() {
        // Called by TuneMixMulti component to switch between control modes
        switch (this.controlMode.value) {
            case "":
                this.controlMode.value = "tune";
                this.controlModeBind();
                break;
            case "tune":
                this.controlMode.value = "decay";
                this.controlModeBind();
                break;
            case "decay":
                this.controlMode.value = "mix";
                this.controlModeBind();
                break;
            case "mix":
                this.controlMode.value = "";
                this.controlModeBind();
                break;
            default:
                this.controlMode.value = "";
        }
    }
    controlModeBind() {
        // Called at control mode change to handle the sliders value and behavior
        // needed to avoid repetition has slider as to be set itch time the user switch bank
        switch (this.controlMode.value) {
            case "":
                this.setSliderTo(0);
                break;
            case "tune":
                this.setSliderTo("currentPitch");
                break;
            case "decay":
                this.setSliderToDecay();
                break;
            case "mix":
                this.setSliderTo("currentVolume");
                break;
            default:
                this.setSliderTo(0);
        }
    }

    // ******************************************************
    // Slider Setter
    // ******************************************************
    setSliderToDecay() {
        this.trackArray.value.forEach((track) => {
            track.sliderValue = track.currentDecay * 10;
        });
    }
    setSliderTo(value: string | number) {
        this.trackArray.value.forEach((track) => {
            if (typeof value === "string") {
                track.sliderValue = (track as any)[value];
            } else {
                track.sliderValue = value;
            }
        });
    }
    handleSlider(trackId: number, value: number) {
        // call chooseFunction(this.controlMode.value)
        // that will call the function that is associated with the control mode
        // it is represented by a struct in composables/SliderMode/ControlModeStruct

        (sliderControlMode as any)[this.controlMode.value].function(
            this.trackArray,
            this.trackIdToBank(trackId),
            value
        );
    }
}

const dk = new DiskoKaset();

export { dk };
