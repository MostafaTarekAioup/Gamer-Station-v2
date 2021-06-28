import React , {useState , useEffect} from 'react'
import {useGlopalContext} from '../Context'
import SingleCard from './FavoritSingleCard'
import { FaHeart   , FaAngleUp , FaCheck , FaCalendarPlus} from "react-icons/fa";
import './style.css'
const Favorit = () => {
   const { favorits , played  , wantToPlay } = useGlopalContext()
   const [isfavorit , setIsFavorit] = useState(true)
   const [isplayed , isPlayed] = useState(false)
   const [isWantToPlay , setIsWantToPlay] = useState(false)
    const [istoTop , setIsTOTop] = useState(false)
  //  const reverseFavorits = [...targetfavorits].reverse()
  const falseAll = ()=>{
    setIsFavorit(false)
    isPlayed(false)
    setIsWantToPlay(false)
  }
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

 return <>
   <div className="favorits-content-container">
     {/* top Up button  */}
    <div onClick={scrollToTop} className={`${istoTop ?'to-top-page to-top-page-active'  :  'to-top-page'}`}>
   <FaAngleUp/>
    </div>
 {/* End top Up button  */}
    <main className='favorits-main-Content'>
      <div className="container">
           <br /><br /><br />
        <h1 className='favorits-Header'>Favorits</h1>
        <div className="favorits-buttons-container">
          <button onClick={()=> {falseAll() ; setIsFavorit(true)}}  className={`${isfavorit ? 'type-btn type-btn-active': 'type-btn'}`}>
            Favorits <span className='icon-type-cont'><FaHeart className='type-icon'/> <span>{favorits.length}</span></span></button>

          <button onClick={()=> {falseAll() ; isPlayed(true)}}  className={`${isplayed ? 'type-btn type-btn-active': 'type-btn'}`}>
            Played <span className='icon-type-cont'><FaCheck className='type-icon'/><span>{played.length}</span></span></button>

          <button onClick={()=> {falseAll() ; setIsWantToPlay(true)}}  className={`${isWantToPlay ? 'type-btn type-btn-active': 'type-btn'}`}>
            Want to Play <span className='icon-type-cont'><FaCalendarPlus className='type-icon'/><span>{wantToPlay.length}</span></span></button>

        </div>
     {
       favorits.length === 0 && played.length === 0 && wantToPlay.length === 0 ? <div className="empty-favorits">No favorits Games try add some games</div>
        : isfavorit ? <div className="App cards-container">
       {
        favorits.map((singleGame)=>{   
            return<SingleCard key={singleGame.id} {...singleGame}/>  
        })
       }
        </div> : isplayed ? <div className="App cards-container">
       {
        played.map((singleGame)=>{   
            return<SingleCard key={singleGame.id} {...singleGame}/>  
        })
       }
        </div> : isWantToPlay ? <div className="App cards-container">
       {
        wantToPlay.map((singleGame)=>{   
            return<SingleCard key={singleGame.id} {...singleGame}/>  
        })
       }
        </div> : 'No Favorit Games'
     }
      </div>
   </main>
   </div>
  </>;
}

export default Favorit
