import { listKey } from "../constants/constants.js";

export function retrieveFromStorage() {
    const currentList = localStorage.getItem(listKey);

    if (!currentList) {
        return [];
    } else {
        return JSON.parse(currentList);
    }
}