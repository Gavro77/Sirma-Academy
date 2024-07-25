const doubleThenSquare = compose(square, double);

function compose(double, square) {
    return function (x) {
        return double(square(x));
    };
}

function double(x) {
    return x * 2;
}

function square(x) {
    return x * x;
}

// console.log(doubleThenSquare(3));
// console.log(doubleThenSquare(4));
// console.log(doubleThenSquare(5));
// console.log(doubleThenSquare(1612));
