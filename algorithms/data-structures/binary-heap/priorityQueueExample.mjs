import {PriorityQueue} from './PriorityQueue.mjs';

function runPriorityQueueShowcase() {
    const pq = new PriorityQueue();
    pq.insert(10);
    pq.insert(20);
    pq.insert(30);
    pq.insert(5);


    console.assert(pq.delMax() === 30, "Куча должна вернуть 30!");
    console.assert(pq.delMax() === 20, "Куча должна вернуть 20!");

    console.log("Если нет записей об ошибках в консоле, то тест пройден!");
}

runPriorityQueueShowcase();