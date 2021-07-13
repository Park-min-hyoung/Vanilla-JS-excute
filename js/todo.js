const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoInputIcon = toDoForm.querySelector("i");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function checkList(event) {
    const checks = toDoList.querySelectorAll("li div:first-child");
    for (let i = 0; i < checks.length; i++) {
        checks[i].style.color = "lightgray";
    }
    const check = event.target;
    check.style.color = "red";
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const check = document.createElement("div");
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("div");
    check.addEventListener("click", checkList);
    button.addEventListener("click", deleteToDo);

    check.setAttribute("class", "fas fa-check");
    li.appendChild(check);
    li.appendChild(span);
    button.setAttribute("class", "fas fa-trash");
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const neTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(neTodoObj);
    paintToDo(neTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
toDoInputIcon.addEventListener("click", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}