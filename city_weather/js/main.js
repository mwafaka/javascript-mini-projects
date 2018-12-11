let cities = new Set();
function clickMe() {
  document.getElementById("demo").innerHTML = "";
  let me = document.getElementById("input").value;

  let url = `http://api.openweathermap.org/data/2.5/weather?q=${me}&APPID=9b3b4e386b6cac9f20fa1928c2b096ca&units=metric`;
  let urlCity = `https://api.teleport.org/api/urban_areas/?embed=ua:item/ua:images`;
  if (me != "") {
    if (!cities.has(me.toLowerCase())) {
      async function getUser() {
        var cityImage = "";
        let res = await fetch(url);
        let data = await res.json();
        let res1 = await fetch(urlCity);
        let res2 = await res1.json();
        getCity(res2);

        function getCity(data) {
          for (let i = 0; i < data["_embedded"]["ua:item"].length; i++) {
            if (data["_embedded"]["ua:item"][i]["name"].toLowerCase() === me) {
              cityImage =
                data["_embedded"]["ua:item"][i]["_embedded"]["ua:images"][
                  "photos"
                ][0]["image"]["mobile"];
              break;
            }
          }
        }

        handleData(data, cityImage);
        // cities.add(data.name.toLowerCase());
      }

      getUser();
    }
  } else alert("give a city Name");
}

function handleError(error) {
  document.getElementById(
    "demo"
  ).innerHTML = `<li><h1>city not found${error}</h1></li>`;
}
let output = "";

function handleData(data, cityImage) {
  let temp = Math.round(data.main.temp_max);
  console.log(data.main);
  console.log(data);

  // cityImage = String(cityImage);
  console.log("cityImage = " + cityImage);
  let str = `<div class ='container' id="${data.name}">
  
 <h1>${data.name}</h1>
 <img id="bg" src=  "${cityImage}" alt="">
 <h4>humidity : ${data.main.humidity} %</h4>
 <h4>Temp : ${temp} <span>c°</span> </h4>
 <img src="./img/${data.weather[0].icon}.png" alt="">
 <h4>Wind speed :  ${data.wind.speed} KM</h4> 
 <h4>Deg:  ${data.wind.deg}</h4> 
 <h4>description:  ${data.weather[0].description}</h4>
 <button onclick="remove('${data.name}')">Remove</button>
 </div>
 `;
  document.getElementById("demo").innerHTML += str;
}

function remove(city) {
  // document.getElementById(city).style.display = "none";
  cities.delete(city.toLowerCase());
  $("#" + city).hide();
}
// $("h1").click(function() {
//   //document.getElementById("demo").innerHTML = "";
//   $("#Berlin").css({ display: none });
// });
{
}
