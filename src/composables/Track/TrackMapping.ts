import { ref, Ref } from "vue";
import type { trackArray } from "@/composables/Track/GetTrackArray";

interface TrackMapping {
    play: Function;
    stop: Function;
    pitch: number;
    volume: number;
    trackId: number;
    sliderUp: Function;
    sliderDown: Function;
}

function setTrackMapping(trackArray: Ref<trackArray>) {
    let trackMapping: TrackMapping[] = [];

    trackArray.value.forEach((track, index) => {
        let tm = {
            play: track.startPlayer,
            stop: track.stopPlayer,
            pitch: 16,
            volume: 0,
            trackId: index,
            sliderUp: () => {},
            sliderDown: () => {},
        };
        trackMapping.push(tm);
    });
    return trackMapping;
}

export type { TrackMapping };
export { setTrackMapping };
