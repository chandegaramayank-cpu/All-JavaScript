const data = JSON.parse(localStorage.getItem("IsLogin"))


if (!data) {
    window.location.href = "Login.html"
}

const button = document.querySelector("button")

button.addEventListener("click", () => {
    localStorage.setItem("IsLogin", false)
    window.location.href = "Login.html"
})