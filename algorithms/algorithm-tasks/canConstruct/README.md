[canConstruct memoization](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=7965s)

[Назад к содержанию](../README.md)

# canConstruct

Функция `canConstruct` предоставляет решение задачи проверки возможности построения целевой строки (`target`) из заданного массива слов (`wordBank`).

## Принцип работы

Функция `canConstruct` использует рекурсивный подход с мемоизацией для уменьшения количества повторных вычислений и оптимизации работы. Она работает следующим образом:

1. Если цель (`target`) уже есть в мемо (`memo`), то возвращается сохраненное значение, чтобы избежать повторных вычислений.
2. Если цель пустая строка (`''`), значит, можно построить цель из слов, поэтому возвращается значение `true`.
3. Если массив слов (`wordBank`) пуст, значит, больше нет слов для проверки, поэтому возвращается значение `false`.
4. Для каждого слова (`word`) в массиве слов (`wordBank`):
    - Если слово (`word`) является префиксом цели (`target`), значит, можно удалить это слово из цели и проверить остаток.
    - Вычисляется остаток от удаления префикса (`suffix = target.slice(word.length)`).
    - Рекурсивно вызывается функция `canConstruct` для остатка (`suffix`) и того же массива слов (`wordBank`).
    - Если для остатка возможно построение цели (`canConstruct(suffix, wordBank, memo)` возвращает `true`), то возвращается значение `true` и сохраняется в мемо для текущей цели.
5. Если ни одно слово из массива слов не может быть использовано для построения цели, то возвращается значение `false` и сохраняется в мемо для текущей цели.

## Особенности реализации

- Функция `canConstruct` использует рекурсию для поиска возможности построения цели из слов.
- Мемоизация (использование объекта `memo`) позволяет сохранять результаты ранее вычисленных целей и избегать повторных вычислений для этих целей.
- Функция `indexOf` используется для проверки, является ли слово префиксом цели.
- Остаток (`suffix`) вычисляется путем удаления префикса (слова) из цели.
- Полученные результаты сохраняются в мемо для каждой проверяемой цели.

## Анализ концепций

- **Рекурсия**: Функция `canConstruct` использует рекурсию для разбиения задачи на более простые подзадачи и последовательного решения каждой из них.
- **Мемоизация**: Использование объекта `memo` позволяет сохранять результаты ранее вычисленных целей и избегать повторных вычислений для этих целей. Это значительно улучшает производительность функции.
- **Динамическое программирование**: Принципы динамического программирования применяются в функции `canConstruct`. Оптимальное решение за