import type { TrackMapping } from "@/composables/Track/TrackMapping";

function setMultiTrack(dk: any, trackId: number) {
    // dk.resetTrackPlayCallBack();
}

function multiPitchHandler(dk: any, trackId: number) {
    dk.resetTrackPlayCallBack();
    dk.screen.write(1, "Track " + trackId);
    let currentTrack = dk.trackArray.value[trackId];
    let pitchIndex = 8;
    dk.trackMapping.value.forEach((track: TrackMapping) => {
        track.play = currentTrack.startPlayer;
        track.stop = currentTrack.stopPlayer;
        track.pitch = pitchIndex;
        track.trackId = trackId;

        console.log("pitchIndex: " + pitchIndex);
        pitchIndex += 1;
    });
    console.log("dk is ", dk);
    console.log("trackIs is ", trackId);
}

function setUpMultiPitch(dk: any) {
    dk.trackPlayCallBack = (trackId: number) => multiPitchHandler(dk, trackId);
    dk.screen.write(0, "Multi-Pitch");
    dk.screen.write(1, "Select a Track");
}

export { setUpMultiPitch };
