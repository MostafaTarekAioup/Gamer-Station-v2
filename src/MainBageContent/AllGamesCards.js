import React from 'react'
import {useGlopalContext} from '../Context'
import SingleCard from './SingleCard'
import { FaGhost } from "react-icons/fa";
const AllGamesCards = () => {
const {games , loadingGame } = useGlopalContext()
  return <>
   <main className='main-Content'>
     {
       loadingGame? <div className="loading-game-content">
         <h3>Loading</h3>
       </div>:''
     }
     <div className="App cards-container">
       {
        games.map((singleGame)=>{   
            return<SingleCard key={singleGame.id} {...singleGame}/>  
        })
      }
    </div>
    {
       loadingGame? <div className="loading-game-content">
         <FaGhost className=' loading-game-logo game-logo'/>
       </div>:<div className="loading-game-content">
          No More Games
       </div>
     }
     {/* {
       hasMore? <div className="loading-game-content">
         <FaGhost className=' loading-game-logo game-logo'/>
       </div>:''
     } */}
   </main>
  </>;
}

export default AllGamesCards
