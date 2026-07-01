import promptSync from "prompt-sync";

const prompt = promptSync();
let num1: number = Number(prompt("Enter number1: "));
let num2: number = Number(prompt("Enter number2: "));

console.log("Addition: " + (num1 + num2));
console.log("Subtraction: " + (num1 - num2));

if (num1 != 0 && num2 != 0) {
    console.log("Multiplication: " + (num1 * num2))
}
else {
    console.log("Multiplication: One of the value is Zero!")
}

if (num2 != 0) {
    console.log("Division: " + (num1 / num2))
}
else {
    console.log("Division: Can't divisible by Zero!")
}

