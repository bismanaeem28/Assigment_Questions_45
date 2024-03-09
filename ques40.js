function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
function show_magicians(magicians) {
    for (var _a = 0, magicians_1 = magicians; _a < magicians_1.length; _a++) {
        var magician = magicians_1[_a];
        console.log(magician);
    }
}
// Define an array of magician's names
var original_magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call make_great() to modify the array
make_great(original_magicians);
// Call the function to show the modified magician's names
show_magicians(original_magicians);
