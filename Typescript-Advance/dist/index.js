"use strict";
// interface User{
//     id:string;
//     name:string;
//     age:number;
//     email:string;
//     password:string;
// };
// // only changes allowed- name,age,password
// // one way to use generic..
// // api-1
// //pick- it helps to select the set of properities from the 
// //      existing type/interface. ...
// // for a profile display , only pic name age and email.
// type Updateprops=Pick<User, 'name' | 'age'| 'email'>
// type UpdatePropsOptional=Partial<Updateprops>
// function updateUser(updatedProps: UpdatePropsOptional){
//    console.log(``);
// }
// // function sumofage(user1:User,user2:User){
// //     return user1.age+user2.age;
// // }
// // const age=sumofage({name:'amit',age:20},{name:'soubhagya',age:30});
// // console.log(age);
// --------------part-2 api-2 from readonly.
// const username="amit";
// const a=[1,3,4];
// a[0]=10;  //here we are changing value inside the a.
// const obj={
//     name:"amit",
//     age:25,
//     country:"India"
// }
// obj.name="priyu";  // here we are changing the value of const value as well
// type User={
//      name:string;
//      age:number;
// }
// const user:Readonly<User>={
//     name:"Priyadarshini",
//     age:20
// user.age=20;
// // now we can't able to update the value ,,as it is read only.
// ****   part-3 Reacord and Map..
// // Record is a type script concept..
// type User= Record<string,string>
// const user:User={
//     "ras@1":"Amit",
//     "ras@2":"priyadarshini"
// }
// map concept
const users = new Map();
users.set("ras@1", { name: "amit", age: 20 });
users.set("ras@2", { name: "amit", age: 20 });
const user = users.get("rass@1");
console.log(user);
// user.delete(ras@2);
