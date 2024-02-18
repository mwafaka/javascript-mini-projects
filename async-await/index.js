const input=  document.querySelector('input');
const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    fetchData();
    input.value = '';
});


// https://api.github.com/users/max

async function fetchData() {
    const value = input.value;
    
    try {
      const response = await fetch(`https://api.github.com/users/${value}`);
      const data = await response.json();
      display(data);
    } catch (error) {
      console.log(error);
    }
  }
 
  
  //function for  display the data
  function display(data) {
    document.querySelector("#result").innerHTML = `
      <div class="card" style="width: 18rem;">
      <img src=${data.avatar_url} class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">${data.login}</h5>
      <p class="card-text">${data.location}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>
     `;
  }