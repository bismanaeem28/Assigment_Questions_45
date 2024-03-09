let users: string[] = ['admin', 'Alishba', 'Fariha', 'Mubarra', 'Rabia'];

if (users.length === 0) {
    console.log('We need to find some users!');
} else {
    for (let user of users) {
        if (user === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        } else {
            console.log(`Hello ${user}, thank you for logging in again.`);
        }
    }
}

// Clear the array to simulate an empty list of users
users = [];

if (users.length === 0) {
    console.log('We need to find some users!');
}
