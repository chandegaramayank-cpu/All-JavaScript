const currentUser = localStorage.getItem("currentUser") || 0
const Users = JSON.parse(localStorage.getItem("Users")) || [];


console.log("User : ", currentUser)
// console.log(typeof (currentUser)
// console.log(typeof (Users[0].id))

const isUserValid = Users.find(v => v.id === Number(currentUser) && v.isUserLogin === true)

console.log(isUserValid)


if (!isUserValid) {
    window.location.href = "./Login.html"
}

const BTN = document.getElementById("logoutBtn")

BTN.addEventListener("click", () => {

    localStorage.setItem("currentUser", 0)

    window.location.href = "./Login.html"
})