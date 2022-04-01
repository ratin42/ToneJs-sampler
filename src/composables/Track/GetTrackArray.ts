// Handle track Object
// Create an array of 8 Track Objects

import { ref, Ref } from "vue";
import * as Tone from "tone";
import { ToneAudioBuffer } from "tone";
import { tracksDescription } from "../../utils/tracksDescription.js";
import { noteTranslation } from "@/utils/noteTranslation";

type trackArray = Track[];

class Track {
    id: number = 0;
    color: string = "green";
    buffer: Tone.ToneAudioBuffer;
    player: Tone.Player | null;
    maxSampleLength: number = 20;
    offset: number = 0;
    currentPitch: number = 16;
    currentVolume: number = 0;
    sliderValue: any = ref(0);
    record: any = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    currentDecay: number = 0.2;

    constructor(id: number, sampleUrl: string, color: string) {
        this.id = id;
        this.color = color;
        this.player = null;
        this.buffer = new Tone.ToneAudioBuffer(sampleUrl, () => {
            this.player = new Tone.Player(this.buffer);
            this.player.chain(Tone.Destination);
        });
    }

    checkRecord(index: number, time: number) {
        // index = index--;
        // if (index < 0) {
        //     index = 16;
        // }
        if (this.record[index]) {
            // this.startPlayer();
            if (this.player) {
                this.player.start(time);
            }
            console.log("this.record", this.record);
        }
    }

    startPlayer = () => {
        if (this.player) {
            this.player.start(0, this.offset);
        }
    };
    stopPlayer = () => {
        if (this.player) {
            this.player.stop("+" + this.currentDecay.toString());
        }
    };

    setOffset = (offset: number) => {
        this.offset = offset;
    };
    getOffset = () => {
        return this.offset;
    };

    changePitch = (value: number) => {
        if (value < 0 || value > 32) {
            // Block the slider to the pitch limit

            this.sliderValue.value = this.currentPitch;
        } else {
            let pitch = parseFloat(noteTranslation[value].frequency);

            this.currentPitch = this.sliderValue.value;
            pitch = pitch / 261.637;
            if (this.player) {
                this.player.playbackRate = pitch;
            }
        }
    };
}

function getNewTrackArray() {
    let bank: trackArray[] = [];
    let tracks: trackArray = [];
    let trackIndex = 0;

    for (let b = 0; b < 4; b++) {
        for (let i = 0; i < 8; i++) {
            tracks.push(
                new Track(
                    tracksDescription[trackIndex].id,
                    tracksDescription[trackIndex].sampleUrl,
                    tracksDescription[trackIndex].color
                )
            );
            trackIndex++;
        }
        bank.push(tracks);
        tracks = [];
    }
    return bank;
}

export { getNewTrackArray, Track };
export type { trackArray };
