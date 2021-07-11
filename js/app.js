const loginInput = document.querySelector("#login-form input");
const loginBUtton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username = loginInput.value;
    console.log(username);
}

loginBUtton.addEventListener("click", onLoginBtnClick);