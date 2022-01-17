
function computerPlay(){
    let choice = Math.floor((Math.random() * 3) + 1);
    switch (choice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;    
    }
}
let x = 0;
let y = 0;

const playerScore = document.getElementById('pScore');
const computerScore = document.getElementById('cScore');
const winner = document.getElementById('winner');

function scoreUpdate(a,b) {
    playerScore.innerHTML = `${x}`;
    computerScore.innerHTML = `${y}`;
    checkWinner(a,b);
}
function restart() {
    playerScore.innerHTML = '0';
    computerScore.innerHTML = '0';
    x = 0,y = 0;
    
}
function checkWinner(a,b) {
    if (a == 5) {
        winner.innerHTML = 'player wins!';
        restart();

    }
    if (b == 5) {
        winner.innerHTML = 'computer win!'
        restart();
    }
}


function singleRound(event){
    let a = event.target.innerText.toLowerCase();
    let b = computerPlay();
    console.log(a,b);
    if (a === b) {
        console.log("Its a tie!");
        scoreUpdate(x,y);
    }
    else{
        if (a === "rock" && b === "scissors") {
            console.log("win!");
            x += 1;
            scoreUpdate(x,y);
        }
        else if (a === "paper" && b === "rock") {
            console.log("win!");
            x += 1;
            scoreUpdate(x,y);
        }
        else if (a === "scissors" && b === "paper") {
            console.log("win!");
            x += 1;
            scoreUpdate(x,y);
        }
        else{
            console.log("lose!");
            y += 1;
            scoreUpdate(x,y);
        }
    }
    console.log(x,y)

}

// function game() {
//     for (let index = 0; index < 5; index++) {
//         let choice = prompt("enter your choice");
//         singleRound(choice,computerPlay);
//     }
// }
// game();


const scissors = document.getElementById("scissors");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");

scissors.addEventListener("click",singleRound);
rock.addEventListener("click",singleRound);
paper.addEventListener("click",singleRound);



    



