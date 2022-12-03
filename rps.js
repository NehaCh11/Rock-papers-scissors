let userScore = 0
let computerScore = 0
const ComputerPlay = computerSelection => {
    const rand = Math.floor(Math.random()*3)
    switch(rand){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';    
    }
}
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection===computerSelection) {
        return 'A Tie :/ Try again maybe!'
    }
    if (playerSelection==='rock'){
        if (computerSelection=== 'paper') {
            computerScore++
            return 'Uh oh! Computer Won :( paper beat rock'     
        } else {
            userScore++
            return 'Great! You won!'     
        }
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerScore++
            return 'Uh oh! Computer Won :( scissors beat paper'
        } else {
            userScore++
            return 'Congrats! You won ^_^'
        }
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++
            return 'Uh Oh! Computer won :( rock beats scissors'
        } else {
            userScore++
            return 'Great! You won!!!'
        }
    }
}

    const game =()=> {
        for(i=0;i<5;i++){
    const computerSelection = ComputerPlay()
    let playerSelection = prompt("What do you choose?").toLowerCase();
    console.log(`Your turn: ${playerSelection}`)
    console.log(`Computer turn: ${computerSelection}`)
    console.log(playRound(playerSelection, computerSelection))
    console.log("your score = " + userScore);
    console.log("Computer's score = " + computerScore);
        }
    }
        game()
if (computerScore>userScore){
    console.log("Computer won")
} else if(computerScore==userScore)
{
    console.log("A tie!")
} else (userScore>computerScore)
{
    console.log("You won")
}
