export function useIsOnline(){
    const [isOnline,setIsOnline]=useState(window.navigator.onLine);
    // by default value is window.navigator.online
    useEffect(()=>{
      window.addEventListener("online",()=>{
        setIsOnline(true);
      })
      window.addEventListener("offline",()=>{
        setIsOnline(false);
      })
    },[])
  }