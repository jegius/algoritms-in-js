import * as fs from 'fs';

export function less(first, second) {
    return first <= second;
}

export function swap(comparable, firstPointer, secondPointer) {
    const temp = comparable[firstPointer];
    comparable[firstPointer] = comparable[secondPointer];
    comparable[secondPointer] = temp;
    return comparable;
}

export function show(comparable) {
    console.log(comparable.join(','));
    return comparable;
}

export function generateData(size = 10) {
    return new Array(size)
        .fill(0)
        .map(() => Math.round(Math.random() * 1000) / Math.floor(Math.random() * 10));
}


export function carry(func) {
    return (newArguments) => func(newArguments);
}

export function sort(sortAlgorithm, data) {
    return sortAlgorithm(data);
}

export function isSorted(comparable) {
    return comparable.reduce((result, second, index) => {
        const isEndOfArray = !comparable[index + 1];
        if (!result || isEndOfArray) {
            return result;
        }
        return less(second, comparable[index + 1]);
    }, true);
}

export function compose(...functions) {
    return (args) => functions.reduce((result, func) => func(result), args);
}

export function timeTaken(fn) {
    return function (...args) {
        const before = Date.now();
        const result = fn.apply(this, args);
        const after = Date.now();
        const time = new Date(after - before);
        return {result, time: `${time.getSeconds()}s.${time.getMilliseconds()}ms`};
    };
}

export const EXAMPLE = ['S', 'O', 'R', 'T', 'E', 'X', 'A', 'P', 'L', 'E'];
export const SECOND_EXAMPLE = [22, 1, 43, 142, 32, 53, 66, 123];

export function logResult(sortType, items, time, isSorted) {
    return `
===============================
[algorithm type: ${sortType}]
[elements: ${items}]
[time: ${time}]
[isSorted: ${isSorted}]
================================\n`;
}

const LOG_FILE_NAME = './algoritms/sort-playground/log/sorting_log.txt';

export function logAlgorithmResult(sortType) {
    return function ({result, time}) {
        const resultLog = logResult(sortType.toString(), result.length, time, isSorted(result));
        console.log(resultLog);
        createFileWithNameAndWriteString(LOG_FILE_NAME, resultLog);
    };
}

export function createFileWithNameAndWriteString(fileName, content) {
    fs.appendFile(fileName, content, function (error) {
        if (error) throw error;
        console.log('Content added to file successfully.');
    });
}
