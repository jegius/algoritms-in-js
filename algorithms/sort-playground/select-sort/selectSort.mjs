import {less, swap} from './utils.mjs';

export function selectSort(data) {
    return data.reduce((baseArray, currentElement, index) => {
        let currentMinIndex = index;
        for(let innerIndex = index + 1; innerIndex <= baseArray.length; innerIndex++) {
            if (less(baseArray[innerIndex], baseArray[currentMinIndex])) {
                currentMinIndex = innerIndex;
            }
        }
        swap(baseArray, index, currentMinIndex);
        return baseArray;
    }, data)
}