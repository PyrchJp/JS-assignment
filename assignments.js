//Assignment 1
function multiplesOf3nd5() {
    let sum = 0;
    const num = 100;
    for (let i = 0; i <= num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    console.log(sum);
}
//Assignment 2
function checkTruthy() {
    let sum = 0;
    const arr = [0, 1, 2, 0, 0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            sum += 1;
        }
    }
    console.log(sum);
}
//Assignment 3
function oddOrEven(num) {
    if (num % 2 === 0) {
        console.log('Number is even');
    } else {
        console.log('Number is odd');
    }
}
oddOrEven(10);
//Assignment 4
function speedLimit(speed) {
    let kmPerPoint = 5;
    let points = 0;
    let speedLimit = 70;

    if (speed <= speedLimit) {
        console.log('Good driving');
    } else {
        points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 10) {
            console.log('License suspended');
        } else {
            console.log('Speed limit crossed by penalty points', '' + points);
        }
    }
    speedLimit(60);
}
//Assignment 5
function fizzBuzz(num) {
    if (typeof num !== 'number') {
        console.log('NaN - Not a Number! Please Input Number');
        return;
    }
    if (num % 3 === 0 && num % 5 === 0) {
        console.log('FizzBuzz');
    } else if (num % 3 === 0) {
        console.log('Fizz');
    } else if (num % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(num);
    }
}
//Assignment 6
function isLandscape(width, height) {
    return width > height;
}
console.log(isLandscape(800, 600));

//Assignment 7
function Student(name, age, rank, country) {
    this.name = name;
    this.age = age;
    this.rank = rank;
    this.country = country;
}

function areStudentsEqual(student1, student2) {
    return student1.name === student2.name &&
        student1.age === student2.age &&
        student1.rank === student2.rank &&
        student1.country === student2.country;
}

let student1 = new Student('John', 20, 1, 'USA');
let student2 = new Student('John', 20, 1, 'USA');

console.log(areStudentsEqual(student1, student2));

//Assignment 8
function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(getMax([1, 2, 3, 4, 5]));

//Assignment 9
function includes(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}
console.log(includes([1, 2, 3, 4, 5], 3)); 

//Assignment 10
function sumOfArguments(args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    console.log(sum);
}
sumOfArguments([1, 2, 3, 4, 5]);






