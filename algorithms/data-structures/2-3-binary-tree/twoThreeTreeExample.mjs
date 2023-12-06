import {TwoThreeTree} from './TwoThreeTree.mjs';

function twoThreeBinaryThreeShowCase() {
    const tree = new TwoThreeTree();
    tree.insert(10);
    tree.insert(20);
    tree.insert(30);
    tree.insert(40);
    tree.insert(50);

    console.log(tree.find(10)); // true
    console.log(tree.find(25)); // false
    console.log(tree.find(40)); // true
}
twoThreeBinaryThreeShowCase();