export const isJsonString = (value: string) => {
    try {
        JSON.parse(value);
    } catch (e) {
        return false;
    }
    return true;
}

export const getRandomValue = () => {
    const array = new Uint32Array(1);
    return window.crypto.getRandomValues(array)[0];
}