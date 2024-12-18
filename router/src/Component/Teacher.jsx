import Nav from './Nav/index'
import Footer from './Footer'
import 'remixicon/fonts/remixicon.css'

const teacher = [
    {
    image :'./image/a.jpg.jpg',
    Name:'Tyush',
    },
    {
        image :'./image/d.jpg.jpg',
        Name:'Pradhan',
        },
   {
            image :'./image/b.jpg.jpg',
            Name:'Aahu',
            },
     {
                image :'./image/c.jpg.jpg',
                Name:'BKL',
                },


]

const Teacher=()=>{
  return (
    <div>
    <Nav/>
    <div>
        <header style={{
            height:200,
           backgroundColor: '#0093E9',
           backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
           display:'flex',
           justifyContent:'center',
           alignItems:'center',

        }}>
            <h1 style={{
                fontSize:50,
                color:'white',
            }}>
                <i className="ri-presentation-line" style={{marginRight:16,}}></i>
                Teacher</h1>
        </header>
        <section style={{
            width:'80%',
            // height:2300, 
            // background:'red',
            margin:'0 auto',
            padding:'80px 0',
            display:'flex',
            columnGap: '1%',
            rowGap:48,
            flexWrap:'wrap',

        }}>
            {
                teacher.map(function(items,index){
                   return (
                    <div style={{width:'24%' , }} key={index}>
                    <img src={items.image} width={'100%'} />
                    <h1>{items.Name}</h1>
                    <p>IET(B.TECH)</p>
                    </div>
                   )
                })
            }
        
        
        </section>
    </div>
    <Footer/>
    </div>
  )
}
export default Teacher