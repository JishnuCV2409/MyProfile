// console.log("HelloWorld");
// // var name = 'hello';
// let city = 'bengaluru';
// const number = 1;
// console.log(city, number);
// let state = { State: "Karnataka", Capital: "bengaluru" };
// console.log(state);
// console.log(10 <= 10);
// let age = 19;
// if (age >= 18) {
//     console.log("you are an adult");
// }
// else {
//     console.log("you are not an adult");
// }
// function name(name1) {
//     console.log("hello how are you " + name1);
// }

// name("purushotam");
// const add = function (a, b) {
//     return (a + b);
// }

// console.log(add(3, 5));
// let greet = (name1) => { return "hello " + name1 };
// console.log(greet("pg"));
// setTimeout(function () {
//     console.log("done!");
// }, 5000);
// function convert($) {
//     return $ * 89.80;
// }
// const a = 25;
// console.log(a + " us dollars " + convert(a) + " indian rupees");
// function fact(a) {
//     if (a == 1) {
//         return 1;
//     }
//     else {
//         return a * fact(a - 1);
//     }
// }
function changing() {
    let r = Math.trunc(Math.random() * 255);
    let g = Math.trunc(Math.random() * 255);
    let b = Math.trunc(Math.random() * 255);
    let body_g = document.querySelector('body');
    body_g.style.cssText = `background-color: rgb(${r},${g},${b})`
    let h2_bg = document.querySelector('h2');
    h2_bg.innerHTML = `"RGB(${r},${g},${b})"`
}