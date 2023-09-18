import { useState, useEffect } from "react";

const useOnlineStatus = () => {
    const [isOnline , setIsOnline] = useState(true);
    
    //useEffect because my eventlistener should load just one time after when my loads
    useEffect(() => {
        const handleOnline = () => setIsOnline(true) ;
        const handleOffline = () => setIsOnline(false) ;

        window.addEventListener('online' ,handleOnline );
        window.addEventListener('offline' , handleOffline);

        return () => {
            //same function we pass for addeventlistener
            window.removeEventListener('online',handleOnline) 
            window.removeEventListener('offline' , handleOffline)
        }
    
    },[])

    return isOnline

};


export default useOnlineStatus