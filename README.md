# Изучаем Алгоритмы на JavaScript

Добро пожаловать в проект "Изучаем Алгоритмы на JavaScript"! Наша цель — помочь программистам разобраться в сложном мире алгоритмов и структур данных. Мы представляем вам коллекцию задач, решаемых на JavaScript, которые покрыты тщательно подобранными видеоуроками и документацией. Следуйте рекомендациям и примерам из каждого раздела, чтобы углубить свои знания и практические навыки.

## Структура проекта

### Папка `algorithms/algorithm-tasks`

- **Код курса на YouTube**: Откройте эту папку, чтобы найти все материалы курса по динамическому программированию от FreeCodeCamp, которые разбираются в нашем цикле обучающих видеороликов.

    - [Читать README](algorithms/algorithm-tasks/README.md)

- **Графовые алгоритмы и другие практики**: В этой папке вы найдете дополнительные задачи, которые будем регулярно обновлять. С каждым уроком предоставляется подробное описание и пояснения.

    - [Читать README](algorithms/algorithm-tasks/#название-папки/README.md)

### Папка `algorithms/data-structures`

- **Код и документация структур данных**: Здесь вы можете изучить и экспериментировать с наиболее распространенными структурами данных.

    - Хеш-таблица: [Читать README](algorithms/data-structures/hash-table/README.md)
    - Список: [Читать README](algorithms/data-structures/table/README.md)
    - Минимальная индексированная двоична куча: [Читать README](algorithms/data-structures/min-indexed-binary-heap/README.md)
    - Красно-чёрное дерево: [Читать README](algorithms/data-structures/black-red-tree/README.md)
    - Двоичное дерево: [Читать README](algorithms/data-structures/binary-tree/README.md)
    - Двоичная куча: [Читать README](algorithms/data-structures/binary-heap/README.md)
    - 2-3 дерево: [Читать README](algorithms/data-structures/2-3-binary-tree/README.md)
    - 2-3-4 дерево: [Читать README](algorithms/data-structures/2-3-4-binary-tree/README.md)

### Папка `algorithms/sort-playground`

- **Код и документация алгоритмов сортировки**: Этот раздел предназначен для того, чтобы познакомить вас с различными методами сортировки и их визуализацией.

    - По возрастанию с использованием слияния: [Читать README](algorithms/sort-playground/ascending-merge-sort/README.md)
    - По убыванию с использованием слияния: [Читать README](algorithms/sort-playground/descending-merge-sort/README.md)
    - Сортировка кучей: [Читать README](algorithms/sort-playground/heap-sort/README.md)
    - Сортировка вставками: [Читать README](algorithms/sort-playground/insert-sort/README.md)
    - Быстрая сортировка: [Читать README](algorithms/sort-playground/quick-sort/README.md)
    - Трехпутевая быстрая сортировка: [Читать README](algorithms/sort-playground/quick-three-way/README.md)
    - Сортировка выбором: [Читать README](algorithms/sort-playground/select-sort/README.md)
    - Сортировка Шелла: [Читать README](algorithms/sort-playground/shell-sort/README.md)

  В каждой директории с алгоритмами сортировки вы найдёте подробное описание и примеры использования. Мы также предусмотрели скрипты для запуска функций с различным количеством элементов, чтобы вы могли наблюдать за эффективностью алгоритмов в реальном времени. Результаты сортировок будут отображаться в лог-файлах в соответствующих папках.

  Кроме того, для удобства проведения экспериментов и наглядности работы алгоритмов предусмотрена визуализация. Инструкции по запуску визуализации вы найдете в README каждого алгоритма сортировки.

## Запуск проекта

Каждый модуль проекта снабжён файлом `package.json`, который содержит все необходимые скрипты для запуска примеров и тестов. Чтобы начать работу с проектом, убедитесь, что на вашей машине установлены [Node.js](https://nodejs.org/en/download/) и [npm](https://www.npmjs.com/get-npm).

Для установки зависимостей и запуска скриптов выполните следующие шаги:

1. Откройте терминал.
2. Перейдите в корневую директорию нужного модуля.
3. Запустите нужный скрипт, например:

```bash
npm run descending-merge-sort
```

Список всех доступных скриптов вы найдете в файле package.json каждого модуля.