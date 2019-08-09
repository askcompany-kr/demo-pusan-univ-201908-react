
// function base_10(fn) {
//     function wrap(x, y) {
//         return fn(x, y) + 10;
//     }
//     return wrap;
// }

// function mysum(x, y) {
//     return x + y;
// }

// mysum = base_10(mysum);
const base_10 = fn => (x, y) => fn(x, y) + 10;

let mysum10 = base_10((x, y) => x + y);

console.log(mysum10(1, 2));
