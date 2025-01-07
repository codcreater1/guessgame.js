const minNumber = 1;
const maxNumber = 100;
const answer = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${minNumber} - ${maxNumber}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert('Please enter a valid number');
    } else if (guess < minNumber || guess > maxNumber) {
        window.alert(`Your guess must be between ${minNumber} and ${maxNumber}`);
    } else {
        attempts++;
        if (guess < answer) {
            window.alert("It's too low! TRY AGAIN");
        } else if (guess > answer) {
            window.alert("It's too high! TRY AGAIN");
        } else {
            window.alert(`CORRECT!! THE ANSWER WAS ${answer}. It took you ${attempts} attempts`);
            running = false;
        }
    }
}
