class Node {
    constructor(value = null, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    toString() {
        return JSON.stringify(this);
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    printInOrder(process) {
        let inOrder = (node) => {
            if (node.left !== null) {
                inOrder(node.left);
            }

            process.call(this, node);

            if (node.right !== null) {
                inOrder(node.right);
            }
        };
        inOrder(this.root);
    }

    printPreOrder(process) {
        let preOrder = (node) => {
            process.call(this, node);
            if (node.left !== null) {
                preOrder(node.left);
            }

            if (node.right !== null) {
                preOrder(node.right);
            }
        }
        preOrder(this.root);
    }

    printPostOrder(process) {
        let postOrder = (node) => {
            if (node.left !== null) {
                postOrder(node.left);
            }

            if (node.right !== null) {
                postOrder(node.right);
            }

            process.call(this, node);
        }

        postOrder(this.root);
    }

    traverseBFS() {
        let result = [];
        let queue = [this.root];

        while (queue.length > 0) {
            let node = queue.shift();

            result.push(node.value);

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        return result;
    }

    find(value) {
        let traverse = (node) => {
            if (node == null || node.value === value) {
                return node;
            } else if (value < node.value) {
                traverse(node.left);
            } else {
                traverse(node.right);
            }
        };
        return traverse(this.root);
    }
}