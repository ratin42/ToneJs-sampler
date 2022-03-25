import * as Tone from "tone";
import { Ref } from "vue";
import { trackArray } from "../Track/GetTrackArray";
const MIN_VOLUME = -60;
const MAX_VOLUME = 12;

function getTrackById(trackArray: Ref<trackArray>, trackId: number) {
    let track = trackArray.value.find((track) => track.id === trackId);
    return track;
}
function changePitch(
    trackArray: Ref<trackArray>,
    trackId: number,
    value: number
) {
    let track = getTrackById(trackArray, trackId);
    if (track) {
        track.changePitch(value);
    }
}

function changeVolume(
    trackArray: Ref<trackArray>,
    trackId: number,
    value: number
) {
    // min -60 / mid 0 / max +12
    let track = getTrackById(trackArray, trackId);
    if (track && track.player) {
        if (value > MAX_VOLUME) {
            track.sliderValue = track.currentVolume;
            return;
        }
        if (value <= MIN_VOLUME) {
            track.currentVolume = MIN_VOLUME;
            track.sliderValue = track.currentVolume;
            track.player.mute = true;
            return;
        }
        if (value > MIN_VOLUME) {
            track.player.volume.value = value;
            track.currentVolume = value;
        }
    }
}

export { changePitch, changeVolume };
