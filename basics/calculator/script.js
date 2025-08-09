const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

let expression = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const btnValue = button.textContent;

    if (btnValue === "C") {
      expression = "";
      display.textContent = 0;
      return;
    }

    if (btnValue === "=") {
      const result = math.evaluate(expression);
      display.textContent = result;
      return;
    }

    expression += btnValue;
    display.textContent = expression;
  });
});
