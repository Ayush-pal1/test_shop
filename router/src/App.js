import {useState} from 'react'
import 'remixicon/fonts/remixicon.css'
import{BrowserRouter,Routes ,Route} from 'react-router-dom'
import Home from './Component/Home'
import Test from './Component/Test'
import Talk from './Component/Talk'
import Teacher from './Component/Teacher'
import Contact from './Component/Contact'
const App=()=>{ 
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/teacher' element={<Teacher/>}/>
        <Route path='/aage' element={<home/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/Talk' element={<Talk/>}/>
      </Routes>
     </BrowserRouter>
 )
}
export default App

// const App=()=>{
//   // const x = true;
//   //var show = true;
//   // const demo=()=>{
//   //   alert('Kye RE')
//   //   console.log("kya ree");
//   //   show =false;
//   // }
//   const [show,setShow] = useState(false) //useState return array->[true ,f]
//   const test=()=>{
//     setShow(!show)
//   }
//   return (
//     <div>
//     {show && <h1>Hide your Feeling</h1>}
//      <h1>Ayush</h1>
//      {/* {show && <h1>Kya re</h1>} */}
//      {/* <button onClick={demo}>Test</button> */}
//      {/* <button onClick={()=>{demo(4,5)}}>Test</button> */}
//      <button onClick={test}>{show ? 'hide':'show'}</button>

//     </div>
//   )
// }
// export default App