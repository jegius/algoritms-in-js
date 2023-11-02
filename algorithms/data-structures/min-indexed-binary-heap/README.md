# IndexMinPQ - Очередь приоритетов по минимальному значению

`IndexMinPQ` является классом, используемым для создания индексированной очереди с приоритетами на минимум. Очередь может содержать до `maxN` элементов, индексы используемые для вставки находятся в диапазоне от 0 до `maxN-1`.


## Методы

### constructor(maxN)
Создает новый экземпляр `IndexMinPQ`.
```javascript
const priorityQueue = new IndexMinPQ(10);
```

### isEmpty()
Проверяет, является ли очередь пустой.
```javascript
priorityQueue.isEmpty(); // true
priorityQueue.insert(1, 2);
priorityQueue.isEmpty(); // false
```

### contains(index)
Проверяет, содержит ли очередь заданный индекс.
```javascript
priorityQueue.contains(1); // true
priorityQueue.contains(2); // false
```

### insert(index, item)
Вставляет элемент с указанной приоритетной очередью.
```javascript
priorityQueue.insert(2, 3);
priorityQueue.insert(1, 1);
```

### minItem()
Возвращает наименьший элемент в очереди.
```javascript
priorityQueue.minItem(); // 1
```

### minIndex()
Возвращает индекс наименьшего элемента в очереди.
```javascript
priorityQueue.minIndex(); // 1
```

### deleteMin()
Удаляет и возвращает наименьший элемент в очереди.
```javascript
priorityQueue.deleteMin(); // 1
```

### size()
Возвращает количество элементов в очереди.
```javascript
priorityQueue.size(); // 1
```

## Пример работы

```javascript
const priorityQueue = new IndexMinPQ(10);

priorityQueue.insert(2, "Alice");
priorityQueue.insert(1, "Bob");
priorityQueue.insert(3, "Charlie");

console.log(priorityQueue.minItem()); // "Bob"

priorityQueue.deleteMin();

console.log(priorityQueue.minItem()); // "Alice"
```

## Пример мерджа двух коллекций

```javascript
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