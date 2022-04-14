const playerOne = 'Red'
const playerTwo = 'Yellow'
let currentPlayer = playerOne // user starts red - counter

let gameOver = false
let board = [] // empty array
let cells = [] // empty array
let locked = false

const rows = 7
const columns = 6
let currentColumns = [] // keep track of array and it is currently set to empty 

window.onload = function () {
  grid()
}  // ! when window loads the grid appears.

function grid() {
  currentColumns = [6, 6, 6, 6, 6, 6, 6] 


  for (let r = 0; r < rows; r++) {  // this create the grids accordingly.
    let row = []
    for (let c = 0; c < columns; c++) {
      row.push(' ')  // i pushed into the empty array.

      let slot = document.createElement("div");
      slot.id = r.toString() + "-" + c.toString()
      slot.classList.add("slot")
      slot.addEventListener("click", counters)
      document.getElementById("board").append(slot)
      cells.push(slot)
    }
    board.push(row)
  }
}

function counters() {
  if (!locked){  // this is used to ensure once game has been created it wont continue, created global variable set it to false.
    let coords = this.id.split("-") // split the array into 
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

    r -= 1 // updatign columns
    currentColumns[c] = r

    checkWinner()
  }
}


function checkWinner() { 
  for (let rws = 0; rws < rows; rws++){  //horizontal check
    for (let cols = 0; cols < columns - 2; cols++){
      if (board[rws][cols] != ' '){ // if board not equal to white space I will check if board has a counter
        if (board[rws][cols] === board[rws][cols+1] && board[rws][cols+1] === board[rws][cols+2] && board[rws][cols+2] === board[rws][cols+3]){ //?
          gameWon(rws,cols)
          resetGame()
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
            resetGame()
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
          resetGame()
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
            resetGame()
            return
      }
    }
  }  
}
}

// if the game is won this will display the winner
function gameWon(r,c){ // created function of Game Won 
  let winner = document.getElementById("winner")  // this will get the h2 heading from HTML
  if (board[r][c] === playerTwo) {  // if statement is the row/
    winner.style.color = 'yellow' // colour of text
    winner.innerText = alert ('Congratulations !!! Yellow Has Won')
    winner.innerText = 'Yellow has won'
  }else{
    winner.style.color = 'red'  // colour of text
    winner.innerText = alert ('Congratulations!!! Red Has Won.')
    winner.innerText = 'Red has won'
  }

}
function resetGame(){ 

  locked = true

  setTimeout(() => {
    document.getElementById('winner').innerText = '' // creating a timeout for element i have to do the following
    locked = false // creating locked function refer to above which ensure user cant continue playing. 
    currentColumns = [6, 6, 6, 6, 6, 6, 6] // which resets the columns to the original

    cells.forEach(slot => {
      slot.classList.remove('red-counter', 'yellow-counter')
      }
    )
  }, 4000)

  gameOver = true // the gameover is set to true which ends once the user has won. 

}

