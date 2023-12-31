[howSum tabulation time code](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=13981s)

[Назад к содержанию](../README.md)

## Описание функции `howSumWithTable`

Функция `howSumWithTable` представляет собой реализацию алгоритма динамического программирования для решения задачи комбинаторной суммы. Функция находит массив чисел, который в сумме даёт заданное целочисленное значение `target`, используя элементы из предоставленного массива `nums`.

### Принцип работы функции

Функция `howSumWithTable` использует "таблицу" (массив) для хранения промежуточных результатов решения задачи на каждом шаге до достижения конечного результата. Это позволяет оптимизировать вычисления и избежать множественных повторных расчётов.

#### Особенности реализации и анализ концепций:

1. **Инициализация таблицы:**

   ```javascript
   const table = Array(target + 1).fill(null);
   table[0] = [];
   ```

   Здесь создаётся массив `table` длиной `target + 1` и заполняется `null`, кроме первого элемента, который устанавливается в пустой массив. Это представляет собой базовый случай, когда сумма равна 0, то есть нам не нужно ни одно число для получения суммы 0.

2. **Итерация по таблице:**

   ```javascript
   for (let i = 0; i <= target; i++) {
       if (table[i] !== null) {
           ...
       }
   }
   ```

   Алгоритм проходит по всем индексам таблицы от 0 до `target`. Если текущая ячейка таблицы не `null`, то это означает, что существует комбинация чисел, в сумме дающих текущую сумму, представленную индексом `i`.

3. **Добавление новых комбинаций:**

Внутри основного цикла `for`, если ячейка таблицы `table[i]` не равна `null`, алгоритм пытается добавить каждое число из массива `nums` к текущей сумме `i` и обновить таблицу новыми комбинациями:

```javascript
for (const num of nums) {
    if (table[i]) {
        table[i + num] = [...table[i], num];
    }
}
```

Здесь для каждого числа `num` из массива `nums`, если сумма `i` уже достижима (т.е. `table[i]` не `null` и содержит массив), то алгоритм создаёт новую комбинацию, добавляя текущее число `num` к существующему массиву, который представляет достижимую сумму `i`. Эта новая комбинация сохраняется в `table[i + num]`.

Всё это позволяет алгоритму "собирать" комбинации по ходу итерации и избавляться от необходимости рассматривать каждую возможную комбинацию чисел независимо.

4. **Возврат результата:**

   ```javascript
   return table[target];
   ```

   После завершения всех итераций по таблице возвращается элемент `table[target]`, представляющий список чисел, которые в сумме дают целевое значение `target`. Если такой список не найден, функция вернёт `null`.

### Анализ используемых концепций:

- **Динамическое программирование**: функция `howSumWithTable` является примером динамического программирования (ДП), где решение строится инкрементально, используя результаты решения подзадач. В данном случае подзадачи состоят в нахождении комбинаций чисел, которые дают сумму меньше целевой (`target`). Этот подход избавляет от необходимости повторного вычисления одинаковых подзадач, что стандартно для задач, где применяется рекурсивный подход без кэширования (мемоизации) промежуточных результатов.

- **Мемоизация**: Хоть и термин "мемоизация" обычно привязывают к кэшированию результатов рекурсивных функций, в данном алгоритме принцип схож. Массив `table` является аналогом кэша, где сохраняются результаты решения подзадач (например, список чисел, дающих сумму `i`). Это позволяет избежать повторной обработки уже рассмотренной суммы.

- **Табуляция**: Другой метод динамического программирования, встречающийся в `howSumWithTable`, это табуляция. Вместо рекурсивных вызовов, табулированный подход использует итерации и "строит" решение, наполняя таблицу (массив) изначально от меньших к большим значениям. В данном случае таблица заполняется от `table[0]` до `table[target]`.

- **Временная сложность**: Алгоритм имеет временную сложность O(m*n), где `m` — целевое число (`target`), а `n` — количество чисел в массиве `nums`. Каждый элемент массива `nums` рассматривается один раз на каждом уровне `i`, что определяет общую временную сложность.

- **Пространственная сложность**: Пространственная сложность алгоритма также составляет O(m*n), поскольку необходимо хранить таблицу размером `m + 1`, где каждый элемент может содержать массив чисел, максимальная длина которого равна `n`.

Следует отметить, что сложность может быть меньше в случае, когда числа в массиве `nums` позволяют найти сумму меньшей длины. Однако в худшем случае, когда минимальные элементы повторяются, в каждой ячейке таблицы будет находиться массив размером до `n`.

### Заключение

Функция `howSumWithTable` представляет собой интересный пример использования методов динамического программирования для эффективного решения проблемы поиска комбинации чисел, сумма которых равна заданному целому числу. Благодаря использованию "таблицы" для хранения промежуточных результатов, данный алгоритм позволяет уменьшить как временную, так и пространственную сложности по сравнению с наивными рекурсивными подходами. Это делает его подходящим для решения задач, где важна оптимизация производительности, особенно в случаях с большими целевыми суммами и массивами чисел.