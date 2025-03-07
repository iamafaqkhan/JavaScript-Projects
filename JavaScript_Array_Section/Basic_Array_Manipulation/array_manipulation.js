// Basic Array Manipulation

// 1. Create an array with five fruit names and print the second element.
let fruitsArray = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
alert(fruitsArray[1]); // Banana

// 2. Replace the third element of an array with "Mango" and print the updated array.
fruitsArray[2] = "Cherry";
alert(fruitsArray); // Apple, Banana, Cherry, Mango, Pineapple

// 3. Create an empty array and add three colors to it using push(). Print the array.
let colorsArray = [];
colorsArray.push("Blue", "Yellow", "Green");
alert(colorsArray); // Blue, Yellow, Green

// 4. Remove the last element of an array using pop() and print the removed element.
let removedElement = fruitsArray.pop();
alert(removedElement); // Pineapple

// 5. Add two numbers at the beginning of an array using unshift() and print the array.
let addedElement = colorsArray.unshift(1, 2);
alert(colorsArray); // 1, 2, Blue, Yellow, Green

// 6. Remove the first element of an array using shift() and print the updated array. 
let removeFirstElement = fruitsArray.shift()
alert(fruitsArray); // Apple, Banana, Cherry, Mango

// 7. Print the length of an array containing four elements. 
alert(fruitsArray.length);

// 8. Extract the last two elements from an array using slice() and print them.
let lastTwoElements = colorsArray.slice(-2);
alert(lastTwoElements); // Yellow, Green

// 9. Extract the middle element(s) of an array with an even number of elements using slice().
let numberArray = [2, 4, 6, 8, 10, 12, 14, 16]
let middleElements = numberArray.slice(3, 5); 
alert(middleElements); // 8, 10

// 10. Replace two middle elements in an array using splice() and print the updated array. 
let replacedElements = numberArray.splice(3, 2, 9, 11);
alert(numberArray); // 2, 4, 6, 9, 11, 12, 14, 16