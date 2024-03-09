var usernames = ['admin', 'Alina', 'Khadija', 'Zarnish', 'Mariyam'];
for (var _a = 0, usernames_2 = usernames; _a < usernames_2.length; _a++) {
    var username_1 = usernames_2[_a];
    if (username_1 === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(username_1, ", thank you for logging in again."));
    }
}
