
const name = 'Tom';
const age = 10;

const tom = {
  name,
  age,
  print() {
      console.log(`name: ${this.name}, age: ${this.age}`);
      console.log('name: ' + this.name + ', age: ' + this.age);
  }
};

console.log(tom);
tom.print();
