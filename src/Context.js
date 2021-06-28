import React ,{useEffect , useState , useContext , useRef , useCallback} from 'react'
import axios from 'axios'

const AppContext = React.createContext()
const AppProvider = ({children})=>{

  // get favorits data from Local storage

  const getLocalStorageData = ()=>{
    let localData = localStorage.getItem('favorits')
    if(localData){
      return JSON.parse(localStorage.getItem('favorits'))
    }else{
      return []
    }
  }
   const getLocalStoragePlayedData = ()=>{
    let localData = localStorage.getItem('played')
    if(localData){
      return JSON.parse(localStorage.getItem('played'))
    }else{
      return []
    }
  }
   const getLocalStorageWantToPlayData = ()=>{
    let localData = localStorage.getItem('wanttoplay')
    if(localData){
      return JSON.parse(localStorage.getItem('wanttoplay'))
    }else{
      return []
    }
  }


  // check if API is  loading
  const [loading , setLoading] = useState(true)
  const [loadingGame , setLoadingGame] = useState(true)
  // check if there is an errors
  const [error , setError] = useState(false)
  // games array
  const [games , setGames] = useState([])
  // check if API has more Results
  const [hasMore , setHasMore] = useState(false)
  // set search query for API
  const [query , setQuery] = useState('')
    // set search Platforms for API
  const [platform , setPlatform] = useState()
    // set search Geners for API
  const [genre , setGenres] = useState()
      // set Order for API
  const [order , setOrder] = useState()
  const [isTop , setIsTop] = useState(true)
  // set number of bages are displayed in API
  const [pageNumber , setPageNumber] = useState(1)
  // check if submenu is active
  const [isSubmenuActive , setIsSubmenuActive] = useState(false)
  // save favorits to local storage
  const [favorits , setFavorits] = useState(getLocalStorageData())
  const [played , setPlayed] = useState(getLocalStoragePlayedData())
  const [wantToPlay , setWantToPlay] = useState(getLocalStorageWantToPlayData())


  // for detect last card of games

  const opsirver = useRef() 

  // for infinity scrool

const lastGame = useCallback( node => {
  if (loading) return
  if(opsirver.current) opsirver.current.disconnect()
  opsirver.current = new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting && hasMore){
      setPageNumber(prevBage => prevBage + 1)
    }
    
  })
  if(node) opsirver.current.observe(node)
},[loading,hasMore])
// clear all cards befor search
  useEffect(()=>{
  setGames([])
  setPageNumber(1)
  },[query,platform , genre , order])
  // games data
  useEffect(()=>{
  setError(false)
  setLoadingGame(true)
  let cancle
  axios({
   method:'GET',
   url:'https://api.rawg.io/api/games?key=2db624ca678b4810b40b0979d71a20f7',
   params:{page:pageNumber , search:query , platforms:platform , genres:genre , ordering:order},
   cancelToken: new axios.CancelToken(c => cancle = c)
  }).then(res=>{
   setGames(prevgames=>{
    return [...prevgames , ...res.data.results]
   })
   setHasMore(res.data.results.length > 19)
   setLoading(false)
   setLoadingGame(false)
  }).catch(e=>{
   if(axios.isCancel(e)) return
   setError(true)
  })
  return ()=> cancle()
 },
 [query , pageNumber , platform , genre , order])
 // handle search 
const handelSearch=(e)=>{
  setQuery(e.target.value)
  setPageNumber(1)
 }

// handle favorits 
const handleFavorits = (background_image , id , name  , metacritic )=>{
  let findGame = favorits.find((gameId)=> gameId.id === id)
  if(findGame){
    const newFavorits = favorits.filter((newFav)=> newFav.id !== id)
    setFavorits(newFavorits)
  }else{
    let tampCard = {background_image : background_image , id : id , name : name  , metacritic : metacritic }
    setFavorits([...favorits , tampCard])
  }  
}
const handlePlayed = (background_image , id , name  , metacritic)=>{
  let findGame = played.find((gameId)=> gameId.id === id)
  if(findGame){
    const newPlayed = played.filter((newFav)=> newFav.id !== id)
    setPlayed(newPlayed)
  }else{
    let tampCard = {background_image : background_image , id : id , name : name  , metacritic : metacritic }
    setPlayed([...played , tampCard])
  }  
}
const handleWantToplay = (background_image , id , name  , metacritic)=>{
  let findGame = wantToPlay.find((gameId)=> gameId.id === id)
  if(findGame){
    const newWantToplay = wantToPlay.filter((newFav)=> newFav.id !== id)
    setWantToPlay(newWantToplay)
  }else{
    let tampCard = {background_image : background_image , id : id , name : name  , metacritic : metacritic }
    setWantToPlay([...wantToPlay , tampCard])
  }  
} 

// save Favorits Data to Local Storage 

useEffect(()=>{
  localStorage.setItem('favorits',JSON.stringify(favorits))
  localStorage.setItem('played',JSON.stringify(played))
  localStorage.setItem('wanttoplay',JSON.stringify(wantToPlay))
},[favorits , played , wantToPlay  ])


const handlePlatformChange = (value , e)=>{
 if(value === 'ALL'){
  setPlatform()
 }else{
  setPlatform(value)
 }
}

const handleGenresChange = (value)=>{
  if(value === 'ALL'){
  setGenres()
 }else{
  setGenres(value)
 }
}

const handleTop = ()=>{
 if(isTop){
  setOrder('-metacritic')
 }else{
  setOrder()
 }
}




 return <AppContext.Provider value={{ isSubmenuActive , setIsSubmenuActive , games , query , handelSearch ,lastGame , loading , error , favorits , setFavorits , handleFavorits  , setPlatform , loadingGame , setGenres , hasMore , setOrder,isTop , setIsTop , handlePlatformChange , handleGenresChange , handleTop , handlePlayed , handleWantToplay , played  , wantToPlay }}>
 {children}
 </AppContext.Provider>
}
export const useGlopalContext = ()=>{
 return useContext(AppContext);
}

export {AppContext,AppProvider}