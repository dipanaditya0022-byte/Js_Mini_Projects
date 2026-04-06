let randomNumber = parseInt(Math.random() * 100) + 1;
console.log(randomNumber);

let attemptsCount = 0;
let maxAttempts = 10;

let submit = document.getElementById("submitBtn");

submit.addEventListener("click", function() {
    let userInput = parseInt(document.getElementById("guessinput").value);
    
    if (attemptsCount >= maxAttempts) {
        alert("Game over! No attempts left.");
        return;
    }

    attemptsCount++;

    document.getElementById("feedback").innerText = "Previous guess: " + userInput;
    document.getElementById("attempts").innerText = "Attempts left: " + (maxAttempts - attemptsCount);

    if (userInput == randomNumber) {
        alert("Maal mil gya!");
    } else if (userInput < randomNumber) {
        alert("Ye tere aukat ke niche hai !! Try again.");
    } else {
        alert("Tere aukat ke bahar hai! Try again.");
    }
});