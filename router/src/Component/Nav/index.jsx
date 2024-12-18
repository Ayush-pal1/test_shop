import {Link} from 'react-router-dom'
import './nav.css'
const menus = [
     {
        label:'Home',
        link:'/',
     },
     {
        label:'Teacher',
        link:'/teacher',
     },
     {
        label:'Student',
        link:'/student',
     },
     {
        label:'Contact-us',
        link:'/contactus',
     },
]
const Nav=()=>{
    return (
        <nav className='sticky top-0 left-0 z-50'
        style={{
            backgroundColor:'white',
            display:'flex',
            justifyContent:'space-between',
            padding:'0 45px',
            boxShadow:'0 8px 8px 0 black'
        }}>
            <div style={{
                display:'flex',
                gap:'10px',

            }}>
           <img src="./Image/logo.png.avif"
              width={80} 
              height={80}/>
             <h1>School Project</h1>
            </div>   

            <ul style={{
                listStyle:'none',
                margin:0,
                padding:0,
                display:'flex',
                gap:20,
            }}>
                {
                    menus.map(function(item,index){
                        return (
                            <li key={index}>
                                <Link to={item.link}   style={{
                                textDecoration:'none',
                                color:'red',
                                
                            }}>{item.label}</Link></li>
                        )
                    })
                }
               
                 <li style={{
                    padding:'16px 22px',
                    display:'flex',
                    alignItems:'center',
                   
                }}>
                    <Link to="/Talk" className='talking' style={{
                    textDecoration:'none',
                    color:'red',
                    background:'dodgerblue',
                    padding:"16px 28px"
                }}>Talk to us</Link></li>
            </ul>   

        </nav>
    )
}
export default Nav