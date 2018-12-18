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
