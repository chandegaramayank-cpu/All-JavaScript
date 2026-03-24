// const div = document.getElementsByClassName("main")[0]
const div = document.querySelector(".main")

// console.log(div.innerHTML)//??
// console.log(div.innerText)//??
// console.log(div.textContent)//??

// window.addEventListener("keyup", (e) => {
    //     console.log("Key UP", e)
    // })
    
    const A = new Audio("./Djo.mp3")
    
    
    const i = document.querySelector("i")
    const i1 = document.querySelector(".x")
    
    i.addEventListener("click", () => {
        
        i.innerText = i.innerText === "▶" ? "⏸" : "▶";
        
        if (i.innerText === "⏸") {
            A.play()
        } else {
            A.pause()
        }
})

window.addEventListener("keydown", (e) => {
    if (!(e.code === "Space")){
        console.log(e.code);
        
        return;
    }
    console.log("KeyPress", e.code === "Space")
     
    if(i.innerText === "⏸"){
        i.innerText = "▶"
        A.pause()
    }else{
        i.innerText = "⏸"
        A.play()
    }
  
})

// i1.addEventListener("click", () => {
    
    //     if (i1.className.includes("fa-play")) {
        //         console.log("Yes")
//         i1.classList.remove("fa-play")
//         i1.classList.add("fa-pause")
//     } else {
//         console.log("No")
//         i1.classList.remove("fa-pause")
//         i1.classList.add("fa-play")
//     }
// })