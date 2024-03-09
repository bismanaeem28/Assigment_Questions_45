// Make a list of people you'd like to invite to dinner
let guestList: string[] = ["Aiza", "Fazeen", "Sidra"];

// Print a personalized invitation message to each person
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nBest regards,\n[Your Name]`);
}

// Inform people that you found a bigger dinner table
console.log("\nGreat news! I found a bigger dinner table.");

// Add one new guest to the beginning of the array
guestList.unshift("Alishba");

// Add one new guest to the middle of the array
guestList.splice(Math.ceil(guestList.length / 2), 0, "Kashaf");

// Use push() to add one new guest to the end of the list
guestList.push("Nida");

// Print a new set of invitation messages
console.log("\nUpdated set of invitations:");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nBest regards,\n[Your Name]`);
}
