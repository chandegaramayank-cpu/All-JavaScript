
const Users = JSON.parse(localStorage.getItem("Users")) || []

const input = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (input.value.trim() === "" || email.value.trim() === "" || password.value.trim() === "") {
        console.warn("All fileds are required")
        return;
    }

    Users.push({ username: input.value, password: password.value, email: email.value })
    localStorage.setItem("Users", JSON.stringify(Users))

    input.value = ""
    email.value = ""
    password.value = ""

    localStorage.setItem("IsLogin", false)
    window.location.href = "loading.html"
})