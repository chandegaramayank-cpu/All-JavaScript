const Users = JSON.parse(localStorage.getItem("Users")) || [];

const username = document.querySelector('input[type="text"]')
const email = document.querySelector('input[type="email"]')
const password = document.querySelector('input[type="password"]')
// const inputElement = document.querySelector('input[type="value"]');

const form = document.querySelector("form")


form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (username.value.trim() === "" || password.value.trim() === "" || email.value.trim() === "") {
        return;
    }

    const obj = {
        id: Date.now(),
        username: username.value.trim(),
        password: password.value.trim(),
        email: email.value.trim(),
        isUserLogin: false
    }

    console.log(obj);

    Users.push(obj)

    localStorage.setItem("Users", JSON.stringify(Users))

    username.value = ""
    email.value = ""
    password.value = ""

    window.location.href = "Login.html"

})