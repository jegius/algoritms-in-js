import {
    carry,
    compose,
    EXAMPLE,
    generateData,
    logAlgorithmResult,
    saveFrames,
    SORT_TYPE,
    STRING_TO_SYMBOL,
    timeTaken
} from './utils.mjs';
import {shellSort} from './shell-sort/shellSort.mjs';
import {selectSort} from './select-sort/selectSort.mjs';
import {insertSort} from './insert-sort/insertSort.mjs';
import {descendingMergeSort} from './descending-merge-sort/descendingMergeSort.mjs';
import {ascendingMergeSort} from './ascending-merge-sort/ascendingMergeSort.mjs';
import {quickSort} from './quick-sort/quickSort.mjs';
import {threeWayQuickSort} from './quick-three-way/threeWayQuickSort.mjs';
import {heapSort} from './heap-sort/HeapSort.mjs';


const SORT_FUNCTION = new Map([
    [SORT_TYPE.insert, insertSort],
    [SORT_TYPE.select, selectSort],
    [SORT_TYPE.shell, shellSort],
    [SORT_TYPE.descendingMergeSort, descendingMergeSort],
    [SORT_TYPE.ascendingMergeSort, ascendingMergeSort],
    [SORT_TYPE.quickSort, quickSort],
    [SORT_TYPE.threeWayQuickSort, threeWayQuickSort],
    [SORT_TYPE.heapSort, heapSort],
]);

function run(arg = EXAMPLE, sortType = SORT_TYPE.shell, makeFrames = false){
    const curriedSort = carry(SORT_FUNCTION.get(sortType), sortType, makeFrames)
    compose(
        timeTaken(curriedSort),
        saveFrames,
        logAlgorithmResult(sortType),
    )(arg)

}

const [, , size, type, makeFrameShot = false] = process.argv;

run(generateData(Number(size)), STRING_TO_SYMBOL[type], makeFrameShot);