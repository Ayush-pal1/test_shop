import { useState ,useEffect} from 'react';
import Layout from './Layout'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Swal from 'sweetalert2';
import { Navigation } from 'swiper/modules';
import firebaseAppConfig from '../Util/Firebase-config';
import { getFirestore,addDoc,collection } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth=getAuth(firebaseAppConfig)
const db=getFirestore(firebaseAppConfig)
const Home=()=>{
  const[Products ,setProducts]=useState([
    {
      title:'New Blue shirt men',
      price:1200,
      discount:15,
      thumbnail:'/products/a.jpg'
    },
    {
      title:'New Blue shirt men',
      price:1200,
      discount:15,
      thumbnail:'/products/b.jpg'
    },
    {
      title:'New Blue shirt men',
      price:1200,
      discount:15,
      thumbnail:'/products/c.jpg'
    },
    {
      title:'New Blue shirt men',
      price:1200,
      discount:18,
      thumbnail:'/products/d.jpg'
    },
    {
      title:'New Blue shirt men',
      price:1200,
      discount:45,
      thumbnail:'/products/e.jpg'
    },
    {
      title:'New Blue shirt men',
      price:1200,
      discount:15,
      thumbnail:'/products/f.jpg'
    },
    {
      title:'New Blue shirt men',
      price:1200,
      discount:15,
      thumbnail:'/products/h.jpg'
    },
    {
      title:'New Blue shirt men',
      price:1200,
      discount:15,
      thumbnail:'/products/i.jpg'
    },
    {
      title:'New Blue shirt men',
      price:1200,
      discount:15,
      thumbnail:'/products/j.jpg'
    },
    {
      title:'New Blue shirt men',
      price:1200,
      discount:15,
      thumbnail:'/products/k.jpg'
    },
    {
      title:'New Blue shirt men',
      price:1200,
      discount:15,
      thumbnail:'/products/l.jpg'
    },
  ])
   const[session,setSession]= useState(null)

    useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
        if(user){
           setSession(user)
        }
        else{
          setSession(null)
        }
      })
    },[])
     const addToCart=async(item)=>{
       try{
         item.userId=session.uid
          await addDoc(collection(db,'carts'),item)
          new Swal({
            icon:'success',
            title:'product added !',
          })
       }
       catch(err){
        new Swal({
          icon:'error',
          title:'Failed',
          text:err.message
        })
       }
    }
    return(
        <Layout>
       <div>
        <header > 
            <Swiper className='z-[-1]'
            slidesPerView={5}
            navigation={true} modules={[Navigation]} >
            <SwiperSlide>
              <img src='/Image/p4.jpeg' className='h-[400px]'/>  
            </SwiperSlide>
            <SwiperSlide> 
              <img src='/Image/p2.jpeg'className='h-[400px]' /> 
            </SwiperSlide>
            <SwiperSlide> <img src='/Image/p3.jpeg'className='h-[400px]'/> 
            </SwiperSlide>
            <SwiperSlide>
            <img src='/Image/p5.jpeg'className='h-[400px]'/> 
            </SwiperSlide>
            <SwiperSlide>
            <img src='/Image/p6.jpeg'className='h-[400px]'/> 
            </SwiperSlide>
            <SwiperSlide>
            <img src='/Image/p7.jpeg'className='h-[400px]'/> 
            </SwiperSlide>
            <SwiperSlide>
            <img src='/Image/p8.jpeg'className='h-[400px]'/> 
            </SwiperSlide>
            <SwiperSlide>
            <img src='/Image/p9.jpeg'className='h-[400px]'/> 
            </SwiperSlide>
            
            </Swiper>
        </header>
        <div className='md:p-16 p-8'>
          <h1 className='text-3xl font-semibold text-center'>Latest Product</h1>
          <p className='text-center mt-2 mb-16 mx-auto text-gray-600 w-7/12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro vel iusto sunt voluptatem iure! Quis totam et ex reprehenderit cumque at obcaecati dolorum? Sed velit vo</p>
          <hr className='border-green-600 border-2 mb-2'/>
           <div className='md:w-10/12 mx-auto grid md:grid-cols-4 gap-12'>
             {
              Products.map((item,index)=>(
                <div key={index} className='bg-white shadow-lg border'>
                   <img src={item.thumbnail}/>
                   <div className='p-4'>
                       <h1 className='text-lg font-semibold'>{item.title}</h1>
                       <div className='space-x-2'>
                        <label className='text-lg font-semibold'>{item.price-(item.price*item.discount)/100}</label>
                        <del>₹{item.price}</del>
                        <label className='text-gray-600'>({item.discount})</label>
                        </div>
                        <button className='bg-green-600 text-white rounded font-semibold w-full mt-4 '>Buy Now</button>
                        <button onClick={()=>addToCart(item)}
                        className='bg-rose-600 text-white rounded font-semibold md:w-full mt-2'>
                        <i className="ri-shopping-cart-fill mr-2"></i>
                            Add to Cart</button>
                    </div>
                </div>
              ))
             }
           </div>
        </div>
       </div>
       </Layout>
    )
}
export default Home