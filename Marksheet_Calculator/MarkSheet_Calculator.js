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


obtainedMarks = biology + urdu + english

percentage = obtainedMarks / totalMarks * 100



if (percentage >= 80 && percentage <= 100) {
    alert("Grade: A+")
}
else if (percentage >= 70 && percentage <= 79) {
    alert("Grade: A")
}
else if (percentage >= 60 && percentage <= 69) {
    alert("Grade: B")
}
else if (percentage >= 50 && percentage <= 59) {
    alert("Grade: C")
}
else if (percentage >= 40 && percentage <= 49) {
    alert("Grade: D")
}
else {
    alert("Better Luck Next-Time")
}

alert("Student Name: " + userName + 
    "\nStudent Roll Number: " + rollNo +
     "\nBiology Marks: " + biology +
      "\nEnglish Marks: " + english + 
       "\nUrdu Marks: " + urdu)

