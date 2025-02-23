

var age = 0;
var username = ' ';
var total_days_spend = 0;
var year_of_birth = 0;

username = prompt("Enter your Name: ")
age = prompt("Enter your Age:")

total_days_spend = age * 365;
year_of_birth = 2025 - age;


alert("Name: " + username + "\nAge: " + age + "\nDay Spends: " + total_days_spend + "\nBirth year: " + year_of_birth);
