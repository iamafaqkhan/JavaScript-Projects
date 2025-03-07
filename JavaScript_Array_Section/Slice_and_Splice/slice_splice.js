// Slice and Splice

// 21. Extract the first three elements from an array using slice() and print them.
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
alert(numberArray.slice(0, 3));
 
// 22. Extract elements from index 2 to 4 using slice() and print them.
alert(numberArray.slice(2, 4));

// 23. Remove two elements from an array starting from index 1 using splice().
numberArray.splice(1, 2);
alert(numberArray);

// 24. Insert "Lemon" and "Orange" at index 2 in an array using splice() and print the updated array.
numberArray.splice(2, 0, "Lemon", "Orange");
alert(numberArray);

// 25. Remove the last two elements using splice() and print the modified array.
numberArray.splice(-2);
alert(numberArray); 

// 26. Use splice() to add three new numbers at the beginning of an array and print the array. 
numberArray.splice(0, 0, "1", "2", "3");
alert(numberArray);

// 27. Create an array with six elements, extract the last four using slice(), and print them. 
let vegetables = ["Tomato", "Potato", "Onion", "Carrot", "Cabbage", "Spinach"];
alert(vegetables.slice(-4));

// 28. Use slice() on an array and check if the original array remains unchanged.
let originalArray = [1, 2, 3, 4, 5];
let newArray = originalArray.slice(1, 3);
if (originalArray.length === 5) {
    alert("Original array remains unchanged.");
}else {
    alert("Original array is changed.");
}

// 29. Use splice() to remove one element from the middle of an array and print the updated array.
let fruits = ["Apple", "Banana", "Cherry", "Date", "Blueberry"];
fruits.splice(2, 1);
alert(fruits);

// 30. Use splice() to replace two elements in an array and print the modified array.
let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
colors.splice(1, 2, "White", "Black");
alert(colors);