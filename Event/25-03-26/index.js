const img = document.querySelector("img")

// let num = 10

document.body.addEventListener("keydown", (e) => {
    // console.log(e.code)
    if (e.code === "ArrowRight") {
        console.log("Move Right")
        // console.log("Left:", img.style.left)
        // img.style.left = num + "px"
        // num += 10
        img.style.left = (parseInt(img.style.left) + 10) + "px"
        img.style.transform = "rotateY(0deg)";

    } else if (e.code === "ArrowLeft") {
        console.log("Move Left")
        img.style.transform = "rotateY(190deg)";
        img.style.left = (parseInt(img.style.left) - 10) + "px"
    } else if (e.code === "ArrowUp") {
        img.style.top = (parseInt(img.style.top) - 10) + "px"
        console.log("Move Up")
    } else if (e.code === "ArrowDown") {
        img.style.top = (parseInt(img.style.top) + 10) + "px"
        console.log("Move Down")
    } else if (e.code === "Space") {
        console.log("Space")

        img.style.animation = " jump 1.2s ease-in-out 1";

        setTimeout(() => {
            img.style.animation = "";
            console.log("Done")
        }, 1000)
    }
    else {

        console.log("Not a Valid key")
        return;
    }
})

/*
ArrowRight
ArrowUp
ArrowDown
ArrowLeft
*/