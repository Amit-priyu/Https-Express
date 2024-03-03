import { useState } from 'preact/hooks'
// import {useState} from 'react';
import preactLogo from './assets/preact.svg'
// import viteLogo from '/vite.svg'
// import './app.css'


// just we have to implement the simple functionalities. of the title description and compeleted..

// any time child re-render..parent re-render as werlll
export function App() {
  // defining the initial state .. something called array destructuring..
  // const [count, setCount] = useState(0) 

  // creating basic to-do application..
  const [todos,setTodos]=useState([{
    title:"go to zym",
    description:"timig of the zym is 7-9",
    completed:false
  },{
    title:"Studying we development",
    description:"study dsa from the striver",
    completed:true
  }]);

  // function to add a random todo..
  
  function addTodo(){
    //... means destructuring... initial value and then add the new value....
    setTodos([...todos,{
      title:"new title",
      description:"new title desctioption..."
    }])
  }
  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      
      {/* <Todo title="amit" description="description" /> */}

  {/* how to render all the object in the array */}
    {todos.map(function(todo){
      return <Todo title={todo.title} description={todo.description} />
    })}
      {/* {JSON.stringify(todos)} */}
       
    </div>
  )
}

// component 

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}


// function CustomButton(props){
  
//   function onClickHandler(){
//     props.setCount(props.count + 1);
//   }
//   return <button onClick={onClickHandler}>

//     counter {props.count}
//   </button>
// }

export default App