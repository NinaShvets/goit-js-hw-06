const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const valueCounterEl = document.querySelector('#value');

let counterValue = 0;

function updateValueCounter() {
  valueCounterEl.textContent = counterValue;
}

decrementBtn.addEventListener('click', onDecrementClick);

function onDecrementClick() {
  counterValue -= 1;
  updateValueCounter();
}

incrementBtn.addEventListener('click', onIncrementClick);

function onIncrementClick() {
  counterValue += 1;
  updateValueCounter();
}

updateValueCounter();
