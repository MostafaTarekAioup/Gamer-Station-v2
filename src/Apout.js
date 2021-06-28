import React from 'react'
import { FaGhost } from "react-icons/fa";
import { Link } from "react-router-dom";
import {  FaExternalLinkAlt , FaFacebook , FaGithub , FaLinkedin , FaInternetExplorer } from "react-icons/fa";
const Apout = () => {
 return (
  <div className='about-container'>
      <div className="about-content-container">
        <div className="about-content">
          <h1><span className='mark game-logo'>Gamer <FaGhost className=' game-logo'/> Station</span></h1>
           <p>Gamer Station Is a website based on <a href="https://rawg.io/" rel="noreferrer" target='_blank'>Rawg<FaExternalLinkAlt className='external-link'/></a> API <br />
           This website Designed and Developed by <span className='developer-name'>Mostafa Tarek</span>  A front End Web Developer <br/>
           <span className='developer-name'>Contact Me</span> <br />
            <a className='developer-contact' href="https://www.facebook.com/mostafatarekaioup/" title='Facebook' rel="noreferrer" target='Facebook'><FaFacebook/></a>
            <a className='developer-contact' href="https://github.com/MostafaTarekAioup" title='GitHub' rel="noreferrer" target='Github'><FaGithub/></a>
            <a className='developer-contact' href="https://www.linkedin.com/in/mostafa-tarek-050936193" title='LinkedIn' rel="noreferrer" target='LinkedIn'><FaLinkedin/></a>
            <a className='developer-contact' href="https://mostafa-tarek-portfolio.netlify.app/" title='Portfolio' rel="noreferrer" target='Portfolio'><FaInternetExplorer/></a>
           </p>
          <button className='btn discover-btn'><Link className='route-link' to='/'>Return Home</Link></button>
        </div>
      </div>
  </div>
 )
}

export default Apout
