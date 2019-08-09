
function mysum(x, y) {
    return x + y + 10;
}

// const mysum2 = mysum;

const mysum3 = function(x, y) {
    return x + y + 10;
};

const mysum4 = (x, y) => x + y + 10;
const mysum5 = (x, y) => (x + y + 10);
const mysum6 = (x, y) => {
    return x + y + 10;
};

const mysum7 = (x) => x + 10;
const mysum8 = x => x + 10;


const myfn1 = (x, y) => {
    return {x: x, y: y};
};
// arrow function에서 object 반환 시에는
// 필히 소괄호로 묶어주세요.
const myfn2 = (x, y) => ({x: x, y: y});


