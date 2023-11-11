class Node {
    constructor(data, color, left = null, right = null, parent = null) {
        this.data = data;
        this.color = color;
        this.left = left;
        this.right = right;
        this.parent = parent;
    }

    isRed() {
        return this.color === "RED";
    }
}

export class RedBlackTree {
    constructor() {
        this.root = null;
    }

    rotateLeft(node) {
        const rightChild = node.right;
        node.right = rightChild.left;

        if(node.right !== null) {
            node.right.parent = node;
        }

        node.parent = rightChild;
        rightChild.left = node;
        rightChild.parent = node.parent;
        node.parent = rightChild;

        if(rightChild.parent !== null) {
            if(rightChild.parent.left === node) {
                rightChild.parent.left = rightChild;
            } else if(rightChild.parent.right === node) {
                rightChild.parent.right = rightChild;
            }
        }

        return rightChild;
    }

    rotateRight(node) {
        const leftChild = node.left;
        node.left = leftChild.right;

        if(node.left !== null) {
            node.left.parent = node;
        }

        node.parent = leftChild;
        leftChild.right = node;
        leftChild.parent = node.parent;
        node.parent = leftChild;

        if(leftChild.parent !== null) {
            if(leftChild.parent.left === node) {
                leftChild.parent.left = leftChild;
            } else if(leftChild.parent.right === node) {
                leftChild.parent.right = leftChild;
            }
        }

        return leftChild;
    }

    insert(data) {
        let newNode;
        if(this.root === null) {
            newNode = new Node(data, "BLACK");
            this.root = newNode;
        } else {
            newNode = this.insertRec(this.root, data);
            this.fixTree(newNode);
        }

        return newNode;
    }

    insertRec(node, data) {
        if(data < node.data) {
            if(node.left === null) {
                node.left = new Node(data, "RED", null, null, node);
                return node.left;
            } else {
                return this.insertRec(node.left, data);
            }
        } else if(data > node.data) {
            if(node.right === null) {
                node.right = new Node(data, "RED", null, null, node);
                return node.right;
            } else {
                return this.insertRec(node.right, data);
            }
        }

        return null;
    }

    fixTree(node) {
        let parent, grandparent;
        while (node !== this.root && node.color !== "BLACK" && node.parent.color === "RED") {
            parent = node.parent;
            grandparent = parent.parent;
            if (parent === grandparent.left) {
                let uncle = grandparent.right;
                if (uncle && uncle.color === "RED") {
                    grandparent.color = "RED";
                    parent.color = "BLACK";
                    uncle.color = "BLACK";
                    node = grandparent;
                } else {
                    if (node == parent.right) {
                        this.rotateLeft(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    this.rotateRight(grandparent);
                    let tempColor = parent.color;
                    parent.color = grandparent.color;
                    grandparent.color = tempColor;
                    node = parent;
                }
            } else {
                let uncle = grandparent.left;
                if (uncle && uncle.color === "RED") {
                    grandparent.color = "RED";
                    parent.color = "BLACK";
                    uncle.color = "BLACK";
                    node = grandparent;
                } else {
                    if (node === parent.left) {
                        this.rotateRight(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    this.rotateLeft(grandparent);
                    let tempColor = parent.color;
                    parent.color = grandparent.color;
                    grandparent.color = tempColor;
                    node = parent;
                }
            }
        }
        this.root.color = "BLACK";
    }
}