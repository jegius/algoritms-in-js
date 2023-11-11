class DataItem {
    constructor(item) {
        this.item = item;
    }
}

class Node {
    constructor() {
        this.parent;
        this.dataItems = [];
        this.childArray = [];
    }

    isLeaf() {
        return !this.childArray[0];
    }

    isFull() {
        return this.dataItems.length === 3;
    }

    getParent() {
        return this.parent;
    }

    insertItem(newItem) {
        this.dataItems.push(newItem);
        this.dataItems.sort((a, b) => a.item - b.item);
    }

    split() {
        if (this.dataItems.length === 3) {
            let dataItemCount = this.dataItems.length;
            let midItem = this.dataItems[dataItemCount / 2 | 0];

            let newRight = new Node();
            newRight.dataItems.push(this.dataItems.pop());
            newRight.childArray[0] = midItem.rightChild;
            if (newRight.childArray[0]) newRight.childArray[0].parent = newRight;

            midItem.rightChild = newRight;
            if (this.parent) {
                this.parent.insertItem(midItem);
                this.parent.attachChild(this.parent.findInsertionPoint(midItem.item), newRight);
            } else {
                this.items = [this.dataItems[0]];
                this.childArray = [this, midItem.rightChild];
            }
        }
    }
}

export class TwoThreeFourTree {
    constructor() {
        this.root = new Node();
    }

    find(key) {
        let curNode = this.root;
        let childNumber;

        while (true) {
            if ((childNumber = this.findItem(curNode, key)) !== -1)
                return childNumber;
            else if (curNode == null || curNode.childArray === undefined || curNode.childArray[0] == null)
                return -1;
            else
                curNode = this.getNextChild(curNode, key);
        }
    }

    findItem(node, key) {
        if (!node) {
            return -1;
        }

        for(let j = 0; j < node.dataItems.length; j++) {
            if(node.dataItems[j].item === key)
                return j;
        }

        return -1;
    }

    getNextChild(node, key) {
        if (!node) {
            return null;
        }

        let j;

        for(j = 0; j < node.dataItems.length; j++) {
            if(key < node.dataItems[j].item)
                return node.childArray[j];
        }

        return node.childArray[j];
    }

    insert(dValue) {
        let curNode = this.root;
        let newItem = new DataItem(dValue);

        while(true) {
            if(curNode == null) {
                console.error('Error: Node is null.');
                return;
            }

            if(curNode.isFull()) {
                curNode.split();
                curNode = curNode.getParent();

                curNode = this.getNextChild(curNode, dValue);
            } else if(curNode.isLeaf()) {
                break;
            } else {
                curNode = this.getNextChild(curNode, dValue);
            }
        }

        curNode.insertItem(newItem);
    }
}