let playerChoice = {
  rock: {
    win: 'scissors',
    lose: 'paper'

  },
  paper: {
    win: 'rock',
    lose: 'scissors'

  },
  scissors: {
    win: 'paper',
    lose: 'rock'

  }
}

function play() {
  if (playerChoice == rock)
    console.log(rock)
  if (playerChoice == paper)
    console.log(paper)
  if (playerChoice == rock)
    console.log(paper)
}

function determineWinner() {

}