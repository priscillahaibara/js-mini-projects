const counterDisplay = document.querySelector(
  ".counter-display"
) as HTMLElement;
const increase = document.querySelector(".increase") as HTMLButtonElement;
const reset = document.querySelector(".reset") as HTMLButtonElement;
const decrease = document.querySelector(".decrease") as HTMLButtonElement;

let count: number = Number(localStorage.getItem('count') || 0)

function updateCount(newCount: number): void {
  count = newCount;
  counterDisplay.textContent = String(count);
  localStorage.setItem("count", String(count));
}

updateCount(count);

increase.addEventListener("click", () => updateCount(count + 1));

decrease.addEventListener("click", () => {
  if (count > 0) {
    updateCount(count - 1);
  }
});

reset.addEventListener("click", () => updateCount(0));
