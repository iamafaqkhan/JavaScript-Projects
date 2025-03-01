// Taking inputs from users
var numberOne = parseFloat(prompt("Enter the first number: ", ""));
var operator = prompt("Enter the operator (+, -, *, /, %, **)");
var numberTwo = parseFloat(prompt("Enter the second number: ", ""));

function calculator(numberOne, numberTwo, operator) {
    // Check if inputs are valid numbers
    if (isNaN(numberOne) || isNaN(numberTwo)) {
        alert("Invalid input: Please enter valid numbers.");
        return "Error";
    }

    let result;

    if (operator === "+") {
        result = numberOne + numberTwo;
    } else if (operator === "-") {
        result = numberOne - numberTwo;
    } else if (operator === "*") {
        result = numberOne * numberTwo;
    } else if (operator === "/") {
        if (numberTwo !== 0) {
            result = numberOne / numberTwo;
        } else {
            alert("Error: Division by zero is not allowed.");
            return "Error";
        }
    } else if (operator === "%") {
        if (numberTwo !== 0) {
            result = numberOne % numberTwo;
        } else {
            alert("Error: Modulus by zero is not allowed.");
            return "Error";
        }
    } else if (operator === "**") {
        result = numberOne ** numberTwo;
    } else {
        alert("Invalid operator! Use +, -, *, /, %, or **.");
        return "Error";
    }

    return result;
}

var result = calculator(numberOne, numberTwo, operator);

alert("Result:\n" +numberOne + operator + numberTwo + " = " + result); 
