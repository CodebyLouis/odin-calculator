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
const clearAll = document.querySelector("#clear-all");
const clearOne = document.querySelector("#clear-one");
const colorChange = document.querySelector("#color-change")
let currentNumber = "";

function roundIfNeeded (num){
    return Math.round(Number(num) * 1000) / 1000
}

function handleDigitClick() {
    digitButtons.forEach(digit => {
        digit.addEventListener("click", function() {
            currentNumber = `${currentNumber}${digit.textContent}`;
            display.textContent = roundIfNeeded(currentNumber);
            console.log(currentNumber)
        });
    });
}

function handleOperator (){
    operatorButtons.forEach(ope => {
        ope.addEventListener("click", function() {
            if (operator ==="" && firstNumber ==""){
                operator = ope.id
                firstNumber = currentNumber
                currentNumber = ""
            }
            else if (operator === "" && firstNumber !== "") {
                if (currentNumber !== "") {
                    firstNumber = currentNumber  
                }
                operator = ope.id
                currentNumber = ""
            }
            else if(operator !==""){
                handleCalculation()
                operator = ope.id
                currentNumber = ""
            }
        })
    })
}

function handleEqual (){
    equalButton.addEventListener("click", function () {
        if (operator ===""){
            console.log("NA")
        }
        else {
        handleCalculation()
        operator = "";
        currentNumber = ""
        }
    })
}

function handleCalculation () {
        secondNumber = currentNumber
        let result = operate(operator, Number(firstNumber), Number(secondNumber))
        display.textContent = roundIfNeeded(result)
        displayHistory.textContent = `${roundIfNeeded(firstNumber)} ${operator} ${roundIfNeeded(secondNumber)}`
        firstNumber = result
}
handleDigitClick();
handleOperator()
handleEqual()


clearAll.addEventListener ("click", function(){
    firstNumber="";
    operator = "";
    secondNumber = "";
    displayHistory.textContent = "Hello user !"
    display.textContent = "0";
    console.log("test")
});

clearOne.addEventListener("click", function () {
 currentNumber = currentNumber.slice(0, -1);
    
    if (currentNumber.length === 0) {
        currentNumber = "0";
    }
    
    display.textContent = currentNumber;

})

colorChange.addEventListener("click",function(){
    let hexa = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    document.documentElement.style.setProperty('--primary-color', hexa);
})

document.querySelector("#github-button").addEventListener("click", function() {
    window.open("https://github.com/CodeByLouis", "_blank");
});