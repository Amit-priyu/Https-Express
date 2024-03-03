
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
// import { jobAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atoms'
import { useEffect, useMemo } from 'react';
import axios from 'axios';
import { notifications, totalNotificationSelector } from './atoms';
function App() {
  return  <RecoilRoot>
  <MainApp />
</RecoilRoot>
}

function MainApp(){
  
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  // useEffect(()=>{

  //   axios.get("https://sum-server.100xdevs.com/notifications")
  //   .then(res=>{
  //     setNetworkCount(res.data)
  //   })
  // },[])
  // const networkNotificationCount=useRecoilValue(networkAtom);
  // const jobAtomCount=useRecoilValue(jobAtom);
  // const notificationAtomCount=useRecoilValue(notificationAtom);
  // // const [messagingAtomCount,setMessagingAtomCount]=useRecoilState(messagingAtom);
  // const messagingAtomCount=useRecoilValue(messagingAtom);
  // const totalNotificationCount=useRecoilValue(totalNotificationSelector);

  // now on the me button if we have to show the sum of all  the values. 
  // this is an ugly way of doing we have optimise more it using the selector concept of recoil
  // const totalNotificationCount=useMemo(()=>{
  //   return networkNotificationCount+jobAtomCount+notificationAtomCount+messagingAtomCount;
  // },[networkNotificationCount,jobAtomCount,notificationAtomCount,messagingAtomCount]);


  return (
    <div>

<button>Home</button>
      
      <button>My network ({networkCount.networks >= 100 ? "99+" : networkCount.networks})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>






      {/* make the navingation bar of the linkedin   */}
     {/* <button>Home</button> 
     <button>My Network ({networkNotificationCount >=100 ?"99+":networkNotificationCount})</button>
     <button>jobs ({jobAtomCount})</button>
     <button>Massiging ({messagingAtomCount})</button>
     <button>Notifications ({notificationAtomCount})</button>
     <button>Me ({totalNotificationCount})</button> */}
     {/* <button o{nClick={()=>{
        setMessagingAtomCount(c =>c+1);
      }}>Me</button> */}
     {/* <ButtonUpdater /> */}
  
    </div>
  )
}

// function ButtonUpdater(){
//   // here we only need the setter function so we have to use the useSetReecoilState/
//   const setMessagingAtomCount=useSetRecoilState(messagingAtom);
  // return    <button onClick={()=>{
  //   setMessagingAtomCount(c =>c+1);
  //  }}>Me</button>
// }
export default App
