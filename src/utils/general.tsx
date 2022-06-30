export const isJsonString = (value: string) => {
    try {
        JSON.parse(value);
    } catch (e) {
        return false;
    }
    return true;
}