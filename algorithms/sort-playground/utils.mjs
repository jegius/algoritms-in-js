import * as fs from 'fs';
import {createInterface} from 'readline';
import * as path from 'path';

export function less(first, second) {
    return first <= second;
}

export const SORT_TYPE = {
    select: Symbol('selectSort'),
    insert: Symbol('insert'),
    shell: Symbol('shell'),
    descendingMergeSort: Symbol('descendingMergeSort'),
    ascendingMergeSort: Symbol('ascendingMergeSort'),
    quickSort: Symbol('quickSort'),
    threeWayQuickSort: Symbol('threeWayQuickSort'),
    heapSort: Symbol('heapSort'),
}

export const ALGORITHMS_DIRECTORIES = {
    [SORT_TYPE.shell]: './shell-sort',
    [SORT_TYPE.insert]: './insert-sort',
    [SORT_TYPE.select]: './select-sort',
    [SORT_TYPE.descendingMergeSort]: './descending-merge-sort',
    [SORT_TYPE.ascendingMergeSort]: './ascending-merge-sort',
    [SORT_TYPE.quickSort]: './quick-sort',
    [SORT_TYPE.threeWayQuickSort]: './quick-three-way',
    [SORT_TYPE.heapSort]: './heap-sort',
}

export const STRING_TO_SYMBOL = {
    ['insert']: SORT_TYPE.insert,
    ['select']: SORT_TYPE.select,
    ['shell']: SORT_TYPE.shell,
    ['descendingMergeSort']: SORT_TYPE.descendingMergeSort,
    ['ascendingMergeSort']: SORT_TYPE.ascendingMergeSort,
    ['quickSort']: SORT_TYPE.quickSort,
    ['threeWayQuickSort']: SORT_TYPE.threeWayQuickSort,
    ['heapSort']: SORT_TYPE.heapSort,
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
        .map(() => {
            const number = Math.round(Math.random() * 1000) / Math.floor(Math.random() * 10);
            return number === Infinity || isNaN(number) ? Math.random() * 10 : number;
        });
}


export function carry(func, algorithm, makeFrames = false) {
    const frameMaker = makeFrames ? prepareJson(algorithm) : null;
    return (newArguments) => func(newArguments, frameMaker);
}

export function sort(sortAlgorithm, data) {
    return sortAlgorithm(data);
}

