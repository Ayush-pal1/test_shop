import { useState } from 'react'
import Layout from './Layout'
const Customer=()=>{
  const[customers,setCustomers] = useState([
    {
      customerName:"ayush",
      email:'palayush346@gmail.com',
      mobile:'+91 6839356578',
      date:'12-11-2024 10:15:14 am',
      address:'Jankipuram,IET Lucknow,226021,UP'
    },
    {
        customerName:"ayush",
        email:'palayush346@gmail.com',
        mobile:'+91 6839356578',
        date:'12-11-2024 10:15:14 am',
        address:'Jankipuram,IET Lucknow,226021,UP'
      },
      {
        customerName:"ayush",
        email:'palayush346@gmail.com',
        mobile:'+91 6839356578',
        date:'12-11-2024 10:15:14 am',
        address:'Jankipuram,IET Lucknow,226021,UP'
      },
      {
        customerName:"ayush",
        email:'palayush346@gmail.com',
        mobile:'+91 6839356578',
        date:'12-11-2024 10:15:14 am',
        address:'Jankipuram,IET Lucknow,226021,UP'
      },
      {
        customerName:"ayush",
        email:'palayush346@gmail.com',
        mobile:'+91 6839356578',
        date:'12-11-2024 10:15:14 am',
        address:'Jankipuram,IET Lucknow,226021,UP'
      },
      {
        customerName:"ayush",
        email:'palayush346@gmail.com',
        mobile:'+91 6839356578',
        date:'12-11-2024 10:15:14 am',
        address:'Jankipuram,IET Lucknow,226021,UP'
      },
      {
        customerName:"ayush",
        email:'palayush346@gmail.com',
        mobile:'+91 6839356578',
        date:'12-11-2024 10:15:14 am',
        address:'Jankipuram,IET Lucknow,226021,UP'
      },
    
  ])
    return(
     <Layout>
      <div>
        <h1 className='text-xl font-semibold'>Customers</h1>
        <div className='mt-6'>
          <table className='w-full'>
            <thead>
              <tr className=' text-left bg-rose-600 text-white'>
                <th className='px-4 py-3'>Customer`s Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Date</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
             {
              customers.map((item ,index)=>{
                 return(
                  <tr key={index}  style={{
                      background:(index+1)%2===0 ? ' rgb(168 162 158)':'white'
                  }}>
                    <td className='capitalize px-4 py-2'>
                        <div className='flex gap-3 items-center' >
                        <img src='/Image/Avt.avif' className="w-10 h-10 rounded-full" />
                        <div className='flex flex-col justify-center '>
                        <span className='font-semibold'>{item.customerName}</span>
                        <small>{item.date}</small>
                        </div>
                        </div>
                        </td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.date}</td>
                    <td>{item.address}</td>
                  </tr>
                 )
              })
            }
            </tbody>
          </table>
        </div>
      </div>
     </Layout>
    )
}
export default Customer