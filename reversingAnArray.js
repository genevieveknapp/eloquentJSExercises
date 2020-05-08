/* Arrays have a reverse method that changes the array by inverting the order in which its elements
appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, 
reverseArray, takes an array as argument and produces a new array that has the same elements in the 
inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the 
array given as argument by reversing its elements. Neither may use the standard reverse method.
Thinking back to the notes about side effects and pure functions in the previous chapter, which 
variant do you expect to be useful in more situations? Which one runs faster? */

function reverseArray(array) {
    let newArray = [];
    for (let i = array.length; i > 0; i--) {
        newArray.push(array[i - 1])
    }
    return newArray; 
}

console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(array) {
    let a;
    let b;
    let x = array.length;
    for (let i = 0; i < Math.floor(array.length/2); i++) {
        a = array[i];
        b = array[x - 1 - i]
        array[i] = b;
        array[x - 1 - i] = a;
    }
    return array;
}

console.log(reverseArrayInPlace([1,2,3,4,5,6]));