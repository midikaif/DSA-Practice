class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    getRoot() {
        return this.root;
    }
    insertHelper(x, root) {
        if (root == null) return new Node(x);
        if (x < root.data) {
            root.left = this.insertHelper(x, root.left);
        }
        else {
            root.right = this.insertHelper(x, root.right);
        }
        return root;
    }

    insert(x) {
        if (this.root == null) {
            this.root = new Node(x);
            return;
        }
        this.insertHelper(x, this.root);
    }

    removeHelper(root, x) {
        if (root == null) return null;
        if (root.data == x) {
            //case 1
            if (root.left == null && root.right == null) {
                return null;
            }

            //case 2
            if (root.left != null && root.right == null) {
                let temp = root.left;
                root.left = null;
                return temp;
            } 

            if (root.left == null && root.right != null) {
                let temp = root.right;
                root.right = null;
                return temp;
            }

            //case 3
            let temp = root.left;
            while (temp.right != null) temp = temp.right;
            root.data = temp.data;
            this.removeHelper(root.left, temp.data);
            return temp;

        }



        if (x < root.data) {
            root.left = this.removeHelper(root.left, x);
        }
        else {
            root.right = this.removeHelper(root.right, x);
        }
    }

    remove(x) {
        if (this.root == null) return;
        this.removeHelper(this.root,x);
    }

    preOrderHelper(root) {
        if (root == null) return;
        console.log(root.data);
        this.preOrderHelper(root.left);
        this.preOrderHelper(root.right);
    }

    preOrder() {

        this.preOrderHelper(this.root);
    }

    inOrderHelper(root) {
        if (root == null) return;
        this.inOrderHelper(root.left);
        console.log(root.data);
        this.inOrderHelper(root.right);
    }
    
    inOrder() {
        this.inOrderHelper(this.root);
    }

}

let sum = 0
function bstToGst(root) {
    if (root == null) return;
    
    bstToGst(root.right)
    sum += root.data;
    root.data = sum;
    // console.log(sum);
    bstToGst(root.left)
}



let bst = new BST();
bst.insert(4); //              10
bst.insert(1);  //             /  \
bst.insert(6);  //            9    15
bst.insert(0); //           /     / 
bst.insert(2); //          1     13  
bst.insert(5); //         /      /
bst.insert(7);  //        0      12
bst.insert(3);  //        0      12
bst.insert(8);  //        0      12

bstToGst(bst.getRoot());
bst.inOrder();
// console.log('***');
// bst.remove(15);
// bst.inOrder();