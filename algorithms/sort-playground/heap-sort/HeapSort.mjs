import {IndexMinPQ} from '../../data-structures/min-indexed-binary-heap/IndexMinPQ.mjs';

export function heapSort(array, frameMaker) {
    const pq = new IndexMinPQ(array.length);

    // Заполнение очереди с приоритетами элементами массива
    for (let i = 0; i < array.length; i++) {
        pq.insert(i, array[i]);
    }

    // Удаление элементов из очереди с приоритетами
    // и добавление их к результату в отсортированном порядке
    const data = [];
    while (!pq.isEmpty()) {
        data.push(pq.minItem());
        pq.deleteMin();
    }

    return {data, frameMaker};
}