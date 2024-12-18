import{useState} from 'react'
import Nav from './Nav'
import Footer from './Footer'
const Contact=()=>{
    const errmodel = {
        Fullname:null,
        email:null,
    }
    const [Fullname ,setFullname] = useState('')
    const[email ,setEmail]=useState('')
    const[message ,setMessage] = useState('')
    const [formerr ,setFormerr]= useState(errmodel)
    const Contact=(e)=>{
        e.preventDefault();
        alert('dfjgh')
    }
    

    return(
        <div>
        <Nav/>
        
        <div style={{display :'flex' ,padding:34, gap: 34}}>
            <img src='./image/contact_us.jpg' height={500} width={400}/>
            <div style={{
                //background:"red",
                width:'50%'
            }}>
                <form onSubmit={Contact}
                 style={{
                    display:'flex',
                    flexDirection:'column',
                    gap: 14,
                }}>
                    <div style={{
                        display:'flex',
                        flexDirection:'column',
                        gap : 8,
                    }}>
                        <label style={{fontWeight:'bold'}}>Full Name</label>
                        <input onChange={(e)=>{setFullname(e.target.value)}}
                        type='text'
                         placeholder='Enter name here'
                         required
                        style={{
                            border: '2px solid #ccc',
                            borderRadius:4,
                            padding: 12,

                        }}/>
                        {formerr.firstname && <small className='text-rose-600 font-semibold'>This field is required</small>}
                        
                    </div>

                    <div style={{
                        display:'flex',
                        flexDirection:'column',
                        gap : 8,
                    }}>
                        <label style={{fontWeight:'bold'}}>Email:</label>
                        <input onChange={(e)=>{setEmail(e.target.value)}}
                        type='email'
                         placeholder='example@gmail.com'
                         required
                        style={{
                            border: '2px solid #ccc',
                            borderRadius:4,
                            padding: 12,

                        }}/>
                {formerr.email&&<small className='text-rose-600 font-semibold' >This field is required</small>}

                    </div>
                    <div style={{
                        display:'flex',
                        flexDirection:'column',
                        gap : 8,
                    }}>
                        <label style={{fontWeight:'bold'}}>Message</label>
                        <textarea onChange={(e)=>{setMessage(e.target.value)}}
                        required
                        type='text'
                         placeholder='Message'
                         name='meaagae'
                         
                        style={{
                            border: '2px solid #ccc',
                            borderRadius:4,
                            padding: 14,

                        }}/>
                    </div>
                    <button style={{
                        border:'none',
                        padding:14,
                        width:'fit-content',
                        fontWeight:'bold',
                        background:'blue'
                    }}>Submit</button>
                </form>
            </div>
        </div>
            
        <Footer/>
        </div>
    )
}
export default Contact