/* Get elements */
const input = document.querySelector(".task-input")! as HTMLInputElement;
const addButton = document.querySelector(".add-button")! as HTMLButtonElement;
const list = document.querySelector(".task-list")! as HTMLUListElement;

interface Task {
  id: number;
  text: string;
}

let taskList: Task[] = JSON.parse(localStorage.getItem('taskList') || '[]');

taskList.forEach(task => addTask(task));

function addTask(task: Task): void {
  const div: HTMLDivElement = document.createElement("div");
  const li: HTMLLIElement = document.createElement("li");
  const checkbox: HTMLInputElement = document.createElement("input");
  const deleteButton: HTMLButtonElement = document.createElement("button");

  div.classList.add("div-style");
  deleteButton.classList.add("delete-button-style");
  checkbox.type = "checkbox";

  li.textContent = task.text;
  deleteButton.textContent = "Delete task";

  list.appendChild(div);
  div.appendChild(checkbox);
  div.appendChild(li);
  div.appendChild(deleteButton);

  checkbox.addEventListener("change", () => {
    li.style.textDecoration = checkbox.checked ? "line-through" : "none";
  });

  deleteButton.addEventListener("click", () => {
    list.removeChild(div);
    taskList = taskList.filter(t => t.id !== task.id); 
    localStorage.setItem('taskList', JSON.stringify(taskList));
  });
}

addButton.addEventListener("click", () => {
  const text = input.value.trim();
  if (text !== "") {
    const newTask: Task = { id: Date.now(), text }; 
    taskList.push(newTask);
    localStorage.setItem("taskList", JSON.stringify(taskList));
    input.value = "";
    addTask(newTask);
  }
});
