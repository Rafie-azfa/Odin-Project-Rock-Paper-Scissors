let choice = document.querySelector("#weapon");
let humanPoint = document.querySelector("#humanPoint")
let computerPoint = document.querySelector("#computerPoint");
let result = document.querySelector(".result");

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const choiceComputer = Math.floor(Math.random() * 3) + 1;
    return (choiceComputer === 1) ? "rock" : (choiceComputer === 2) ? "paper" : (choiceComputer === 3) ? "scissor" : "invalid";
}

function getHumanChoice(result){
    switch (result){
        case "rock":
            return "rock"
        case "paper":
            return "paper"
        case "scissor":
            return "scissor"
    } ;
}

function playRound(choiceHuman, choiceComputer) {
    const weaponHuman = choiceHuman;
    const weaponComputer = choiceComputer();

    if (weaponHuman === "rock" && weaponComputer === "scissor") {
        humanScore++;
        humanPoint.textContent = `Human: ${humanScore}`
        result.textContent = `Result: Human wins! Rock beats scissor`
    } else if (weaponHuman === "paper" && weaponComputer === "rock") {
        humanScore++;
        humanPoint.textContent = `Human: ${humanScore}`
        result.textContent = `Result: Human wins! paper beats rock`
    } else if (weaponHuman === "scissor" && weaponComputer === "paper") {
        humanScore++;
        humanPoint.textContent = `Human: ${humanScore}`
        result.textContent = `Result: Human wins! scissor beats paper`
    } else if (weaponComputer === "rock" && weaponHuman === "scissor") {
        computerScore++;
        computerPoint.textContent = `Computer: ${computerScore}`
        result.textContent = `Result: Computer wins! scissor beats paper`
    } else if (weaponComputer === "paper" && weaponHuman === "rock") {
        computerScore++;
        computerPoint.textContent = `Computer: ${computerScore}`
        result.textContent = `Result: Computer wins! paper beats rock`
    } else if (weaponComputer === "scissor" && weaponHuman === "paper") {
        computerScore++;
        computerPoint.textContent = `Computer: ${computerScore}`
        result.textContent = `Result: Computer wins! scissor beats paper`
    } else {
        result.textContent = `Result: It's a tie No-one got a Point!!`
    }
}

function getWinner(humanScore, computerScore) {
    return humanScore > computerScore ? console.log(`human wins with score: human ${humanScore} : computer ${computerScore}`) : computerScore > humanScore ? console.log(`human wins with score: human ${humanScore} : computer ${computerScore}`) : "Tie";
}

function gameWinner(humanScore, computerScore){
    if (humanScore === 5){
        result.textContent = `Result: Game Over! Human Wins!`;
        return true;
    }
    
    if(computerScore === 5){
        result.textContent = `Result: Game Over! Computer Wins!`;
        return true;
    }
}

//main from here?
choice.addEventListener("click", (event) =>{
    let res = "";
    let target = event.target.classList;
    target.forEach(element => {
        if (element !== "choice" && gameWinner(humanScore, computerScore) !== true){
            res = getHumanChoice(element);
            playRound(res, getComputerChoice);

        } 

    });
})
