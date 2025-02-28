// Program to Find the Largest input

var firstInput;
var secondInput;
var largestInput;

firstInput = +prompt("Enter the first number");
secondInput = +prompt("Enter the second number");

if (firstInput > secondInput) {

    largestInput = firstInput;
    alert("The Largest number is " + largestInput);   
}else if(firstInput < secondInput){
    largestInput = secondInput;
    alert("The Largest number is " + largestInput);
}