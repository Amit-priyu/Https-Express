import { useCallback, useState } from "react"




function App(){

  const [counter,setCounter]=useState(0);
  
  var a=useCallback(()=>{
   console.log("hi there.")
  },[]);
  return <div>
    <button onClick={()=>{
      setCounter(counter+1);
    }}>counter ({counter})</button>

    <Demo />
  </div>
}

const Demo=memo(function({a}){
  console.log("Re-render happens");
  return <div>
    Hi There..........
  </div>
})

// someuse case of --- useMemo



// import { useMemo, useState } from "react";



// // useMemo... it avoid to avoid extra computation..
// function App(){
//   const [counter,setCounter]=useState(0);
//   const [inputvalue,setInputValue]=useState(1);
  

//   // to avoid extra computation we use usememo concept.
//   let count=useMemo(()=>{
    
//   let count=0;
//   for(let i=1; i<=inputvalue; i++){
//     count=count+i;
//   }
//   return count;
//   },[inputvalue])

//   return <div>
//     <input onChange={function(e){
//       setInputValue(e.target.value);
//     }} placeholder={"find sum from 1-n"}></input>
//     <br />
//     Sum from 1 to {inputvalue} is {count}
//     <br />
    
//     <button onClick={()=>{
//       setCounter(counter+1); 
//     }}>Counter ({counter})</button>
//   </div>

// }



// useEffect-------part-1


// import { useEffect, useState } from 'react'
// import axios from 'axios'



// function App() {
//   // const [todos,setTodos]=useState([]);

//   // using of axiox ,, we can use  fetch as well.

//   // useEffect(()=>{
//   //   axios.get("https://sum-server.100xdevs.com/todos")
//   //   .then(function(response){
//   //     setTodos(response.data.todos)
//   //   })
//   // },[]);
//   return (
//     <>
//       {/* {todos.map(todo=> <Todo key={todo.id} title={todo.title} description={todo.description} />)} */}
//     <Todo id={1} /> 
//     </>
//   )
// }

// function App(){

//   const [selectedid,setSelectedId]=useState(1);

//   return <div>
//   <button onClick={function(){
//     setSelectedId(1);
//   }}>1</button>  
//    <button onClick={function(){
//     setSelectedId(2);
//   }}>2</button>  
//    <button onClick={function(){
//     setSelectedId(3);
//   }}>3</button>  
//    <button onClick={function(){
//     setSelectedId(4);
//   }}>4</button>  

//     <Todo id={selectedid} />
//   </div>
// }

// function Todo ({id}){
//     const [todo,setTodo]=useState({});

//     // implement the effect here... based on the id.get specific from backend
//     useEffect(()=>{
//       axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
//       .then(response => {
//         setTodo(response.data.todo);
//       })
//       // this means that if id changes it has to re-render..
//     },[id])

//     return <div>
//       Id:{id}
//       <h1>{todo.title}</h1>
//       <h4>{todo.description}</h4>
//     </div>
// }



// function Todo({title,description}){
//   return <div>
//      <h1>{title}</h1>
//     {description}
//   </div>
// }
export default App
