let randomnumber = Math.floor(Math.random() * 100) + 1;
const submit = document.querySelector("#subt");
const userinput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

let prevguess = [];
let numguess = 1;
let playgame = true;

if (playgame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    validguess(guess);
  });
}

function validguess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100");
  } else {
    prevguess.push(guess);
    if (numguess === 11) {
      displayguess(guess);
      displaymessage(`Game Over!`);
      endgame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === randomnumber) {
    displaymessage(`Congratulations! You got it right!`);
    endgame();
  } else if (guess < randomnumber) {
    displaymessage(`Your guess is too low!`);
  } else {
    displaymessage(`Your guess is too high!`);
  }
}

function displayguess(guess) {
  userinput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numguess++;
  remaining.innerHTML = `${11 - numguess}`;
}

function displaymessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
  lowOrHi.style.backgroundImage = "linear-gradient(135deg, #000000, #4b0000)";
  lowOrHi.style.color = "white";
  lowOrHi.style.fontSize = "20px";
  lowOrHi.style.fontWeight = "bold";
}

function endgame() {
  userinput.value = "";
  userinput.setAttribute("disabled", true);
  submit.disabled = true;

  const newGameBtn = document.createElement("button");
  newGameBtn.className = "button";
  newGameBtn.id = "newgame";
  newGameBtn.textContent = "Start new game";
  startOver.appendChild(newGameBtn);
  playgame = false;
  newgame();
}

function newgame() {
  const newgamebutton = document.querySelector("#newgame");
  newgamebutton.addEventListener("click", function () {
    randomnumber = Math.floor(Math.random() * 100) + 1;
    prevguess = [];
    numguess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numguess}`;
    userinput.removeAttribute("disabled");
    submit.disabled = false;
    newgamebutton.remove();
    lowOrHi.innerHTML = "";
    playgame = true;
    userinput.focus();
  });
}
