function sayHaii() {
    alert("Hello User")
}

const p = document.querySelectorAll("p")

const button = document.querySelector("button")

const body = document.body;
// let i = 0;

button.addEventListener("click", () => {

    button.innerText =
        button.innerText === "light ☀"
            ? "Dark 🌙" : "light ☀";


    if (button.innerText === "light ☀") {
        body.style.backgroundColor = "black";
        p.forEach((v) => {
            v.style.color = "white"
        })

    } else {
        body.style.backgroundColor = "white";
        p.forEach((v) => {
            v.style.color = "black"
        })
    }

    console.log(body.style.backgroundColor)
    // i++;
    // if (i % 2 == 0) {
    //     button.innerText = "light"
    // } else {
    //     button.innerText = "Dark"
    // }
})

// const h1 = document.querySelector("h1")

// h1.onclick = () => {
//     console.log("Hello")
//     sayHaii()
// }

// h1.addEventListener("click", () => {
//     console.log("Click Event")
// })

// h1.addEventListener("dblclick", () => {
//     console.log("Double Click Event")
// })