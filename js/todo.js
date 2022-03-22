const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function deleteToDo(event) {
  const deleteLi = event.target.parentElement;
  deleteLi.remove();
}

function paintToDo(newToDo) {
  const toDoli = document.createElement("li");
  const toDospan = document.createElement("span");
  toDospan.innerText = newToDo;
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
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
