// Pass By Reference

// 31. Assign an array to another variable and modify the original array. Print both variables.
let firstArray = [1, 2, 3, 4, 5]; 
let secondArray = firstArray;
firstArray.push(6);
alert("First Array: " + firstArray + "\nSecond Array: " + secondArray);

// 32. Create a function that adds an element to an array and check if the original array changes.
function addElement(array) {
    array.push(7);
}
let arrayOne = [1, 2, 3, 4, 5];
addElement(arrayOne);
alert("Original Array Modified: " + arrayOne);

// 33. Pass an array to a function, modify its first element, and print the modified array.
function modifyFirstElement(array) {
    array[0] = 10;
}
let  arrayTwo = [1, 2, 3, 4, 5];
modifyFirstElement(arrayTwo);
alert("Modified Array: " + arrayTwo);

// 34. Create an array, pass it to another variable, modify the second variable, and print both.
let arrayThree = ["Red", "Blue", "Green", "Yellow"];
let arrayFour = arrayThree;
arrayFour[2] = "Purple";
alert("First Array: " + arrayThree + "\nSecond Array: " + arrayFour);

// 35. Check if two variables referencing the same array are equal after modifying one.
let arrayFive = ["Apple", "Banana", "Cherry", "Date"];
let arraySix = arrayFive;
if (arrayFive === arraySix) {
    alert("Both Arrays are Equal");
} else{
    alert("Both Arrays are Not Equal");
}


// 36. Create an array, pass it to a function that removes an element, and print the result.
function removeElement(array) {
    return array.pop();
}
let arraySeven = [1, 2, 3, 4, 5];
let removedElement =  removeElement(arraySeven);
alert("Array After Removing Element: " + arraySeven + "\n Element Removed: " + removedElement);

// 37. Store an array in two different variables, modify one using push(), and print both. 
let arrayEight = ["One", "Two", "Three", "Four", "Five"];
let arrayNine = arrayEight;
let arrayTen = arrayEight;
arrayNine.push("Six");
alert("First Array: " + arrayEight + "\nSecond Array: " + arrayNine + "\nThird Array: " + arrayTen);

// 38. Use pop() on an array inside a function and see if the original array changes.
function removeElement(array) {
    return array.pop();
}
let arrayEleven = [1, 2, 3, 4, 5];
let removedElementTwo = removeElement(arrayEleven);
if (arrayEleven.length === 4) {
    alert( "Array After Removing Element: " + arrayEleven + "\nElement Removed: " + removedElementTwo + "\nArray Modified");
} else {
    alert("Array After Removing Element: " + arrayEleven + "\nElement Removed: " + removedElementTwo + "\nArray Not Modified");
}

// 39. Pass an array to a function that changes its length and check the effect. 
function changeLength(array) {
    array.length = 2;
}
let arrayTwelve = [1, 2, 3, 4, 5];
changeLength(arrayTwelve);
alert("Array After Changing Length: " + arrayTwelve);

// 40. Create two separate arrays with identical elements and check if they are strictly equal.
let arrayThirteen = [1, 2, 3, 4, 5];
let arrayFourteen = [1, 2, 3, 4, 5];
if (arrayThirteen === arrayFourteen) {
    alert("Both Arrays are Equal");
} else {
    alert("Both Arrays are Not Equal");
}