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
console.log(tree)