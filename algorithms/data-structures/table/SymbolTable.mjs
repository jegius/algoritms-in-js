export class SymbolTable {
    constructor() {
        this.keyValuePairs = {};
    }

    insertKeyValue(key, value) {
        this.keyValuePairs[key] = value;
    }

    getValue(key) {
        return this.keyValuePairs[key];
    }

    deleteKey(key) {
        if(this.hasKey(key)) delete this.keyValuePairs[key];
    }

    hasKey(key) {
        return this.keyValuePairs.hasOwnProperty(key);
    }

    isTableEmpty() {
        return this.numberOfPairs() === 0;
    }

    numberOfPairs() {
        return Object.keys(this.keyValuePairs).length;
    }

    minimumKey() {
        let keys = Object.keys(this.keyValuePairs);
        return Math.min.apply(null, keys);
    }

    maximumKey() {
        let keys = Object.keys(this.keyValuePairs);
        return Math.max.apply(null, keys);
    }

    highestKeyUnder(key) {
        let keys = this.getAllKeys().filter(k => k <= key);
        return Math.max.apply(null, keys);
    }

    lowestKeyAbove(key) {
        let keys = this.getAllKeys().filter(k => k >= key);
        return Math.min.apply(null, keys);
    }

    rankOfKey(key) {
        return this.getAllKeys().filter(k => k < key).length;
    }

    selectKey(k) {
        let keys = this.getAllKeys();
        keys.sort((a, b) => a - b);
        return keys[k];
    }

    deleteMinimumKey() {
        this.deleteKey(this.minimumKey());
    }

    deleteMaximumKey() {
        this.deleteKey(this.maximumKey());
    }

    subTableSize(low, high) {
        let keys = this.getAllKeys().filter(k => k >= low && k <= high);
        return keys.length;
    }

    keysWithin(low, high) {
        return this.getAllKeys().filter(k => k >= low && k <= high);
    }

    getAllKeys() {
        return Object.keys(this.keyValuePairs);
    }
}