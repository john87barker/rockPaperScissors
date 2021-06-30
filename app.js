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
}
function cpu() {

}



function determineWinner() {

}