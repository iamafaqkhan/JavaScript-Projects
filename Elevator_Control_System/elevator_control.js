
// Program to control the Elevator 

var totalFloor = 10;
var currentFloor;
var targetFloor;

currentFloor = +prompt("Enter Current Floor: ");
targetFloor = +prompt("Enter target Floor: ")

if (targetFloor > currentFloor){
    for (var i = currentFloor; i <= currentFloor; i++) {
        alert("Lift Up " + " at Floor: " + i)
    }   
}else if(targetFloor < currentFloor){
    for (var i = targetFloor; i <= currentFloor; i--) {
            alert("Lift Down " + " at Floor: " + i)
    } 
}