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
        alert(`DRAW\n |You chose ${humanChoice}\n|Computer chose ${computerChoice}`);
    } else if (
        (humanChoice === 'rock'  && computerChoice === 'scissors')  ||
        (humanChoice === 'paper'  && computerChoice === 'rock') ||
        (humanChoice === 'scissors'  && computerChoice === 'paper')
    ) { 
        alert(`YOU WIN THE ROUND\n |You chose ${humanChoice}\n|Computer chose ${computerChoice}`);
        humanScore++;
    } else {
        alert(`YOU LOSE ROUND\n |You chose ${humanChoice}\n|Computer chose ${computerChoice}`); 
        computerScore++;
    }        
  };

  for(let i = 0; i < 5; i++) {
      playRound(getHumanChoice(), getComputerChoice());
      alert(`Your score is ${humanScore}\n |Computer score is ${computerScore}`);
  }

  if (humanScore === computerScore) {
    document.write("It's a tie, you should play one more round")
  } else if (humanScore > computerScore) {
    document.write("YOU WIN THE GAME" );
  } else {document.write("COMPUTER WIN THE GAME" );}
}
        
    playGame();
    
    
   