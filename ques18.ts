// Make a list of people you'd like to invite to dinner
let guestList: string[] = ["Aiza", "Fazeen", "Sidra"];

// Print a personalized invitation message to each person
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nBest regards,\n[Your Name]`);
}

// Print the number of people invited to dinner
console.log(`Total number of people invited to dinner: ${guestList.length}`);
