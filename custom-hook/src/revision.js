//  part- of the learning.


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useEffect, useState } from 'react';

function App() {
  const [render,setRender]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setRender(false);
    },10000)
  },[])
  return (
    <>
    {/* conditionally render my component. */}
      {render ?<MyComponent /> :<div></div>}
    </>
  )
}



function MyComponent() {
  useEffect(() => {
    console.error("component mounted...");
    return () => {
      sonsole.log("component unmounted.")
    };
  }, []);

  // Render UI
  return <div>
    from inside my component 
  </div>
}

export default App
// https://daily-code-web.vercel.app/tracks/3Vhp7rCJUVjnvFuPxZSZ/hook-1





// part-2   custom hook- part-1 ( fetching data)
import { useEffect, useState } from 'react'
import axios from 'axios'


// writing our own custom hook s
function useTodos(n){

  const [todos,setTodos]=useState([]);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    // to update the todos after every n second.
    const value=setInterval(()=>{
      axios.get("https://sum-server.100xdevs.com/todos")
      .then(res=>{
        setTodos(res.data.todos);
        setLoading(false);
      })
    },n*1000)
    // this will run for the first time , onec. and after every 5 sec . upper code will run
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res=>{
        setTodos(res.data.todos);
        setLoading(false);
      })
      // here we have 2 problem, 1.when ever n changes this should not be re-render.. so make n as a dependent variable
      //                         2. when n is depnd variable, then when it will be re-rendering,stop the first interval one 
      //                             and start the new cycle.
    return ()=>{
      // it will stop the old clock, and start the new clock..
      clearInterval(value);
    }
  },[])
  return {todos,loading};
}

function App() {

  const {todos,loading}=useTodos(5);
  if(loading){
    return <div>loading...</div>
  }
  return (
    <>
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

// export default App