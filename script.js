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

const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator")
const equalButton = document.querySelector("#equal");
const display = document.querySelector(".display-operate");
const displayHistory = document.querySelector(".display-history");
const clear = document.querySelector("#clear");
let currentNumber = "";

function handleDigitClick() {
    digitButtons.forEach(digit => {
        digit.addEventListener("click", function() {
            currentNumber = `${currentNumber}${digit.textContent}`;
            display.textContent = currentNumber;
            console.log(currentNumber)
        });
    });
}

function handleOperator (){
    operatorButtons.forEach(ope => {
        ope.addEventListener("click", function() {
            if (operator ==="" && firstNumber ==""){
                operator = ope.textContent
                firstNumber = currentNumber
                currentNumber = ""
            }
            else if (operator === "" && firstNumber !== "") {
            operator = ope.textContent
            currentNumber = ""
            } 
            else if(operator !==""){
                handleCalculation()
                operator = ope.textContent
                currentNumber = ""
            }
        })
    })
}

function handleEqual (){
    equalButton.addEventListener("click", function () {
        handleCalculation()
        operator = "";
        currentNumber = ""
    })
}

function handleCalculation () {
        secondNumber = currentNumber
        let result = operate(operator, Number(firstNumber), Number(secondNumber))
        display.textContent = result
        displayHistory.textContent = `${firstNumber} ${operator} ${secondNumber}`
        firstNumber = result
}
handleDigitClick();
handleOperator()
handleEqual()


clear.addEventListener ("click", function(){
    firstNumber="";
    operator = "";
    secondNumber = "";
    displayHistory.textContent = "CodeByLouis"
    display.textContent = "0";
    console.log("test")
})