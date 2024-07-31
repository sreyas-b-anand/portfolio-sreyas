import React from 'react'
import { Link } from 'react-scroll'
function MiniNavbar() {
  return (
    
       <div className='w-screen h-16 flex items-center justify-center shadow-md  bg-[#222222]'>
         <nav className='flex items-center justify-center gap-4 hover:cursor-pointer'>
           <Link to={`about`} smooth={true}>About</Link>
           <Link to={`skills`} smooth={true} >Skills</Link>
         </nav>
       </div>
     )
     }
  

export default MiniNavbar
