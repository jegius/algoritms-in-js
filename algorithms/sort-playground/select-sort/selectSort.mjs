import {less, swap} from '../utils.mjs';

export function selectSort(data, frameMaker) {
    return {
        data: data.reduce((baseArray, currentElement, index) => {
            let currentMinIndex = index;
            for(let innerIndex = index + 1; innerIndex <= baseArray.length; innerIndex++) {
                if (less(baseArray[innerIndex], baseArray[currentMinIndex])) {
                    currentMinIndex = innerIndex;
                }
            }
            frameMaker && frameMaker(data);
            swap(baseArray, index, currentMinIndex);
            return baseArray;
        }, data),
        frameMaker
    }
}