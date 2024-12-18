import { useRef } from "react"
import { useState } from "react"
import { useSyncExternalStore } from "react"                                                                                                                                                                                                                                                                                                                                          
const App=()=>{
    const title = useRef(null)
    const test=()=>{
        title.current.style.color='red'
    }
    return(
    <div>
      <h1 ref={title}>dfxewx</h1>
      <input/>
      <button onClick={test}>Test</button>
    </div>
  )
}
export default  App     