// const arr = [1, 2, 3, true, false, 'hello', null, undefined];

// const newArray = arr.slice(3,6)

const arr1 = [1, 2, 3, 4]
const arr2 = [11, 12, 13, 14]

const arr = arr1.concat(arr2)

arr.push(1)

// for (let i = 0; i < arr.length; i++) {
//     console.log(i);
// }

// arr.forEach((value, index) => {
//     console.log("Hii", value, index);
// })
// arr.forEach((value, index, arr) => {
//     console.log("Hii", value, index, arr);
// })



// const ans = arr.forEach((value, index) => {
//     console.log("Hii", value, index);
// })

// const ans = arr.map((value, index) => {
//     console.log("Hii", value, index);
//     return 'A'
// })
// const ans = arr.map((value, index) => {
//     console.log("Hii", value, index);
//     return value ** 2
// })
// const ans = arr.filter((value, index) => {
//     console.log("Hii", value, index);
//     return value % 2 == 0
// })


const Data = arr.map((value, index) => {
    console.log("Hii", value, index);
    return value * 3
})
    .filter((value, index) => value % 2 !== 0)
    .map((value, index) => value / 2)
    .forEach((value, index) => {
        console.log("The Value is", value);
    })