
const Users = JSON.parse(localStorage.getItem("Users")) || []


const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");
const form = document.querySelector("form");


form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (inputPassword.value.trim() === "" || inputUsername.value.trim() === "") {
        console.warn("All fileds are required")
        return;
    }
    const MyUser = Users.find((value) => {
        return value.username === inputUsername.value
    })

    if (!MyUser) {
        alert("User not Found!")
        return;
    }

    if (!(MyUser.password === inputPassword.value)) {
        alert("Invalid Password!")
        return;
    }
    console.log(MyUser)

    localStorage.setItem("IsLogin", true)
    window.location.href = "index.html"

})