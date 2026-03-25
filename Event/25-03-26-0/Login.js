const Users = JSON.parse(localStorage.getItem("Users")) || [];


const email = document.querySelector('input[type="email"]')
const password = document.querySelector('input[type="password"]')
// const inputElement = document.querySelector('input[type="value"]');

const form = document.querySelector("form")


form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (password.value.trim() === "" || email.value.trim() === "") {
        return;
    }

    if (!Users) {
        alert("No User ")
        return
    }

    const myuser = Users.find(v => v.email === email.value)

    if (!myuser) {
        alert("No User Found!")
        return;
    }

    const isValid = myuser.password === password.value

    if (!isValid) {
        alert("Invalid Password")
        return;
    }

    myuser.isUserLogin = true;

    const newArray = Users.map(v => {
        if (v.id === myuser.id) {
            return { ...myuser }
        } else {
            return v
        }
    })

    localStorage.setItem("Users", JSON.stringify(newArray))
    localStorage.setItem("currentUser", myuser.id)


    password.value = ""
    email.value = ""

    window.location.href = "./index.html"

})