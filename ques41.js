var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function make_great(magicians) {
    var great_magicians = [];
    for (var _a = 0, magicians_1 = magicians; _a < magicians_1.length; _a++) {
        var magician = magicians_1[_a];
        great_magicians.push("the Great " + magician);
    }
    return great_magicians;
}
function show_magicians(magicians) {
    for (var _a = 0, magicians_2 = magicians; _a < magicians_2.length; _a++) {
        var magician = magicians_2[_a];
        console.log(magician);
    }
}
// Define an array of magician's names
var original_magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call make_great() with a copy of the original array
var great_magicians = make_great(__spreadArray([], original_magicians, true));
// Call the function to show the original magician's names
show_magicians(original_magicians);
console.log("\n");
// Call the function to show the modified magician's names
show_magicians(great_magicians);
