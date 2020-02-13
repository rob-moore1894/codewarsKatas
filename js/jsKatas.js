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



//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

