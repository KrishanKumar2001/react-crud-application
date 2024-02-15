import React from 'react'
import { NavLink } from 'react-router-dom'
import LOGO from "../../components/images/logo.png"

const Logo = () => {
  return (
    <div className='logo'>
        
         <NavLink to="">
             {/* <img src={LOGO} alt="" height={20} width={100}/> */}
             <span>Test</span>
             <span>Yantra</span>
         </NavLink>
    </div>
  )
}

export default Logo