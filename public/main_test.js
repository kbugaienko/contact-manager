// CONST & LET
// let name = 'John';
// name = "Jack";

// const person = {
//     name: 'John',
//     age: 33
// }

// person.name = "Jack";
// console.log(person);

// const nums = [1, 2, 3, 4];
// nums.push(5);

// console.log(nums);

// ARROW FUNCTIONS

// function sayHello(){
//     console.log("Hello!");
// }

// const sayHello = name => console.log(`Hello ${name}`);

// sayHello("Bred!");

// FOREACH

// const fruits = ['Apples', 'Bananas', 'Oranges'];
// fruits.forEach((fruit, index) => console.log(index, fruit));

// MAP
// const singleFruit = fruits.map((fruit) => fruit.slice(0, -1));
// console.log(singleFruit);

// FILTER
// const people = [
//     {id: 1, name: 'Karen'},
//     {id: 2, name: 'Bob'},
//     {id: 3, name: 'Sharon'},
// ]

// const people2 = people.filter(person => person.id !== 2);
// console.log(people2);

// SPREAD
// const arr = [1, 2, 3];
// const arr2 = [...arr, 4];
// const arr3 = [...arr.filter(num =>  num !== 2)];
// console.log(arr3);

// DESTRUCTURING
// const profile = {
//     name: "John Doe",
//     address: {
//         street: "40 Main Str",
//         city: "Boston"
//     },
//     hobbies: ['movies' , 'music']
// };

// const {name, address, hobbies}  = profile;
// console.log(name, address.street, hobbies[1]);
// const {street, city} = profile.address;
// console.log(street, city);

// CLASSES
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age}.`;
    }
}

const person1 = new Person('Sara', 33);
const person2 = new Person('John', 45);

// console.log(person2.name);
// console.log(person1.age);

// SUBCLASSES
class Customer extends Person {
    constructor(name, age, balance) {
        super(name, age);
        this.balance = balance;
    }

    info(){
        return `${this.name} owes ${this.balance}`;
    }
}

const customer1 = new Customer('Kevin', 32, 100);
console.log(customer1.info());

// MODULES