document.addEventListener('DOMContentLoaded', (event) => {

//****variables****
const arr = ['rock', 'paper', 'scissors'];
const container = document.getElementById("container");
const startButton = document.getElementById("startButton");
let humanScore = 0; 
let computerScore = 0;
let gameStarted = false;

//*****logic to the computer choice****
function getComputerChoice () {
    const choice = Math.floor(Math.random() * arr.length); 
	  return arr[choice];   
}

//*****logic to get the human choice****

function getHumanChoice (humanType) { 
  if (arr.includes(humanType)) {
    gameStarted = true; // Marcar que el juego ha comenzado
    return humanType;
  } else {
    alert("Input not valid! Please enter Rock, Paper or Scissors");
    return undefined;
  }
}

//******Write the logic to play a single round*****
  



  function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
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
    
      // Actualizar marcador y verificar ganador
    updateScore();
    checkWinner();
  };

    function updateScore(){
      const scoreDisplay = document.getElementById("scoreDisplay")
      scoreDisplay.textContent = `Human: ${humanScore} - Computer: ${computerScore}`
    };


    function checkWinner(){
      if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore > computerScore) {
          alert("YOU WIN THE GAME. CONGRATULATION!!") 
        } else if (computerScore > humanScore) {
          alert("COMPUTER WIN THE GAME")
        } else {
            alert("It's a tie! Play another round to determine the winner.") 
        }
        resetGame();
      }
      
    }

    function resetGame (){
      humanScore = 0;
      computerScore = 0;
      gameStarted = false;
      updateScore();
    }
  
  function playGame() {  

    const paperBtn = document.createElement('button');
    const rockBtn = document.createElement('button');
    const scissorsBtn = document.createElement('button');
    
    paperBtn.textContent = 'paper';
    rockBtn.textContent = ' rock';
    scissorsBtn.textContent = 'scissors'

    paperBtn.addEventListener('click', () => {
      //removeStartButton();
      playRound(getHumanChoice('paper'))});

    rockBtn.addEventListener('click', () => {
      //removeStartButton();
      playRound(getHumanChoice('rock'))});

    scissorsBtn.addEventListener('click', () => { 
      //removeStartButton();
      playRound(getHumanChoice('scissors'))});

    container.appendChild(paperBtn);
    container.appendChild(rockBtn);
    container.appendChild(scissorsBtn);
    
    // Iniciar el juego solo si no ha comenzado aún
    if(!gameStarted) {
      gameStarted = true;
      updateScore();
    }
  }
     
  
  function removeStartButton() {
    if (startButton) {
      startButton.remove();
    }
  };

  startButton.addEventListener('click', () => {
      playGame();
      removeStartButton();
  });
       
}); 
   