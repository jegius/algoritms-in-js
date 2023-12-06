# Binary Search Tree

Бинарное дерево поиска (Binary Search Tree, BST) - это древовидная структура данных, которая обладает следующими свойствами:

- Узел содержит ключ и две связи : левую и правую.
- Левая связь направлена на узел, ключ которого меньше ключа родителя.
- Правая связь направлена на узел, ключ которого больше ключа родителя.
- Левое и правое поддеревья также являются бинарными деревьями поиска.

## Класс Node

Вершина дерева определяется классом Node, который включает в себя поля для хранения данных и ссылок на левый и правый дочерние узлы.

```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
```

## Класс BinarySearchTree

```javascript
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);
        
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraverse(node, callback) {
        if(node !== null) {
            this.inOrderTraverse(node.left, callback); 
            callback(node.data); 
            this.inOrderTraverse(node.right, callback)
        }
    }

    preOrderTraverse(node, callback) {
        if (node !== null) {
            callback(node.data);
            this.preOrderTraverse(node.left, callback);
            this.preOrderTraverse(node.right, callback);
        }
    }

    postOrderTraverse(node, callback) {
        if (node !== null) {
            this.postOrderTraverse(node.left, callback);
            this.postOrderTraverse(node.right, callback);
            callback(node.data);
        }
    }

    getRootNode() {
        return this.root;
    }
}
```

## Когда использовать дерево бинарного поиска

Бинарное дерево поиска используется в случаях, когда требуется быстрый поиск, вставка и удаление данных. Используется в таких алгоритмах и структурах данных как:

- Построение и анализ выражений
- Базы данных
- Маршрутизаторы в интернете
- Графические алгоритмы

Особенностью бинарных деревьев поиска является то, что они позволяют эффективно производить все базовые операции (поиск, вставка, удаление) в среднем за время O(log n), где n — количество узлов в дереве. Это приводит к значительной экономии времени обработки больших объемов данных.

Обратите внимание, что это среднее время. В худшем случае (если дерево вырождается в список) эти операции займут время O(n).