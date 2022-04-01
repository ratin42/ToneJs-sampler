// Main object
// Handle playing mode
// Get from 'GetTrackArray' an array of 8 Track Objects

import { ref, Ref } from "vue";
import { getNewTrackArray, Track } from "./Track/GetTrackArray";
import type { trackArray } from "./Track/GetTrackArray";
import { sliderControlMode } from "@/composables/SliderMode/ControlModeStruct";
import * as Tone from "tone";

class DiskoKaset {
    trackBank: trackArray[] = [];
    trackArray: Ref<trackArray> = ref([]);
    controlMode: Ref<string> = ref("");
    currentBank: Ref<number> = ref(0);
    transposeIndex: Ref<number> = ref(0);

    constructor() {
        this.trackBank = getNewTrackArray();
        this.trackArray.value = this.trackBank[0];
    }

    startTransport() {
        if (Tone.Transport.state === "started") {
            Tone.Transport.stop();
        } else {
            Tone.Transport.start();
        }
    }

    trackIdToBank(trackId: number) {
        return trackId + this.currentBank.value * 8;
    }

    playSound(trackId: number) {
        let track = this.trackArray.value.find(
            (track) => track.id === this.trackIdToBank(trackId)
        );
        if (track) {
            // let index = (this.transposeIndex.value % 16) - 1;
            // if (index < 0) {
            //     index = 15;
            // }
            // track.record[index] = 1;
            track.startPlayer();
        }
    }
    stopSound(trackId: number) {
        let track = this.trackArray.value.find(
            (track) => track.id === this.trackIdToBank(trackId)
        );
        if (track) {
            track.stopPlayer();
        }
    }

    setBank() {
        switch (this.currentBank.value) {
            case 0:
                this.currentBank.value = 1;
                this.trackArray.value = this.trackBank[1];
                this.controlModeBind();
                break;
            case 1:
                this.currentBank.value = 2;
                this.trackArray.value = this.trackBank[2];
                this.controlModeBind();
                break;
            case 2:
                this.currentBank.value = 3;
                this.trackArray.value = this.trackBank[3];
                this.controlModeBind();
                break;
            case 3:
                this.currentBank.value = 0;
                this.trackArray.value = this.trackBank[0];
                this.controlModeBind();
                break;
            default:
                this.currentBank.value = 0;
                this.trackArray.value = this.trackBank[0];
                this.controlModeBind();
        }
    }

    setControlMode() {
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
