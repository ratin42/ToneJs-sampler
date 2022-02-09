import { useKeyboardEvent } from "./Keyboard"

export function useControlerContainer(
    controlerType,
    instance,
    instrument,
    transpose
) {
    if (controlerType === "keyboard") {
        useKeyboardEvent(instance, instrument, transpose)
    }
}
