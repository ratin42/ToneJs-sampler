import { ref, Ref } from "vue";

class DkScreen {
    line: Ref<string[]> = ref(["", ""]);

    constructor() {
        this.resetLine();
    }

    getHomeLine(): string[] {
        return ["Seq 01    bpm = 90.0", "i"];
    }
    write(nbr: number, text: string) {
        this.line.value[nbr] = text;
    }
    resetLine() {
        this.line.value = this.getHomeLine();
    }
}

export { DkScreen };
