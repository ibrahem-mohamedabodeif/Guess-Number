let randomNum = document.querySelector(".number");
let input = document.querySelector(".guess");
let check = document.querySelector(".check");

let secretNum = Math.trunc(Math.random() * 20) + 1;

let displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let score = 20;

let highScore = 0;

check.addEventListener("click", () => {
  let guess = Number(input.value);

  if (!guess) {
    displayMessage("⛔️ No number!");
  } else if (guess === secretNum) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNum;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNum) {
    if (score > 1) {
      displayMessage(guess > secretNum ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
