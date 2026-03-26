// ====== DOM Elements Selection ======
const counterValue = document.querySelector(".counter__value");
const increaseBtn = document.querySelector(".counter__button--increase");
const decreaseBtn = document.querySelector(".counter__button--decrease");
const resetBtn = document.querySelector(".counter__reset-button");
const counterContainer = document.querySelector(".counter");
const messageElement = document.querySelector(".counter__message");

// ====== Counter Constants ======
const MAX_COUNT = 5;
const MIN_COUNT = 0;
const MAX_REACHED_CLASS = "max-reached";
const MAX_MESSAGE = "max counter limit increased";

// ====== Counter State ======
let count = 0;

// ====== Update Display Function ======
function updateDisplay() {
  counterValue.textContent = count;
  const isMaxReached = count === MAX_COUNT;

  counterContainer.classList.toggle(MAX_REACHED_CLASS, isMaxReached);
  messageElement.classList.toggle("show", isMaxReached);

  if (isMaxReached) {
    messageElement.textContent = MAX_MESSAGE;
  }
}

// ====== Counter Control Functions ======
function increment() {
  if (count < MAX_COUNT) {
    count++;
    updateDisplay();
  }
}

function decrement() {
  if (count > MIN_COUNT) {
    count--;
    updateDisplay();
  }
}

function reset() {
  count = 0;
  updateDisplay();
}

// ====== Button Event Listeners ======
increaseBtn.addEventListener("click", increment);
decreaseBtn.addEventListener("click", decrement);
resetBtn.addEventListener("click", reset);

// ====== Keyboard Event Listener ======
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      increment();
      break;
    case "ArrowDown":
      decrement();
      break;
    default:
      if (event.key.toLowerCase() === "r") {
        reset();
      }
  }
});
