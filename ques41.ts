function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push("the Great " + magician);
    }
    return great_magicians;
}

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define an array of magician's names
let original_magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call make_great() with a copy of the original array
let great_magicians: string[] = make_great([...original_magicians]);

// Call the function to show the original magician's names
show_magicians(original_magicians);

console.log("\n");

// Call the function to show the modified magician's names
show_magicians(great_magicians);

