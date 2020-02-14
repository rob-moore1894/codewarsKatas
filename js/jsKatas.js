"use strict";

$(document).ready(function () {
    console.log("Ready to roll!");
});
// Your task is to create a function that does four basic mathematical operations.
//
//     The function should take three arguments - operation(string/char), value1(number), value2(number).
//     The function should return result of numbers after applying the chosen operation.


// Basic Mathematical Operations
function basicOp(operation, value1, value2) {
    var result;
    switch (operation) {
        case '*':
            result = value1 * value2;
            break;
        case '/':
            result = value1 / value2;
            break;
        case '+':
            result = value1 + value2;
            break;
        case '-':
            result = value1 - value2;
            break;
    }

    return result;

}

console.log(basicOp('*',10,5));

//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
function summation(num) {
    var total = 0;
    for (var i = 1; i <= num; i++){
        total += i;
    }
    return total;
}
console.log(summation(3));

//Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

function findNextSquare(sq) {
    // Return the next square if sq if a perfect square, -1 otherwise
    // Find the square root of the number
    // If the square root is an integer, add 1 to the root and square it, then return that number
    var squareRoot = Math.sqrt(sq);

    if (squareRoot % 1 === 0){
        var addOne = squareRoot + 1;
        var nextSquare = addOne * addOne;
        return nextSquare;
    } else {
        return -1;
    }
}
$('.kataQuestions').html(findNextSquare(121));

console.log(findNextSquare(121));

//Write a function called repeatString which repeats the given String src exactly count times.
function repeatStr (n, s) {
    if (!isNaN(n) && n > 0) {
        return s.repeat(n)
    }
}

console.log(repeatStr(3, "Yo!"));

