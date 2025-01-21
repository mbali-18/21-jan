let ten = 10;
console.log(ten * ten);

let mood = "light";
console.log(mood);
mood = "dark"
console.log(mood);

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);

let one = 1, two = 2;
console.log(one + two);

var name = "Mbuso";
const greeting = "Hello ";
console.log(greeting + name);

let x = 30;
console.log("the value of x is", x);

console.log(Math.max(2, 4));

console.log(Math.min(2, 4) + 100);

let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " +
theNumber * theNumber);

if (1 + 1 == 2) console.log("It's true");

// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)) {
// console.log("Your number is the square root of " +
// theNumber * theNumber);
// } else {
// console.log("Hey. Why didn't you give me a number?");
// }

let num = Number(prompt("Pick a number"));
if (num < 10) {
console.log("Small");
} else if (num < 100) {
console.log("Medium");
} else {
console.log("Large");
}

let number = 0;
while (number <= 12) {
console.log(number);
number = number + 2;
}

let result = 1;
let counter = 0;
while (counter < 10) {
result = result * 2;
counter = counter + 1;
}
console.log(result);

let yourName;
do {
yourName = prompt("Who are you?");
} while (!yourName);
console.log("Hello " + yourName);

if (false != true) {
    console.log("That makes sense.");
    if (1 < 2) {
    console.log("No surprise there.");
    }
    }

    for (let number = 0; number <= 12; number = number + 2) {
        console.log(number);
        }

        let results = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
result = result * 2;
}
console.log(results);