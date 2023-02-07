
// ===================================Necessary Var=========================================
const cells = document.querySelectorAll('.cell')
const statusText = document.getElementById('statusText')
const restartbtn = document.getElementById('restartBtn')
const ps1 = document.getElementById('ps1')
const ps2 = document.getElementById('ps2')
let ss = 0;
    
const winConditions =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];



let options = ['','','','','','','','','']
let cur =["X","O","X","O"]
let rannd = Math.floor(Math.random()*cur.length)
let currentPlayer = cur[rannd];
let running =0;






// ===================================Game Start=========================================
gamestart();

function gamestart(){

cells.forEach(cell => cell.addEventListener('click', cellClicked))
restartbtn.addEventListener('click',resartGame);
statusText.textContent = `${currentPlayer}'s turn`
running= 1;
}










// ===================================Game Commands=========================================
function cellClicked(){
const cellIndex = this.getAttribute('id');

if(options[cellIndex] != "" || !running){
    return;
}

updateCell(this ,cellIndex);
changePlayer();
checkWinner();
}


                        // ============================================


function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent=currentPlayer;
}


                        // ============================================


function changePlayer(){
    currentPlayer=(currentPlayer === "X") ? "O" :"X";
    statusText.textContent =`${currentPlayer}'s turn `
}


                        // ============================================


function checkWinner(){

    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            console.log(cellA,cellB,cellC)
            break;
        }
    }


                        // ============================================


    if(roundWon){
        currentPlayer = (currentPlayer === "X")? "O" :"X";
        statusText.textContent = `${currentPlayer} wins!`;
        running = 0;

        

        if(currentPlayer === "O"){
            ++ss
            ss.toString();
            console.log(ss);
            ps1.textContent =`${ss}`
            
            
        }
        console.log(options);
    }
    else if(!options.includes("")){
        statusText.textContent = `Draw!`;
        running = 0;
    }
   
}


                        // ============================================


function resartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = 1;
}



