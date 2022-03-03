const add = require("./add.js");
let add_value = add(33,52);
console.log(`Added value is ${add_value}`);

const subtract = require("./subtract.js");
let sub_value = subtract(100,52);
console.log(`Subtracted value is ${sub_value}`);

const multiply = require("./multiply.js");
let mul_value = multiply(16,20);
console.log(`Multiplied value is ${mul_value}`);

const divide = require("./divide.js");
let div_value = divide(1000,52);
console.log(`Divided value is ${div_value}`);