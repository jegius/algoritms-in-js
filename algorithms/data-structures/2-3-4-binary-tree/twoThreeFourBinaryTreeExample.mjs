import {TwoThreeFourTree} from './TwoTheeFourBinaryTree.mjs';

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

TwoThreeFourTreeShowCase();