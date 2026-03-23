// const ball = document.querySelector(".ball")

// const color = ["red", "blue", "black", "green", "pink", "yellow", "gray", "white"]

// let i = 0;

// document.body.addEventListener("click", (e) => {
//     console.log(e.clientX)
//     console.log(e.clientY)

//     ball.style.top = e.clientY - 40 + "px";
//     ball.style.left = e.clientX - 40 + "px";

//     ball.style.backgroundColor = color[getNum()];
//     // ball.style.backgroundColor = color[i];
//     // i++;
//     // if (i === color.length) {
//     //     i = 0;
//     // }
// })


// function getNum() {
//     return Math.floor(Math.random() * color.length)
// }


// const box = document.querySelector(".box")

// box.addEventListener("mouseenter", () => {
//     console.log("mouseenter ")
// })
// box.addEventListener("mouseleave", () => {
//     console.log("mouseleave  ")
// })

// box.addEventListener("mouseover", () => {
//     console.log("mouse hover")
// })
// box.addEventListener("mousemove", () => {
//     console.log("mousemove ")
// })
// document.body.addEventListener("mouseup", () => {
//     console.log("Up click")
// })

// document.body.addEventListener("mousedown", () => {
//     console.log("Down click")
// })
const ball = document.querySelector(".ball")
document.body.addEventListener("mousemove", (e) => {

    ball.style.top = (e.clientY - 50) + "px";
    ball.style.left = (e.clientX - 50) + "px";

    console.log("X", ball.style.top, "and ", e.clientX)
    console.log("Y", ball.style.left, "and ", e.clientY)

})

