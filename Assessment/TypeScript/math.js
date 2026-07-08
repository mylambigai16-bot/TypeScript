import promptSync from "prompt-sync";
const prompt = promptSync();
const num1 = Number(prompt("Enter number1: "));
const num2 = Number(prompt("Enter number2: "));
if (num1 >= 0 && num2 >= 0) {
    console.log("Addition: " + (num1 + num2));
    console.log("Subtraction: " + (num1 - num2));

    if (num1 != 0 && num2 != 0) {
        console.log("Multiplication: " + (num1 * num2));
    }
    else {
        console.log("Multiplication: One of the value is Zero!");
    }
    if (num2 != 0) {
        console.log("Division: " + (num1 / num2));
    }
    else {
        console.log("Division: Can't divisible by Zero!");
    }
}
else{
    console.log("Enter two positive number!")
}
