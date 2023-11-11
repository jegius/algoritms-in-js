import {PriorityQueue} from './binary-heap/PriorityQueue.mjs';
import {IndexMinPQ} from './min-indexed-binary-heap/IndexMinPQ.mjs';
import {BinarySearchTree} from './binary-three/BinaryThree.mjs';
import {SymbolTable} from './table/SymbolTable.mjs';
import {TwoThreeTree} from './2-3-binary-three/TwoThreeTree.mjs';
import {TwoThreeFourTree} from './2-3-4-binary-three/TwoTheeFourBinaryThree.mjs';
import {RedBlackTree} from './black-red-three/BlackRedThree.mjs';
import {HashTable} from './hash-table/HashTable.mjs';

function runPriorityQueueShowcase() {
    const pq = new PriorityQueue();
    pq.insert(10);
    pq.insert(20);
    pq.insert(30);
    pq.insert(5);


    console.assert(pq.delMax() === 30, "Куча должна вернуть 30!");
    console.assert(pq.delMax() === 20, "Куча должна вернуть 20!");
}

function runMinPriorityQueueShowcase() {
    const priorityQueue1 = new IndexMinPQ(10);
    const priorityQueue2 = new IndexMinPQ(10);

    priorityQueue1.insert(2, "Alice");
    priorityQueue1.insert(1, "Bob");

    priorityQueue2.insert(3, "Charlie");
    priorityQueue2.insert(4, "David");

    const mergeMinPQs = (pq1, pq2) => {
        let merged = new IndexMinPQ(Math.max(pq1.maximumSize, pq2.maximumSize));

        for (let i = 0; i < pq1.size(); i++) {
            merged.insert(pq1.priorityQueue[i+1], pq1.keyValues[pq1.priorityQueue[i+1]]);
        }
        for (let i = 0; i < pq2.size(); i++) {
            merged.insert(pq2.priorityQueue[i+1], pq2.keyValues[pq2.priorityQueue[i+1]]);
        }
        return merged;
    }

    let mergedQueue = mergeMinPQs(priorityQueue1, priorityQueue2);

    console.log(mergedQueue.minItem()); // "Bob"
    mergedQueue.deleteMin();
    console.log(mergedQueue.minItem()); // "Alice"
}

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

function binaryThreeShowCase() {
    // Создаем новое бинарное дерево поиска
    const BST = new BinarySearchTree();

// Вставляем узлы в дерево
    BST.insert(15);
    BST.insert(25);
    BST.insert(10);
    BST.insert(7);
    BST.insert(22);
    BST.insert(17);
    BST.insert(13);
    BST.insert(5);
    BST.insert(9);
    BST.insert(27);

    const root = BST.getRootNode();

// Ищем узел со значением 22
    const findNode = BST.search(root, 22);

    if (findNode !== null) {
        console.log("Узел найден!");
        console.log(findNode);
    } else {
        console.log("Узел не найден.");
    }
}

function twoThreeBinaryThreeShowCase() {
    const tree = new TwoThreeTree();
    tree.insert(10);
    tree.insert(20);
    tree.insert(30);
    tree.insert(40);
    tree.insert(50);

    console.log(tree.find(20)); // true
    console.log(tree.find(25)); // false
    console.log(tree.find(40)); // true
}

function TwoThreeFourTreeShowCase() {
    const tree = new TwoThreeFourTree();

// Вставка элементов в дерево
    tree.insert(10);
    tree.insert(20);
    tree.insert(30);
    tree.insert(40);

// Поиск элементов в дерево
    console.log(tree.find(10)); // Вывод: 0
    console.log(tree.find(20)); // Вывод: 0 или 1 в зависимости от того, где располагается элемент
    console.log(tree.find(30)); // Вывод: 0, 1 или 2 в зависимости от того, где располагается элемент
    console.log(tree.find(100)); // Вывод: -1, так как такого элемента нет в дереве
}

function RebBlackThreeShowCase() {
    let rbTree = new RedBlackTree();

// Вставка значений
    rbTree.insert(5);
    rbTree.insert(3);
    rbTree.insert(7);
    rbTree.insert(2);
    rbTree.insert(4);
    rbTree.insert(1);
    rbTree.insert(9);

// Например, можно написать функцию для вывода всех значений в дереве (используя обход в глубину)

    function printTree(node) {
        if(node !== null) {
            printTree(node.left);
            console.log("Data:" + node.data + ", Color: " + node.color);
            printTree(node.right);
        }
    }

    printTree(rbTree.root);
}

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