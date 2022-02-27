

// var getRandomNumber = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };


// var rollDice = () =>  getRandomNumber(1, 6);

var randomNumber1 = () => Math.floor(Math.random() * 7);

dice1 = document.getElementById("dice1");

dice1.value = randomNumber1();



if (dice1.value === 1) {
    dice1.setAttribute("src", "images/dice1.png");
  } else if (dice1.value === 2) {
    dice1.setAttribute("src", "images/dice2.png");
  } else if (dice1.value === 3) {
    dice1.setAttribute("src", "images/dice3.png");
  } else if (dice1.value === 4) {
    dice1.setAttribute("src", "images/dice4.png");
  } else if (dice1.value === 5) {
    dice1.setAttribute("src", "images/dice5.png");
  } else if (dice1.value === 6) {
    dice1.setAttribute("src", "images/dice6.png");
};
 


var randomNumber2 = () => Math.floor(Math.random() * 7);

dice2 = document.getElementById("dice2");

dice2.value = randomNumber2();


if (dice2.value === 1) {
    dice2.setAttribute("src", "images/dice1.png");
  } else if (dice2.value === 2) {
    dice2.setAttribute("src", "images/dice2.png");
  } else if (dice2.value === 3) {
    dice2.setAttribute("src", "images/dice3.png");
  } else if (dice2.value === 4) {
    dice2.setAttribute("src", "images/dice4.png");
  } else if (dice2.value === 5) {
    dice2.setAttribute("src", "images/dice5.png");
  } else if (dice2.value === 6) {
    dice2.setAttribute("src", "images/dice6.png");
};

var winner = document.querySelector("h1");

if (dice1.value > dice2.value) {
    winner.innerHTML = "Player 1 Wins! 🚩"
} else if (dice1.value < dice2.value) {
    winner.innerHTML = "Player 2 Wins! 🚩"

}else {
    winner.innerHTML = "It's a tie!"

}
