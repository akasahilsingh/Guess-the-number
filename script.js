(function () {
const submitGuessBtn = document.querySelector(".submit-btn");
const newGameBtn = document.querySelector(".new-game-btn");
const input = document.querySelector(".input");
const resultContainer = document.querySelector(".result-container");
const remainingMsg = document.querySelector(".remaining-msg");
const guessesMsg = document.querySelector(".guesses");

let compGuess = Math.floor(Math.random() * 101);

const resultArr = [];

newGameBtn.style.cursor = "not-allowed";
newGameBtn.style.backgroundColor = "lightgrey";
newGameBtn.style.disabled = true;
let chance = 10;
const numGuess = () => {
  if (Number(input.value) < 1 || Number(input.value) > 100) {
    alert("Please give values between 0 to 100");
    return;
  }
  resultArr.push(Number(input.value));
  chance -= 1;
  const yourGuesses = resultArr.join(", ");

  if (Number(input.value) > compGuess && chance >= 1) {
    resultContainer.innerHTML = `<p>${input.value} is too high!</p>`;
    guessesMsg.innerHTML = `<p>Your guesses: ${yourGuesses}</p>`;
  } else if (Number(input.value) < compGuess && chance >= 1) {
    resultContainer.innerHTML = `<p>${input.value} is too low!</p>`;
    guessesMsg.innerHTML = `<p>Your guesses: ${yourGuesses}</p>`;
  } else if (Number(input.value) === compGuess && chance >= 1) {
    resultContainer.innerHTML = `<p>You got it in ${resultArr.length} guesses! The number was ${compGuess}.</p>`;
    guessesMsg.innerHTML = `<p>Your guesses: ${yourGuesses}</p>`;
    newGameBtn.style.cursor = "pointer";
    newGameBtn.style.backgroundColor = "#8806CE";
    newGameBtn.style.disabled = false;
    submitGuessBtn.style.cursor = "not-allowed";
    submitGuessBtn.style.backgroundColor = "lightgrey";
    submitGuessBtn.disabled = true;
    input.disabled = true;
    input.style.cursor = "not-allowed";
  } else if (chance < 1) {
    resultContainer.innerHTML = `<p>Game over! The number was ${compGuess}.</p>`;
    newGameBtn.style.cursor = "pointer";
    newGameBtn.style.backgroundColor = "#8806CE";
    newGameBtn.style.disabled = false;
    submitGuessBtn.style.cursor = "not-allowed";
    submitGuessBtn.style.backgroundColor = "lightgrey";
    submitGuessBtn.disabled = true;
    input.disabled = true;
    input.style.cursor = "not-allowed";
  }

  remainingMsg.textContent = `You have ${chance} guesses remaining.`;

  input.value = "";
  
};

submitGuessBtn.addEventListener("click", () => {
  numGuess();
});

newGameBtn.addEventListener("click", () => {
  submitGuessBtn.style.cursor = "pointer";
  submitGuessBtn.disabled = false;
  submitGuessBtn.style.backgroundColor = "#8806CE";
  newGameBtn.style.cursor = "not-allowed";
  newGameBtn.style.backgroundColor = "lightgrey";
  newGameBtn.style.disabled = true;
  resultContainer.innerHTML = "";
  input.disabled = false;
  input.style.cursor = "default";
  resultArr.splice(0, resultArr.length);
  chance = 10;
  compGuess = Math.floor(Math.random() * 101);
  guessesMsg.innerHTML = "";
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    numGuess();
  }
});

})();