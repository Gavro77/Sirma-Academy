function multiply(num1) {
    return function (num2) {
        return function (num3) {
            return num1 * num2 * num3;
        };
    };
}

// console.log(multiply(2)(3)(4)); // Output: 24
// console.log(multiply(5)(3)(4)); // Output: 60
// console.log(multiply(5)(6)(4)); // Output: 120
