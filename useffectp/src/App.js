
 import { useState } from "react"
const App=()=>{
   const[showImage,setShowImage]= useState(true);
  //  const func=()=>{
  //   setShowImage(!showImage);
  //  }
  const[bgd,setBgd] = useState("blue")
  const[input ,setInput]=useState("")
  const[font , setFont] = useState(20)
  const[color ,setColor]  = useState('green')
  const [list ,setList]=useState("")
  const [data,setData]=useState([])
  const [student,setStu] =useState(['fj','ff','fsfe'])
  const[value ,setValue] =useState('')
  const addList=()=>{
    setData([
      ...data,
      list,
    ])
  }

  const delet =(index)=>{
        const copy = [...student]
       copy.splice(index , 1)
       setStu(copy)
  }

  const addData=()=>{
    setStu([
      ...student,
      value,
    ])
  }
  return (
    <div style={{
      minHeight:'100vh',
      background:'red',
    }}>
     <div style={{
      background:'white',
       width:'50%',
       margin:'0 auto',
       padding:'0 48px',
       display:'flex',
       flexDirection:'column',
       gap:32
    }}>
      <div style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
      }}>
        <h1>Ayush</h1>
        <p>Coding till life</p>
      </div>
      <div>
        <h1>Show and hide App</h1>
        {showImage&&<img src="./image/Flower.jpg" width='100%' />}
        <button onClick={()=>{setShowImage(!showImage)}}>{showImage?'hide':'show'}</button>
      </div>
      <div>
        <h1>Show and hide App</h1>      
        <div style={{
          width:300,
          height:300,
          background:bgd,
          borderRadius:16,
        }}>
        </div>
        <button onClick={()=>{setBgd(bgd==="blue"?'red':'blue')}}>{bgd==='red'?'blue':'red'}</button>
      </div>
      <div>
        <h1>Live Input Preview</h1>
        <input placeholder="Type your text" style={{
          border: '1px solid red',
          padding: 5,
          width:150,
          margin:0,
        }}  onChange={(e)=>{setInput(e.target.value)}}/>
        <h1>{input}</h1>
      </div>
      <div>
        <p style={{
          fontSize:font,
        }}>FONT INCREASER</p>
        <input type="range" min={20} max={100} onChange={(e)=>{setFont(Number(e.target.value))}}/>
      </div> 
      <div>
        <h1>color change</h1>
        <input placeholder="Changing color" onChange={(e)=>{setColor(e.target.value)}}/>
        <div style={{
           width:150,
           height:150,
           background:color,
        }}>
        </div>
      </div>
      <div>
        <h2>dynamic list(using useState & array)</h2>
        <div>
          <input
          onChange={(e)=>{setList(e.target.value)}}
          placeholder="enter product name" 
          style={{border:'1px solid purple' , borderRadius:12,}}/>
          <button 
          onClick={addList}
          style={{
            border:'none',
            background:'orange',
            width:50,
            padding:13,
            margin:8,
            borderRadius:'4px',
            fontWeight:'bold',
          }}>Add</button>
        </div>
        <ul>
       {
       data.map((item,index)=>{
        return(
          <div  key={index}>
           <li>{item}</li>
           </div>
        )
        
       })
        }
       </ul>
      </div>
      <div>
        <h2>Live Delete Data</h2>
        <ul>
        {
            student.map((item ,index)=>{
              return (
                <li key={index}>{item} 
                <button onClick={()=>{delet(index)}}>Delete</button></li>
                
              )
            })
        }
        </ul>
        <h2>add the data in input</h2>
        <input placeholder="something" onChange={(e)=>{setValue(e.target.value)}}/>
        <button onClick={addData}>Add</button>
      </div>
     </div>
    </div>
  )
}
export default App
// const App=()=>{
//   // const student1 = ['ayush' ,'pradhan' , 'anubhav']
//   // const student2 = ['shambhavi' , 'kavya','shivani']
//   // const all = [...student1 , ...student2]
//   // console.log(all)
//    const mark1={
//     math:80,
//     physics: 85,
//     english:68,
//    }
//    const mark2={
//     chemistry:90,
//     social:79,
//    }
//    const all = {
//     ...mark1,
//     ...mark2,
//    }
//    console.log(all);
//   return(
// <div>

// </div>
//   )
// }
// export default App