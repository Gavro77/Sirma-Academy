const obj1 = {
    name: "Alice",
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    },
};
const obj2 = {
    name: "Bob",
};

const greetObj2 = obj1.greet.bind(obj2);
// greetObj2();
