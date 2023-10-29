import {less} from '../utils.mjs';

export function merge(data, lowIndex, mid, heightIndex, result){
    let index = lowIndex;
    let temp = mid + 1;

    for (let mergeIndex = lowIndex; mergeIndex <= heightIndex; mergeIndex++) {
        result[mergeIndex] = data[mergeIndex];
    }

    for (let mergeIndex = lowIndex; mergeIndex <= heightIndex; mergeIndex++) {
        if (index > mid) {
            data[mergeIndex] = result[temp++];
        } else if (temp > heightIndex){
            data[mergeIndex] = result[index++];
        } else if (less(result[temp], result[index])) {
            data[mergeIndex] = result[temp++];
        } else {
            data[mergeIndex] = result[index++];
        }
    }
}

export function descendingMergeSort(data, frameMaker) {
    const result = [];
    sort(data, 0, data.length - 1, result, frameMaker);
    return {data, frameMaker};
}

function sort(data, lowIndex, heightIndex, result, frameMaker) {
    if (heightIndex <= lowIndex) {
        return;
    }

    frameMaker && frameMaker(data);

    const mid = lowIndex + (heightIndex - lowIndex) / 2;
    sort(data, lowIndex, mid, result, frameMaker);
    sort(data, mid + 1, heightIndex, result, frameMaker);
    merge(data, lowIndex, mid, heightIndex, result, frameMaker);
}