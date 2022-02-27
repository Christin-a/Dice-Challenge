


var randomNumber1 = Math.floor(Math.random() * 6) + 1;

dice1 = document.getElementById("dice1");

randomImgSrc = "images/dice" + randomNumber1 + ".png";

dice1.setAttribute("src", randomImgSrc);
  

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

dice2 = document.getElementById("dice2");

randomImgSrc2 = "images/dice" + randomNumber2 + ".png";

dice2.setAttribute("src", randomImgSrc2);


var winner = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    winner.innerHTML = "Player 1 Wins! 🚩"
} else if (randomNumber1 < randomNumber2) {
    winner.innerHTML = "Player 2 Wins! 🚩"

}else {
    winner.innerHTML = "It's a tie!"

};
