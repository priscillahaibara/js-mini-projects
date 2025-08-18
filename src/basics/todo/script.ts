/* Get elements */
const input = document.querySelector(".task-input")! as HTMLInputElement;
const addButton = document.querySelector(".add-button")! as HTMLButtonElement;
const list = document.querySelector(".task-list")! as HTMLUListElement;

/* Add task */
function addTask(task: string): void {
  const div = document.createElement("div");
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const deleteButton = document.createElement("button");

  div.classList.add("div-style");
  deleteButton.classList.add("delete-button-style");
  checkbox.type = "checkbox";

  li.textContent = task;
  deleteButton.textContent = "Delete task";
  input.value = "";

  list.appendChild(div);
  div.appendChild(checkbox);
  div.appendChild(li);
  div.appendChild(deleteButton);

  /* Adds a listener to mark as completed */
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "none";
    }
  });

  /* Listener to delete the task */
  deleteButton.addEventListener("click", function () {
    list.removeChild(div);
  });
}

addButton.addEventListener("click", () => {
  const task = input.value.trim();
  if (task !== "") {
    addTask(task);
    input.value = "";
  }
});
