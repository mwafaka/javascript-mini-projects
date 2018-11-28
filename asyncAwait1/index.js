let pageNumber = 1;
function clickMe() {
  fetchData();
}
function fetchData() {
  document.getElementById("demo").innerHTML = "";
  //let me = document.getElementById("input").value;
  let url = `https://swapi.co/api/people/?page=${pageNumber}`;
  console.log(url);
  async function getUser() {
    // console.log(me, url);
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.results[0]);
    handleData(data.results);
  }
  getUser();
}

function nextMe() {
  if (pageNumber < 9) {
    pageNumber++;
    fetchData();
  }
}
function preMe() {
  if (pageNumber > 1) {
    pageNumber--;
    fetchData();
  }
}

/*
  function rnd() {
    let quote = Math.floor(Math.random() * 9 + 1);
    return quote;
  }
  document.getElementById("demo").innerHTML = "";
  let me = document.getElementById("input").value;
  let url = `https://swapi.co/api/people/?page=${rnd()}`;
  async function getUser() {
    console.log(me, url);
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.results[0]);
    handleData(data.results);
  }

  getUser();
}*/

function handleData(data) {
  data.forEach(item => {
    // console.log(item.name);
    // let liItem = document.createElement("li");
    //liItem.textContent = item.name;
    //document.getElementById("demo").appendChild(liItem);
    let str = `<div class='card-container'> 
    <h3> name: ${item.name}</h3>
  <h5> homeworld : ${item.homeworld}</h5>
  <h5> height : ${item.height}</h5>
  <h5>hair_color: ${item.hair_color}</h5>
  </div>`;
    document.getElementById("demo").innerHTML += str;
  });
}
