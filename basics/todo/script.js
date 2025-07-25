/* Get elements */
const input = document.querySelector('.task-input');
const addButton = document.querySelector('.add-button');
const list = document.querySelector('.task-list');

/* Add task */
addButton.addEventListener('click', function () {
  const task = input.value.trim();

  if (task !== '') {
    const div = document.createElement('div');
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    div.classList.add('div-style');
    deleteButton.classList.add('delete-button-style')

    li.textContent = task;
    deleteButton.textContent = 'Delete task';
    input.value = '';

    list.appendChild(div)
    div.appendChild(li);
    div.appendChild(deleteButton);
  }
});
