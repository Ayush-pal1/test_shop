 import Nav from './Nav'
import Footer from './Footer'

const Home=()=>{
    // const holiday = [
    //     {
    //         title:'Summer Vacation',
    //         duration:'one month',
    //         date:'10-11-2024'
    //     },
    //     {
    //         title:'Summer Vacation',
    //         duration:'one month',
    //         date:'10-11-2024'
    //     },
    //     {
    //         title:'Summer Vacation',
    //         duration:'one month',
    //         date:'10-11-2024'
    //     },
    //     {
    //         title:'Summer Vacation',
    //         duration:'one month',
    //         date:'10-11-2024'
    //     }
    // ]
    return(
        <div>
        <Nav/>
        <h1>Hii home</h1>
        <div>
            <header className='grid grid-cols-2 p-24 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
                <div>
                    <img src='./Image/Teaching.jpg'
                    className='w-3/4 rounded'
                    />
                </div>
                <div className='flex flex-col gap- justify-center'>
                    <h1 className='text-6xl font-bold text-white'>Say Hello!</h1>
                    <p className='text-2xl font-semibold text-black'>Enjoy complete digital learning platform</p>
                    <div className='flex gap-6'>
                        <button className='bg-red-600 hover:bg-sky-700 text-lime-500 px-9 py-3 rounded-md text-lg'>Learn more</button>
                        <button className='border border-black font-semibold text-black px-9 py-3 rounded-md text-lg'>Watch video</button>
                    </div>
                </div>
            </header>
            <div className='p-24'>
                <h1 className=' text-center text-4xl font-bold'>Benifits & Advantages</h1>
                <p className='text-gray-600 text-center mt-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quo consequuntur architecto, eos cumque officia commodi labore numquam culpa vitae fugit dignissimos facilis quis possimus facere necessitatibus! In, perspiciatis qui.</p>
                
                <div className='w-11/12 mx-auto mt-12 grid grid-cols-3 gap-8'>
                   <div className='shadow-lg border rounded-md p-4 text-center'>
                   <i className="ri-artboard-line text-6xl font-semibold mb-2"></i>
                    <h1 className='text-2xl font-semibold '>Great Faculty</h1>
                    <p className='text-grey-600 '>Lorwenm rwnkwn fejngwgkn wfen?</p>
                   </div>

                   <div className='shadow-lg border rounded-md p-4 text-center'>
                   <i className="ri-edit-box-fill text-6xl font-semibold mb-2"></i>                    <h1 className='text-2xl font-semibold '>Latest cirriculum</h1>
                    <p className='text-grey-600 '>Lorwenm rwnkwn fejngwgkn wfen?</p>
                   </div>

                   <div className='shadow-lg border rounded-md p-4 text-center'>
                   <i class="ri-tree-fill text-6xl font-semibold mb-2"></i>                    <h1 className='text-2xl font-semibold '>Green Environment</h1>
                    <p className='text-grey-600 '>Lorwenm rwnkwn fejngwgkn wfen?</p>
                   </div>
                </div>
                <div className='p-24 mt-7 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                  <h1 className=' text-center text-4xl font-bold'>Campus Portofolio</h1>
                  <p className='text-white text-center mt-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quo consequuntur architecto, eos cumque officia commodi labore numquam culpa vitae fugit dignissimos facilis quis possimus facere necessitatibus! In, perspiciatis qui.</p>
                  </div>
            </div>
        </div>
            {/* <table width={'100%'}>
                <thead>
                    <tr style={{background:'#ddd',padding:16}}>
                        <th style={{padding:16,}}>S/No</th>
                        <th>Date</th>
                        <th>Duration</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        holiday.map((item , index)=>{
                            return(
                          <tr style={{textAlign:'center'}}>
                            <td style={{padding:15,borderBottom:'1px solid green'}}>{index+1}</td>
                            <td style={{padding:15,borderBottom:'1px solid green'}}>{item.date}</td>
                            <td style={{padding:15,borderBottom:'1px solid green'}}>{item.duration}</td>
                            <td style={{padding:15,borderBottom:'1px solid green'}} >{item.title}</td>
                          </tr>
                            )
                        })
                    }
                </tbody>
            </table> */}
        
        <Footer/>
        </div>
    )
}
export default Home


