function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie."
    }
}

function computerPlay() {
    const generateRandomNumber = (min, max) =>  {
    return Math.floor(Math.random() * (max - min) + min);
    };
    computerOutput = generateRandomNumber(1,4);
    if (computerOutput == 1) {
        return "rock"
    } else if (computerOutput == 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playerPlay() {
    count = 0
    playing = true
    while (playing) {
        playerInput = prompt('Enter your selection')
        playerInput = playerInput.toLowerCase()
        if (playerInput) {
            // Player hit cancel or entered a empty string
            alert('Please input an allowed value')
            count++
            if (count == 3) {
                alert('Player has left the match')
                playing = false
            }
            continue
        } else if (playerInput != "rock" && playerInput != "paper" && playerInput != "scissors") {
        // Player entered a value that isn't either rock, paper or scissors
        alert('Enter a valid option')
        continue
        } else {
            return playerInput
        }
    }
}

function game()