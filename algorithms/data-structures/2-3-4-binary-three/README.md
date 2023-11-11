# 2–3–4 Дерево на JavaScript

## Описание

Данный код представляет собой реализацию структуры данных, известной как 2–3–4 дерево. Это одна из версий B-дерева, где узел может иметь от 2 до 4 детей.

2–3–4 дерево идеально сбалансированное, что обеспечивает быструю операцию поиска (в худшем случае O(logN)), вставку и удаление элементов.

## Задачи, решаемые этой структурой данных

2–3–4 дерево используются в тех случаях, когда необходимо эффективно работать с большими массивами данных. Он версионирует достоинства бинарных деревьев поиска, но при этом избегает проблему их дисбаланса благодаря большей гибкости по количеству детей у каждого узла.

Применимость:

- Поиск, вставка и удаление элементы в больших массивах данных.
- для реализации файловых систем и баз данных, где необходимо эффективное выполнение операций с большим набором данных.

## Описание кода

Код состоит из двух основных классов: `Node` и `Tree234`.

- Класс `Node` представляет собой узел в 2–3–4 дереве. В нем есть массив элементов и массив указателей на дочерние узлы.

- Класс `Tree234` представляет собой непосредственно 2–3–4 дерево. В нем содержатся функции для операций поиска, вставки и деления узла.

- Метод `find()` позволяет найти указанный элемент в дереве.

- Метод `findItem()` применяется внутри метода `find()` и возвращает индекс искомого элемента в узле, если таковой есть.

- Метод `getNextChild()` используется в процессе поиска и вставки для определения, в каком дочернем узле следует транзитивно продолжить выполнение соответствующей операции.

- Метод `insert()` служит для вставки новых элементов в дерево.

- Метод `split()` используется в процессе вставки для разделения узла, если он заполнен.

*Примечание:* Реализация метода `split()` остается на усмотрение соответствующего программиста в соответствии с конкретной задачей.