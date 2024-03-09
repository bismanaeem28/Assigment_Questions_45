var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _a = 0, numbersArray_1 = numbersArray; _a < numbersArray_1.length; _a++) {
    var number_1 = numbersArray_1[_a];
    if (number_1 === 1) {
        console.log("".concat(number_1, "st"));
    }
    else if (number_1 === 2) {
        console.log("".concat(number_1, "nd"));
    }
    else if (number_1 === 3) {
        console.log("".concat(number_1, "rd"));
    }
    else {
        console.log("".concat(number_1, "th"));
    }
}
