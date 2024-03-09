var current_users = ['Alina', 'Khadija', 'Zarnish', 'Mariyam'];
var new_users = ['Alishba', 'Fariha', 'Mubarra', 'Rabia'];
for (var _a = 0, new_users_1 = new_users; _a < new_users_1.length; _a++) {
    var new_user = new_users_1[_a];
    // Convert both the current username and the new username to lowercase
    var lowercase_new_user = new_user.toLowerCase();
    // Check if the lowercase version of the new username exists in the current users list
    if (current_users.map(function (user) { return user.toLowerCase(); }).includes(lowercase_new_user)) {
        console.log("Sorry, ".concat(new_user, ", that username is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations, ".concat(new_user, ", the username is available."));
    }
}
