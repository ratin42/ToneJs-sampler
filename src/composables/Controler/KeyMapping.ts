import { initKeyMapping } from "../../utils/keyMapping";

const loadKeyMapping = () => {
    if (!window.localStorage.getItem("keyMapping")) {
        window.localStorage.setItem(
            "keyMapping",
            JSON.stringify(initKeyMapping)
        );
    }
};

// Get keyMapping from LocalStorage
const getKeyMapping = (category: string) => {
    let keyMapping: any = window.localStorage.getItem("keyMapping");

    if (!keyMapping) {
        loadKeyMapping();
        keyMapping = window.localStorage.getItem("keyMapping");
    }
    keyMapping = JSON.parse(keyMapping)[category];

    if (keyMapping) {
        return keyMapping;
    } else {
        console.log("ERROR: keyMapping not found");
    }
};

export { loadKeyMapping, getKeyMapping };
