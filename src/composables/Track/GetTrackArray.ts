// Handle track Object
// Create an array of 8 Track Objects

import * as Tone from "tone";
import { ToneAudioBuffer } from "tone";
import { tracksDescription } from "../../utils/tracksDescription.js";

class Track {
    id: number = 0;
    color: string = "green";
    buffer: Tone.ToneAudioBuffer;
    player: Tone.Player | null;
    maxSampleLength: number = 20;
    offset: number = 0;

    constructor(id: number, sampleUrl: string, color: string) {
        this.id = id;
        this.color = color;
        this.player = null;
        this.buffer = new Tone.ToneAudioBuffer(sampleUrl, () => {
            this.player = new Tone.Player(this.buffer).toDestination();
        });
    }

    startPlayer = (velocity: number) => {
        console.log("id,", this.id, "velocity", velocity);
        if (this.player) {
            this.player.start(0, this.offset);
        }
    };
    stopPlayer = () => {
        if (this.player) {
            this.player.stop();
        }
    };

    setOffset = (offset: number) => {
        this.offset = offset;
    };
    getOffset = () => {
        return this.offset;
    };
}

function getNewTrackArray() {
    const tracks: Track[] = [];

    for (let i = 0; i < 8; i++) {
        tracks.push(
            new Track(
                tracksDescription[i].id,
                tracksDescription[i].sampleUrl,
                tracksDescription[i].color
            )
        );
    }
    return tracks;
}

export { getNewTrackArray, Track };
