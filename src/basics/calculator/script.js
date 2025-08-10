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
      try {
        const result = math.evaluate(expression);
        display.textContent = result;
        expression = result.toString();
        return;
      } catch (error) {
        display.textContent = "Error";
        expression = "";
        return;
      }
    }

    expression += btnValue;
    display.textContent = expression;
  });
});
