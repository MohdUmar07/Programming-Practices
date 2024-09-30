class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }


    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode; 
        } else {
            this.insertNode(this.root, newNode); 
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
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

    inorderTraversal(node) {
        if (node !== null) {
            this.inorderTraversal(node.left);
            console.log(node.value); 
            this.inorderTraversal(node.right);
        }
    }


    getRoot() {
        return this.root;
    }
}


const bst = new BinarySearchTree();


bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

const root = bst.getRoot();


console.log("In-order Traversal of the BST:");
bst.inorderTraversal(root);
