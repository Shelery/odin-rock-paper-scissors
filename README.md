# odin-rock-paper-scissors
What I practiced in this challenge::
 - DOM manipulation
 - scopes and shadowing
 - refactoring your code
 - eventListeners
 ### Biggest challenge for me
  Refactoring my original, console based programme, I tried to divide the code
 into smaller functions.
  However, I struggled a lot with finding my way to send the neccessary input,
  and update global variables (computerPoints, playerPoints).
  ### The problem and my solution
   Originally I wanted to structure the code in a way that playRound updates 
   computerPoints and playerPoints and then (with the correct message) returns.
    Then it could've been used to get the finalMessage.
    The problem was, that - I suspect due to scoping -, when playRound returned,
    it didn't globally update the points. It also didn't work with limiting rounds.
    
  My solution was including endGame function into playRound, which uses the
  local (?[not sure about whether it is the proper terminology in this case)
  values of computerPoints and playerPoints, thus makes it easy to keep track 
  of them and also stop the game when rounds reach 5.

### Possible research topics
-     let / var / "nothing"  when declaring a variable
  - possible consequences
  - when to use them
- function vs. function call
