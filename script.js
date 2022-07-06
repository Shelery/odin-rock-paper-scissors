// Get HTML elements
const body = document.querySelector('body')
const buttons = document.querySelectorAll(`button`);
const message = document.querySelector('#message')

let computerSelection;
let playerSelection;

// Initialize vars to store scores
let computerPoints = 0;
let playerPoints = 0;
let  rounds = 0;

const playRound = function(e) {
    // Update round number
    rounds++;
    // Check if game should be ended
    if (rounds === 5){
        // Calculate winner and final resultMessage
        endGame()
    }
    const computerSelection = computerPlay();
    const playerSelection = e.target.id;
    addPoints(computerSelection, playerSelection);
    
}
// Add playRound to buttons
buttons.forEach(button => button.addEventListener('click', playRound));


// Functions
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
function endGame(){
    // Remove eventListener
    buttons.forEach(button => button.removeEventListener('click', playRound))
    // Create div for result
    let finalResult = document.createElement('h1');
    // Calculate winner
    resultMessage = `And the result is...`
    finalResult.textContent = getResultMessage(computerPoints, playerPoints);

    body.appendChild(finalResult)
    return;
}
function addPoints(computerSelection, playerSelection){
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
// Possibilty of function generating round-end result messages