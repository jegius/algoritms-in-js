import {SymbolTable} from './SymbolTable.mjs';

function symbolTableShowcase() {
    const table = new SymbolTable();

    table.insertKeyValue(1, 'apple');
    table.insertKeyValue(2, 'banana');
    table.insertKeyValue(3, 'pear');

    console.log(table.getValue(1)); // Выводит 'apple'
    console.log(table.hasKey(2)); // Выводит true
    console.log(table.hasKey(4)); // Выводит false (такого ключа нет в таблице)

    console.log(table.isTableEmpty()); // Выводит false (таблица не пуста)

    table.deleteKey(1); // Удаляет пару ключ-значение с ключом 1
    console.log(table.getValue(1)); // Выводит undefined (такого ключа больше нет)

    console.log(table.minimumKey()); // Выводит 2 (это наименьший ключ в таблице)
    console.log(table.maximumKey()); // Выводит 3 (это наибольший ключ в таблице)

    table.insertKeyValue(4, 'orange');
    console.log(table.highestKeyUnder(4)); // Выводит 3
    console.log(table.lowestKeyAbove(2)); // Выводит 3

    console.log(table.rankOfKey(3)); // Выводит 1
    console.log(table.selectKey(1)); // Выводит 3

    table.deleteMinimumKey();
    console.log(table.minimumKey()); // Выводит 3

    table.deleteMaximumKey();
    console.log(table.maximumKey()); // Выводит 3

    console.log(table.subTableSize(1, 6)); // Выводит 1
    console.log(table.keysWithin(1, 6)); // Выводит [3]
    console.log(table.getAllKeys()); // Выводит [3]
}

symbolTableShowcase();