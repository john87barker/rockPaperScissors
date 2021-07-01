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
  console.log(weapon)


  determineWinner(playerWeapon)
}



function determineWinner(playerWeapon) {
  let final = Math.round(Math.random() * 2.5)
  console.log(final)


  if (final == 2) {
    return document.getElementById('winLose').innerText = `You won with strongest ${playerWeapon} EVER!!! \n You beat ${player[playerWeapon].win} with it! Nice job!`
  }

  if (final == 0) {
    return document.getElementById('winLose').innerText = `Oh no! Your ${playerWeapon} wasn't good enough! \n You lost by ${player[playerWeapon].lose}...that's sad...`

  } else {
    return document.getElementById('winLose').innerText = `You tied! You both chose ${playerWeapon} you smarty pants!`
  }


}