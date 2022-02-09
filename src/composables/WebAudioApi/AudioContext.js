import { reactive } from "vue"

export function useGetAudioContext() {
    const AudioContext = window.AudioContext || window.webkitAudioContext

    const audioContext = reactive(new AudioContext())
    return { audioContext }
}

export function useConnectToAudioDest(audioContext, audioElement) {
    let track = audioContext.createMediaElementSource(audioElement)
    return track
}

export function useHandlePlayButton(audioContext, audioElement, playStatus) {
    // check if context is in suspended state (autoplay policy)
    if (audioContext.state === "suspended") {
        audioContext.resume()
    }

    if (playStatus.playStatus === false) {
        audioElement.play()
        playStatus.playStatus = true
    } else if (playStatus.playStatus === true) {
        console.log("in pause")
        audioElement.pause()
        playStatus.playStatus = false
    }
}

export function useChangeVolume(event, gainNode, volumeInfo = null) {
    gainNode.gain.value = event.target.value
    if (volumeInfo != null) {
        volumeInfo.volume = event.target.value
    }
}
