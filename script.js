
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

function singleRound(playerSelection = "",computerChoice){
    let a = playerSelection.toLowerCase();
    let b = computerChoice();
    console.log(a,b);




    if (a === b) {
        console.log("Its a tie!");
    }
    else{
        if (a === "rock" && b === "scissors") {
            console.log("win!");
        }
        else if (a === "paper" && b === "rock") {
            console.log("win!");
            
        }
        else if (a === "scissors" && b === "paper") {
            console.log("win!");
        }
        else{
            console.log("lose!");
            return "lose!";
        }
    }

}

function game() {
    for (let index = 0; index < 5; index++) {
        let choice = prompt("enter your choice");
        singleRound(choice,computerPlay);
    }
}
game();

