import promptSync from "prompt-sync";
const prompt = promptSync();
let num = prompt("Enter the number:");
let len = num.length;
console.log("Number length: " + len);
