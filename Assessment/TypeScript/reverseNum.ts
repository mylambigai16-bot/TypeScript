import promptSync from "prompt-sync";

const prompt = promptSync();
const n: string = prompt("Enter the number:");

let len = n.length
console.log("Number length: "+len)

let revNum:string =""
//let num:number = Number(n)
if(len == 5){
    //let rem:number;
    // while(num != 0){
    //     rem = num%10
    //     revNum+=rem.toString()
    //     num = Math.floor(num/10)
    // }
    // console.log("Reversed number is: "+revNum)

    for(var i= len-1;i>=0;i++){
        revNum+=n[i]
    }
    console.log("Reversed number is: "+revNum)
}
else{
    console.log("It is not a five digit number")
}
