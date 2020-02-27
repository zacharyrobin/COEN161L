(function() {
    "use strict";

    function Node(val) {
        this.value = val;
        this.left = null;
        this.right = null;

    }

    function BinarySearchTree() {
        this.root = null;
    }

    BinarySearchTree.prototype.insert = function(val) {
        var root = this.root;

        // if there isnt a root and we have nothing then we will initialize the root to the claled value
        if (!root) {
            this.root = new Node(val);
            return;
        }

        // if we do have a root then we need to create a new node that we will then append to the bottom of the tree but we need to find its correct spot
        var current = root;
        var anotherNode = new Node(val);

        while (current) { //while nodes exsists, so keep traversing until you hit a leaf 
            if (val < current.value) {
                if (!current.left) { // if there isnt a value in the left node and the value you are trying to insert is less than current then insert it to left node
                    current.left = anotherNode;
                    break;
                } else { // if there is already a value un the left node then you need to traverse further down 
                    current = current.left;
                }
            } else { // if the value is greater than 
                if (!current.right) { // else if the current node does not have a right then place it there 
                    current.right = anotherNode;
                    break;
                } else { // if there is already a valye un the right node then you need to traverse further down 
                    current = current.right;
                }
            }
        }

    };

    BinarySearchTree.prototype.search = function(val) {
        var root = this.root;
        var current = root;
        // break;
        while (current) {
            if (current.value == val) {
                return true;
            } else if (current.value > val) {
                current = current.left;
            } else {
                current = current.right;

            }
        }
        return false;
    };

    BinarySearchTree.prototype.inorder = function(fn) {
        traversalHelper(this.root, fn);
    };

    function traversalHelper(node, fn) {
        if (node) {
            traversalHelper(node.left, fn); // go down the left
            fn(node.value); // use function to print
            traversalHelper(node.right, fn); //go down the right
        }
    };

    var bst = new BinarySearchTree();

    testBst(bst);

})();