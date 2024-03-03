


// part-2 prop drilling concept ---learning..

import { useState } from "react"
import { CountContext } from "./context";


function App(){
  const [count,setCount]=useState(0);
  return (
    <div>


      <CountContext.Provider>

        
      </CountContext.Provider>
      {/* <Count count={count} /> */}

      {/* <CountRender count={count} /> */}
      {/* <Button count={count} setCount={setCount} /> */}
    </div>
  )
}



function Count({setCount}){
  return <div>
     <CountRender />
     <Button setCount={setCount} />
    </div>
}

function CountRender({count}){
  return <div>
    {count}
    </div>
}
function Button({count,Setcount}){
  return  <div>
    <button onClick={()=>{
      Setcount(count+1);
    }}>Increase Count</button>
    <button onClick={()=>{
      Setcount(count-1);
    }}>Decrease Count</button>
  </div>
}
export default App







//        PART-1----------------------*********** ROUTING*****************************





// import { Suspense,lazy } from "react";
// import { BrowserRouter, Routes, Route, useNavigate, } from "react-router-dom";


// // import { Dashboard } from "./components/Dashboard";
// // import { Landing } from "./components/Landing";


// // lazy way of doing this... below 2 line is a wrong syntx...

// // import Dashboard from React.lazy(()=> import('./components/Dashboard'));
// // import Landing from React.lazy(()=> import('./components/Landing'));
// const Dashboard=lazy(()=> import('./components/Dashboard'));
// const Landing =lazy(()=> import('./components/Landing') )


// function App() {

//   // here we have to use the suspense API.
//   // const navigate = useNavigate();
//   return (
//     <div>
//       {/* by this top bar ramains the same for all */}

//       <BrowserRouter>
//         <Appbar /> 
//         <Routes>
//           <Route path="/dashboard" element={<Suspense fallback={"loading.."}><Dashboard /></Suspense>} />
//           <Route path="/" element={<Suspense fallback={"loading.."}><Landing /></Suspense>} />
//           {/* <Route path="/" element={<Landing />} /> */}
//         </Routes>
//       </BrowserRouter>
//     </div>
//     // </div>
//   );
// }


// function Appbar() {
//   const navigate=useNavigate();
//   return (
//     <div>
//       <div>
//         {/* Top  Level Navigation Bar */}
//         {/* window.location.href=is used to swithc between route. but having flow , we will get again index.html and js file  */}

//         <button
//           onClick={() => {
//             // window.location.href="/"
//             navigate("/");
//           }}
//         >
//           Landing Page
//         </button>
//         <button
//           onClick={() => {
//             //  window.location.href="/dashboard"
//             navigate("/dashboard");
//           }}
//         >
//           Dashboard
//         </button>
//       </div>
//     </div>
//   );
// }
// export default App;
