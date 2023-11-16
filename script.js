function rollDie() {
    return Math.floor(Math.random() * 6) + 1; // Generates a random number between 1 and 6
}

function rollDice() {
    var die = document.getElementById('die');
    var resultElement = document.getElementById('result');

    var rollTimes = 10; // Number of times to roll the dice for the animation
    var rollInterval = 100; // Time interval for animation (milliseconds)

    var rollCount = 0;

    // Function to animate the dice roll
    function animateRoll() {
        if (rollCount < rollTimes) {
            var randomFace = rollDie();
            die.src = "dice" + randomFace + ".jpeg"; // Replace with your dice face images

            setTimeout(animateRoll, rollInterval);
            rollCount++;
        } else {
            var finalResult = rollDie();
            die.src = "dice" + finalResult + ".jpeg"; // Replace with your dice face images

            if (finalResult === 1) {
                resultElement.innerHTML = 'You rolled a 1!';
            } else {
                resultElement.innerHTML = 'You rolled a ' + finalResult + '!';
            }
        }
    }

    // Disable the button while rolling
    document.getElementById('rollButton').disabled = true;

    // Start the animation
    animateRoll();

    // Re-enable the button after the animation is complete
    setTimeout(function () {
        document.getElementById('rollButton').disabled = false;
    }, rollTimes * rollInterval);
}
