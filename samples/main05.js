
// def myprint(*args):
//     print(args)

// function myprint(...args) {
//     console.log(args);
// }
// myprint(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

const tom = {
    name: 'Tom',
    age: 10,
    region: 'Pusan'
};

const steve = {
    ...tom,
    name: 'Steve',
};
console.log(steve);

const numbers = [1, 2, 3, 4, 5];
const numbers2 = [...numbers, 6];
console.log(numbers2);


