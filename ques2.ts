// Store the person's name in a variable
let personName: string = "Bisma";

// Print the name in lowercase
console.log("Lowercase:", personName.toLowerCase());

// Print the name in uppercase
console.log("Uppercase:", personName.toUpperCase());

// Print the name in titlecase
console.log("Titlecase:", personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));
