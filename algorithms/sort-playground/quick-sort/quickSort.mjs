import {less, swap} from '../utils.mjs';

export function quickSort(data, frameMaker) {
    sort(data, 0, data.length - 1, frameMaker);
    return {data, frameMaker};
}

function sort(data, lowIndex, heightIndex, frameMaker) {
    if (heightIndex <= lowIndex) {
        return;
    }
    frameMaker && frameMaker(data)

    const pivot = partition(data, lowIndex, heightIndex);
    sort(data, lowIndex, pivot - 1, frameMaker);
    sort(data, pivot + 1, heightIndex, frameMaker);
}

function partition(data, lowIndex, heightIndex) {
    let leftPoint = lowIndex;
    let rightPoint = heightIndex + 1;
    const mid = data[lowIndex];

    while (true) {
        while (less(data[++leftPoint], mid)) {
            if (leftPoint === heightIndex) {
                break;
            }
        }
        while (less(mid, data[--rightPoint])) {
            if (rightPoint === lowIndex) {
                break;
            }
        }

        if (leftPoint >= rightPoint) {
            break;
        }

        swap(data, leftPoint, rightPoint);
    }
    swap(data, lowIndex, rightPoint);
    return rightPoint;
}