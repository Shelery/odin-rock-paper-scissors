// Get buttons
const buttons = document.querySelectorAll(`button`);

const message = document.querySelector('#message')
let computerSelection;
let playerSelection;

// Initialize vars to store scores
computerPoints = 0;
playerPoints = 0;
rounds = 0;
const playRound = function(e) {
    rounds++;
    if (rounds > 5){
        buttons.forEach(button => button.removeEventListener('click', playRound))
        return;
    }
    console.log(rounds, computerPoints, playerPoints);
    const computerSelection = computerPlay();
    const playerSelection = e.target.id;
    // Don't add any points if they chose the same
    if (computerSelection === playerSelection) {
        return message.textContent =`Draw! You both chose ${computerSelection}!`
    } else {
        // List every case where the computer win, add points to computer
        if ((computerSelection === `rock` && playerSelection === `scissors`)
            || (computerSelection === `paper` && playerSelection === `rock`)
            || (computerSelection === `scissors` && playerSelection === `paper`)) {
            computerPoints++;
            if (computerSelection === `scissors`) {
                // NOTE for some reason innerText was not fine, but works with textContent
                return message.textContent =`You Lose! ${toCapital(computerSelection)} beat ${playerSelection}!`
            }
            return message.textContent =`You Lose! ${toCapital(computerSelection)} beats ${playerSelection}!`
        } else {
            // Cases when Player win
            playerPoints++;
            if (playerSelection === `scissors`) {
                return message.textContent =`You Win! ${toCapital(playerSelection)} beat ${computerSelection}!`
            }
            return message.textContent =`You Win! ${toCapital(playerSelection)} beats ${computerSelection}!`
        };
    };
    
}
// WATCH OUT FOR INFINITE LOOP
buttons.forEach(button => button.addEventListener('click', playRound));

    // Calculate winner
    resultMessage = `And the result is...`
    // NOTE : computerSelection and playerSelection are not returned (yet)
    // BUT it should be updated yet it is not and round limit is not working either ^.^"
    console.log(getResultMessage(computerPoints, playerPoints))



// Functions
// Play one round of R-P-S and save points
// get input function calls inside the function


// Get random choice from computer
function computerPlay() {
    n = Math.floor(Math.random() * 3);
    switch (n) {
        case 0:
            return `rock`;
        case 1:
            return `paper`;
        case 2:
            return `scissors`;
    }
}

// Capitalize first letter
function toCapital(string) {
    if (typeof string !== "string") return;
    return string[0].toUpperCase() + string.slice(1)
}
// Function to calculate return  final result message
function getResultMessage(computerPoints, playerPoints){
    if (computerPoints === playerPoints) {
        resultMessage += ' draw! Congrats for both of you!'
    } else if (computerPoints > playerPoints) {
        resultMessage += ` you lost! Sorry! What about a next round?`
    } else {
        resultMessage += `you won! Congratulations!`
    }
    return resultMessage;
}
// Possibilty of function generating round-end result messages