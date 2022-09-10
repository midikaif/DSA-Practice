class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}
let max = 0;

function findMax(root) {
    if (root == null) {
        return;

    }
    findMax(root.left);
    if (root.data > max) {
        max = root.data;
    }
    findMax(root.right);

}
function treeHeight(root) {
    if (root == null) return -1;
    let f = treeHeight(root.left);
    let s = treeHeight(root.right);
    return 1 + Math.max(f, s);
}


function printTree(root) {
    if (root == null) return;
    // console.log(root.data);
    if (root.left != null) {
        console.log(root.left.data);
    }
    if (root.right != null) {
        console.log(root.right.data);
    }

    printTree(root.left);
    printTree(root.right)
}

function checkSorted(root) {
    if (root == null) return true;
    if (root.left != null && root.left < root) {
        checkSorted(root.left);
    }
    else if (root.right != null && root.right > root) {
        checkSorted(root.right)
    }
    else {
        return false;
    }
}

function BST(root, elem) {
    if (elem < root.data) {
        root.left = new Node(elem);

        BST(root.left, )
    }
}

function makeBST(arr) {
    let root = new Node(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < root.data) {
            
        }
    }
}


let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(1);
root.left.left.left = new Node(0);
root.right.left = new Node(12);
root.right.right = new Node(33);

// findMax(root)
// console.log(max);

// console.log(treeHeight(root));
// printTree(root)
// console.log(checkSorted(root));

