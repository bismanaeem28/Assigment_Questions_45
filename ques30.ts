let current_users: string[] = [ 'Alina', 'Khadija', 'Zarnish', 'Mariyam'];
let new_users: string[] = ['Alishba', 'Fariha', 'Mubarra', 'Rabia'];

for (let new_user of new_users) {
    // Convert both the current username and the new username to lowercase
    let lowercase_new_user = new_user.toLowerCase();

    // Check if the lowercase version of the new username exists in the current users list
    if (current_users.map(user => user.toLowerCase()).includes(lowercase_new_user)) {
        console.log(`Sorry, ${new_user}, that username is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations, ${new_user}, the username is available.`);
    }
}
