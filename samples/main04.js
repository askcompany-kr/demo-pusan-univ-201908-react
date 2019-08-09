
const tom = {
    name: 'Tom',
    age: 10,
    region: 'Pusan'
};

// const name = tom.name;
// const age = tom.age;
const { name, age } = tom;
console.log(name, age);


function printPerson1(person) {
    console.log(person.name, person.age);
}
function printPerson2({ name, age }) {
    console.log(name, age);
}
printPerson1(tom);
printPerson2(tom);













