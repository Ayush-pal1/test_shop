import { useState,useEffect  } from "react"
import 'remixicon/fonts/remixicon.css'
import axios from 'axios'
const App=()=>{
  const[userdata , setuserData]=useState([])
  const [loading,setLoading]=useState(false)
  const[refetch,setRefetch]=useState(false)
  // //useEffect ko kisi constant me nhi rakhte
  useEffect(()=>{
     fetchdata()
  },[refetch])
  // const fetchdata=()=>{
  //   // fetch()
  //   setLoading(true)      
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((response)=>{
  //       return response.json()
  //   })
  //   .then((users)=>{
  //     console.log(users)
  //       setuserData(users)
  //       setLoading(false)
  //   })
  //   .catch((error) =>{
  //        console.log(error)
  //        setLoading(false)
  //   })
  //   }

  // try catch exception handling
   const[photos,setPhoto]=useState([])
  //   useEffect(()=>{
  //     fetchdata()
  //   },[])
  // const fetchdata=async()=>{
  //    try{
  //      const response=await fetch('https://fakestoreapi.com/products')
  //      const data = await response.json()
  //      console.log(data)
  //      setPhoto(data) 
  //    }
  //    catch(err){
  //      console.log(err)
  //    }
  //   }

     const fetchdata=async()=>{
      try{
        setLoading(true)
        const response= await axios.get('https://fakestoreapi.com/products')
        const data =response.data
        console.log(data)
        setPhoto(data)
      }
      catch(e){
        console.log('err',e)
        setPhoto(data)
      }
      finally{
        setLoading(false)
      }
     }
     const againfetch=()=>{
      setRefetch(!refetch )

     }
  return(
    <div>
   <h1>Ayush</h1>
   {
    loading &&<h1>Loading.....</h1>
   }
   <button onClick={fetchdata}>Test</button>
   <button onClick={againfetch}>Execute useEffect code again</button>
   <div style={{
    width:'100%',
    marginTop:100,
     display:'flex',
     gap:32,
    flexWrap:'wrap',

   }}>
    {
     photos.map((item,index)=>(
     <div key={index} style={{width:240}}>
      <img src= {item.image} width={180}/>
       <h1>{item.title.slice(0,20)}</h1>
      </div>
     ))
    }

   </div> 
   </div>
  )
}
export default App