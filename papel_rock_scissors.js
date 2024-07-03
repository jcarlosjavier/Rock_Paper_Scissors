//****variables****
const arr = ['rock', 'paper', 'scissors'];

//*****logic to the computer choice****
function getComputerChoice () {
    const choice = Math.floor(Math.random() * arr.length); 
	  return arr[choice];   
}

//*****logic to get the human choice****

function getHumanChoice () { 
  const humanType = prompt("Insert one of the next options ('Rock', 'Paper', 'Scissors')").toLowerCase();

  if (arr.includes(humanType)) {
    return humanType;
  } else {
    alert("Input not valid! Please enter Rock, Paper or Scissors");
    return undefined;
  }
}

//******Write the logic to play a single round*****
  
function playGame() {
  let humanScore = 0; let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if  (humanChoice === computerChoice) {
        console.log('Draw');
    } else if (
        (humanChoice === 'rock'  && computerChoice === 'scissors')  ||
        (humanChoice === 'paper'  && computerChoice === 'rock') ||
        (humanChoice === 'scissors'  && computerChoice === 'paper')
    ) { 
        console.log(`You WIN`);
        humanScore++;
    } else {
        console.log(`You lose `); 
        computerScore++;
    }        
  };

  for(let i = 0; i < 5; i++) {
      playRound(getHumanChoice(), getComputerChoice());
      console.log(`Your score is ${humanScore}\nComputer score is ${computerScore}`);
  }

  if (humanScore === computerScore) {
    console.log("It's a tie, you should play one more round")
  } else if (humanScore > computerScore) {
    console.log("YOU WIN THE GAME");
  } else {console.log("COMPUTER WIN THE GAME");}
}
        
    playGame();
    
    
   