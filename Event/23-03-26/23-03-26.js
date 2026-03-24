const Users = JSON.parse(localStorage.getItem("Users")) || [];

// const username = document.querySelector('input[type="text"]')
const username = document.querySelector('input[type="text"]');
const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');
const form = document.querySelector('form')
const table = document.querySelector('tbody')

function clearForm() {
    username.value = ""
    email.value = ""
    password.value = ""
}

let isUpdateClicked = 0;



form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(username.value)
    console.log(email.value)
    console.log(password.value)

    if (isUpdateClicked) {

        console.log("YESSSSSS", isUpdateClicked);

        const newArray = Users.map(v => {
            if (v.id === isUpdateClicked) {
                return {
                    id: v.id,
                    username: username.value,
                    password: password.value,
                    email: email.value,
                }
            } else {
                return v
            }
        })

        localStorage.setItem("Users", JSON.stringify(newArray))
        location.reload()
        // Table()
        isUpdateClicked = 0;
        clearForm()
        return;
    }

    if (username.value.trim() === "" || password.value.trim() === "" || email.value.trim() === "") {
        // console.log(username, password, email)
        return
    }

    const DuplicatUser = Users.some(v => {
        return v.username === username.value
    });

    // console.log(DuplicatUser, Users)

    if (DuplicatUser) {
        alert(DuplicatUser)
        clearForm()
        return;
    }

    const obj = {
        username: username.value,
        password: password.value,
        email: email.value,
        id: Date.now()
    }

    console.log(obj)
    Users.push(obj)

    localStorage.setItem("Users", JSON.stringify(Users))
    window.location.href = "23-03-26.html"

    clearForm()
    console.log("All Users :", Users)

    Table()
})

function Table() {
    table.innerHTML = ''
    const newUser = JSON.parse(localStorage.getItem("Users"))
    newUser.forEach((value, index) => {
        const tr = document.createElement("tr")
        let td_username = document.createElement("td")
        let td_password = document.createElement("td")
        let td_email = document.createElement("td")
        let td_delete = document.createElement("td")
        let Delete = document.createElement("button")
        let td_update = document.createElement("td")
        let Update = document.createElement("button")
        Update.innerText = "Update"
        Delete.innerText = "Delete"


        td_email.innerText = value.email;
        td_password.innerText = value.password;
        td_username.innerText = value.username;
        td_delete.appendChild(Delete);
        td_update.appendChild(Update);

        tr.append(td_username, td_password, td_email, td_delete, td_update)

        table.appendChild(tr)



        Update.addEventListener("click", () => {
            // console.log(value.id)
            // console.log(value.username)
            // localStorage.setItem("myid", value.id)
            isUpdateClicked = value.id
            UpdateRow(value.id)

        })


        Delete.addEventListener("click", () => {
            // console.log(value.id)
            // console.log(value.username)
            DeleteRow(value.id)
        })

        console.log("All For Ecah Value :", value)
    })
}

Table()


function DeleteRow(id) {
    const MyArray = JSON.parse(localStorage.getItem("Users"))
    // const find = MyArray.find(v => v.id === id)
    const find = MyArray.filter(v => v.id !== id)
    console.log(find)
    localStorage.setItem("Users", JSON.stringify(find))
    location.reload();
    Table()
}



// const value = localStorage.getItem("Username");

// localStorage.setItem("Username", "BCAUG")

// localStorage.removeItem("Key")

// localStorage.clear()

function UpdateRow(id) {

    // isUpdateClicked = true;
    const myUser = Users.find(v => v.id === id);
    console.log("Update Function : ", id, myUser);

    username.value = myUser.username;
    email.value = myUser.email;
    password.value = myUser.password;

    // setForm(myUser.username, myUser.email, myUser.password)
}