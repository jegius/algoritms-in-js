class Node {
    constructor(data, left = null, middle = null, right = null) {
        this.data = Array.isArray(data) ? data : [data];
        this.children = [left, middle, right].filter(x => x);
    }

    isLeaf() {
        return !this.children.length;
    }
}

export class TwoThreeTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (!this.root) {
            this.root = new Node(value);
            return;
        }
        const { newChild, newRoot } = this._insert(value, this.root);
        if (newRoot) {
            this.root = newRoot;
        } else if (newChild) {
            this.root = new Node(newChild.data[0], this.root, newChild);
        }
    }

    _insert(value, root) {
        const index = root.data.findIndex(x => value < x);
        const foundIndex = index >= 0 ? index : root.data.length;

        if (root.isLeaf()) {
            root.data.splice(foundIndex, 0, value);
            if (root.data.length > 2) {
                return this._split(root);
            }
            return {};
        }

        const { newChild, newRoot } = this._insert(value, root.children[foundIndex]);
        if (newRoot) {
            return { newRoot };
        } else if (newChild) {
            root.data.splice(foundIndex, 0, newChild.data[0]);
            root.children[foundIndex] = newChild.children[0];
            root.children.splice(foundIndex + 1, 0, newChild.children[1]);
            if (root.data.length > 2) {
                return { newChild: this._split(root) };
            }
        }
        return {};
    }

    find(value, node = this.root) {
        if (node == null) {
            return false;
        }

        for (let i = 0; i < node.data.length; i++) {
            if (value < node.data[i]) {
                if (node.children.length !== 0) {
                    return this.find(value, node.children[i]);
                }
                return false;
            }
            else if (value === node.data[i]) {
                return true;
            }
        }

        if (node.children.length !== 0) {
            return this.find(value, node.children[node.data.length]);
        }
        return false;
    }

    _split(root) {
        const newRight = new Node(root.data.splice(2, 1), root.children.splice(2, 2));
        const newLeft = new Node(root.data.splice(0, 1), root.children.splice(0, 2));
        return new Node(root.data, newLeft, newRight);
    }
}