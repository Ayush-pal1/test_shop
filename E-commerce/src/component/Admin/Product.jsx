import { useState ,useEffect} from 'react'
import Layout from './Layout'
import firebaseAppConfig from '../../Util/Firebase-config'
import { getFirestore,addDoc,collection,getDocs } from 'firebase/firestore'
import Swal from 'sweetalert2'
const db=getFirestore(firebaseAppConfig)
const Product=()=>{
  const [products,setProducts] =useState([])
  const model={
    title:'',
    description:'',
    price:'',
    discount:'',
  }
  const[productForm,setProductForm]=useState(model)
  const[productModel,setProductModel]=useState(false)
  
   useEffect(()=>{
        const req=async()=>{
        const snapshot=await getDocs(collection(db,'products'))
        const temp=[]
        snapshot.forEach((doc)=>{
          const allProduct=doc.data()
          temp.push(allProduct)
        })
        setProducts(temp)
        }
        req()
   },[])
   const handleProductForm=(e)=>{
        const input=e.target
        const name=input.name
        const value=input.value
        setProductForm({
          ...productForm,
          [name]:value
        })
      }

      const createproduct=async(e)=>{
        try{
           e.preventDefault()
           await addDoc(collection(db,'products'),productForm)
           setProductForm(model)
           setProductModel(false)
           new Swal({
            icon:'success',
            title:'Products added',
           
          })
        }
        catch(err){
          new Swal({
            icon:'error',
            title:'Failed',
            text:err.messsage
          })
        }
           
      }
  
    return(
      <Layout>
        <div>
            <div className='flex justify-between items-center'>
            <h1 className='text-xl font-semibold mb-4'>Products</h1>
            <button onClick={()=>{setProductModel(true)}}
            className='bg-indigo-600 text-white rounded py-2 px-4'>
            <i className="ri-apps-2-add-fill mr-2"></i>
              New Product
            </button>
            </div>
            <div className='grid md:grid-cols-4 gap-8 mt-8'>
              {
               products.map((item,index)=>(
                <div key={index} className='bg-white rounded-md shadow-lg'> 
                  <img src='/Images/pt.jpg' className='rounded-t-md h-[270px] object-cover'/>
                  <div className='p-4'>
                     <h1 className='font-semibold text-lg capitalize'>{item.title}</h1>
                      <div className='flex gap-2 mt-1'>
                      <label>₹{item.price-(item.price*item.discount)/100}</label>
                      <del className='font-semibold'>₹{item.price}</del>
                      <label className='text-gray-600'>({item.discount}%off)</label>
                      </div>
                  </div>
                </div>
               ))
              }
            </div>
            {
              productModel &&
              <div  className='animate__animated animate__fadeIn bg-black bg-opacity-80 absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                <div className='animate__animated animate__zoomIn animate__faster bg-white w-6/12 py-5 px-6 rounded-md border border-1 relative'>
                  <button className='absolute top-2 right-3'onClick={()=>{setProductModel(false)}} >
                  <i className="ri-close-circle-line"></i>
                  </button>
                  <h1 className='text-lg font-semibold'>New Product</h1>
                  <form className='grid grid-cols-2 gap-6 mt-4' onSubmit={createproduct}>
                    <input onChange={handleProductForm}
                          name='title'
                          placeholder='Enter Product title here'
                          className='p-2 border border-gray-300 rounded col-span-2'
                          required
                          value={productForm.title}
                    />

                      <input onChange={handleProductForm}
                          type='number'
                          name='price'
                          placeholder='Price'
                          className='p-2 border border-gray-300 rounded'
                          required
                          value={productForm.price}
                    />

                      <input onChange={handleProductForm}
                        type='number'
                          name='discount'
                          placeholder='Discount'
                          className='p-2 border border-gray-300 rounded'
                          required
                          value={productForm.discount}
                    />

                      <textarea onChange={handleProductForm}
                          name='description'
                          placeholder=' Description'
                          className='p-2 border border-gray-300 rounded col-span-2'
                          rows={8}
                          required 
                          value={productForm.description}
                      />
                      <div>
                          <button className='bg-indigo-600 text-white rounded px-4 py-2'>Submit</button>
                      </div>
                      
                  </form>
                </div>
              </div>
            } 
        </div>
      </Layout>
    )
}
export default Product


