import { useEffect, useState } from "react"


// hooks concept,, like useEffect
function App(){
  const [todos,setTodos]=useState([]);
  useEffect(()=>{
    // if we want to fetch after 10 sec..just we have to setTimeinterval..
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async function(res){
      const json=await res.json();
      setTodos(json.todos);
    })
  })
  
  return <div>
    {todos.map(todo=> <Todo title={todo.title}
     description={todo.description} />)}
  </div>
}

function Todo({title,description}){
  return <div>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </div>
}





// cleaner wrapper



// function App(){
//   return <div>
//      <CardWrapper >
//       {/*   for the cleaner wrapper just write all the logic here */}
//       Hi there..
//      </CardWrapper>
//   </div>
// }

// // here acccept children as a input....
// function CardWrapper({children}){
// //  create a div border...
// // inside that div we have ro render the props..
//  return <div style={{border:"3px solid red",padding:18}}>
//    {children}
//  </div>

// }


// function TextComponent(){
//   return <div>
//     Hi There
//   </div>
// }


// concept of key in react.....each child should have unique key...


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// let counter=4;

// function App(){
//   const [todos,setTodos]=useState([{
//     id:1,
//     title:"go to college",
//     description:"go to college everydady"
//   },{
//     id:2,
//     title:"go to college",
//     description:"go to college everydady"
//   },{
//     id:3,
//     title:"go to college",
//     description:"go to college everydady"
//   },])


//   function addTodo(){
//     setTodos([...todos,{
//       id:counter++,
//       title:Math.random(),
//       description:Math.random()
//     }])
//   }
//   return (
//     <div>
//       {/* iterate over the array and combine it. */}
//       <button onClick={addTodo}>Add a todo</button>
//       {todos.map(function(todo){
//         // while rendering the array in the reeact... use key concept also...
//         return <Todo key={todo.id} title={todo.title} description={todo.description} />
//       })}
//     </div>
//   )
// }

// function Todo({title,description}){
//   return <div>
//     <h1>{title}</h1>
//     <h2>{description}</h2>

//   </div>
// }



// concept of re-rendering.......


// function App() {
//   // const [title,setTitle]=useState("My Name is Amit");
//   // function updatetitle(){
//   //   setTitle("My Name is "+ Math.random());
//   // }

//   return (
//     <>
//       {/* <button onClick={updatetitle}>update the title</button>
//       <Header title={title}></Header> */}
//       {/* <Headerwithbutton /> */}
//       <Header title={title}></Header>
//       <Header title="amit2"></Header>
//       <Header title="amit3"></Header>
//     </>
//   )
// }
// // push the state down m-1 to minimize the re-rendering.
// function Headerwithbutton(){
//   const [title,setTitle]=useState("My Name is Amit");
//   function updatetitle(){
//     setTitle("My Name is "+ Math.random());
//   }
//   return  <div>
//      <button onClick={updatetitle}>update the title</button>
//       <Header title={title}></Header>
//       <header title="amit"></header>
//   </div>
// }

// const Header=React.memo(function Header({title}){
//   return <div>
//     {title}
//   </div>
// });
export default App
