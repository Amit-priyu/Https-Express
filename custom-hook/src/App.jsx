import { useEffect, useState } from 'react'
import axios from 'axios'
import { useIsOnline } from './hooks/useIsOnline';
import { useDebounce } from './hooks/useDebounce';




function App(){
    const [value,setValue]=useState(0);
    const debouncedvalue=useDebounce(value,500);
  return (
    <>
     Debounced Value is {debouncedvalue};
     <input type="text" onChange={e=>setValue(e.target.value)} />
    </>
  )
}
// defining our own custom hooks.
// function useInterval(fn,timeout){
//   useEffect(()=>{
//     setInterval(()=>{
//       fn()
//     },timeout)
//   },[])
// }
// function App() {
//   const [count,setCount]=useState(0);
//   useInterval(()=>{
//     setCount(c=>c+1);
//   },1000)

//   return (
//     <>
//     Timer is at {count}
//     </>
//   )

// } 

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App