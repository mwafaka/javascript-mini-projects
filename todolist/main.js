class ListBinding {
  constructor(element, done) {
    this.element = element; // an odered or under list
    this.done = done;
    this.textList = [];
    this.doneList = [];
    /*this.task=document.getElementById('add');
     this.task.addEventListener("click",()=>{
      this.task.add(this.input.value)
     });
     /*this.remove = document.getElementById('remove');
     this.remove.addEventListener('click', ()=>{
      this.deleteFirst()
     });*/
  }
  move(item) {
    console.log(item);
    this.doneList.push(item);
    let index = this.textList.findIndex(x => x === item);

    this.textList.splice(index, 1);
    this.update();
  }
  /* delete all element from list*/
  deleteAll() {
    while (this.element.firstChild)
      this.element.removeChild(this.element.firstChild);
    while (this.done.firstChild) this.done.removeChild(this.done.firstChild);
  }
  remove(id) {
    this.doneList.splice(id, 1);
    this.update();
  }
  edit(item) {
    while (this.element.firstChild)
      this.element.removeChild(this.element.firstChild);

    for (let text = 0; text < this.textList.length; text++) {
      let item = document.createElement("li");
      if (item === this.textList[text]) {
        var temp = `<input type=text value='${
          this.textList[text]
        }'> </input> <button onclick="moveItem('${
          this.textList[text]
        }')">done</button> <button onclick ='edit(${
          this.textList[text]
        })'>Edit</button>`;
      } else {
        var temp = `${this.textList[text]}<button onclick="moveItem('${
          this.textList[text]
        }')">done</button> <button onclick ='edit(${
          this.textList[text]
        })'>Edit</button>`;
      }
      item.innerHTML = temp;
      this.element.appendChild(item);
    }
  }

  /*  update the GUI*/
  update() {
    this.deleteAll();
    for (let text = 0; text < this.textList.length; text++) {
      let item = document.createElement("li");
      let temp = `${this.textList[text]} <button onclick='moveItem("${
        this.textList[text]
      }")'>done</button> <button onclick ='edit('${
        this.textList[text]
      }')'>Edit</button>`;
      item.innerHTML = temp;
      this.element.appendChild(item);
    }
    for (let text = 0; text < this.doneList.length; text++) {
      let item1 = document.createElement("li");
      item1.id = text;
      let temp2 = `${
        this.doneList[text]
      } <button onclick="remove(this)">remove</button>`;
      item1.innerHTML = temp2;

      this.done.appendChild(item1);
    }
  }

  /*add element into list */

  add(item) {
    this.textList.push(item);
    this.update();
  }
  /* delete first element of the list  */
  deleteFirst() {
    this.textList.shift();
    this.update();
  }
}
const myList = document.getElementById("myList");
const done = document.getElementById("done");
let listBinding = new ListBinding(myList, done);
listBinding.update();

function todoList() {
  let input = document.getElementById("input").value;
  listBinding.add(input);
  //document.getElementById("input").value = "";
}
function moveItem(item) {
  console.log(item);
  listBinding.move(item);
}
function remove(item) {
  let parentID = item.parentNode.id;
  listBinding.remove(parentID);
}

function edit(item) {
  console.log(item);
  listBinding.edit(item);
  /*
    for (let text = 0; text < this.textList.length; text++) {
        let item = document.createElement("li");
        let temp = `${this.textList[text]} <button onclick="moveItem('${
          this.textList[text]
        }')">done</button> <button onclick ='edit'>Edit</button>`;
        item.innerHTML = temp;
        this.element.appendChild(item);*/
}
