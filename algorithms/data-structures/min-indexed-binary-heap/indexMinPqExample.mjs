import {IndexMinPQ} from './IndexMinPQ.mjs';

function runMinPriorityQueueShowcase() {
    const priorityQueue1 = new IndexMinPQ(10);
    const priorityQueue2 = new IndexMinPQ(10);

    priorityQueue1.insert(2, "Alice");
    priorityQueue1.insert(1, "Bob");

    priorityQueue2.insert(3, "Charlie");
    priorityQueue2.insert(4, "David");

    const mergeMinPQs = (pq1, pq2) => {
        let merged = new IndexMinPQ(Math.max(pq1.maximumSize, pq2.maximumSize));

        for (let i = 0; i < pq1.size(); i++) {
            merged.insert(pq1.priorityQueue[i+1], pq1.keyValues[pq1.priorityQueue[i+1]]);
        }
        for (let i = 0; i < pq2.size(); i++) {
            merged.insert(pq2.priorityQueue[i+1], pq2.keyValues[pq2.priorityQueue[i+1]]);
        }
        return merged;
    }

    let mergedQueue = mergeMinPQs(priorityQueue1, priorityQueue2);

    console.log(mergedQueue.minItem()); // "Bob"
    mergedQueue.deleteMin();
    console.log(mergedQueue.minItem()); // "Alice"
}

runMinPriorityQueueShowcase();