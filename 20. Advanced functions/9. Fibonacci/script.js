function getFibonacci() {
    return function () {
        [this.curr, this.next] = [this.next, this.curr + this.next];

        return this.curr;
    }.bind({
        curr: 0,
        next: 1,
    });
}

// let fibonacci = getFibonacci();
// console.log(fibonacci()); // 1
// console.log(fibonacci()); // 1
// console.log(fibonacci()); // 2
// console.log(fibonacci()); // 3
// console.log(fibonacci()); // 5
// console.log(fibonacci()); // 8
// console.log(fibonacci()); // 13
// console.log(fibonacci()); // 21
// console.log(fibonacci()); // 34
// console.log(fibonacci()); // 55
// console.log(fibonacci()); // 89
// console.log(fibonacci()); // 144
// console.log(fibonacci()); // 233
