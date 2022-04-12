const playerOne = 'Red'
const playerTwo = 'Yellow'
let currentPlayer = playerOne //re


let gameOver = false
let board = []


const rows = 7
const columns = 6
let currentColumns = [] // keep track of array and it is currently set to empty 


window.onload = function () {
  grid();
}

function grid() {
  // board = [] //
  currentColumns = [6, 6, 6, 6, 6, 6, 6]


  for (let r = 0; r < rows; r++) {
    let row = []
    for (let c = 0; c < columns; c++) {
      row.push(' ')

      let slot = document.createElement("div");
      slot.id = r.toString() + "-" + c.toString()
      slot.classList.add("slot")
      slot.addEventListener("click", counters)
      document.getElementById("board").append(slot)
    }
    board.push(row)
  }
}

function counters() {
  if (gameOver) {
    return;
  }

  let coords = this.id.split("-") //
  let r = parseInt(coords[0])
  let c = parseInt(coords[1])

  r = currentColumns[c]
  if (r < 0){
    return;
  }


  board[r][c] = currentPlayer
  let slot = document.getElementById(r.toString() + "-" + c.toString())
  if (currentPlayer == playerOne) {
    slot.classList.add("red-counter")
    currentPlayer = playerTwo
  }
  else {
    slot.classList.add("yellow-counter")
    currentPlayer = playerOne
  }

  r -= 1
  currentColumns[c] = r

  checkWinner()
}


function checkWinner() { 
  for (let rws = 0; rws < rows; rws++){  //horizontal check
    for (let cols = 0; cols < columns - 3; cols++){
      if (board[rws][cols] != ' '){ // if board not equal to white space I will check if board has a counter
        if (board[rws][cols] === board[rws][cols+1] && board[rws][cols+1] === board[rws][cols+2] && board[rws][cols+2] === board[rws][cols+3]) { //?
          gameWon(rws,cols)
          gameDrawn(rws,cols)
          return
        }
      }
    }
  }

  for (let rws = 0; rws < rows - 3; rws++){ //Vertical Check
    for(let cols = 0; cols < columns; cols++){
      if (board[rws][cols] != ' '){
          if (board[rws][cols] === board[rws+1][cols] && board[rws+1][cols] === board[rws+2][cols] && board[rws+2][cols] === board[rws+3][cols]){
            gameWon(rws,cols)
            gameDrawn(rws,cols)
            return
          }
        }
      }
    }


  for (let rws = 0; rws < rows - 3; rws++){  // Diagonal Check // 
    for(let cols = 0; cols < columns - 3; cols++){
      if (board[rws][cols] != ' '){
        if(board[rws][cols] === board[rws+1][cols+1] && board[rws+1][cols+1] === board[rws+2][cols+2] && board[rws+2][cols+2] === board[rws+3][cols+3]){
          gameWon(rws,cols)
          return
        }
        }
      }
    } 

    for (let rws = 3; rws < rows; rws++) {  // diagonal check//
      for (let cols = 0; cols < columns; cols++){
        if (board[rws][cols] != ' '){
          if(board[rws][cols] === board[rws-1][cols+1] && board[rws-1][cols+1] === board[rws-2][cols+2] && board[rws-2][cols+2] === board[rws-3][cols+3]){
            gameWon(rws,cols)
            return
      }
    }
  }  
}
}

// function gameDrawn(_r,_c){
//   if (counters.includes(0)) {
//     confirm("Game Is Drawn")
//     gameOver = true
//   }
// }

// if the game is won this will display the winner
function gameWon(r,c){ // created function of Game Won 
  let winner = document.getElementById("winner")  // this will get the h2 heading from HTML
  if (board[r][c] === playerTwo) {  // if statement if the row/
    winner.style.color = 'blue' // colour of text 
    winner.innerText = 'Yellow Has Won'
  }else{
    winner.style.color = 'grey'  // colour of text
    winner.innerText = 'Red Has Won.'

  }
  gameOver = true
}




