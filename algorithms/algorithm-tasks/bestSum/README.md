[bestSum memoization time code](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=6726s)

[Назад к содержанию](../README.md)

# bestSum

Функция `bestSum` предоставляет решение задачи по поиску кратчайшей комбинации чисел из заданного набора (`numbers`),
которая суммируется до целевой суммы (`targetSum`).

```javascript
/**
 * Функция bestSum находит кратчайшую комбинацию чисел из массива numbers,
 * которая в сумме дает число targetSum. Для ускорения используется мемоизация.
 *
 * @param {number} targetSum - Цель суммы, которую необходимо достичь.
 * @param {number[]} numbers - Массив чисел, которые можно использовать для получения targetSum.
 * @param {Object} memo - Объект для хранения уже вычисленных результатов.
 * @returns {number[] | null} - Массив с кратчайшей комбинацией чисел или null, если такой комбинации нет.
 *
 * Алгоритмическая сложность: O(n*m^2), где n - количество чисел в массиве numbers, m - величина targetSum.
 * Пространственная сложность: O(m^2) из-за хранения комбинаций чисел.
 */
export function bestSum(targetSum, numbers, memo = {}) {
    // Проверяем, является ли targetSum равным нулю (базовый случай).
    // Локальная сложность: O(1)
    // Общая временная сложность: O(1)
    // Общая пространственная сложность: O(1)
    if (targetSum === 0) {
        return [];
    }
    // Проверяем, является ли targetSum отрицательным числом.
    // Локальная сложность: O(1)
    // Общая временная сложность: O(1)
    // Общая пространственная сложность: O(1)
    if (targetSum < 0) {
        return null;
    }
    // Проверяем, содержится ли targetSum в кэше (мемоизация).
    // Локальная сложность: O(1)
    // Общая временная сложность: O(n*m^2)
    // Общая пространственная сложность: O(m^2)
    if (targetSum in memo) {
        return memo[targetSum];
    }

    // Инициализируем переменную для хранения кратчайшей комбинации.
    // Локальная сложность: O(1)
    // Общая временная сложность: O(1)
    // Общая пространственная сложность: O(m^2)
    let shortestCombination = null;

    // Перебираем числа из входного массива для построения комбинаций.
    // Локальная сложность: O(n*m^2) [включает рекурсивные вызовы и операции массива]
    // Общая временная сложность: O(n*m^2)
    // Общая пространственная сложность: O(m^2)
    for (const num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);

        // Проверяем, возможно ли создать комбинацию с оставшейся суммой.
        if (remainderCombination !== null) {
            // Формируем новую комбинацию, добавляя текущее число.
            const combination = [...remainderCombination, num];

            // Проверяем, является ли новая комбинация самой короткой.
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }

    // Сохраняем найденную кратчайшую комбинацию в кэш для мемоизации.
    // Локальная сложность: O(m) - потенциально копирование массива длины m.
    // Общая временная сложность: По-прежнему O(n*m^2) - не влияет на максимальную сложность.
   // Общая пространственная сложность: O(m^2)
   memo[targetSum] = shortestCombination;

   // Возвращаем найденную кратчайшую комбинацию чисел или null, если таковой нет.
   // Локальная сложность: O(1) - возврат ссылки на объект в памяти.
   // Общая временная сложность: Остается неизменной O(n*m^2) - возврат значения не влияет на сложность.
   // Общая пространственная сложность: Остается неизменной O(m^2) - возврат значения не добавляет новых данных в памяти.
   return shortestCombination;
}
```

## Принцип работы

Функция `bestSum` использует рекурсивный подход с мемоизацией для уменьшения количества повторных вычислений и
оптимизации работы. Она работает следующим образом:

1. Если целевая сумма (`targetSum`) равна 0, значит, нужно вернуть пустой массив, так как нет чисел, которые нужно
   объединить, чтобы получить сумму 0.
2. Если целевая сумма меньше 0, значит, комбинация чисел в наборе невозможна, поэтому возвращается `null`.
3. Если целевая сумма уже есть в мемо (`memo`), то возвращается сохраненное значение, чтобы избежать повторных
   вычислений.
4. Инициализируется переменная `shortestCombination` как `null` - это комбинация чисел, которая будет содержать
   минимальное количество чисел для достижения целевой суммы.
5. Для каждого числа (`num`) в наборе `numbers`:
    - Вычисляется остаток от разницы между целевой суммой и текущим числом (`remainder = targetSum - num`).
    - Рекурсивно вызывается функция `bestSum` для остатка (`remainder`) и того же набора чисел (`numbers`).
    - Если комбинация остатка не равна `null`, то создается новая комбинация путем объединения комбинации остатка и
      текущего числа (`combination = [...remainderCombination, num]`).
    - Если `shortestCombination` равна `null` или длина новой комбинации меньше длины `shortestCombination`,
      то `shortestCombination` обновляется новой комбинацией.
6. Результаты сохраняются в мемо для текущей целевой суммы.
7. Возвращается `shortestCombination` - кратчайшая комбинация чисел, которая суммируется до целевой суммы.

## Особенности реализации

- Функция `bestSum` использует рекурсию для разбиения задачи на более простые подзадачи.
- Мемоизация (использование объекта `memo`) позволяет сохранять результаты ранее вычисленных целевых сумм и избегать
  повторных вычислений для этих сумм.
- Переменная `shortestCombination` обновляется только в том случае, если новая комбинация короче
  текущей `shortestCombination`.
- Массив `combination` обновляется путем объединения комбинации остатка и текущего числа.

## Анализ концепций

- **Рекурсия**: Функция `bestSum` использует рекурсию для разбиения задачи на более простые подзадачи и
  последовательного решения каждой из них.
- **Мемоизация**: Использование объекта `memo` позволяет сохранять результаты ранее вычисленных целевых сумм и избегать
  повторных вычислений для этих сумм. Это значительно улучшает производительность функции.
- **Динамическое программирование**: Принципы динамического программирования применяются в функции `bestSum`.
  Оптимальное решение задачи строится из оптимальных решений ее подзадач.