
// python
// x, y = 1, 2
// x, y = y, x

// const [x, y, z, a, b, c] = [1, 2, 3, 4];
// console.log(x, y, b, c);

// const [x, y=0] = [1];
// console.log(x, y);

function get_default_value() {
    console.log("get_default_value() 호출");
    return 0;
}
const [x, y=get_default_value()] = [1, 2];

function mysum(x, y=get_default_value()) {
    return x + y + 10;
}

mysum(1);
mysum(2);
mysum(3);
