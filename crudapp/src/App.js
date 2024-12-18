import 'remixicon/fonts/remixicon.css'
import { useState } from 'react'
import './App.css' 
const App=()=>{
  const [rigth,setRight]=useState(-450)
  const[form,setForm]=useState({
    fullname:'',
    class:'',
    roll:'',
    subject:''  ,
    DOB:'',

  })
  const [students,setStudent]=useState([])
  const [editIndex,seteditIndex] =useState(null)
  const handledrawer=()=>{
        setRight(0)

  }
  const handledrawer2=()=>{
    setRight(-450)
  }
  const handle=(e)=>{
      const input = e.target
      const value = input.value
      const key = input.name
      setForm({
        ...form,
       [key]:value
      })
  }
  const submitform=(e)=>{
      e.preventDefault()
      setStudent([
        ...students,
        form,
      ])
      setForm({
        fullname:'Ayush',
        class:'12',
        roll:'120',
        subject:'operating system'  ,
        DOB:'',
      })
      setRight(-450)
       
  }
  const delet=(index)=>{
      const backup = [...students]
      backup.splice(index ,1)
      setStudent(backup)
  }

  const edit=(index)=>{
        setRight(0)
        setForm(students[index])
        seteditIndex(index)
        
         
  }
  const editStudent=(e)=>{
        e.preventDefault()
        const backu = [...students]
        backu[editIndex]=form
        setStudent(backu)
        setForm({
          fullname:'',
          class:'',
          roll:'',
          subject:''  ,
          DOB:'',
  })

  }
  return(
    <div style={{
      background:'#ddd',
      minHeight:'100vh'
    }}>
      <div style={{
        width:'70%',
        background:'white',
         margin:'40px auto',
         padding:32
      }}>
       <h1 style={{textAlign:'center'}}>CRUD</h1>
       <button 
       onClick={handledrawer}
       style={{
        border:"none",
        backgroundColor:'rgb(35, 198, 139)',
        borderRadius:18,
        padding: '14px 24px',
        margin:'24px 0'
       }}>
        <i className="ri-user-add-fill" style={{marginRight:6}}></i>
        New student</button>
        <table className='crud-app'>
          <thead>
            <tr>
              <th>S/No</th>
              <th>Student name</th>
              <th>Subject</th>
              <th>Class</th>
              <th>Roll</th>
              <th>DOB</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            students.map((item ,index)=>(
              
               
               <tr>
              <td>{index+1}</td>
              <td>{item.fullname}</td>
              <td>{item.subject}</td>
              <td>{item.class}</td>
              <td>{item.roll}</td>
              <td>{item.DOB}</td>
              <td>
                <div>
                  <button onClick={()=>edit(item)}
                   style={{
                    margin:11
                  }} >
                  <i className="ri-edit-2-fill"></i> 
                  </button>
                  <button onClick={()=>delet(index)}>
                  <i className="ri-delete-bin-fill"></i>
                  </button>
                </div>

              </td>
            </tr>
               
              
            ))
          }
           
          </tbody>
           
        </table>
       </div>
       <div style={{
           position :'fixed',
           top:0,
           right: rigth,
           width:400,
           background:'white',
           height: '100%',
           boxShadow:'0 0 40px rgba(0,0,0,0.2)',
           padding:28 ,
           transition:'0.3s'
       }}>
        <button onClick={handledrawer2}
        style={{
          border:'none',
          fontSize:18,
          position:'absolute',
          top:20,
          right:40,
          color:'lightseagreen',
          borderRadius:12,
        }}
        >Bhakk</button>
        <h1>New Student</h1>
        <form onSubmit={editIndex===null?submitform : editStudent}
        style={{
          display:'flex',
          flexDirection:'column',
          gap:17,
        }}>
          <input onChange={handle}
           name='fullname' 
           value={form.fullname}
          placeholder='Enter your name'
          type='text'
          required
          style={{
            borderRadius:9,
            padding:5,
            border:'1px solid #ccc'
          
          }}
          />
          <input onChange={handle}
          name='subject'
          value={form.subject} 
          placeholder='Enter your Subject'
          type='text'
          required
          style={{
            borderRadius:9,
            padding:5,
            border:'1px solid #ccc'
            
          }}
          />
          <input onChange={handle}
          name='class' 
          value={form.class}
          placeholder='Enter your Class'
          type='number'
          required
          style={{
            borderRadius:9,
            padding:5,
            border:'1px solid #ccc',
            
          }}
          />
          <input onChange={handle}
          name='roll' 
          value={form.roll}
          placeholder='Enter your rollNo'
          type='text'
          required
          style={{
            borderRadius:9,
            padding:5,
            border:'1px solid #ccc'
          
          }}
          />
          <input onChange={handle}
          name='DOB'
          type='date'
          required
          style={{
            borderRadius:9,
            padding:5,
            border:'1px solid #ccc'
            
          }}
          />
          {
            editIndex===null?
            <button style={{
              width:'30%',
              borderRadius:13,
              padding:7,
              backgroundColor:'#a7c132',
            }}>Submit</button>
             
            :
            <button style={{
              width:'30%',
              borderRadius:13,
              padding:7,
              backgroundColor:'pink',
              
  
            }}>Save</button>
          }
         
        
        </form>
       </div>
    </div>
  )
}
export default App