"use strict";
const counterDisplay = document.querySelector(".counter-display");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const decrease = document.querySelector(".decrease");
let count = Number(localStorage.getItem('count') || 0);
function updateCount(newCount) {
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
