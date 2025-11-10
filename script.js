function add (a,b) {return a + b}
function substract (a,b) {return a - b}
function multiply (a,b) {return a * b}
function divide (a,b) {return a / b}

let firstNumber = "";
let secondNumber = "";
let operator = "";

function operate (operator,a,b){
    if (operator === "+"){return add(a,b)}
    else if (operator === "-"){return substract(a,b)}
    else if (operator === "x"){return multiply(a,b)}
    else if(operator === "/"){return divide(a,b)}
}

console.log(operate ("+",3,5))