import {insertSortBody} from './insertSort.mjs';
export function shellSort(data) {
    const size = data.length;
    let gap = 1;
    const PARTS = 3;

    while (gap < size / PARTS) {
        gap = PARTS * gap + 1;
    }

    while (gap >= 1) {
        data = insertSortBody(data, size, gap);
        gap = Math.floor(gap / PARTS);
    }

    return data;
}
