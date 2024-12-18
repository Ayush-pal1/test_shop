import { useState ,useEffect, useTransition} from "react"
import { Link ,useNavigate} from "react-router-dom"
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import firebaseAppConfig from "../Util/Firebase-config";
const auth=getAuth(firebaseAppConfig)
const Layout=({children})=>{
    const[open ,setOpen]=useState(false)
    const navigate=useNavigate()
    const[session ,setSession]=useState(null)
    const[accountMenu,setAccountMenu]=useState(false)
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
    console.log(session)
    const menus= [
        {
            label:'Home',
            href:'/'
        },
        {
            label:'products',
            href:'/products'
        },
        {
            label:'Category',
            href:'/category'
        },
        {
            label:'Contact-us',
            href:'/contact-us'
        }
    ]

       const mobileLink=(href)=>{
         navigate(href)
         setOpen(false)
       }

    return(
    <div>
       <nav className=" sticky top-0 left-0 shadow-lg bg-white z-50">
          <div className=" w-10/12 mx-auto flex items-center justify-between">
           <img src="/Image/logo.png"
           className="w-[100px]"/>

           <button onClick={()=>{setOpen(!open)}}
           className="md:hidden">
           <i className="ri-menu-add-fill font-3xl"></i>
           </button>
           <ul className="md:flex gap-6 items-center hidden">
             {
                menus.map((item,index)=>(
                  <li key={index}> 
                   <Link className="block py-8 text-center hover:bg-blue-600 w-[100px] hover:text-white"
                   to={item.href}>
                   {item.label}
                   </Link>
                  </li>
                ))
             }
             {
              session ? <button className="relative" onClick={()=>setAccountMenu(!accountMenu)}> 
                <img src="/Image/Avt.avif" className="w-10 h-10 rounded-full"/>
                {
                  accountMenu &&  <div className="py-3 flex flex-col items-start  animate__animated animate__fadeIn w-[150px] absolute top-16 bg-white right-0 shadow-lg shadow-gry ">
                    <Link to='/profile' className="hover:bg-gray-300 w-full px-3 py-2 text-left">
                    <i className="ri-profile-line mr-2"></i>
                    My profile
                    </Link>

                    <Link to='/cart' className="hover:bg-gray-300 w-full px-3 py-2 text-left">
                    <i class="ri-shopping-cart-2-line mr-2"></i>
                    Cart
                    </Link>
                    <button onClick={()=>signOut(auth)}
                    className="hover:bg-gray-300 w-full px-3 py-2 text-left" >
                    <i class="ri-logout-box-r-line mr-2"></i>
                      Log out</button>
                  </div>
                }
               
              </button>: 
              <>
              <Link className="block py-8 text-center hover:bg-blue-600 w-[100px] hover:text-white"
              to='/login'
              >Login</Link>
 
              <Link className=" text-white bg-blue-600 block py-3 text-md rounded font-semibold px-10 text-center hover:bg-rose-600 hover:text-white"
              to='/signup'
              >Signup</Link>
              </>
             }
            
           </ul>
          </div>
       </nav>
        <div >
            {children}
        </div>
       <footer className="bg-orange-600 py-16 ">
         <div className="grid md:grid-cols-4 md:gap-0 gap-8 w-10/12 mx-auto ">
          

           <div>
            <h1 className="text-white font-semibold text-2xl mb-3">Website Link</h1>
            <ul className="space-y-2 text-slate-100">
                {
                menus.map((item,index)=>(
                    <li key={index}>
                        <Link to={item.href}>
                        {item.label}
                        </Link>
                    </li>
                ))
            }
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
            </ul>
           </div>

           <div>
            <h1 className="text-white font-semibold text-2xl mb-3">Follow us</h1>
            <ul className="space-y-2 text-slate-100">
            <li><Link to='/'>Facebook</Link></li>
            <li><Link to='/'>Youtube</Link></li>
            <li><Link to='/'>Twitter</Link></li>
            <li><Link to='/'>Linkdin</Link></li>
            <li><Link to='/'>Instagram</Link></li>
            </ul>
           </div>

           <div className="pr-8">
            <h1 className="text-white font-semibold text-2xl mb-3 ">Brand Detail</h1>
           <p className="text-slate-100 mb-6">Lorem ir sit amet consectetur adipisicing elit.eserue voluptatenesciunt est a impedit iusto aperiam inventore mollitia culpa velit arc ab.</p>
            <img src='/Image/logo.png'
            className="w-[100px]"
            />
           </div>

            <div>
            <h1 className="text-white font-semibold text-2xl mb-3">Contact Us</h1>
             <form className="space-y-6">
                <input required
                       name="fullname"
                       className="bg-white w-full rounded p-3"
                       placeholder="your name"
                />

                <input required
                       type="email"
                       name="email"
                       className="bg-white w-full rounded p-3"
                       placeholder="Enter your email"
                />
                <textarea required
                          name='message'
                          className="bg-white w-full rounded p-3"
                          placeholder="'Message"
                          rows={3}
                />
                <button className="bg-black text-white py-3 px-6">Submit</button>
             </form>
           </div>
          </div>
       </footer>

        {
            <aside style={{
                width:open?250:0,
                transition:'0.4s'
            }}
             className=" overflow-hidden md:hidden bg-slate-900 shadow-lg fixed top-0 left-0  h-full z-50 "
             >

              <div className="flex flex-col p-8 gap-6">
              {
              session ? <button className="relative" onClick={()=>setAccountMenu(!accountMenu)}> 
              <div className="flex items-center gap-3">
              <img src="/Image/Avt.avif" className="w-10 h-10 rounded-full"/>
              <p className="text-white">{session.displayName}</p>
              </div>
               
                {
                  accountMenu &&  <div className="py-3 flex flex-col items-start  animate__animated animate__fadeIn w-[150px] absolute top-16 bg-white right-0 shadow-lg shadow-gry ">
                    <Link to='/profile' className="hover:bg-gray-300 w-full px-3 py-2 text-left">
                    <i className="ri-profile-line mr-2"></i>
                    My profile
                    </Link>

                    <Link to='/cart' className="hover:bg-gray-300 w-full px-3 py-2 text-left">
                    <i class="ri-shopping-cart-2-line mr-2"></i>
                    Cart
                    </Link>
                    <button onClick={()=>signOut(auth)}
                    className="hover:bg-gray-300 w-full px-3 py-2 text-left" >
                    <i class="ri-logout-box-r-line mr-2"></i>
                      Log out</button>
                  </div>
                }
               
              </button>: 
              <>
              <Link className="block py-8 text-center hover:bg-blue-600 w-[100px] hover:text-white"
              to='/login'
              >Login</Link>
 
              <Link className=" text-white bg-blue-600 block py-3 text-md rounded font-semibold px-10 text-center hover:bg-rose-600 hover:text-white"
              to='/signup'
              >Signup</Link>
              </>
             }
            
                {
                    menus.map((item,index)=>(
                      <button onClick={()=>mobileLink(item.href)} key={index}
                      className="text-white"
                      >
                      {item.label}
                      </button>
                    ))
                }
              </div>
             </aside>
        }
       
    </div>
    )
}
export default Layout
