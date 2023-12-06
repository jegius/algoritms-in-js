import {RedBlackTree} from './BlackRedTree.mjs';

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

RebBlackThreeShowCase();