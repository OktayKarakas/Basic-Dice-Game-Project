let player1Score = 0
let player2Score = 0
let player1Turn = true
const player1Dice = document.getElementById('player1Dice')
const player2Dice = document.getElementById('player2Dice')
const player1Scoreboard = document.getElementById('player1Scoreboard')
const player2Scoreboard = document.getElementById('player2Scoreboard')
const message = document.getElementById('message')
const rollBtn = document.getElementById('rollBtn')
const resetBtn = document.getElementById('resetBtn')

rollBtn.addEventListener('click', function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1
  if (player1Turn === true) {
    player1Score += randomNumber
    player1Dice.classList.add('active')
    player2Dice.classList.remove('active')
    message.textContent = 'Player 1 Turn'
    player1Dice.textContent = randomNumber
    player1Scoreboard.textContent = player1Score
    player1Turn = false
  } else {
    player2Score += randomNumber
    player2Dice.classList.add('active')
    player1Dice.classList.remove('active')
    message.textContent = 'Player 2 Turn'
    player2Dice.textContent = randomNumber
    player2Scoreboard.textContent = player2Score
    player1Turn = true
  }

  function endGame() {
    rollBtn.style.display = 'none'
    resetBtn.style.display = 'inline-block'
  }

  if (player1Score >= 20) {
    message.textContent = 'Player 1 Won !'
    endGame()
  } else if (player2Score >= 20) {
    message.textContent = 'Player 2 Won !'
    endGame()
  }
})
resetBtn.addEventListener('click', function () {
  player1Score = 0
  player2Score = 0
  message.textContent = 'Player 1 Turn'
  player1Dice.textContent = '-'
  player2Dice.textContent = '-'
  player2Scoreboard.textContent = player2Score
  player1Scoreboard.textContent = player1Score
  player1Turn = true
  player1Dice.classList.add('active')
  player2Dice.classList.remove('active')
  resetBtn.style.display = 'none'
  rollBtn.style.display = 'inline-block'
})
