class Node {
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
    const newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
  }
  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      console.log(currentNode.value);
      list.push(currentNode.value);
      console.log(queue);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }

  depthFirstSearchIn() {
    return inOrderSearch(this.root, []);
  }
  depthFirstSearchPre() {
    return preOrderSearch(this.root, []);
  }
  depthFirstSearchPost() {
    return postOrderSearch(this.root, [])
  }
}
function inOrderSearch(node, list) {
  if (node.left) {
    inOrderSearch(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    inOrderSearch(node.right, list);
  }
  return list;
}

function preOrderSearch(node, list) {
    list.push(node.value)
    if (node.left) {
        preOrderSearch(node.left, list)
    }
    if (node.right) {
        preOrderSearch(node.right, list)
    }
    return list
}
function postOrderSearch(node, list) {
    if (node.left) {
        postOrderSearch(node.left, list)
    }
    if (node.right) {
        postOrderSearch(node.right, list)
    }
    list.push(node.value)
    return list
}
//9, 5, 10, 4, 8
const tree = new BinarySearchTree(1);
tree.insert(9);
tree.insert(5);
tree.insert(8);
tree.insert(4);
tree.insert(10);
// tree.breadthFirstSearch();
console.log(tree.depthFirstSearchIn());
console.log(tree.depthFirstSearchPre());
console.log(tree.depthFirstSearchPost());