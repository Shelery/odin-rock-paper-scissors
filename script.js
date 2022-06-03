
// Initialize vars to store scores
let computerPoints = 0;
let playerPoints = 0;

// Repeat the game 5 times
for (i = 0; i < 5; i++){
    // Get random choice from computer
    let computerSelection = computerPlay();
    // Get player's choice
    let playerSelection;
    // Check if input is correct
    while (![`paper`,`rock`,`scissors`].includes(playerSelection)){
        playerSelection = prompt(`Write rock, paper or scissors!`).toLowerCase().trim();
        }
    console.log(playRound(computerSelection, playerSelection));
}
// Calculate winner
resultMessage = `And the result is...`
if (computerPoints === playerPoints){
    resultMessage +=' draw! Congrats for both of you!'
} else if (computerPoints > playerPoints){
    resultMessage += ` you lost! Sorry! What about a next round?`
} else {
    resultMessage += `you won! Congratulations!`
}
console.log(resultMessage)
   


// Functions
// Get random choice from computer
function computerPlay(){
    n = Math.floor(Math.random()*3);
    switch (n){
        case 0:
            return `rock`;
        case 1:
            return `paper`;
        case 2:
            return `scissors`;
    }
}

// Play one round of R-P-S and save points
function playRound(computerSelection, playerSelection){
    // Don't add any points if they chose the same
   if (computerSelection === playerSelection){
       return `Draw! You both chose ${computerSelection}!`
   } else {
        // List every case where the computer win, add points to computer
        if ((computerSelection === `rock` && playerSelection === `scissors`)
        || (computerSelection === `paper` && playerSelection === `rock`)
        || (computerSelection === `scissors` && playerSelection === `paper`)){
            computerPoints++;
            if (computerSelection === `scissors`){
                return `You Lose! ${toCapital(computerSelection)} beat ${playerSelection}!`
            }
            return `You Lose! ${toCapital(computerSelection)} beats ${playerSelection}!`
        } else {
            // Cases when Player win
            playerPoints++;
            if (playerSelection === `scissors`){
                return `You Win! ${toCapital(playerSelection)} beat ${computerSelection}!`
            }
            return `You Win! ${toCapital(playerSelection)} beats ${computerSelection}!`
        }
   }

}
// Capitalize first letter
function toCapital(string){
    return string[0].toUpperCase() + string.slice(1)
}
// Possibility of a function to calculate return message

