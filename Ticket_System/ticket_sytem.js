// Ticket System, where people can buy tickets

var ticketPrice;
var gender;
var age;

ticketPrice = +prompt("Enter Ticket Price: ");
gender = prompt("Enter Gender: For Male(m) and Female(f):");
age = +prompt("Enter Age:");

if (ticketPrice >= 10000 && age >= 18 && gender.toLowerCase() === "m") {
    alert("Go to the Male' VIP enclosure")
}else if(ticketPrice >= 10000 && age >= 18 && gender.toLowerCase() === "f"){
    alert("Go to the Female' VIP enclosure")
}

