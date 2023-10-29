import {less, swap} from './utils.mjs';

export function insertSortBody(data, size, gap = 1) {
    for (let counter = gap; counter < size; counter++) {
        for (let insertIndex = counter; insertIndex >= gap && less(data[insertIndex], data[insertIndex - gap]); insertIndex -= gap) {
            swap(data, insertIndex, insertIndex - gap);
        }
    }
    return data;
}

export function insertSort(data) {
    let size = data.length;
    insertSortBody(data, size)
    return data;
}
