
// function init() {}
  const playerOne = 'Red'
  const playerTwo = 'Yellow'
  let currentPlayer = playerOne //red


  let gameOver = false;
  let board = [] 


  const rows = 7
  const columns = 6
  let currentColumns = [] // keep track of array and it is currently set to empty 


  window.onload = function() {
    grid();
  }

  function grid(){
    // board = [] //
    currentColumns = [6,6,6,6,6,6,6]


    for (let r = 0; r < rows; r++){
      let row = []
      for (let c = 0; c < columns; c++){
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

    function counters(){
      if (gameOver){
        return;
      }

      let coords = this.id.split("-") //
      let r = parseInt(coords[0])
      let c = parseInt(coords[1])

      r = currentColumns[c]
      if (r < 0)
      return;
    

    board[r][c] = currentPlayer
    let slot = document.getElementById(r.toString() + "-" + c.toString())
    if (currentPlayer == playerOne){
      slot.classList.add("red-counter")
      currentPlayer = playerTwo
    }
    else{
      slot.classList.add("yellow-counter")
      currentPlayer = playerOne
    }

    r-= 1;
    currentColumns[c] = r;

    // checkWinner()
  }

  // function checkWinner()






  function gameDrawn(){
    if (!counters.includes(0))
    confirm("Game Is Drawn")
  }

