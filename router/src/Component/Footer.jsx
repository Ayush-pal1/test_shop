import { Link } from "react-router-dom"

const Footer=()=>{
    return (
        <footer style={{
            background:'#03011c',
            padding:100,
            display:'flex',
            gap:'32px',
        }}>
            <div style={{width:'100%'}}>
                <h2 style={{color:'white',}}>I am Footer</h2>
                <p style={{color:'white',}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, blanditiis, suscipit explicabo reiciendis ipsa adipisci qui possimus, optio facilis nisi culpa. Veniam, quidem! Dolorem fugit ipsam.</p>
            </div>
            <div style={{width:'100%'}}>
                <h2 style={{color:'white',fontWeight:'500'}}>useful link </h2>
                <ul style={{
                  listStyle:'none',
                  display:'flex',
                  
                  flexDirection:'column',
                  margin:0,
                  padding:0,

                }}>
                    <li><a href="#" style={{color:'white',textDecoration:'none',}}>home</a></li>
                    <li><a href="#" style={{color:'white',textDecoration:'none',}}>contact us</a></li>
                    <li><a href="#" style={{color:'white',textDecoration:'none',}}>student</a></li>
                    <li><a href="#" style={{color:'white',textDecoration:'none',}}>Facaulty</a></li>
                </ul>
            </div>
            <div style={{width:'100%'}}>
                <h2 style={{color:'white',}}>Social link</h2>
                <ul style={{
                  listStyle:'none',
                  display:'flex',
                  flexDirection:'column',
                  margin:0,
                  padding:0,

                }}>
                    <li><Link to="#" style={{color:'white',textDecoration:'none',}}>home</Link></li>
                    <li><Link to="#" style={{color:'white',textDecoration:'none',}}>contact us</Link></li>
                    <li><Link to="#" style={{color:'white',textDecoration:'none',}}>student</Link></li>
                    <li><Link to="#" style={{color:'white',textDecoration:'none',}}>Facaulty</Link></li>
                </ul>
            </div>
            <div style={{width:'100%'}}>
                <h2 style={{color:'white',}}>Enquiry</h2>
                <form style={{
                    display:'flex',
                    flexDirection:'column',
                    gap:8,
                }}>
                    <input
                     name="Full Name"
                     placeholder="Full Name"
                     required
                     style={{
                        border:'none',
                        padding:12,
                        borderRadius:4,
                    }}/>
                    <input
                     name="email"
                     placeholder="example@gmail.com"
                     required
                     style={{
                        border:'none',
                        padding:12,
                        borderRadius:4,
                    }}/>
                    <textarea
                     name="message"
                     placeholder="mess"
                     required
                     style={{
                        border:'none',
                        padding:12,
                        borderRadius:4,
                    }}/>
                    <button style={{
                        background:'orange',
                        padding:'12px 24px',
                        width:'fit-content'
                    }}>submit</button>
                </form>
            </div>
        </footer>
    )
}
export default Footer