// Make a list of people you'd like to invite to dinner
let guestList: string[] = ["Aiza", "Fazeen", "Sidra"];

// Print a personalized invitation message to each person
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nBest regards,\n[Your Name]`);
}

// Print the name of the guest who can't make it
console.log(`${guestList[1]} can't make it to the dinner.`);

// Replace the name of the guest who can't make it with a new person
guestList[1] = "Marie Curie";

// Print a second set of invitation messages
console.log("\nSecond set of invitations:");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nBest regards,\n[Your Name]`);
}
