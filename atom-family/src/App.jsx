import './App.css'
import {RecoilRoot, useRecoilState} from 'recoil';
import {todosAtomFamily} from './atoms';


// const todoAtom=atom({
//   key:"todoAtom",
//   default:{
//     id:1,
//     title:"t1",
//     description: "d1"
//   }
// })


function App(){
  return <RecoilRoot>
    <Todo id={1} />
    <Todo id={2} />

  </RecoilRoot>
}

function Todo({id}){
  // const [todo,setTodo]=useRecoilState(todosAtomFamily(id));
  reutrn (
    <>
    {todo.title}
    {todo.description}
    </>
  )
}