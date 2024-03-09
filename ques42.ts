function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Sandwich is ready!");
}

// Call the function with different numbers of arguments
makeSandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
makeSandwich("Ham", "Cheese");
makeSandwich("Peanut Butter", "Jelly");
