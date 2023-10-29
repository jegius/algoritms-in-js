import {
    carry,
    compose,
    EXAMPLE,
    generateData,
    logAlgorithmResult,
    timeTaken
} from './utils.mjs';
import {shellSort} from './shellSort.mjs';
import {selectSort} from './selectSort.mjs';
import {insertSort} from './insertSort.mjs';
import {descendingMergeSort} from './descendingMergeSort.mjs';
import {ascendingMergeSort} from './ascendingMergeSort.mjs';

const SORT_TYPE = {
    select: Symbol('selectSort'),
    insert: Symbol('insert'),
    shell: Symbol('shell'),
    descendingMergeSort: Symbol('descendingMergeSort'),
    ascendingMergeSort: Symbol('ascendingMergeSort')
}

const SORT_FUNCTION = new Map([
    [SORT_TYPE.insert, insertSort],
    [SORT_TYPE.select, selectSort],
    [SORT_TYPE.shell, shellSort],
    [SORT_TYPE.descendingMergeSort, descendingMergeSort],
    [SORT_TYPE.ascendingMergeSort, ascendingMergeSort],
])

function run(arg = EXAMPLE, sortType = SORT_TYPE.shell){
    const curriedSort = carry(SORT_FUNCTION.get(sortType))
    compose(
        timeTaken(curriedSort),
        logAlgorithmResult(sortType),
    )(arg)

}

run(generateData(1000), SORT_TYPE.ascendingMergeSort);
