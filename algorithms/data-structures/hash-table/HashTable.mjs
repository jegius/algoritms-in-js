export class HashTable {
    constructor(size = 50) {
        this.size = size;
        this.buckets = new Array(size).fill(null).map(() => []);
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    set(key, value) {
        const keyHash = this.hash(key);
        const bucketArray = this.buckets[keyHash];
        const storedElement = bucketArray.find((el) => el.key === key);

        if (storedElement) {
            storedElement.val = value;
        } else {
            bucketArray.push({ key: key, val: value });
        }
    }

    get(key) {
        const keyHash = this.hash(key);
        const bucketArray = this.buckets[keyHash];
        const storedElement = bucketArray.find((el) => el.key === key);

        return storedElement ? storedElement.val : undefined;
    }

    hasKey(key) {
        const keyHash = this.hash(key);
        const bucketArray = this.buckets[keyHash];
        const storedElement = bucketArray.find((el) => el.key === key);

        return !!storedElement;
    }
}