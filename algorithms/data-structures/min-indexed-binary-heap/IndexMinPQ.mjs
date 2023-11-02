export class IndexMinPQ {
    constructor(maxN) {
        this.priorityQueue = [];
        this.reversePQ = [];
        this.keyValues = [];
        this.totalValues = 0;
        this.maximumSize = maxN;

        for (let index = 0; index <= maxN; index++) {
            this.reversePQ[index] = -1;
        }

    }

    isEmpty() {
        return this.totalValues === 0;
    }

    contains(index) {
        if (index < 0 || index >= this.maximumSize) throw new Error('index out of bounds');
        return this.reversePQ[index] !== -1;
    }

    insert(index, item) {
        if (index < 0 || index >= this.maximumSize) throw new Error('index out of bounds');
        if (this.contains(index)) throw new Error('index is already in the priority queue');
        this.totalValues++;
        this.reversePQ[index] = this.totalValues;
        this.priorityQueue[this.totalValues] = index;
        this.keyValues[index] = item;
        this.swim(this.totalValues);
    }

    minItem() {
        if (this.totalValues === 0) throw new Error('Priority queue underflow');
        return this.keyValues[this.priorityQueue[1]];
    }

    minIndex() {
        if (this.totalValues === 0) throw new Error('Priority queue underflow');
        return this.priorityQueue[1];
    }

    deleteMin() {
        if (this.totalValues == 0) throw new Error('Priority queue underflow');
        let minimum = this.priorityQueue[1];
        this.exchange(1, this.totalValues--);
        this.sink(1);
        this.reversePQ[minimum] = -1;
        this.keyValues[minimum] = null;
        this.priorityQueue[this.totalValues + 1] = -1;
        return minimum;
    }

    size() {
        return this.totalValues;
    }

    swim(index) {
        while (index > 1 && this.more(Math.floor(index / 2), index)) {
            this.exchange(index, Math.floor(index / 2));
            index = Math.floor(index / 2);
        }
    }

    sink(index) {
        while (2 * index <= this.totalValues) {
            let indexSubvalue = 2 * index;
            if (indexSubvalue < this.totalValues && this.more(indexSubvalue, indexSubvalue + 1)) indexSubvalue++;
            if (!this.more(index, indexSubvalue)) break;
            this.exchange(index, indexSubvalue);
            index = indexSubvalue;
        }
    }

    more(index1, index2) {
        return this.keyValues[this.priorityQueue[index1]] > this.keyValues[this.priorityQueue[index2]];
    }

    exchange(index1, index2) {
        let tempIndex = this.priorityQueue[index1];
        this.priorityQueue[index1] = this.priorityQueue[index2];
        this.priorityQueue[index2] = tempIndex;
        this.reversePQ[this.priorityQueue[index1]] = index1;
        this.reversePQ[this.priorityQueue[index2]] = index2;
    }
}