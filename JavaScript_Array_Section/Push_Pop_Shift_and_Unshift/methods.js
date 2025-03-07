// Array Methods -> Push(), Pop(), Shift(), Unshift()

//11. Create an array of three cities and add a new city at the end using push().
let citiesArray = ["Nowshera", "Peshawar", "Islamabad"];
citiesArray.push("Mardan");
alert(citiesArray); 

//12. Remove the last city from an array using pop() and print the updated array.
citiesArray.pop();
alert(citiesArray);

//13. Add two new colors to the beginning of an array using unshift() and print the array.
let colorArray = ["Red", "Green", "Blue"]; 
colorArray.unshift("Yellow", "White");
alert(colorArray);

//14. Remove the first color from an array using shift() and print the removed color.
let removedColor = colorArray.shift();
alert(removedColor);

//15. Use push() twice to add two new names to an array and print the array.
let friendsArray = ["Haris", "Ahmar"];
friendsArray.push("Adeel", "Badr");
friendsArray.push("Musa", "Ubaid", "Javaid")
alert(friendsArray);

//16. Use pop() on an array of five elements and check if the length is now four.
friendsArray.pop();
alert(friendsArray.length);
if (friendsArray.length === 4){
    alert("Length is now four");
}else{
    alert("Length is not four" + "\nArray length is now: " + friendsArray.length);
}

//17. Use shift() on an array with three elements and print the updated array.
friendsArray.shift();
friendsArray.shift();
friendsArray.shift(); 
alert(friendsArray);

//18. Use unshift() to add a new number at the beginning of an array and print it.
let numbersArray = [2, 3, 4, 5];
numbersArray.unshift(1);
alert(numbersArray);

//19. Create an array of three numbers, remove the last one using pop(), and print the remaining array.
let threeNumberArray = [1, 2, 3];
threeNumberArray.pop();
alert(threeNumberArray);

//20. Create an array with three elements, remove the first using shift(), and print the updated array.
let threeElementArray = ["One", "Two", "Three"];
threeElementArray.shift();
alert(threeElementArray); 