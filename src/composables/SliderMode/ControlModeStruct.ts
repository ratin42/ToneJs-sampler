import { changePitch, changeVolume } from "./MixMode";

const sliderControlMode = {
    tune: {
        function: changePitch,
    },
    mix: {
        function: changeVolume,
    },
};

export { sliderControlMode };
