import { Ref } from "vue";
import { trackArray } from "../Track/GetTrackArray";

function changePitch(
    trackArray: Ref<trackArray>,
    trackId: number,
    value: number
) {
    let track = trackArray.value.find((track) => track.id === trackId);
    if (track) {
        track.changePitch(value);
    }
}

export { changePitch };
