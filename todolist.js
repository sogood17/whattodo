const todoForm = document.querySelector("#todolistjs");
const todoItem = document.querySelector("#todolistjs input");
const todoText = document.querySelector("#todotext");
const todoUl = document.querySelector("#todoul");

let todos = [];

//로컬스토리지에 저장
function todoSave() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

//리스트 삭제
function deleteBtn(event) {
  const del = event.target.parentElement;
  console.log(del.id);
  del.remove();
  todos = todos.filter((item) => item.id !== parseInt(del.id));
  todoSave();
}


//html 리스트 생성
function addList(todoValue) {
  const li = document.createElement("li");
  li.id = todoValue.id;
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = todoValue.text;
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
  todoItem.value = "";
  todoText.classList.remove("hidden");
  const todoValueObj = {text: todoValue, id: Date.now()};
  addList(todoValueObj);
  todos.push(todoValueObj);
  todoSave();
}

todoForm.addEventListener("submit", createTodo);

const savedTodos = localStorage.getItem("todos");

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(addList);
  todoText.classList.remove("hidden");
}
