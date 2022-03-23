// Main object
// Handle playing mode
// Get from 'GetTrackArray' an array of 8 Track Objects

import { ref, Ref } from "vue";
import { getNewTrackArray, Track } from "./Track/GetTrackArray";
import type { trackArray } from "./Track/GetTrackArray";
import { noteTranslation } from "@/utils/noteTranslation";

class DiskoKaset {
    trackBank: trackArray[] = [];
    trackArray: trackArray = [];
    controlMode: Ref<string> = ref("");

    constructor() {
        this.trackBank = getNewTrackArray();
        this.trackArray = this.trackBank[0];
    }

    playSound(trackId: number) {
        const track = this.trackArray.find((track) => track.id === trackId);
        if (track) {
            track.startPlayer();
        }
    }
    stopSound(trackId: number) {
        const track = this.trackArray.find((track) => track.id === trackId);
        if (track) {
            track.stopPlayer();
        }
    }

    setControlMode() {
        switch (this.controlMode.value) {
            case "":
                this.controlMode.value = "tune";
                this.setSliderToTune();
                break;
            case "tune":
                this.controlMode.value = "mix";
                this.resetSlider();
                break;
            case "mix":
                this.controlMode.value = "";
                break;
            default:
                this.controlMode.value = "";
        }
    }
    setSliderToTune() {
        this.trackArray.forEach((track) => {
            track.sliderValue.value = track.currentPitch;
        });
    }
    resetSlider() {
        this.trackArray.forEach((track) => {
            track.sliderValue.value = 0;
        });
    }

    handleSlider(trackId: number, value: number) {
        if (this.controlMode.value === "tune") {
            const track = this.trackArray.find((track) => track.id === trackId);
            if (track) {
                track.changePitch(parseFloat(noteTranslation[value].frequency));
            }
        }
    }
}

const dk = new DiskoKaset();

export { dk };
