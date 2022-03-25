const userChoiceDisplay = document.getElementById('users-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let randomNumber;
let computerChoice;
let result;

possibleChoices.forEach((choice) => {
  choice.addEventListener('click', (e) => {
    userChoice = e.currentTarget.id;
    userChoiceDisplay.innerHTML = userChoice;
    getRandomNumber();
    getResult();
  });
});

function getRandomNumber() {
  randomNumber = Math.floor(Math.random() * 3) + 1;
  // if (randomNumber === 1) {
  //   computerChoice = 'Rock';
  //   computerChoiceDisplay.textContent = computerChoice;
  // }
  // if (randomNumber === 2) {
  //   computerChoice = 'Paper';
  //   computerChoiceDisplay.textContent = computerChoice;
  // }
  // if (randomNumber === 3) {
  //   computerChoice = 'Scissor';
  //   computerChoiceDisplay.textContent = computerChoice;
  // }
  switch (randomNumber) {
    case 1:
      computerChoice = 'Rock';
      computerChoiceDisplay.textContent = computerChoice;
      break;
    case 2:
      computerChoice = 'Paper';
      computerChoiceDisplay.textContent = computerChoice;
      break;
    case 3:
      computerChoice = 'Scissor';
      computerChoiceDisplay.textContent = computerChoice;
      break;
  }
}
function getResult() {
  // if (computerChoice === userChoice) {
  //   result = 'This round is draw!';
  // }
  // if (computerChoice === 'Rock' && userChoice === 'paper') {
  //   result = 'You win!';
  // }
  // if (computerChoice === 'Paper' && userChoice === 'rock') {
  //   result = 'You loose!';
  // }
  // if (computerChoice === 'Scissor' && userChoice === 'rock') {
  //   result = 'You win!';
  // }
  // if (computerChoice === 'Paper' && userChoice === 'scissor') {
  //   result = 'You win';
  // }
  // if (computerChoice === 'Paper' && userChoice === 'rock') {
  //   result = 'You loose!';
  // }
  // if (computerChoice === 'Rock' && userChoice === 'scissor') {
  //   result = 'You loose!';
  // }
  // if (computerChoice === 'Scissor' && userChoice === 'Paper') {
  //   result = 'You loose!';
  // }

  //this piece needs to be corrected.
  switch (userChoice + computerChoice) {
    case computerChoice === userChoice:
      result = 'This round is draw';
      break;
    case computerChoice === 'Rock' && userChoice === 'Paper':
      result = 'You win!';
      break;
    case computerChoice === 'Paper' && userChoice === 'Rock':
      result = 'You loose!';
      break;
    case computerChoice === 'Rock' && userChoice === 'Scissor':
      result = 'You loose!';
      break;
    case computerChoice === 'Scissor' && userChoice === 'Rock':
      result = 'You win!';
      break;
    case computerChoice === 'Paper' && userChoice === 'Scissor':
      result = 'You win!';
      break;
    case computerChoice === 'Scissor' && userChoice === 'Paper':
      result = 'You loose!';
      break;
  }

  resultDisplay.innerText = result;
}
