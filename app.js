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
    return document.getElementById('winLose').innerText = `You won with ${playerWeapon} \n you beat ${player[playerWeapon].win}`
  }

  if (final == 0) {
    return document.getElementById('winLose').innerText = `You lost with ${playerWeapon} \n you lost by ${player[playerWeapon].lose}`

  } else {
    return document.getElementById('winLose').innerText = `You tied!You both chose ${playerWeapon}`
  }


}