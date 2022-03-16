// Handle playing mode
// Get from 'GetTrackArray' an array of 8 Track Objects

import { getNewTrackArray, Track } from "./GetTrackArray";

class PlayModeHandler {
    trackArray: Track[] = [];

    constructor() {
        this.trackArray = getNewTrackArray();
    }

    test() {
        console.log("test");
    }
    playSound(trackId: number, velocity: number) {
        console.log("playSound", trackId, velocity);
        const track = this.trackArray.find((track) => track.id === trackId);
        if (track) {
            track.startPlayer(velocity);
        }
    }
    stopSound(trackId: number) {
        const track = this.trackArray.find((track) => track.id === trackId);
        if (track) {
            track.stopPlayer();
        }
    }
}

const layoutHandler = new PlayModeHandler();

export { layoutHandler };
