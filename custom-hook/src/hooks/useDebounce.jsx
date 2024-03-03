
// debounce
// the value to debounce again..

import { useEffect, useState } from "react";

// the interval at which  the value should be debounced..
export function useDebounce(value,timeout){
    const [debouncedvalue,setDebouncedvalue]=useState(value);
   useEffect(()=>{
    let timeoutvalue= setTimeout(()=>{
      setDebouncedvalue(value);
    },timeout)

    //  if another value come within the 500 ms , then clear the last
    //  then the last one get the updated values..
    // so , we are not sending the to much request to the backend.. 
    
    return ()=>{
        clearTimeout(timeoutvalue);
    }
   },[value])

   return debouncedvalue;
}