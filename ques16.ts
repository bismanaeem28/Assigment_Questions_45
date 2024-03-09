// Make a list of people you'd like to invite to dinner
let guestList: string[] = ["Isma", "Alishba", "Maryam", "Kashaf", "Laiba", "Nida"];

// Print a personalized invitation message to each person
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nBest regards,\n[Your Name]`);
}

// Print a message saying you can only invite two people for dinner
console.log("\nUnfortunately, the new dinner table won't arrive in time, so I can only invite two people for dinner.");

// Remove guests from the list one at a time until only two names remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

// Print a message to each of the two people still on your list, letting them know they're still invited
console.log(`\n${guestList[0]}, you're still invited to dinner.`);
console.log(`${guestList[1]}, you're still invited to dinner.`);

// Remove the last two names from your list
guestList.pop();
guestList.pop();

// Print your list to make sure you actually have an empty list at the end of your program
console.log("\nRemaining guests:", guestList);