export function isSorted(comparable) {
    for (let i = 0, len = comparable.length - 1; i < len; i++) {
        if (comparable[i] > comparable[i + 1]) {
            return false;
        }
    }
    return true;
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

export function logResult(sortType, items, time, isSorted) {
    return `
===============================
[algorithm type: ${sortType}]
[elements: ${items}]
[time: ${time}]
[isSorted: ${isSorted}]
================================\n`;
}

const LOG_FILE_NAME = './log/sorting_log.txt';

export function logAlgorithmResult(sortType) {
    return function ({result, time}) {
        const resultLog = logResult(sortType.toString(), result.data.length, time, isSorted(result));
        console.log(resultLog);
        createFileWithNameAndWriteString(LOG_FILE_NAME, resultLog);
    };
}

export function prepareJson(algorithm) {
    const frames = [];
    return function (data) {
        if (data) {
            frames.push(printGraph(data));
        } else {
            return {
                path: ALGORITHMS_DIRECTORIES[algorithm],
                frames
            };
        }
    }
}

export function saveFrames({result, time}) {
    if (result.frameMaker) {
        const {path, frames} = result.frameMaker();
        createFileWithNameAndWriteString(`${path}/${result.data.length}_frames.json`, JSON.stringify({frames}))
    }
    return {result, time};
}

export function compare(first, second) {
    if (first > second) {
        return 1;
    } else if (first < second) {
        return -1;
    } else {
        return 0;
    }
}

export function printGraph(data) {
    const MAX_HEIGHT = 10;
    const MAX_WIDTH = 100;
    const GRAPH_SPACE = ' ';
    const GRAPH_BAR = '|';
    const AXIS_SYMBOL = '_';

    const maxValueInData = Math.max(...data);

    let scaledData = data.length > MAX_WIDTH ? data.reduce((acc, currentValue, index) => {
        if (index % Math.floor(data.length / MAX_WIDTH) === 0) {
            let sum = 0;
            for (let i = index; i < index + Math.floor(data.length / MAX_WIDTH); i++) {
                sum = sum + data[i];
            }
            acc.push(sum / Math.floor(data.length / MAX_WIDTH));
        }
        return acc;
    }, []) : [...data];

    let scaledAndRoundedData = scaledData.map(value => Math.round(value / maxValueInData * MAX_HEIGHT));

    let emptyGraph = Array(MAX_HEIGHT).fill('').map(() => Array(scaledAndRoundedData.length).fill(GRAPH_SPACE));
    let graphWithBars = scaledAndRoundedData.reduce((graph, value, index) => {
        for(let height = 0; height < value; height++){
            graph[MAX_HEIGHT - 1 - height][index] = GRAPH_BAR;
        }
        return graph;
    }, emptyGraph);

    graphWithBars.push(Array(scaledAndRoundedData.length).fill(AXIS_SYMBOL));
    return graphWithBars.map(line => line.join('')).join('\n');
}

export function createFileWithNameAndWriteString(fileName, content) {
    fs.appendFile(fileName, content, function (error) {
        if (error) throw error;
        console.log('Content added to file successfully.');
    });
}

function readAndParseJSON(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Ошибка при чтении или парсинге файла: ${error}`);
    }
}

const EXIT_SIGN = 3;

const VISUALIZATION_TYPE = new Map([
    [1, 'Пошаговое'],
    [2, 'Непрерывное'],
    [EXIT_SIGN, 'Выйти'],
])

export async function visualization(path){
    const dataToVisualization = readAndParseJSON(path);
    if (!dataToVisualization?.frames) {
        console.error('Incorrect JSON format!');
    }
    const readlineInterface = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    await permanentVisualization(readlineInterface, dataToVisualization);

}

function permanentVisualization(readlineInterface, dataToVisualization) {
    return new Promise((resolve) => {
        const {frames} = dataToVisualization;
        let currentIndex = 0;

        const interval = setInterval(() => {
            console.clear();
            console.log(frames[currentIndex++])

            if (!frames[currentIndex++]) {
                clearInterval(interval);
                resolve();
            }

        })
    })
}



export async function chooseVisualizationType(readlineInterface, dataToVisualizationPath) {
    readlineInterface.question('Выберите формат воспроизведения: ', async (userInput) => {
        for(const [key, text] of VISUALIZATION_TYPE.entries()) {
            console.log(`${key}: ${text}`);
        }
        const input = parseInt(userInput);

        if (VISUALIZATION_TYPE.has(input)){
            console.clear();
            await visualization(dataToVisualizationPath)
        } else if(input === EXIT_SIGN){
            console.log('Выход из приложения');
        } else {
            console.log('Невозможное действие');
            await chooseVisualizationType(readlineInterface, dataToVisualizationPath)
        }
    });
}

export function getJsonFiles(directoryPath) {
    console.log(directoryPath)
    const filesAndDirectories = fs.readdirSync(directoryPath);
    const jsonFiles = filesAndDirectories.filter(fileName => path.extname(fileName) === '.json');
    return jsonFiles.map(fileName => path.join(directoryPath, fileName));
}

export function promptUserToSelectFile(filePaths, visualizationCallback) {
    const readlineInterface = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    if (!filePaths.length) {
        console.log('Отсутствуют JSON файлы для воспроизведения');
    }

    filePaths.forEach((filePath, index) => {
        console.log(`${index + 1}: ${filePath}`);
    });

    readlineInterface.question('Выберите файл, введя его номер: ', (userInput) => {
        const selectedFile = filePaths[parseInt(userInput) - 1];

        if (selectedFile) {
            console.log(`Вы выбрали: ${selectedFile}`);
            visualizationCallback(readlineInterface, selectedFile);
        } else {
            console.log('Введен недопустимый номер.');
        }
    });
}