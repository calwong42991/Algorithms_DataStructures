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

    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
        } else {
            let current = this.root;
            while (true) {
                if (value > current.value) {
                    if (current.right === null) {
                        current.right = new Node(value);
                        break;
                    } else {
                        current = current.right;
                    }
                } else if (value < current.value) {
                    if (current.left === null) {
                        current.left = new Node(value);
                        break;
                    } else {
                        current = current.left;
                    }
                }
            }
        }
    }

    getMin(node = this.root) {
        while (node.left) {
            node = node.left;
        }
        return node.value;
    }

    getMax(node = this.root) {
        while (node.right) {
            node = node.right;
        }
        return node.value;
    }

    remove(val, node = this.root) {
        if(!node){
            return null;
        }

        if(val < node.value){
            node.left = this.remove(val, node.left)
        } else if(val > node.value){
            node.right = this.remove(val, node.right);
        } else {
            if(!node.left){
                return node.right;
            } else if (!node.right){
                return node.left;
            } else {
                node.value = this.getMin(node.right);
                node.right = this.remove(node.value, node.right);
            }
        }
        return node;
    }

    leastCommonAncestor(n1, n2) {
        if (this.root == null) {
          return this.root;
        }
        
        let queue = [this.root];
        while (queue.length) {
          let root = queue.shift();
          if (root.value === n1.value ||
              root.value === n2.value ||
              (root.value >= n1.value && root.value <= n2.value) ||
              (root.value <= n1.value && root.value >= n2.value)
             ){
             return root;
          } else {
            if(root.value > n1.value && root.value > n2.value) {
              root.left && queue.push(root.left);
            } else {
              root.right && queue.push(root.right);
            }
          }
        }
        return null;
      }
}