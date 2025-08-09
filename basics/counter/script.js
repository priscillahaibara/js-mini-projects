"use strict";
const counterDisplay = document.querySelector('.counter-display');
const increase = document.querySelector('.increase');
const reset = document.querySelector('.reset');
const decrease = document.querySelector('.decrease');

let count = 0;

function updateDisplay() {
    counterDisplay.textContent = count
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
});
updateDisplay();
