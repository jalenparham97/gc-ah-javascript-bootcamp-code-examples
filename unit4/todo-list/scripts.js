const todoListArray = [];

const form = document.querySelector('#form');
const todoList = document.querySelector('.todo-list');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const todoInput = document.querySelector('.todo-input');
  addTodoToArray(todoInput.value);
  todoInput.value = '';
}

function createTodoItem(todo) {
  const todoItem = document.createElement('li');
  todoItem.className = 'todo-item';
  todoItem.id = todo.id;
  todoItem.innerText = todo.text;
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'delete';
  deleteButton.className = 'delete-btn';
  todoItem.appendChild(deleteButton);
  deleteButton.addEventListener('click', handleDeleteTodo);
  return todoItem;
}

function addTodoToArray(todoValue) {
  const todo = {
    id: randomId(),
    text: todoValue,
    completed: false,
  };
  todoListArray.push(todo);
  const todoItemListElement = createTodoItem(todo);
  todoList.appendChild(todoItemListElement);
  console.log(todoListArray);
}

function handleDeleteTodo(event) {
  console.log(event.target.parentElement);
}

function randomId() {
  const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
  return uint32.toString(16);
}
