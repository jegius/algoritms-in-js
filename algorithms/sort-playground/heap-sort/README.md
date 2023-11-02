# Пирамидальная сортировка с использованием IndexMinPQ

Пирамидальная сортировка - это эффективный алгоритм сортировки, который использует бинарную пирамиду. В данном случае мы реализуем пирамидальную сортировку с использованием индексированной минимальной очереди с приоритетами (IndexMinPQ).

## Как это работает

1. Функция `heapSort` принимает на вход массив, который нужно отсортировать.

   ```javascript
   const array = [7, 2, 8, 4, 1, 6];
   ```

2. Создается объект `pq` класса `IndexMinPQ`, количество элементов которого будет равно размеру входного массива.

   ```javascript
   let pq = new IndexMinPQ(array.length);
   ```

3. Все элементы входного массива вставляются в очередь с приоритетами.

   ```javascript
   for (let i = 0; i < array.length; i++) {
       pq.insert(i, array[i]);
   }
   ```

   В результате этих операций в очереди формируется бинарная пирамида.

4. Затем происходит удаление элементов из очереди с приоритетами до тех пор, пока она не станет пустой. Каждый удаленный (минимальный) элемент добавляется в результирующий массив.

   ```javascript
   let sorted = [];
   while (!pq.isEmpty()) {
       sorted.push(pq.minItem());
       pq.deleteMin();
   }
   ```

   В результате, элементы вставляются в результирующий массив в отсортированном порядке.

5. В итоге функция возвращает отсортированный массив.

   ```javascript
   return sorted;
   ```

## Полный код алгоритма

```javascript
function heapSort(array) {
    let pq = new IndexMinPQ(array.length);
    
    // Заполнение очереди с приоритетами элементами массива
    for (let i = 0; i < array.length; i++) {
        pq.insert(i, array[i]);
    }
    
    // Удаление элементов из очереди с приоритетами
    // и добавление их к результату в отсортированном порядке
    let sorted = [];
    while (!pq.isEmpty()) {
        sorted.push(pq.minItem());
        pq.deleteMin();
    }
    
    return sorted;
}

// Пример использования алгоритма
const array = [7, 2, 8, 4, 1, 6];
const sortedArray = heapSort(array);  // [1, 2, 4, 6, 7, 8]
console.log(sortedArray);
```

В заключение, пирамидальная сортировка с использованием очереди с приоритетами представляет собой эффективный алгоритм, который обеспечивает упорядочивание элементов в общем случае за O(n log n) времени.