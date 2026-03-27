// function outter() {
//     let i = 0;
//     i++;
//     console.log("I : ", i);
// }


function outter() {
    let i = 0;
    console.log("outter call ho gaya");

    return () => {
        i++;
        console.log("I : ", i);
    }
}


const inner = outter()

inner()
inner()
inner()
inner()