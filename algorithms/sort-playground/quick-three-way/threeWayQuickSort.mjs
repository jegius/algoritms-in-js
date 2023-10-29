import {compare, swap} from '../utils.mjs';

export function threeWayQuickSort(data, frameMaker) {
    sort(data, 0, data.length - 1, frameMaker);
    return {data, frameMaker};
}

function sort(data, lowIndex, heightIndex, frameMaker) {
    if (heightIndex <= lowIndex) {
        return;
    }

    let leftPointer = lowIndex;
    let next = lowIndex + 1;
    let rightPointer = heightIndex;
    const midData = data[lowIndex];

    while (next <= rightPointer) {
        const compareResult = compare(data[next], midData);

        frameMaker && frameMaker(data);
        if (compareResult < 0) {
            swap(data, leftPointer++, next++);
        } else if (compareResult > 0) {
            swap(data, next, rightPointer--);
        } else {
            next++;
        }
    }
    sort(data, lowIndex, leftPointer - 1);
    sort(data, rightPointer + 1, heightIndex);
}
