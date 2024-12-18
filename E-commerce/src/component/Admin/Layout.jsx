import { useState } from "react"
import { Link,} from "react-router-dom"
import {useLocation} from 'react-router-dom'
const Layout=({children})=>{
    const [size, setSize] = useState(280)
    const[mobileSize,setMobileSize] =useState(0)
    const[accountMenu ,setaccountMenu]=useState(false)
    const location = useLocation()   
    const menus=[
        {
            label:'Dashboard',
            icon:<i className="ri-dashboard-line mr-2"></i>,
            link:'/admin/dashboard'
        },
        {
            label:'Customers',
            icon:<i class="ri-user-settings-fill mr-2"></i>,
            link:'/admin/customer'
        }, 
        {
            label:'Products',
            icon:<i className="ri-shopping-cart-fill mr-2"></i>,
            link:'/admin/product'              
        },
        {
            label:'Order',
            icon:<i class="ri-order-play-line mr-2"></i>,
            link:'/admin/order'
        },
        {
            label:'Payments',
            icon:<i className="ri-money-dollar-box-fill mr-2"></i>,
            link:'/admin/payment'
        },
        {
            label:'Settings',
            icon:<i className="ri-settings-5-line mr-2"></i>,
            link:'/admin/setting'
        },
        
    ]
    return(
    <>
    {/*desktop*/}
    <div className="md:block hidden">
        <aside className=" overflow-hidden  fixed top-0 left-0 bg-indigo-600 h-full"
        style={{
            width:size,
            transition:'0.3s'
        }}
        >
            <div className=" flex flex-col">
                {
                    menus.map((item ,index)=>{
                       return(
                        <Link  key={index}
                        to= {item.link}
                        className="text-gray-50 text-[17.5px] px-4 py-3 hover:bg-red-500 hover:text-white"
                        style={{
                            background:(location.pathname===item.link)?'#E11D48':'transparent'
                        }}
                        >
                        {item.icon}
                         {item.label}
                       </Link>
                       )
                    })
                }
                <button className="text-left text-gray-50 text-[17.5px] px-4 py-3 hover:bg-red-500 hover:text-white">
                    <i className="ri-logout-circle-r-line mr-2"></i>
                    Logout
                </button>
            </div>
        </aside>
        <section className="min-h-screen bg-gray-100"
         style={{
            marginLeft:size,
            transition:'0.3s'
         }}
         >
            <nav className="bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0 ">
                <div className="flex gap-4 items-center">
                 <button className="bg-grey-50 hover:bg-indigo-600 hover:text-white w-4 h-8  "
                 onClick={()=>{setSize(size===280?0:280)}}
                 >
                    <i className="ri-menu-2-line text-xl"></i>
                 </button>
                <h1 className=' text-md font-semibold'>shopcode</h1>
                </div>
                <div>
                    <button className="relative">
                        <img 
                        src="/Image/Avt.avif" 
                        className="w-10 h-10 rounded-full" 
                        onClick={()=>{setaccountMenu(!accountMenu)}}/>
                        {
                           accountMenu && 
                           <div className="absolute top-18 right-0 bg-white w-[200px] p-6 shadow-lg ">
                           <div>
                               <h1 className="text-lg font-semibold">ayush</h1>
                               <p className="text-gray-500">eample@gmail.com</p>
                               <div className="h-px bg-grey-200 my-4"/>
                               <button>
                               <i class="ri-logout-box-r-line mr-2 "></i>
                                   Logout</button>
                           </div>
                       </div>
                        }
                    </button>
                </div>
            </nav>
           <div className="py-4 px-6">
            {children}
           </div>
        </section>
    </div>
     
     {/* mobile */}
<div className="md:hidden block">
        <aside className=" overflow-hidden z-50 fixed top-0 left-0 bg-indigo-600 h-full"
        style={{
            width:mobileSize,
            transition:'0.3s'
        }}
        >
            <div className=" flex flex-col">
                <button className="text-left mx-4 mt-4"
                onClick={()=>setMobileSize(mobileSize===0?280:0)}>
                <i class="ri-menu-2-fill text-white text-xl"></i>

                </button>
                {
                    menus.map((item ,index)=>{
                       return(
                        <Link  key={index}
                        to= {item.link}
                        className="text-gray-50 text-[17.5px] px-4 py-3 hover:bg-red-500 hover:text-white"
                        style={{
                            background:(location.pathname===item.link)?'#E11D48':'transparent'
                        }}
                        >
                        {item.icon}
                         {item.label}
                       </Link>
                       )
                    })
                }
            </div>
        </aside>
        <section className="h-screen grey-100"
       
         >
            <nav className="bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0 ">
                <div className="flex gap-4 items-center">
                 <button className="bg-grey-50 hover:bg-indigo-600 hover:text-white w-4 h-8  "
                 onClick={()=>{setMobileSize(mobileSize===0?280:0)}}
                 >
                    <i className="ri-menu-2-line text-xl"></i>
                 </button>
                <h1 className=' text-md font-semibold'>shopcode</h1>
                </div>
                <div>
                    <button className="relative">
                        <img 
                        src="/Image/Avt.avif" 
                        className="w-10 h-10 rounded-full" 
                        onClick={()=>{setaccountMenu(!accountMenu)}}/>
                        {
                           accountMenu && 
                           <div className="absolute top-18 right-0 bg-white w-[200px] p-6 shadow-lg ">
                           <div>
                               <h1 className="text-lg font-semibold">ayush</h1>
                               <p className="text-gray-500">eample@gmail.com</p>
                               <div className="h-px bg-grey-200 my-4"/>
                               <button>
                               <i class="ri-logout-box-r-line mr-2 "></i>
                                   Logout</button>
                           </div>
                       </div>
                        }
                    </button>
                </div>
            </nav>
           <div className="py-4 px-6">
            {children}
           </div>
        </section>
        
    </div>    
    </>
)
}
export default Layout