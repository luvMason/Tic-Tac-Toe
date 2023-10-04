let gameBoard = document.querySelector(".board");
let gameState = document.querySelector(".gameStatement");
let startButton = document.querySelector(".button");


let clickSound= new Audio("click12.aac");
let gamestart = new Audio("gamestart.mp3");
let victoryAudio=new Audio("vicAud.mp3");
let wrongClick = new Audio("wrongclickTrimmed.wav");
let tieSound=new Audio("tie.mp3");

let gamePlay = false;
let turn = "X";
let count =1;
// let i=0;

startButton.addEventListener("click", function () {
    if (gamePlay == false) {
        gameStart.play();
        // gamePlay = true;

        gameState.innerHTML = "X's turn";
        startButton.innerHTML = "Press to Reset";
        
    } else {
        clearAllBlocks();
        startButton.innerHTML = "start";
        gameState.innerHTML = "";
        count=1;
        turn='X';
        // gamePlay = false;
    }
    
    gamePlay=!gamePlay;
    // clearAllBlocks();
    //console.log(gamePlay);
})

gameBoard.addEventListener("click", function (event) {
    //console.log(event.target);

    let block = event.target;

    //console.log(block.innerHTML);

    if (gamePlay == true && block.innerHTML == "") {
        block.innerHTML = turn;

        count++;

       

        if (turn == "X") {
            block.style.color = 'red';
            turn = "0";
        } else {
            // block.style.color = 'blue';
            turn = "X";
        }
        gameState.innerHTML = turn + "'s turn";

        if( winnerChecker()=="X"){
            gameState.innerHTML="x wins the game";
            //gamePlay=false;

        //    startButton.disabled =true;
        //     setTimeout(() => {
        //         startButton.disabled =false;
        //           startButton.click();
        //     },3000);
        resetingthegame();

           }else if(winnerChecker()=="0"){
            gameState.innerHTML="0 wins the game";
            // gamePlay=false;

            // startButton.disabled =true;
            // setTimeout(() => {
            //     startButton.disabled =false;
            //       startButton.click();
            // },3000);
            resetingthegame();

           }else if(count==10){
            gameState.innerHTML="TIE";
            // gamePlay=false;

            // startButton.disabled =true;
            // setTimeout(() => {
            //     startButton.disabled =false;
            //       startButton.click();
            // },3000);
            resetingthegame();
           }
    }
})

function winnerChecker() {
    let blockArray = document.querySelectorAll('.cell');

    if ((blockArray[0].innerHTML == "X" && blockArray[1].innerHTML == "X" && blockArray[2].innerHTML == "X")
        || (blockArray[3].innerHTML == "X" && blockArray[4].innerHTML == "X" && blockArray[5].innerHTML == "X")
        || (blockArray[6].innerHTML == "X" && blockArray[7].innerHTML == "X" && blockArray[8].innerHTML == "X")
        || (blockArray[0].innerHTML == "X" && blockArray[3].innerHTML == "X" && blockArray[6].innerHTML == "X")
        || (blockArray[1].innerHTML == "X" && blockArray[4].innerHTML == "X" && blockArray[7].innerHTML == "X")
        || (blockArray[2].innerHTML == "X" && blockArray[5].innerHTML == "X" && blockArray[8].innerHTML == "X")
        || (blockArray[0].innerHTML == "X" && blockArray[4].innerHTML == "X" && blockArray[8].innerHTML == "X")
        || (blockArray[2].innerHTML == "X" && blockArray[4].innerHTML == "X" && blockArray[6].innerHTML == "X")) {
        // console.log("X is winner");
        return "X";
    }
    else if ((blockArray[0].innerHTML == "0" && blockArray[1].innerHTML == "0" && blockArray[2].innerHTML == "0")
        || (blockArray[3].innerHTML == "0" && blockArray[4].innerHTML == "0" && blockArray[5].innerHTML == "0")
        || (blockArray[6].innerHTML == "0" && blockArray[7].innerHTML == "0" && blockArray[8].innerHTML == "0")
        || (blockArray[0].innerHTML == "0" && blockArray[3].innerHTML == "0" && blockArray[6].innerHTML == "0")
        || (blockArray[1].innerHTML == "0" && blockArray[4].innerHTML == "0" && blockArray[7].innerHTML == "0")
        || (blockArray[2].innerHTML == "0" && blockArray[5].innerHTML == "0" && blockArray[8].innerHTML == "0")
        || (blockArray[0].innerHTML == "0" && blockArray[4].innerHTML == "0" && blockArray[8].innerHTML == "0")
        || (blockArray[2].innerHTML == "0" && blockArray[4].innerHTML == "0" && blockArray[6].innerHTML == "0")) {
        // console.log("0 is winner");
        return "0";
    }else{
        return 1;
    }
}

function clearAllBlocks(){
    let blockArray = document.querySelectorAll('.cell');
         
  for(let i=0;i<blockArray.length;i++){
   blockArray[i].innerHTML="";
  }
    
}

function resetingthegame(){
    startButton.innerHTML="starting...";
    startButton.disabled=true;
    setTimeout(() => {
        startButton.disabled=false;
        startButton.click();
    }, 3000);
}


