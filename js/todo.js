const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function paintToDo(newToDo) {
  const toDoli = document.createElement("li");
  const toDospan = document.createElement("span");
  toDospan.innerText = newToDo;

  toDoli.appendChild(toDospan);
  toDoList.appendChild(toDoli);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
