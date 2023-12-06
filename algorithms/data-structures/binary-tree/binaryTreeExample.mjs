import {BinarySearchTree} from './BinaryTree.mjs';

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

binaryThreeShowCase();