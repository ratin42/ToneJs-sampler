import * as Tone from "tone";
import { ToneAudioBuffer } from "tone";

type player = typeof Tone.Player;

class Track {
    id: number = 0;
    color: string = "green";
    buffer: Tone.ToneAudioBuffer;
    player: Tone.Player | null;

    constructor(id: number, sampleUrl: string, color: string) {
        this.id = id;
        this.color = color;
        this.player = null;
        this.buffer = new Tone.ToneAudioBuffer(sampleUrl, () => {
            this.player = new Tone.Player(this.buffer).toDestination();
            console.log("loaded");
        });
    }
}
