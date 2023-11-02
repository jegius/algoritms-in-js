export class PriorityQueue {
    constructor() {
        this.queue = [null];
    }

    insert(value) {
        const newQueue = [...this.queue, value];
        this.queue = this.swim(newQueue, newQueue.length - 1);
    }

    delMax() {
        let max = this.queue[1];
        this.queue = this.sink(this.exchange(this.queue, 1, this.queue.length - 1), 1);
        this.queue.pop();
        return max;
    }

    swim(queue, index) {
        let newIndex = index;
        while (newIndex > 1 && this.less(queue, Math.floor(newIndex / 2), newIndex)) {
            queue = this.exchange(queue, newIndex, Math.floor(newIndex / 2));
            newIndex = Math.floor(newIndex / 2);
        }
        return queue;
    }

    sink(queue, index) {
        let newIndex = index;
        while (2 * newIndex <= queue.length - 1) {
            let j = 2 * newIndex;
            if (j < queue.length - 1 && this.less(queue, j, j + 1)) {
                j++;
            }
            if (!this.less(queue, newIndex, j)) {
                break;
            }
            queue = this.exchange(queue, newIndex, j);
            newIndex = j;
        }
        return queue;
    }

    less(queue, index1, index2) {
        return queue[index1] < queue[index2];
    }

    exchange(queue, index1, index2) {
        return queue.map((value, index) => {
            if (index === index1) return queue[index2];
            if (index === index2) return queue[index1];
            return value;
        });
    }

    isEmpty() {
        return this.queue.length === 1;
    }
}