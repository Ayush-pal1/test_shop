import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebaseAppConfig from '../Util/Firebase-config'
import { getAuth, onAuthStateChanged ,updateProfile} from "firebase/auth";
import { getFirestore,collection,addDoc,getDocs ,query,where,updateDoc,doc} from 'firebase/firestore';
const auth=getAuth(firebaseAppConfig)
const db=getFirestore(firebaseAppConfig)

import Layout from './Layout'
const Profile=()=>{
    const navigate=useNavigate()
    const[session,setSession]=useState(null)
    const[formvalue,setFormValue]=useState({
        fullname:'',
        email:'',
        mobile:'',
        
    })
    const[addressFormValue,setAddressFormValue]=useState({
        address:'',
        city:'',
        state:'',
        country:'',
        pincode:'',
        userId:'',
    })
    const[isaddress,setIsAddress]=useState(false)
    const[docId,setDocId]=useState(null)
    const[isUpdated,setisUpdated]=useState(false)

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
              setSession(user)
            }
            else{
              setSession(false)
              navigate('/login')
            }
        })
    },[])
    
        
    useEffect(()=>{
        const req=async()=>{
            if(session){
                setFormValue({
              ...formvalue,
              fullname:session.displayname,
              mobile:(session.phoneNumber? session.phoneNumber:'')
             })
             setAddressFormValue({
              ...addressFormValue,
              userId: session.uid,
             })
  
             //fetching address
             const col=collection(db,'addresses')
             const q=query(col,where('userId' , '==' ,session.uid))
             const snapshot= await getDocs(q) 
             setIsAddress(!snapshot.empty)
             snapshot.forEach((doc)=>{
                  setDocId(doc.id)
                  const address= doc.data()
                  setAddressFormValue({
                    ...addressFormValue,
                    ...address,
                  })
             })
          }
        }
        req()  
    },[session,isUpdated])

   
    const handleFormValue=(e)=>{
          e.preventDefault()
          const input=e.target
          const name=input.name
        const value = input.value
        setFormValue({
            ...formvalue,
            [name]:value
        })
         }

         const setProfilePicture=(e)=>{
            const input=e.target
            const file= input.files[0]
            
         }

         const saveProfileInfo=async(e)=>{
          e.preventDefault()
          await updateProfile(auth.currentUser, {
            displayName: formvalue.fullname,
            phoneNumber: formvalue.mobile,
        })
        //   console.log(formvalue)

         }

         const setAddress=async(e)=>{
            try{
            e.preventDefault()
             const d =await addDoc(collection(db,'addresses'),addressFormValue)        
             setIsAddress(true)
             setisUpdated(!isUpdated)
             new Swal({
                icon:'success',
                title:'Address Updated'
            })
              }
              catch(err){
               
              }
         }
         const updateAddress=async(e)=>{
            try{
            e.preventDefault()
            const ref= doc(db,'addresses',docId)
            await updateDoc(ref,addressFormValue)
            
            new Swal({
                icon:'success',
                title:'Address Updated'
            })
              }
              catch(err){
                new Swal({
                    icon:'failed',
                    title:'Address notUpdated'
                })
              }
         }

         const handleAddressFormValue=(e)=>{
            const input=e.target
            const name=input.name 
            const value= input.value
            setAddressFormValue({
                ...addressFormValue,
                 [name]:value,
            })
         }

    if(session===null) return(
        <div className=" bg-gray-100 h-full fixed top-0 left-0 flex justify-center items-center">
        <span className="relative flex h-6 w-6">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
     </div>
    )

    return(
        <Layout>
        <div className='mx-auto my-16 shadow-lg rounded-md p-8 md:w-7/12 border bg-slate-400'>
            <div className='flex gap-3'>
                <i className="ri-user-fill text-3xl"></i>
                <h1 className='text--3xl font-bold'>Profile</h1>
            </div>
            <hr className='my-6'/>
             <div className=' w-24 h-24 mx-auto relative mb-8'>
             <img src='/Image/profile.jpg' className='w-24 h-24 rounded-full '/>
             <input type='file' accept='Image/*' className=' opacity-0 w-full h-full absolute top-0 left-0' 
                onChange={setProfilePicture}
               />
             <hr className='w-24 mx-auto mt-2'/>
             </div>
             
            <form onSubmit={saveProfileInfo}
            className='grid grid-cols-2 gap-6' >
                <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>Fullname</label>
                    <input onChange={handleFormValue}
                       className='p-2 rounded border border-gray-300'
                       name='fullname'
                       value={formvalue.fullname}
                       required
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>Email</label>
                    <input onChange={handleFormValue}
                      className='p-2 rounded border border-gray-300'
                       name='email'
                       type='email'
                       value={session.email}
                       required
                       readOnly
                       disabled
                    />
                </div>

                <div
                    className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>Mobile</label>
                    <input onChange={handleFormValue}
                       className='p-2 rounded border border-gray-300'
                       name='mobile'
                       type='number'
                       value={formvalue.mobile}
                       required
                    />
                </div>
                <div>

                </div>

                {/* <div 
                    className='flex flex-col gap-2 col-span-2'>
                    <label className='text-lg font-semibold'>Area/Street/Vill</label>
                    <input onChange={handleFormValue}
                       className='p-2 rounded border border-gray-300'
                       name='address'
                       type='text'
                       value={formvalue.address}
                       required
                    />
                </div> */}

                {/* <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>City</label>
                    <input onChange={handleFormValue}
                        className='p-2 rounded border border-gray-300'
                       name='city'
                       type='text'
                       value={formvalue.city}
                       required
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>State</label>
                    <input onChange={handleFormValue}
                       className='p-2 rounded border border-gray-300'
                       name='state'
                       type='text'
                       value={formvalue.state}
                       required
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>Country</label>
                    <input onChange={handleFormValue}
                       className='p-2 rounded border border-gray-300'
                       name='country'
                       type='text'
                       value={formvalue.country}
                       required
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>Pincode</label>
                    <input onChange={handleFormValue}
                       className='p-2 rounded border border-gray-300'
                       name='pincode'
                       type='number'
                       value={formvalue.pincode}
                       required
                    />
                </div> */}
                <button className='px-8 py-2 bg-rose-600 text-white rounded w-fit hover:bg-green-400'>
                <i class="ri-save-line mr-2"></i>
                    Save
                </button>
            </form>
        </div>

        <div className='mx-auto my-16 shadow-lg rounded-md p-8 md:w-7/12 border bg-slate-400'>
            <div className='flex gap-3'>
            <i className="ri-link-unlink-m text-4xl"></i>
                <h1 className='text--3xl font-bold'>Delivery Address</h1>
            </div>
            <hr className='my-6'/>
             {/* <div className=' w-24 h-24 mx-auto relative mb-8'>
             <img src='/Image/profile.jpg' className='w-24 h-24 rounded-full '/>
             <input type='file' accept='Image/*' className=' opacity-0 w-full h-full absolute top-0 left-0' 
                onChange={setProfilePicture}
               />
             <hr className='w-24 mx-auto mt-2'/>
             </div> */}
             
            <form onSubmit={isaddress?updateAddress:setAddress}
            className='grid grid-cols-2 gap-6' >

                <div 
                    className='flex flex-col gap-2 col-span-2'>
                    <label className='text-lg font-semibold'>Area/Street/Vill</label>
                    <input onChange={handleAddressFormValue}
                       className='p-2 rounded border border-gray-300'
                       name='address'
                       type='text'
                       value={addressFormValue.address}
                       required
                    />
                </div>

                 <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>City</label>
                    <input onChange={handleAddressFormValue}
                        className='p-2 rounded border border-gray-300'
                       name='city'
                       type='text'
                       value={addressFormValue.city}
                       required
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>State</label>
                    <input onChange={handleAddressFormValue}
                       className='p-2 rounded border border-gray-300'
                       name='state'
                       type='text'
                       value={addressFormValue.state}
                       required
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>Country</label>
                    <input onChange={handleAddressFormValue}
                       className='p-2 rounded border border-gray-300'
                       name='country'
                       type='text'
                       value={addressFormValue.country}
                       required
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>Pincode</label>
                    <input onChange={handleAddressFormValue}
                       className='p-2 rounded border border-gray-300'
                       name='pincode'
                       type='number'
                      value={addressFormValue.pincode}
                       required
                    />
                </div>
                {
                    isaddress?<button className='px-8 py-2 bg-rose-600 text-white rounded w-fit hover:bg-green-400'>
                    <i class="ri-save-line mr-2"></i>
                        Save
                    </button>
                    :
                    <button className='px-8 py-2 bg-rose-600 text-white rounded w-fit hover:bg-green-400'>
                    <i class="ri-save-line mr-2"></i>
                        Submit
                    </button>
                }
                

                
            </form>
            <div></div>
        </div>
        </Layout>
    )
}
export default Profile