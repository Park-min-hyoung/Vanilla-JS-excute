const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoInputIcon = toDoForm.querySelector("i");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
const CHECKS_KEY = "checks";
const CHECK = "todo_check";
const CHECK_OK = "fas fa-check todo_check";

let toDos = [];
let check_arr = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function checkToDO(event) {
    const check = event.target;
    const checks = check.parentElement;
    const check_text = checks.querySelector("span").innerText;
    const checkObj = {
        text: check_text,
        id: checks.id,
    }

    if(check.className === CHECK_OK) { // check 되있는 상태
        check_arr = check_arr.filter((check_item) => check_item.id !== checks.id);
    } else { // check 되지 않은 상태
        check_arr.push(checkObj);
    }
    localStorage.setItem(CHECKS_KEY, JSON.stringify(check_arr));

    check.classList.toggle(CHECK);
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
    check.addEventListener("click", checkToDO);
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

function classNamePlus(check) {
    const li = document.getElementById(check.id);
    const checkDiv = li.querySelector("div:first-child");

    checkDiv.classList.toggle("todo_check");
}

const savedChecks = localStorage.getItem(CHECKS_KEY);

if (savedChecks !== null) {
    const parsedChecks = JSON.parse(savedChecks);
    check_arr = parsedChecks;
    parsedChecks.forEach(classNamePlus);
}