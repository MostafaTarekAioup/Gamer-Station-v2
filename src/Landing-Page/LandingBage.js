import React , {useState , useEffect} from 'react'
import './style.css'
import {imageData} from './imageData'
import { FaGhost } from "react-icons/fa";
import { Link } from "react-router-dom";
const LandingBage = () => {
 const [value , setValue] = useState(0)
useEffect(()=>{
let random = Math.floor(Math.random()*imageData.length)
setValue(random)
},[])
 return (
  <div className='Landing-bage-container'>
   <div className="landing-header" style={{backgroundImage: `url(${imageData[value]})`}}>
     <div className="header-content">
      <div className="header-details">
       <h1>Welcom to <span className='mark game-logo'>Gamer <FaGhost className=' game-logo'/> Station</span></h1>
       <p>Right place to find your Games from all Platforms</p>
       <p>Discover more than <span className='mark'>350000+ game</span> and there metacritic rate </p>
       <button className='btn discover-btn'><Link className='route-link' to='/discover'>Discover Games Now</Link></button>
      </div>
     </div>
   </div>
  </div>
 )
}

export default LandingBage
