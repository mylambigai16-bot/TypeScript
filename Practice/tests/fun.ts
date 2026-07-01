import promptsync from "prompt-sync"
//Normal function
function func(n1:number, n2:number):number{
    return n1+n2
}

//Factorail function
function fact(num:number):number{
    if(num == 1){
        return 1
    }
    return fac= num * fact(num-1)
}

//Anonymous function
let sub = function(x:number,y:number):number{
    return x-y
}

//Arrow Function
let mul = (x:number,y:number):number=>{
    return x*y
}

//Optional parameter
function option(p1:number,p2:number,p3?:number){
    if( p3 == undefined)
        return "Num1:"+p1+" Num2:"+p2+" Num3:"+p3
}

//Default parameter
let def = (n1:number,n2:number=4):number=>{
    return n1+n2
}

//Rest parameter
let restParam = (n:number,nd:number=1,no?:number,...nr:number[]):number=>{
    let sum = 0
    for(var i of nr){
         sum+=i
    }
    return n+nd+sum
}
let fac:number = 1
let sum = func(2,3)
console.log(sum)
console.log("Factorial: "+fact(5))
console.log("Subtraction: "+sub(5,2))
console.log("mul: ",mul(2,90))
console.log("Optional param: "+option(1,2))
console.log("Default param: "+def(1,6))
console.log("Rest parameter:"+restParam(1,2,3,1,2))