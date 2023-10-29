import {less, swap} from '../utils.mjs';

export function insertSortBody(data, size, gap = 1, frameMaker) {
    for (let counter = gap; counter < size; counter++) {
        for (let insertIndex = counter; insertIndex >= gap && less(data[insertIndex], data[insertIndex - gap]); insertIndex -= gap) {
            frameMaker && frameMaker(data);
            swap(data, insertIndex, insertIndex - gap);
        }
    }
    return data;
}

export function insertSort(data, frameMaker) {
    let size = data.length;
    insertSortBody(data, size, 1, frameMaker)
    return {data, frameMaker};
}
