import React from 'react'
import './style.css'
import { FaGhost } from "react-icons/fa";
const Loading = () => {
 return (
  <div className="loading-container">
    <h1><span className='mark loading-logo'>Gamer <FaGhost className=' loading-game-logo game-logo'/> Station</span></h1>
  </div>
 )
}

export default Loading
