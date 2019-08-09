
/* python
def mysum(x, y):
  return x + y * 10

mysum(2, 1)   # positional parameters
mysum(x=1, y=2)  # named parameters
mysum(y=2, x=1)
*/

function mysum({ x, y }) {
    return x + y * 10;
}

console.log(mysum({ x:1, y: 2 }));
console.log(mysum({ y: 2, x:1 }));