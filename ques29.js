var users = ['admin', 'Alishba', 'Fariha', 'Mubarra', 'Rabia'];
if (users.length === 0) {
    console.log('We need to find some users!');
}
else {
    for (var _a = 0, users_1 = users; _a < users_1.length; _a++) {
        var user = users_1[_a];
        if (user === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log("Hello ".concat(user, ", thank you for logging in again."));
        }
    }
}
// Clear the array to simulate an empty list of users
users = [];
if (users.length === 0) {
    console.log('We need to find some users!');
}
