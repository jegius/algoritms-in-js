import {merge} from './descendingMergeSort.mjs';

export function ascendingMergeSort(data) {
    const index = data.length;
    const result = new Array(index);

    for (let sliceIndex = 1; sliceIndex < index; sliceIndex *= 2) {
        for (let lowIndex = 0; lowIndex < index - sliceIndex; lowIndex += sliceIndex * 2) {
            merge(data, lowIndex, lowIndex + sliceIndex - 1, Math.min(lowIndex + sliceIndex * 2 - 1, index - 1), result);
        }
    }
    return data;
}