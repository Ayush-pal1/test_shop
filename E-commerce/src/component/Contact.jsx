import Layout from './Layout'
const Contact=()=>{
    return(
        <Layout>
        <div>
        <header className='md:w-6/12 mx-auto md:my-16 shadow-lg bg-white border rounded'>
          <img src='/Image/contact.jpeg' className='w-full'/>
          <div className='p-8'>
          <form className='space-y-6'>

          <div className='flex flex-col'>
                    <label className='font-semibold text-lg mb-1'>Your Name:</label>
                    <input 
                    required
                    type='text'
                    name='Fullname'
                    placeholder='Ayush'
                    className='p-3 border border-gray-300 rounded'
                    />
                </div>
                <div className='flex flex-col'>
                    <label className='font-semibold text-lg mb-1'>Email:</label>
                    <input 
                    required
                    type='email'
                    name='email'
                    placeholder='Ayush1@gmail.com'
                    className='p-3 border border-gray-300 rounded'
                    />
                </div>

                <div className='flex flex-col'>
                    <label className='font-semibold text-lg mb-1'>Message:</label>
                    <textarea 
                    required
                    name='message'
                    placeholder='Enter your message'
                    className='p-3 border border-gray-300 rounded'
                    />
                </div>

                <button  className='py-3 px-8 rounded bg-blue-600 text-white font-semibold hover:bg-rose-600'>Get Quote </button>
                </form>
          </div>
        </header>
        </div>
        </Layout>
    )
}
export default Contact