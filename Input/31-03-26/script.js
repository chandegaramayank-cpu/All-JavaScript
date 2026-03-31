const input = document.querySelector("input[type='text']");
const button = document.querySelector("button");
const table = document.querySelector("table");


// const User = [
//     { id: 1, username: "A" },
//     { id: 2, username: "B" },
//     { id: 3, username: "C" },
//     { id: 4, username: "D" },
//     { id: 5, username: "E" },
//     { id: 6, username: "F" },
//     { id: 7, username: "G" },
// ]


// User.forEach((value, index) => {
//     const tr = document.createElement("tr")
//     const No = document.createElement("td")
//     const Username = document.createElement("td")
//     const Delete = document.createElement("td")
//     let deleteButton = document.createElement("button")
//     deleteButton.innerText = "Delete"

//     Delete.appendChild(deleteButton)
//     No.innerText = value.id;
//     No.style.textAlign = "center";

//     Username.innerText = value.username;
//     Username.style.textAlign = "center";

//     table.appendChild(tr)
//     tr.append(No, Username, Delete)
// })




input.addEventListener("input", (e) => {
    console.log(e.target.value);
})

let i = 0;

button.addEventListener("click", () => {

    if (input.value.trim() === "") {
        return;
    }

    i++;
    const tr = document.createElement("tr")
    const No = document.createElement("td")
    const Username = document.createElement("td")
    const Delete = document.createElement("td")
    let deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"

    Delete.appendChild(deleteButton)
    No.innerText = i;
    No.style.textAlign = "center";


    deleteButton.addEventListener("click", () => {
        table.removeChild(tr)
        // tr.remove()
    })

    Username.innerText = input.value;
    Username.style.textAlign = "center";

    table.appendChild(tr)
    tr.append(No, Username, Delete)

    input.value = ""
    // alert("success..")
})