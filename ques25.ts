let alien_color3: string;

// First version that runs the if block
alien_color3 = 'green';

if (alien_color3 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}

// Second version that runs the else if block
alien_color3 = 'yellow';

if (alien_color3 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alien_color3 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}

// Third version that runs the else block
alien_color3 = 'red';

if (alien_color3 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alien_color3 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (alien_color3 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
