// Define a class for a tree node
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Define a class for the binary tree
class BinaryTree {
    constructor() {
        this.root = null; // Initialize the root node as null
    }

    // Insert values into the tree for testing
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

    // Pre-order traversal: root, left, right
    preOrder(node) {
        if (node !== null) {
            console.log(node.value); // Visit the root
            this.preOrder(node.left); // Traverse left subtree
            this.preOrder(node.right); // Traverse right subtree
        }
    }

    // In-order traversal: left, root, right
    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left); // Traverse left subtree
            console.log(node.value); // Visit the root
            this.inOrder(node.right); // Traverse right subtree
        }
    }

    // Post-order traversal: left, right, root
    postOrder(node) {
        if (node !== null) {
            this.postOrder(node.left); // Traverse left subtree
            this.postOrder(node.right); // Traverse right subtree
            console.log(node.value); // Visit the root
        }
    }
}

// Create an instance of BinaryTree
const tree = new BinaryTree();

// Insert nodes into the tree
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(20);
tree.insert(40);
tree.insert(60);
tree.insert(80);

// Get the root of the tree
const root = tree.root;

console.log("Pre-order Traversal:");
tree.preOrder(root);

console.log("\nIn-order Traversal:");
tree.inOrder(root);

console.log("\nPost-order Traversal:");
tree.postOrder(root);
