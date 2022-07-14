function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a tie.";
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return "Computer win this round. Paper beats rock.";
    } else {
      return "Player win this round. Rock beats scissors.";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return "Player win this round. Paper beats rock.";
    } else {
      return "Computer win this round. Scissors beats paper.";
    }
  } else {
    // playerSelection = "scissors"
    if (computerSelection == "rock") {
      return "Computer win this round. Rock beats scissors.";
    } else {
      return "Player win this round. Scissors beats paper.";
    }
  }
}

function computerPlay() {
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  computerOutput = generateRandomNumber(1, 4);
  if (computerOutput == 1) {
    return "rock";
  } else if (computerOutput == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playerPlay() {
  count = 0;
  playing = true;
  while (playing) {
    playerInput = prompt("Enter your selection (rock, paper, scissors)");
    if (!playerInput) {
      alert("Please input an allowed value");
      count++;
      if (count == 3) {
        alert("Player has left the match");
        return "forfeit";
      }
      continue;
    }
    playerInput = playerInput.toLowerCase();
    if (
      playerInput != "rock" &&
      playerInput != "paper" &&
      playerInput != "scissors"
    ) {
      // Player entered a value that isn't either rock, paper or scissors
      alert("Enter a valid option");
      continue;
    } else {
      return playerInput;
    }
  }
}

function game() {
  score = [0, 0];
  while (score[0] < 5 && score[1] < 5) {
    player = playerPlay();
    if (player == "forfeit") {
      console.log("Player has left the match.");
      score[1] = 5;
      break;
    }

    computer = computerPlay();
    roundWinner = playRound(player, computer);
    condition = roundWinner.split(" ")[0];
    if (condition == "Computer") {
      score[1]++;
      console.log(roundWinner);
      console.log(`Player: ${score[0]} Computer: ${score[1]}`);
    } else if (condition == "Player") {
      score[0]++;
      console.log(roundWinner);
      console.log(`Player: ${score[0]} Computer: ${score[1]}`);
    } else {
      console.log(roundWinner);
      console.log(`Player: ${score[0]} Computer: ${score[1]}`);
    }
  }
  if (score[1] == 5) {
    console.log("Computer has won the game.");
  } else {
    console.log("Player has won the game");
  }
}

function start() {
  console.clear();
  game();
}
