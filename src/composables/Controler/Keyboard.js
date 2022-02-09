const keyToNote = {
    a: { note: "C", pressed: false, octave: 4 },
    w: { note: "C#", pressed: false, octave: 4 },
    s: { note: "D", pressed: false, octave: 4 },
    e: { note: "D#", pressed: false, octave: 4 },
    d: { note: "E", pressed: false, octave: 4 },
    f: { note: "F", pressed: false, octave: 4 },
    t: { note: "F#", pressed: false, octave: 4 },
    g: { note: "G", pressed: false, octave: 4 },
    y: { note: "G#", pressed: false, octave: 4 },
    h: { note: "A", pressed: false, octave: 4 },
    u: { note: "A#", pressed: false, octave: 4 },
    j: { note: "B", pressed: false, octave: 4 },
    k: { note: "C", pressed: false, octave: 4 },
    last: "",
}

export function useKeyboardEvent(
    instance = null,
    instrument = null,
    transpose = 0
) {
    let currentOctave = 4

    window.addEventListener("keydown", (e) => {
        let key = e.key.toLowerCase()
        let modifier = 0
        let note = null

        if (key === "z" && currentOctave > -3) {
            currentOctave -= 1
            return
        }
        if (key === "x" && currentOctave < 11) {
            currentOctave += 1
            return
        }
        if (keyToNote[key]) {
            if (keyToNote[key].pressed) {
                return
            }

            instrument.start(0, 4)
            keyToNote[key].pressed = true
            //     if (key === "k") {
            //         note = keyToNote[key].note + (currentOctave + 1).toString()
            //         keyToNote[key].octave = currentOctave + 1
            //     } else {
            //         note = keyToNote[key].note + currentOctave.toString()
            //         keyToNote[key].octave = currentOctave
            //     }
            //     keyToNote.last = note
            console.log("keydown", note)
        }
    })

    window.addEventListener("keyup", (e) => {
        let key = e.key.toLowerCase()
        let note = null

        if (keyToNote[key]) {
            let lastNote = keyToNote.last

            instrument.stop()
            console.log("keyup")
            keyToNote[key].pressed = false
        }
    })
}
