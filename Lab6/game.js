
/* Global Variables */

let wins = 0;
let losses = 0;
let draws = 0;

let results = [];
let round = 0;
let gameStarted = false;


/* Function 1: Start Game */

function startGame() {

    let name = document.getElementById("playerName").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    gameStarted = true;

    document.getElementById("welcome").innerHTML =
        "Welcome, " + name + "!";

    document.getElementById("startTime").innerHTML =
        "Game started on: " + new Date();

}


/* Function 2: Generate Computer Choice */

function getComputerChoice() {

    let choices = ["rock", "paper", "scissors"];

    let randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];

}


/* Function 3: Play One Round */

function playRound(playerChoice) {

    if (!gameStarted) {
        alert("Click Start Game first.");
        return;
    }

    let computerChoice = getComputerChoice();

    let result;

    round++;

    // Determine the winner
    if (playerChoice === computerChoice) {

        result = "Draw";
        draws++;

    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {

        result = "Win";
        wins++;

    } else {

        result = "Lose";
        losses++;

    }

    // Change player image
    document.getElementById("playerImg").src =
        playerChoice + ".png";

    // Change computer image
    document.getElementById("computerImg").src =
        computerChoice + ".png";

    // Display result and colour
    let resultElement = document.getElementById("result");

    resultElement.innerHTML = result;

    if (result === "Win") {
        resultElement.style.color = "green";

    } else if (result === "Lose") {
        resultElement.style.color = "red";

    } else {
        resultElement.style.color = "grey";
    }

    // Update scoreboard
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("draws").innerHTML = draws;

    // Store result in array
    results.push(result);

    // Add new row to history table
    document.getElementById("historyBody").innerHTML +=
        "<tr>" +
        "<td>" + round + "</td>" +
        "<td>" + playerChoice + "</td>" +
        "<td>" + computerChoice + "</td>" +
        "<td>" + result + "</td>" +
        "</tr>";

}


/* Function 4: Show Summary */

function showSummary() {

    let totalRounds = results.length;
    let totalWins = 0;

    // Count total wins using for loop
    for (let i = 0; i < results.length; i++) {

        if (results[i] === "Win") {
            totalWins++;
        }

    }

    let percentage = 0;

    if (totalRounds > 0) {
        percentage = Math.round(
            (totalWins / totalRounds) * 100
        );
    }

    document.getElementById("summary").innerHTML =
        "You played " + totalRounds +
        " rounds and won " + percentage + "%.";

}


/* Function 5: Reset Game */

function resetGame() {

    wins = 0;
    losses = 0;
    draws = 0;

    round = 0;

    results = [];

    gameStarted = false;

    document.getElementById("wins").innerHTML = 0;
    document.getElementById("losses").innerHTML = 0;
    document.getElementById("draws").innerHTML = 0;

    document.getElementById("historyBody").innerHTML = "";

    document.getElementById("result").innerHTML =
        "Result will appear here";

    document.getElementById("result").style.color = "black";

    document.getElementById("summary").innerHTML = "";

    document.getElementById("welcome").innerHTML = "";

    document.getElementById("startTime").innerHTML = "";

    document.getElementById("playerImg").src = "rock.png";

    document.getElementById("computerImg").src = "rock.png";

    document.getElementById("playerName").value = "";

}
