
// Creates Variables to store the user inputs
var patientName = " ";
var patientBMI = 0;
var patientWeight = 0;

// Taking Inout form Users
patientName = prompt("Enter your Name: ");
patientWeight = +prompt("Enter your Weight: ");
patientHeight = +prompt("Enter your Height: ");

// Formula for Calculating BMI
patientBMI = patientWeight / (patientHeight ** 2);

//Show the out through alert
alert("Patient Name: " + patientName 
    + "\n Patient Height: " + patientHeight + 
    "\n Patient Weight: "+ patientWeight +
     "\nPatient BMI: " + patientBMI.toFixed(2));