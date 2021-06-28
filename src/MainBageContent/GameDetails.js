import React , {useState , useEffect } from 'react'
import { useParams} from "react-router-dom";
import ReactPlayer from 'react-player'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaAngleUp , FaAngleDown ,   FaExternalLinkAlt } from "react-icons/fa";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {Navigation , Thumbs } from 'swiper/core';
import './gameDetails.css'
import Loading from '../LoadingScreen/Loading'
SwiperCore.use([Navigation , Thumbs]);


const GameDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
 const [gameData , setGameData] = useState([])
 const [screenShots , setScreenShots] = useState([])
 const [isGameReady , setIsGameReady] = useState(false)
 const {id} =useParams()
 const [gameId ] = useState(id)
 const url = `https://api.rawg.io/api/games/${gameId}?key=2db624ca678b4810b40b0979d71a20f7`
 const screenShotsUrl = `https://api.rawg.io/api/games/${id}/screenshots?key=2db624ca678b4810b40b0979d71a20f7`
 const trailersUrl = `https://api.rawg.io/api/games/${id}/movies?key=2db624ca678b4810b40b0979d71a20f7`
 const [gameDetails , setGameDtails] = useState(false)
 const [trailers , setTrailers] = useState([])
 const [istoTop , setIsTOTop] = useState(false)
 const [showRequermints , setShowREquermints] = useState(false)
const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // scrool to top
 useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsTOTop(true);
      } else {
        setIsTOTop(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // fetch single game details
 const fetchSingleGame = async ()=>{
  const response = await fetch(url)
  const tempGameData = await response.json()
  setGameData(tempGameData)
  setIsGameReady(true)
 }
 // fetch game screen shots
 const fetchScreenShots = async ()=>{
  const response = await fetch(screenShotsUrl)
  const tempGameData = await response.json()
  setScreenShots(tempGameData)
  setIsGameReady(true)
 }
 // fetch game trailers
 const fetchTrailers = async ()=>{
  const response = await fetch(trailersUrl)
  const tempGameData = await response.json()
  setTrailers(tempGameData)
  setIsGameReady(true)
 }
 useEffect(()=>{
  fetchSingleGame()
  fetchScreenShots()
  fetchTrailers()
 },[])
 const {name , background_image , description ,platforms , metacritic , metacritic_url ,tags , released , genres , ratings} = gameData
 if(!isGameReady || tags === undefined || screenShots.results === undefined || platforms === undefined || trailers.results === undefined){
  return <Loading/>
 }
let gameRrquerimentsData = platforms.find((platReu)=> platReu.platform.name === 'PC' )


 return <div className="game-info-container">

   {/* top Up button  */}
    <div onClick={scrollToTop} className={`${istoTop ?'to-top-page to-top-page-active'  :  'to-top-page'}`}>
   <FaAngleUp/>
    </div>
 {/* End top Up button  */}

 {/* Header  */}
<div className="game-header-container"style={{backgroundImage: `url(${background_image})`}}>
<div className="game-info-header">
 <div className="game-header-details">
   <h1>{name}</h1>
  <h2>{!metacritic ? 'N/A' : metacritic}</h2>
  <div className="apout-game container  ">
    <div>{gameDetails? <div dangerouslySetInnerHTML={{ __html: description }} /> : <div dangerouslySetInnerHTML={{ __html: description.substring(0, 300) }} />}<button className="show-btn" onClick={()=> setGameDtails(!gameDetails)}>{gameDetails? 'show Less' : 'show more'}</button></div>
  </div>
  <div className="more-gameInfo container">
    <h3>Ratings</h3>
    <div className="brogress-bar">
     {
       ratings.map((rate)=>{
         const {id , percent , title , count} = rate;
         return<div data-after-content = {`${title === 'meh' ? 'boring': `${title === 'skip' ? 'bad' : title}`} : ${count}`} key={id} style={{width: `${percent}%`}} title={`${title} / ${count}`} className={`${title} rate-after`}>

         </div>
       })
     }
    </div>
  </div>


 </div>
</div>
</div>
{/* End Header  */}

{/* Gallary  */}
<div className="game-Gallary">
   <div className="screen-shots">
      <Swiper style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}} loop={true} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2">
        {
        trailers.results.length === 0 ? '' : 
        <SwiperSlide key={trailers.results[0].id} className="gameTrailer">
            <ReactPlayer className='trailer-video' width='100%' height='100%' playing={true} volume={null} muted={true}  controls={true} url={trailers.results[0].data.max}/>
        </SwiperSlide>
      }
      {
       screenShots.results.map((screen)=>{
        const {id , image} = screen
        return<SwiperSlide key={id}>
         <img src={image} alt="." />
        </SwiperSlide>
        
       })
      }
      </Swiper>
      <Swiper onSwiper={setThumbsSwiper} loop={true} spaceBetween={10} slidesPerView={6} freeMode={true} watchSlidesVisibility={true} watchSlidesProgress={true} className="mySwiper">
        {
        trailers.results.length === 0 ? '': 
        <SwiperSlide key={trailers.results[0].id} className="gameTrailer">
            <ReactPlayer className='trailer-video' height='100%'  volume={null} muted={true} url={trailers.results[0].data.max}/>
        </SwiperSlide>
      }
        {
            screenShots.results.map((screen)=>{
        const {id , image} = screen
        return<SwiperSlide key={id}>
         <img src={image} alt="." />
        </SwiperSlide>
        
       })
        }
      </Swiper>
     </div>
</div>
{/* End Gallary  */}

{/* more game details */}
<article className="game-specific-details-container">
  <div className="game-img">
    <img src={background_image} alt={name} />
  </div>
  <div className="Specific-details">
      <p>
        Name : <span>{name}</span>
      </p>
      <p>
        Released : <span>{released}</span>
      </p>
      <p>
        Rate : <span>{metacritic}</span>
      </p>
      <p>
        Review : <span>{metacritic_url ? <a href={metacritic_url} target = '_metacritic'>Metacritic <FaExternalLinkAlt/></a> : 'No Review'}</span>
      </p>
      <p >Platforms : {
      platforms.map((plat)=> {
       let platformName = plat.platform.name
       let platformId = plat.platform.id
       return<span key={platformId} className='genre-tag'>{platformName}</span>
      })
      }</p>
      <p >Genres : {
      genres.map((genre)=> {
       const {name , id} = genre
       return<span key={id} className='genre-tag'>{name}</span>
      })
      }</p>
      <br />
      <hr />
      <div className="requermints">
        <h4 onClick={()=>setShowREquermints(!showRequermints)}>requirments {showRequermints ? <FaAngleUp/>: <FaAngleDown/>}</h4>
        <p className={`${showRequermints ? 'game-requermints-active' : 'game-requermints' }`}>
          {
        gameRrquerimentsData?
        <div className="reqirments">
            <div className="minimum">
             {
              gameRrquerimentsData.requirements.minimum? <p> <span>Minimum : </span> {gameRrquerimentsData.requirements.minimum}</p> : <p> <span>Minimum : </span>Not Available </p>
            }
            </div>
            <hr />
            {
              gameRrquerimentsData.requirements.recommended? <p> <span>Recommended : </span> {gameRrquerimentsData.requirements.recommended}</p> : <p> <span>Recommended :</span>  Not Available </p>
            }
          </div> :'Not Available To pc'
      }
        </p>
      </div>
  </div>
</article>

{/* End more game details */}
</div>


}

export default GameDetails
