do {

var player = {
  name: "You",
  status: "newbie",
  money: 0,
  choice: prompt("Enter rock, paper, or scissors (entry must be all lower case):"),
}

var gameArray = [
 "rock",
 "paper",
 "scissors"
];

var computer = {
  name: "The Iron Knight",
  status: "champion",
  money: 1000,
  choice: gameArray[Math.floor(Math.random() * gameArray.length)]
}

console.log(player.name + " chose " + player.choice + ".");
console.log(computer.name + " chose " + computer.choice + ".");

var compare = function (playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
     return ("Tie.");
  }

  else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      return ("You win!");
    }

    else {
      return ("You lose!");
    }
  }

  else if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
          return ("You win!");
    }
    else {
      return ("You lose!");
    }
  }

  else if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      return ("You win!");
    }
    else {
      return("You lose!");
    }
  }

}

console.log(compare(player.choice, computer.choice));

if (compare(player.choice, computer.choice) === "You win!") {
  player.status = "champion";
  computer.status = "loser";
  console.log(player.name + " are the " + player.status);
  console.log(computer.name + " is the " + computer.status);
}

else if (compare(player.choice, computer.choice) === "You lose!") {
  player.status = "loser";
  computer.status = "champion";
  console.log(player.name + " are the " + player.status + ".");
  console.log(computer.name + " is the " + computer.status + "!");
}

else if (compare(player.choice, computer.choice) === "Tie.") {
 console.log("The match was a draw, so " + player.name + " are still the " + player.status);
 console.log("The match was a draw, so " + computer.name + " is still the " + computer.status);
}

var stealMoney = function(playerStatus) {
  if (playerStatus === "champion") {
    player.money = player.money + 10;
    computer.money = computer.money - 10;
  }
}

stealMoney(player.status);

console.log(player.name + " stole " + player.money + " coins.");


var playAgain = prompt("Do you want to play again (yes/no)?");

}

while (playAgain === "yes");