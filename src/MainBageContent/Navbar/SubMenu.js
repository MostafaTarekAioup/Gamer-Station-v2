import React from 'react'
import {useGlopalContext} from '../../Context'
import { Link } from "react-router-dom";
const SubMenu = () => {
 const {isSubmenuActive ,setIsSubmenuActive , favorits} = useGlopalContext()
 return (
  <div className={`${isSubmenuActive? 'submenu-container active-submenu':'submenu-container'}`}>
      <ul className='submenu-links'>
       <li onClick={()=>setIsSubmenuActive(false)}><Link to='/'>Home</Link></li>
       <li  onClick={()=>setIsSubmenuActive(false)}><Link to='/discover'>Discover</Link></li>
       <li className='favorit-container-submenu'  onClick={()=>setIsSubmenuActive(false)}><Link to='/favorit'>Favorits</Link><span className='fav-count-submenu'>{favorits.length}</span></li>
       <li  onClick={()=>setIsSubmenuActive(false)}><Link to='/apout'>About</Link></li>
      </ul>
  </div>
 )
}

export default SubMenu
