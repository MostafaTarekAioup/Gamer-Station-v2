import  {useEffect , useState} from 'react'
import axios from 'axios'

const useAxios = (query , pageNumber) => {
const [loading , setLoading] = useState(true)
const [error , setError] = useState(false)
const [games , setGames] = useState([])
const [hasMore , setHasMore] = useState(false)

useEffect(()=>{
setGames([])
},[query])

 useEffect(()=>{
  setLoading(true)
  setError(false)
  let cancle
  axios({
   method:'GET',
   url:'https://api.rawg.io/api/games?key=2db624ca678b4810b40b0979d71a20f7',
   params:{page:pageNumber , search:query},
   cancelToken: new axios.CancelToken(c => cancle = c)
  }).then(res=>{
   setGames(prevgames=>{
    return [...prevgames , ...res.data.results]
   })
   setHasMore(res.data.results.length > 0)
   console.log(res.data.results)
  }).catch(e=>{
   if(axios.isCancel(e)) return
   setError(true)
  })
  return ()=> cancle()
 },
 [query , pageNumber])
 return { loading , error , games , hasMore}
}

export default useAxios
