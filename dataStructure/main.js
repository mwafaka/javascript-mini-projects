///////////Stack/////////////////
function Stack() {
  this.data = [1, 2, 3, 4, 5];
}

Stack.prototype.stackPush = function(element) {
  this.data[this.data.length] = element;
  // this.data.push(element);
};

Stack.prototype.stackPop = function() {
  // return this.data.pop();
  // OR
  let last = this.data[this.data.length - 1];
  //this.data.splice(this.data.length-1 , 1)
  this.data.length--;
  return last;
};

//////////Queue//////////////////
function Queue() {
  this.data = [1, 2, 3];

  this.push = function(element) {
    this.data[this.data.length] = element;
  };
  this.pop = function() {
    //  return this.data.shift();
    let first = this.data[0];
    for (i = 0; i < this.data.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.data.length--;
    return first;
  };
}

let myStack = new Stack();

let myQueue = new Queue();

/* Node   */
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}
/* List*/
////////////add to head////////////
function LinkedList() {
  this.head = null;
  this.tail = null;
}
LinkedList.prototype.addToHead = function(value) {
  let newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;

  this.head = newNode;
};

let list = new LinkedList();
list.addToHead(100);
list.addToHead(200);

////////////add to tail////////////

LinkedList.prototype.addToTail = function(value) {
  let newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;

  this.tail = newNode;
};
let list1 = new LinkedList();
list1.addToTail(100);
//////remove tail///////////

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  let value = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return value;
};
let list2 = new LinkedList();
list2.addToTail(100);

///////////remove Head//////////////
LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;
  let value = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;

  return value;
};
let list3 = new LinkedList();
list3.addToTail(100);

////////////Search head////////////////

LinkedList.prototype.search = function(searchValue) {
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === searchValue) return currentNode;
    currentNode = currentNode.next;
  }
  return null;
};

let list = new LinkedList();
list.addToHead(300);

/////////////Binary Search Tree/////////////////
function Node(value) {
  this.data = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.insert = function(data) {
    let newNode = new Node(data);
    if (!this.root) this.root = newNode;
    else this.insertNode(this.root, newNode);
  };
  this.insertNode = function(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (!node.right) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  };
  this.inorder = function(node) {
    if (node) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  };
  this.preorder = function(node) {
    if (node) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  };
  this.postorder = function(node) {
    if (node) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  };

  this.minNode = function(node) {
    if (node.left) return this.minNode(node.left);
    else return node;
  };
  this.Search = function(node, data) {
    if (node === null) return null;
    else if (data < node.data) return this.search(node.left, data);
    else if (data > node.data) return this.search(node.right, data);
    else return node;
  };
}

let tree = new BinarySearchTree();
tree.insert(50);
tree.insert(39);
tree.insert(70);
tree.insert(20);
tree.insert(62);
