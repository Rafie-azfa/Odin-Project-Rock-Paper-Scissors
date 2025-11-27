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
