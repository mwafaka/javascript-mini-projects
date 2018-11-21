let num = 1;
let animalContainer = document.getElementById("animal-info");
let btn = document.getElementById("btn");
var ourRequest;
var ourData;
btn.onclick = function() {
  //ajax with jquery
  $.ajax({
    method: "GET",
    url: "https://learnwebcode.github.io/json-example/animals-" + num + ".json",
    success: function(data) {
      console.log(data);
      renderHTML(data);
      num++;
      if (num > 3) {
        $("#btn").hide();
        //btn.classList.add("btn-hide");
      }
    },
    error: function() {
      alert("Failed to get data");
    }
  });
};
function renderHTML(data) {
  var htmlString = "";
  //animalContainer.innerHTML = "";
  for (let animal of data) {
    htmlString += `${animal.name} is a ${animal.species} that likes to eat `;
    // To get favourite food
    for (i = 0; i < animal.foods.likes.length; i++) {
      if (i == 0) htmlString += animal.foods.likes[i];
      else htmlString += ` and ${animal.foods.likes[i]}`;
    }
    htmlString += " and dislikes ";
    // To get disliked food
    for (i = 0; i < animal.foods.dislikes.length; i++) {
      if (i == 0) htmlString += animal.foods.dislikes[i];
      else htmlString += ` and ${animal.foods.dislikes[i]}`;
    }
    // To create p element and apphend the animal-info
    var para = document.createElement("p");
    para.textContent = htmlString;
    animalContainer.appendChild(para);
  }
}
