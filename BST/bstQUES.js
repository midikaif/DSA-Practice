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
        if (root != null) { // first of all checking root is null or not because if the root is null we cant check it is full or not
            if (root.full == true) return root; // checking root is full or not if yes, then directly return the root;
        }

        if (root == null && x != -1) return new Node(x); // if root is null and you want to make an entry this will help
        
        if (root == null && x == -1) return null; // if x == -1, that means you want to assign null in that node 




        // ( 4 )
        if ((root.full == false) && (root.l == true)) { // after all the above checkings, check is root full + we can assign something in left or not
            
            root.left = this.insertHelper(x, root.left); // if yes, assign
            
            if (x == -1 && root.left == null) { // checking what we assign, is that -1 and also is root.left == null that means we have successfully done the -1 condition and root.left is still null so we have to change the root.l to FALSE.
                root.l = false;
            }

            if (root.left != null) { // Checking root.left isnt equalt to null AND root.left.full is equal to TRUE. (we cant use both condition in the same time, this gives error sometimes...)  
                if (root.left.full == true) { // if the condition is true that means we cant assign anything in root.left because we have made it full with two -1 and this also means that we cant go to root.left so we have to make root.l to false
                    root.l = false; 
                    root.right = this.insertHelper(x, root.right); // if we cant go to left then we have to go to right.
                 }
            }
        }
        
        else if (root.full == false && root.l == false) { //if left side is completely filled then we have to fill in the right;
            root.right = this.insertHelper(x, root.right);
            if (x == -1 && (root.right == null || root.right.full == true)) { // Suppose we have assign null with the help of -1 in root.right then root.right will be null as it was before but the important thing here is that if we assing null in right that also means this root is full now.
                // Suppose root.right.full is equal to true and x == -1 that means this root is also became full

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
        if (this.root.full == true) {
            console.log('Tree is FULL')
            return;
        }
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
bst.insert(-1)
bst.insert(6)
bst.insert(-1)
bst.insert(2)
bst.insert(-1)
bst.insert(-1)
bst.insert(7)
bst.insert(8)
bst.insert(-1)
bst.insert(-1)
bst.insert(9)
bst.insert(15)
bst.insert(-1)
bst.insert(4)
bst.insert(-1)
bst.insert(-1)
bst.insert(3)
bst.insert(-1)
bst.insert(6)
bst.insert(-1)
bst.insert(-1)
bst.insert(1)
bst.preOrder();