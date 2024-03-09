function makeSandwich() {
    var items = [];
    for (var _a = 0; _a < arguments.length; _a++) {
        items[_a] = arguments[_a];
    }
    console.log("Making a sandwich with the following items:");
    for (var _b = 0, items_1 = items; _b < items_1.length; _b++) {
        var item = items_1[_b];
        console.log("- " + item);
    }
    console.log("Sandwich is ready!");
}
// Call the function with different numbers of arguments
makeSandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
makeSandwich("Ham", "Cheese");
makeSandwich("Peanut Butter", "Jelly");
