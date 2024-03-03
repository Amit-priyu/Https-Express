
// Generics, enums,imports and exports.
function getfirstelement<T>(arr:T[]){
    return arr[0];
}
const elem=getfirstelement(["amit","priyadarshini"]);
console.log(elem.toUpperCase());
// function identity<T>(arg:T):T{
//     return arg;
// }
// let output1=identity<string>("amit");
// let output2=identity<number>(100);
// output1.toUpperCase();

// Interfaces..
//  how to assign types to the object.

// interface Usere{
//     firstName:string;
//     lastname:string;
//     age:number;
// }

// function islegal(user:User){
//     if(user.age>18){
//         return true;
//     }else{
//         return false;
//     }
// }
// function greet(user:User){
//     console.log("hi there "+ user.firstName);
// }
// islegal({
//     firstName:"Amit",
//     lastname:"Priyadarshini",
//     age:20
// })

// const greet=(name:string)=>`Hello,${name}!`;





// let x:number=1;
// console.log(x);

// number,string,any

// question-1 
// function greet(firstname:string){
//     console.log("hellow "+firstname);
// }
// greet("Priyadarshini..")


// question-2
// type inference..
// function sum(a:number,b:number):number{
//     return a+b;
// }
// const value=sum(10,10);
// console.log(value);

// 
// function islegal(age:number){
//     if(age>18) return true;
//     else return false;
// }

// 4. write a functino that takes another function as input and return it after 1 second.
// function runAfter1s(fn :()=>void){
//     setTimeout(fn,1000);
// }
// runAfter1s(function(){
//     console.log("giving function as a input");
// })