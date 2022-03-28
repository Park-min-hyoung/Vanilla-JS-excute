const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

const TODOS_KEY = "toDos";

function localSaveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const deleteLi = event.target.parentElement;
  deleteLi.remove();
}

function paintToDo(newToDo) {
  const toDoli = document.createElement("li");
  toDoli.id = newToDo.id;
  const toDospan = document.createElement("span");
  toDospan.innerText = newToDo.text;
  const toDobutton = document.createElement("button");
  toDobutton.innerText = "X";
  toDobutton.addEventListener("click", deleteToDo);

  toDoli.appendChild(toDospan);
  toDoli.appendChild(toDobutton);
  toDoList.appendChild(toDoli);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  toDos.push(newTodoObj);
  localSaveToDos();
  paintToDo(newTodoObj);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// program 시작, localstorage에 item 여부 확인
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  toDos = JSON.parse(savedToDos);
  toDos.forEach(paintToDo);
}
