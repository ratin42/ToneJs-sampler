import { ref, Ref } from "vue";

class DkScreen {
    line: Ref<string[]> = ref(["", ""]);

    constructor() {
        this.setHome();
    }

    write(nbr: number, text: string) {
        this.line.value[nbr] = text;
    }
    setHome() {
        this.line.value = ["Seq 01    bpm = 90.0", "i"];
    }
}

export { DkScreen };
