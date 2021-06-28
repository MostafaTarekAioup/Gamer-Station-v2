import React ,{useState} from 'react'
import {useGlopalContext} from '../Context'
import { Link } from "react-router-dom";
import { FaHeart  , FaSearch , FaAngleLeft , FaCheck , FaCalendarPlus} from "react-icons/fa";

const SingleCard = ({background_image , id , name  , metacritic } ) => {
const {lastGame , handleFavorits , favorits , handleWantToplay , handlePlayed , played  , wantToPlay } = useGlopalContext()
const [isHover , setIsHover] = useState(false)
const [isFavorits , setIsFavorits] = useState(false)
const [isPlayed , setIsPlayed] = useState(false)
const [isWantToPlay , setIsWantToPlay] = useState(false)

const handleFavoritsIcon=()=>{
  let findGame = favorits.find((favGame)=> favGame.id === id)
  if(findGame){
    setIsFavorits(true)
  }else{
    setIsFavorits(false)
  }
}
const handlePlayedIcon=()=>{
  let findGame = played.find((favGame)=> favGame.id === id)
  if(findGame){
    setIsPlayed(true)
  }else{
    setIsPlayed(false)
  }
}
const handleWantToPlayIcon=()=>{
  let findGame = wantToPlay.find((favGame)=> favGame.id === id)
  if(findGame){
    setIsWantToPlay(true)
  }else{
    setIsWantToPlay(false)
  }
}

 return<div  className="game-card" key={id} onMouseEnter={()=> {setIsHover(true) ; handleFavoritsIcon() ; handlePlayedIcon() ; handleWantToPlayIcon() }} onMouseLeave={()=> setIsHover(false)} 
 onClick={()=>{setIsHover(true) ;
   handleFavoritsIcon() ; 
   handlePlayedIcon() ; 
   handleWantToPlayIcon()
   }} 
   onBlur={()=>setIsHover(false)}>
        <div className="game-image">
          <img src={background_image} alt={name} />
          <div className={`${isHover? 'game-details-icon game-details-icon-active ' : 'game-details-icon'}`}>
            <Link to={`/game-details/${id}`}>
              <FaAngleLeft className='streatch-up-left'/>
              <FaAngleLeft className='streatch-up-right'/>
              <FaAngleLeft className='streatch-down-left'/>
              <FaAngleLeft className='streatch-down-right'/>
              <FaSearch className='search-icon'/>
              </Link>
            </div>
        </div>
        <div className="details">
          <h3>{name}</h3>
        </div>
        <div className={`${isHover? 'favorit fav-active' : 'favorit'}`}>
         <div className="icons">

          <FaHeart title='Favorits' onClick={()=>{ handleFavorits(background_image , id , name  , metacritic) ; setIsFavorits(!isFavorits)}} className={`${isFavorits ? 'fav-icon fav-icon-active':'fav-icon'}`}/>

          <FaCheck title='Played' onClick={()=>{ handlePlayed(background_image , id , name  , metacritic) ; setIsPlayed(!isPlayed)}} className={`${isPlayed ? 'fav-icon fav-icon-active':'fav-icon'}`}/>

          <FaCalendarPlus title='Want to play' onClick={()=>{ handleWantToplay(background_image , id , name  , metacritic) ; setIsWantToPlay(!isWantToPlay)}} className={`${isWantToPlay ? 'fav-icon fav-icon-active':'fav-icon'}`}/>
         </div>
        </div>
        <div className="rate-details">
            <h3 className='game-rate'>{metacritic}</h3>
          </div>
      </div>
}

export default SingleCard
