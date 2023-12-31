[countConstruct tabulation time code](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=16686s)

[Назад к содержанию](../README.md)

# Документация к функции countConstruct

## Обзор

Функция `countConstruct` представляет собой реализацию алгоритма динамического программирования, целью которого является подсчет количества способов составления целевой строки (`target`) путем конкатенации элементов массива подстрок (`wordBank`). Данная функция является рекурсивной и использует мемоизацию для оптимизации производительности.

## Сигнатура функции

```javascript
export function countConstruct(target, wordBank, memo = {})
```

### Параметры

- `target`: Целевая строка, которую нужно составить.
- `wordBank`: Массив строк, содержащих подстроки, которые могут быть использованы для составления целевой строки.
- `memo`: Необязательный параметр, используемый для хранения результатов предыдущих вычислений. Это объект JavaScript, который служит кешем для мемоизации.

## Принцип работы функции

Функция работает следующим образом:

1. Проверяется наличие `target` в качестве ключа в кеше мемоизации (`memo`). Если такое значение уже существует, функция сразу возвращает сохраненный результат:
```javascript
if (target in memo) {
    return memo[target];
}
```

2. Затем функция проверяет, не является ли `target` пустой строкой (`''`). Если это так, возвращается `1`, поскольку есть ровно один способ составить пустую строку — не использовать никаких элементов из `wordBank`:
```javascript
if (target === '') {
    return 1;
}
```

3. Переменная `count` инициализируется значением `0`. В эту переменную будет накапливаться количество способов составления `target`:
```javascript
let count = 0;
```

4. Организуется цикл, который проходит по каждому слову `word` в массиве `wordBank`. Для каждого `word` выполняется проверка, начинается ли `target` с этого слова, с помощью метода `startsWith`:
```javascript
for (const word of wordBank) {
    if (target.startsWith(word)) {
```

5. Если `target` начинается с `word`, то делается рекурсивный вызов функции `countConstruct` с оставшейся частью строки `target` (после среза префикса `word`). Для этого используется метод `slice`, который удаляет из `target` уже использованное слово. Результат рекурсивного вызова добавляется к значению переменной `count`:
```javascript
        count += countConstruct(target.slice(word.length), wordBank, memo);
    }
}
```

6. После проверки всех слов в `wordBank`, значение `count` сохраняется в кеше мемоизации с ключом, соответствующим текущей `target`:
```javascript
memo[target] = count;
```

7. В конце функция возвращает количество способов (`count`), которыми можно составить `target`:
```javascript
return count;
```

### Особенности реализации

- **Рекурсия**: Функция использует рекурсию для разделения проблемы на более мелкие подзадачи.

- **Мемоизация**: Объект JavaScript используется в качестве кеша для сохранения результатов вычислений, чтобы избегать повторных расчетов одних и тех же подзадач. Это существенно сокращает время выполнения алгоритма, особенно на больших входных данных.

- **Строковые операции**: `startsWith` проверяет, начинается ли строка с указанной подстроки, а `slice` используется для того
  чтобы получить оставшуюся часть строки после убранной подстроки. Эти операции позволяют нам разрабатывать рекурсивный процесс пошагово сокращая задачу до тех пор, пока не достигнем базового случая (пустая строка).

Важно отметить, что использование методов `startsWith` и `slice` четко отражает логику "разделяй и властвуй", где задача разбивается на более мелкие и управляемые части, что является ключевой концепцией в алгоритмах и структурах данных.

### Концепции, используемые в коде

- **Мемоизация**: Эта техника используется для сохранения результатов выполнения функции с целью их повторного использования. Таким образом, если функция вновь вызывается с теми же параметрами, она может вернуть результат из кеша, избегая тем самым дорогостоящей рекурсивной обработки.

- **Рекурсия**: Этот метод в программировании означает, что функция вызывает сама себя. Рекурсия позволяет разбивать сложные задачи на управляемые участки до тех пор, пока не будет достигнут базовый случай, когда рекурсия прекращается.

- **Immutable Strings**: В JavaScript строки являются неизменяемыми объектами, что означает, что после создания строки она не может быть изменена. Операции, такие как `slice`, создают новую строку, вместо изменения существующей, что важно при рекурсивных вызовах в функции.
