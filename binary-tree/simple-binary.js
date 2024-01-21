class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return;
    } else {
      this.insertNode(this.root, node);
      // console.log(this.node)
    }
  }

  insertNode(root, node) {
    if (node.value > root.value) {
      if (root.right == null) {
        root.right = node;
        // return root
      } else {
        // root = root.right;
        this.insertNode(root.right, node);
      }
    } else if (node.value < root.value) {
      if (root.left == null) {
        root.left = node;
        //    return root
      } else {
        // root = root.left;
        this.insertNode(root.left, node);
      }
    }
    // console.log(root, "\n\n");
  }

  getRoot() {
    return this.root;
  }

  preorder(root) {
    if (root !== null) {
      console.log(root.value);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }

  inorder(root) {
    if (root !== null) {
      this.inorder(root.left);
      console.log(root.value);
      this.inorder(root.right);
    }
  }

  postorder(root) {
    if (root !== null) {
      this.inorder(root.left);

      this.inorder(root.right);
      console.log(root.value);
    }
  }

  deleteNode(root, value) {
    if (root !== null) {
      if (root.value === value) {
        let temp = root.right;
        root = temp;
        return null;
      }
      this.deleteNode(root.left);
      this.deleteNode(root.right);
    }
  }
  delete(value) {
    if (!this.root) {
      console.log("node not found");
    } else {
      this.deleteNode(this.root, value);
    }
  }
}

let bt = new BinaryTree();
bt.insert(15);
bt.insert(25);
bt.insert(10);
bt.insert(7);
bt.insert(22);
bt.insert(17);
bt.insert(13);
bt.insert(5);
bt.insert(9);
bt.insert(27);
let root1 = bt.getRoot();
// console.log("root1",root1)
console.log("\n\n---------PREORDER---------");
bt.preorder(root1);
console.log("\n\n---------IN-ORDER---------");
bt.inorder(root1);

console.log("\n\n---------POST-ORDER---------");
bt.postorder(root1);
