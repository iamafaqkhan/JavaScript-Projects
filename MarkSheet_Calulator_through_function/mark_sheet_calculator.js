var userName = 0
var rollNo = 0
var biology, english, urdu = 0

var percentage = 0
var totalMarks = 300
var obtainedMarks = 0

// Taking inputs from the users
userName = prompt("Enter User-Name: ")
rollNo = prompt("Enter Roll Number: ")
biology = +prompt("Enter Biology Marks: ")
english = +prompt("Enter English Marks: ")
urdu = +prompt("Enter Urdu Marks: ")

// This Function Calculates the percentage
function calculate(biology, english, urdu) {
    obtainedMarks = biology + urdu + english
    return percentage = obtainedMarks / totalMarks * 100
}

// This Function return Grades according to calculated percentage
function markSheet(percentageCalculated){
if (percentageCalculated >= 80 && percentageCalculated <= 100) {
    return ("Grade: A+")
}
else if (percentageCalculated >= 70 && percentageCalculated <= 79) {
    return("Grade: A")
}
else if (percentageCalculated >= 60 && percentageCalculated <= 69) {
    return("Grade: B")
}
else if (percentageCalculated >= 50 && percentageCalculated <= 59) {
    return("Grade: C")
}
else if (percentageCalculated >= 40 && percentageCalculated <= 49) {
    return("Grade: D")
}
else {
    return("Better Luck Next-Time")
}
}

var percentageCalculated = calculate(biology, english, urdu);
var result = markSheet(percentageCalculated);

alert("Student Name: " + userName + 
    "\nStudent Roll Number: " + rollNo +
     "\nBiology Marks: " + biology +
      "\nEnglish Marks: " + english + 
       "\nUrdu Marks: " + urdu + "\nResult: " + result)
