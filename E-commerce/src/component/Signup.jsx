import { useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import firebaseAppConfig from '../Util/Firebase-config'
import { getAuth,createUserWithEmailAndPassword,updateProfile } from "firebase/auth";

const auth=getAuth(firebaseAppConfig)
const Signup=()=>{
    const navigate = useNavigate()
    const[passwordtype,setPasswordtype]=useState('password')
    const[error,setError]=useState(null)
    const[loader,setLoader]=useState(false)
    const[formValue,setFormValue]=useState({
        fullname:'',
        email:'',
        password:'',
    })
    const signup=async(e)=>{
        try{
            e.preventDefault()
            setLoader(true)
            await createUserWithEmailAndPassword(auth,formValue.email,formValue.password)
            await updateProfile(auth.currentUser,{displayName:formValue.fullname})
            navigate('/')
        }
        catch(err){
           setError(err.message)
        }
        finally{
            setLoader(false)
        }
    }
    const handleOnChange=(e)=>{
       const input=e.target
       const name=input.name
       const value=input.value
       setFormValue({
        ...formValue,
        [name]:value
       })
       setError(null)
    }
    return(
        <div className='grid md:grid-cols-2 md:h-screen md:overflow-hidden'>
        <img src='/Image/signup.jpg' className='w-full md:h-full h-40 object-cover'/>
        <div className='flex flex-col  md:p-16 p-8'>
            <h1 className='text-4xl font-bold'>New User</h1>
            <p className='text-lg text-gray-600'>Create Your Acoount to Start Shopping</p>
            <form onSubmit={signup}
            className='mt-8 space-y-6'>
                <div className='flex flex-col'>
                    <label className='font-semibold text-lg mb-1'>Fullname:</label>
                    <input onChange={handleOnChange}
                    required
                    name='fullname'
                    placeholder='Ayush1'
                    className='p-3 border border-gray-300 rounded'
                    />
                </div>

                <div className='flex flex-col'>
                    <label className='font-semibold text-lg mb-1'>Email:</label>
                    <input onChange={handleOnChange}
                    required
                    type='email'
                    name='email'
                    placeholder='Ayush1@gmail.com'
                    className='p-3 border border-gray-300 rounded'
                    />
                </div>

                <div className='flex flex-col relative'>
                    <label className='font-semibold text-lg mb-1'>Password:</label>
                    <input onChange={handleOnChange}
                     required
                    type={passwordtype}
                     name='password'
                    placeholder='*******'
                    className='p-3 border border-gray-300 rounded'
                    />
                    <button onClick={()=>{setPasswordtype(passwordtype==='password'?'text':'password')}} type='button' className='absolute top-11 right-4 w-8 h-8 rounded-full hover:bg-blue-300 hover:text-blue-600'>
                        {
                         passwordtype==='password'?<i class="ri-eye-line"></i>:<i class="ri-eye-off-line"></i>
                        }
                        
                    </button>
                </div>
                {
                    loader? <h1 className='text-lg font-semibold text-gray-600'>Loading....</h1>
                              :
                            <button  className='py-3 px-8 rounded bg-blue-600 text-white font-semibold hover:bg-rose-600'>Signup</button>
                }
            </form>
            <div className='mt-2'>
                Already have an account ? <Link to='/login' className='text-blue-600 font-semibold'>Signin</Link>
            </div>
            {
                error
                &&
                <div className='flex justify-between items-center mt-3 bg-rose-600 p-3 rounded shadow text-white font-semobold'>
              <p>{error}</p>
              <button onClick={()=>setError(null)}><i className="ri-close-circle-fill"></i></button>
            </div>
            }
            
        </div>
        </div>
      
    )
}
export default Signup