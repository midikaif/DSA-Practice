class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
        this.full = false;
        this.l = true;
    }
}

class BST {
    constructor() {
        this.root = null;
        this.flag = false;
    }

    insertHelper(x, root) {
        
        // ( 1 )
        if (root != null) { 
            if (root.full == true) return root;
        }

        if (root == null && x != -1) return new Node(x);
        
        if (root == null && x == -1) return null;



        // ( 2 )
        // if (x == -1 && root == null && this.flag == false) {
        //     this.flag = true;
        //     return null;
        // }

        // // ( 3 )
        // if (x == -1 && root == null && this.flag == true) {
        //     root.filled = true;
        //     this.flag = false;
        //     return null;
        // }




        // ( 4 )
        if ((root.full == false) && (root.l == true)) {
            
            root.left = this.insertHelper(x, root.left);
            
            if (x == -1 && root.left == null) {
                root.l = false;
            }

            if (root.left != null) {
                if (root.left.full == true) {
                    root.l = false;
                    root.right = this.insertHelper(x, root.right);
                 }
            }
        }
        
        else if (root.full == false && root.l == false) {
            root.right = this.insertHelper(x, root.right);
            if (x == -1 && (root.right == null || root.right.full == true)) {
                // root.l = true;
                root.full = true;
            }
        }

        
        return root;
    }

    insert(x) {
        if (this.root == null) {
            this.root = new Node(x);
            return;
        }
        if(this.root.full == true) console.log('Tree is Full');
        this.insertHelper(x, this.root);
    }

    preOrderHelper(root) {
        if (root == null) {
            // console.log(root);
            return;
        }
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
let bst = new BST();
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(-1)
bst.insert(-1)
bst.insert(8)
bst.insert(2)
bst.insert(-1)
bst.insert(-1)
bst.insert(-1)
bst.insert(7)
bst.insert(9)
bst.insert(4)
bst.insert(-1)
bst.insert(6)
bst.insert(-1)
bst.insert(-1)
bst.insert(3)
bst.insert(-1)
bst.insert(-1)
bst.insert(6)
bst.insert(-1)
bst.insert(-1)
bst.preOrder();