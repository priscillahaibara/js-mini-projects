"use strict";
/* Get elements */
const input = document.querySelector(".task-input");
const addButton = document.querySelector(".add-button");
const list = document.querySelector(".task-list");
let taskList = JSON.parse(localStorage.getItem('taskList') || '[]');
taskList.forEach(task => addTask(task));
function addTask(task) {
    const div = document.createElement("div");
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const deleteButton = document.createElement("button");
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
        const newTask = { id: Date.now(), text };
        taskList.push(newTask);
        localStorage.setItem("taskList", JSON.stringify(taskList));
        input.value = "";
        addTask(newTask);
    }
});
