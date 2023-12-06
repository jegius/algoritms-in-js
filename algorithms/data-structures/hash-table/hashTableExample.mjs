import {HashTable} from './HashTable.mjs';

function hashTableShowCase() {
    const myHashTable = new HashTable();

    myHashTable.set('name', 'John');
    myHashTable.set('age', '30');
    myHashTable.set('country', 'USA');

    console.log(myHashTable.get('name')); // вывод: John
    console.log(myHashTable.get('age')); // вывод: 30
    console.log(myHashTable.hasKey('country')); // вывод: true
    console.log(myHashTable.hasKey('email')); // вывод: false
}

hashTableShowCase();