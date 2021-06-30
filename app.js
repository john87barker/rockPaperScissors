let player = {
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

function play(playerWeapon) {
  let weapon = player[playerWeapon]
  let cpu = 'paper'
  console.log(weapon)


  determineWinner()
}



function determineWinner() {
  let final = Math.round(Math.random() * 2.5)
  console.log(final)
  if (final == 2) {
    alert('Congrats! \n You Won')
  }
  if (final == 0) {
    alert('Oh no! You\'re a loser!\n Play again?')
  } else {
    alert('You Tied! Try again?')
  }



}