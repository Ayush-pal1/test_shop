import { useState,useEffect } from "react";
import firebaseAppConfig from "../../Util/Firebase-config"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Navigate,Outlet } from "react-router-dom";
const auth=getAuth(firebaseAppConfig)
const PreGaurd=()=>{
     const[session ,setSession]=useState(null)

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                 setSession(user)
            }
            else{
            setSession(false)
            }
        })
    },[])
    
    if(session===null) return(
        <div className=" bg-gray-100 h-full fixed top-0 left-0 flex justify-center items-center">
        <span className="relative flex h-6 w-6">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
     </div>
    )

    if(session)
        return(
         <Navigate to='/'/>
    )
    else
     return <Outlet/>
    
    
    
}
export default PreGaurd