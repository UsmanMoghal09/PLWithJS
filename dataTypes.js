"use strict";
let fName = "Usman";
let age = 45;
let isActive = true;
let car = null;
let salary = 8000;
let bikesArr = ["Yamaha", "RX100", "Suzuki"];
console.log(bikesArr);
//Generics
let empNames = ["Usman", "Sufiyaan", "Rayaan"];
let empIDs = [45, 18, 17];
let address = ["Street 127", "SteamboatLN", "MO", 63011];
//Multi type
let address1 = ["SteamboatLN", 127, "Ballwin", 63011];
//Declare and then initialize
let countries;
countries = ["USA", "Dubai", "SA"];
//for loop index base
for (let i = 0; i < empNames.length; i++) {
    console.log(empNames[i]);
}
//for of loop
for (let j of empIDs) {
    console.log(j);
}
//for in loop
for (let k in address) {
    console.log(k + ":" + address[k]);
}
