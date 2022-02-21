const todoForm = document.querySelector("#todolistjs");
const todoItem = document.querySelector("#todolistjs input");
const todoText = document.querySelector("#todotext");
const todoUl = document.querySelector("#todoul");

const todos = [];

//로컬스토리지에 저장
function todoSave() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteBtn(event) {
  const del = event.target.parentElement;
  del.remove();
}

//html 리스트 생성
function addList(todoValue) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = todoValue;
  todoUl.appendChild(li);
  const button = document.createElement("button");
  button.innerText = "❌";
  button.classList.add("delbtn");
  li.appendChild(button);
  button.addEventListener("click", deleteBtn);
}

//투두 값을 어레이에 저장
function createTodo(event) {
  event.preventDefault();
  const todoValue = todoItem.value;
  todoText.classList.remove("hidden");
  addList(todoValue);
  todoItem.value = "";
  todos.push(todoValue);
  todoSave(todoValue);
}

todoForm.addEventListener("submit", createTodo);

const savedTodos = localStorage.getItem("todos");

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  parsedTodos.forEach(addList);
  todoText.classList.remove("hidden");
}
