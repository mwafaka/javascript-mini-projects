// //CommonJS example:

// import moment from "moment";
// // Now we can use moment for date manipulation in our code

// const today = moment().format("YYYY-MM-DD");
// console.log(today);



// // Es module example:
// // path for browser

// // path for node
// // import moment from "moment";
// Now we can use moment for date manipulation in our code



import moment from "./node_modules/moment/dist/moment.js";
// const moment = require("./node_modules/moment/dist/moment.js");
const today = moment().format("YYYY-MM-DD");


function displayTime() {
    const div = document.querySelector("#result");
    div.innerHTML = `${moment().hours() }:
                     ${moment().minutes()}:
                     ${moment().seconds()<10? 0 +''+ moment().seconds() :moment().seconds() }
                     ${moment().hours()<12? 'AM' : 'PM' }
    
    `;

}
displayTime()

 setInterval(displayTime) // 1 second