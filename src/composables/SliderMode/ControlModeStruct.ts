import { changePitch, changeVolume, changeDecay } from "./MixMode";

const sliderControlMode = {
    tune: {
        function: changePitch,
    },
    mix: {
        function: changeVolume,
    },
    decay: {
        function: changeDecay,
    },
};

export { sliderControlMode };
