class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value) {
       const newNode = new Node(value)
       if (this.root == null) {
        this.root = newNode;
       }
       else {
        let currentNode = this.root;
        while(true) {
            if (value < currentNode.value) {
                if (!currentNode.left){
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left
            } else {
                if (!currentNode.right ){
                    currentNode.right = newNode
                    return this;
                }
                currentNode = currentNode.right
            }
        }
       }
    }
    lookup(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root
        while(currentNode) {
            if(value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right
            } else if (currentNode.value === value) {
                return currentNode
            }
        } return false
    }
}
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
const tree = new BinarySearchTree(1);
tree.insert(2);
tree.insert(4);
tree.insert(3);
console.log(tree.lookup(4))