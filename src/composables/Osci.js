export default function Osci(props) {
    const launchAudio = () => {
        var audio = new Audio()
        audio.src = "https://www.soundjay.com/button/sounds/button-9.mp3"
        audio.play()
    }

    const createSynth = () => {
        //create a new instance of the audio context
        const audioContext = new (window.AudioContext ||
            window.webkitAudioContext)()
        //create a new Oscillator node
        const oscillator = audioContext.createOscillator()
        //create a new gain node
        const gainNode = audioContext.createGain()
        //connect the oscillator to the gain node
        oscillator.connect(gainNode)
        //connect the gain node to the audioContext destination
        gainNode.connect(audioContext.destination)
        //start the oscillator
        oscillator.start()
        //stop the oscillator after 1 second
        setTimeout(() => {
            oscillator.stop()
        }, 1000)
    }
    return { launchAudio, createSynth }
}
