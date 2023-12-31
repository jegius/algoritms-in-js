# Сортировка Шелла:

## Описание алгоритма

Сортировка Шелла - это усовершенствование сортировки вставками, которое первоначально старается отсортировать элементы, находящиеся на большом расстоянии друг от друга, и постепенно сокращает это расстояние. Её эффективность связана с возможностью перемещать элементы на большие расстояния за единицу времени.

## Преимущества и недостатки

**Преимущества**:
- Очень быстрые для средних наборов данных.
- Эффективна для данных, которые уже частично отсортированы.

**Недостатки**:
- Сложнее в понимании и реализации, чем более простые сортировки.
- Эффективность зависит от выбора последовательности промежутков.

## Имплементация

Функция `shellSort` инициирует `gap` как 1 и увеличивает его до меньше трети от длины полного массива. Далее, пока `gap` больше или равен 1, она вызывает `insertSortBody` чтобы отсортировать элементы на расстоянии `gap` друг от друга и затем уменьшить `gap`.

# Документация функции

```javascript
export function shellSort(data) {

    /**
     * Сортирует массив данных "data" сортировкой Шелла.
     *
     * Параметры:
     * - data: Массив чисел для сортировки.
     *
     * Возвращает: 
     * - Отсортированный по возрастанию массив.
     */
    const size = data.length;
    let gap = 1;
    const PARTS = 3;

    // Увеличивает "gap", пока он не превышает треть от длины списка
    while (gap < size / PARTS) {
        gap = PARTS * gap + 1;
    } 

    // Пока "gap" больше или равен 1, вызывает сортировку вставками для "gap"-а
    while (gap >= 1) {
        data = insertSortBody(data, size, gap);
        gap = Math.floor(gap / PARTS);
    }

    // Возвращает отсортированный массив
    return data;
}
```