function multiply(a, b) {
    return a * b;
}

let multiplyByFive = multiply.bind(multiply, 5);
// console.log(multiplyByFive(3));
// console.log(multiplyByFive(3));
