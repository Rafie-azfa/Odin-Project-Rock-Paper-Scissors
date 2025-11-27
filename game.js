let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choiceComputer = Math.floor(Math.random() * 3) + 1;
    return (choiceComputer === 1) ? "rock" : (choiceComputer === 2) ? "paper" : (choiceComputer === 3) ? "scissor" : "invalid";
}

function getHumanChoice() {
    const choiceHuman = prompt("Choose your weapon: Rock Paper Or Scissor!!");
    return choiceHuman.toLowerCase();
}

function playRound(choiceHuman, choiceComputer) {
    const weaponHuman = choiceHuman();
    const weaponComputer = choiceComputer();

    if (weaponHuman === "rock" && weaponComputer === "scissor") {
        humanScore++;
        console.log("Human wins: Rock beats scissor");
    } else if (weaponHuman === "paper" && weaponComputer === "rock") {
        humanScore++;
        console.log("Human wins: paper beats rock");
    } else if (weaponHuman === "scissor" && weaponComputer === "paper") {
        humanScore++;
        console.log("Human wins: scissor beats paper");
    } else if (weaponComputer === "rock" && weaponHuman === "scissor") {
        computerScore++;
        console.log("Computer wins: scissor beats paper");
    } else if (weaponComputer === "paper" && weaponHuman === "rock") {
        computerScore++;
        console.log("Computer wins: paper beats rock");
    } else if (weaponComputer === "scissor" && weaponHuman === "paper") {
        computerScore++;
        console.log("Computer wins: scissor beats paper");
    } else {
        console.log("It's a tie No-one got a Point!!");
    }
}

function getWinner(humanScore, computerScore){
    return humanScore > computerScore ? console.log(`human wins with score: human ${humanScore} : computer ${computerScore}`) : computerScore > humanScore ? console.log(`human wins with score: human ${humanScore} : computer ${computerScore}`) : "Tie";
}

function playGame(game, n) {
    for (i = 1; i <= n; i++) {
        console.log(`Round: ${i}`)
        game(getHumanChoice, getComputerChoice);
    }

    getWinner(humanScore, computerScore);

}

playGame(playRound, 5);