import React from 'react'
import './style.css'
import { FaAlignJustify  , FaGhost} from "react-icons/fa";
import {useGlopalContext} from '../../Context'
import { Link } from "react-router-dom";
const Navbar = () => {
 const {isSubmenuActive,setIsSubmenuActive ,favorits , played  , wantToPlay } = useGlopalContext()
 return (
 <div className="nav-container">
   <div className="container  nav-items">
    <div className="logo-container">
      <Link className='route-link' to='/'><h1 className='logo'><span className='mark game-logo'>Gamer <FaGhost className=' game-logo'/> Station</span></h1></Link>
     
    </div>
    <div className="nav-menu">
     <nav>
      <ul className='active'>
       <li><Link to='/'>Home</Link></li>
       <li><Link to='/discover'>Discover</Link></li>
       <li className='favorit-container'><Link to='/favorit'>Favorits {
          favorits.length===0 && played.length === 0 && wantToPlay.length === 0 ? '': <span className='fav-count'>{favorits.length + played.length + wantToPlay.length}</span>
        }</Link></li>
       <li><Link to='/apout'>About</Link></li>
      </ul>
      <div onClick={()=> setIsSubmenuActive(!isSubmenuActive) }  className="favorit-container menu-icon ">
        <FaAlignJustify/>
        {
          favorits.length===0 ? '': <span className='fav-count'>{favorits.length}</span>
        }
      </div>
     </nav>
     
    </div>
   </div>
 </div>
 )
}

export default Navbar
