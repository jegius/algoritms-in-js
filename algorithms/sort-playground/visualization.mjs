import {
    ALGORITHMS_DIRECTORIES,
    chooseVisualizationType,
    getJsonFiles,
    promptUserToSelectFile, STRING_TO_SYMBOL
} from './utils.mjs';

const [, , type] = process.argv;

export function visualizationByType(type) {
    if (!type in ALGORITHMS_DIRECTORIES) {
        console.log('Недопустимый тип для воспроизведения')
    }
    promptUserToSelectFile(getJsonFiles(ALGORITHMS_DIRECTORIES[STRING_TO_SYMBOL[type]]), chooseVisualizationType)
}

visualizationByType(type);