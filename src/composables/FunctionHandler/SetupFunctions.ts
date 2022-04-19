import {
    setTrackMapping,
    TrackMapping,
} from "@/composables/Track/TrackMapping";

// Multi Pitch
function multiPitchHandler(dk: any, trackId: number) {
    let currentTrack = dk.trackArray.value[trackId];
    let pitchIndex = 9;

    dk.resetTrackPlayCallBack();
    dk.screen.write(1, "Track " + trackId);

    dk.trackMapping.forEach((track: TrackMapping) => {
        track.play = currentTrack.startPlayer;
        track.stop = currentTrack.stopPlayer;
        track.volume = currentTrack.currentVolume;
        track.pitch = pitchIndex;
        track.trackId = trackId;

        pitchIndex += 1;
    });
    dk.multiMode.value = true;
}

function setUpMultiPitch(dk: any) {
    dk.trackPlayCallBack = (trackId: number) => multiPitchHandler(dk, trackId);
    dk.screen.write(0, "Multi-Pitch");
    dk.screen.write(1, "Select a Track");
}

// Multi Level
function multiLevelHandler(dk: any, trackId: number) {
    let currentTrack = dk.trackArray.value[trackId];
    let levelIndex = currentTrack.currentVolume - 16;

    dk.resetTrackPlayCallBack();
    dk.screen.write(1, "Track " + trackId);

    dk.trackMapping.forEach((track: TrackMapping) => {
        track.play = currentTrack.startPlayer;
        track.stop = currentTrack.stopPlayer;
        track.pitch = currentTrack.currentPitch;
        track.volume = levelIndex;
        track.trackId = trackId;

        levelIndex += 2;
    });
    dk.multiMode.value = true;
}

function setUpMultiLevel(dk: any) {
    dk.trackPlayCallBack = (trackId: number) => multiLevelHandler(dk, trackId);
    dk.screen.write(0, "Multi-Level");
    dk.screen.write(1, "Select a Track");
}

// Exit Multi Mode
function exitMultiMode(dk: any) {
    dk.resetTrackMapping();
    dk.screen.setHome();
    dk.multiMode.value = false;
}
export { setUpMultiPitch, setUpMultiLevel, exitMultiMode };
