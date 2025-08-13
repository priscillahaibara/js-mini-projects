const counterDisplay = document.querySelector('.counter-display') as HTMLElement;
const increase = document.querySelector('.increase') as HTMLButtonElement;
const reset = document.querySelector('.reset') as HTMLButtonElement;
const decrease = document.querySelector('.decrease') as HTMLButtonElement;

let count: number = 0;

function updateDisplay(): void {
  counterDisplay.textContent = count.toString();
}

increase.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decrease.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateDisplay();
  }
});

reset.addEventListener('click', () => {
  count = 0;
  updateDisplay();
})

updateDisplay();
