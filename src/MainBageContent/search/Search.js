import React ,{} from 'react'
import {useGlopalContext} from '../../Context'
import { FaSearch } from "react-icons/fa";
import './style.css'

const Search = () => {
const {query,handelSearch  , isTop , setIsTop , handlePlatformChange , handleGenresChange , handleTop} = useGlopalContext()
const handleSubmit = (e)=>{
   e.preventDefault();
}


 return (
  <div className='search-container'>
     <div className="input-group" >
        <input id='search' type="text" required placeholder='Search for Game' value={query} onChange={handelSearch}/>
         <select onChange={(e)=>handlePlatformChange(e.target.value)} name="Platforms" id="Platforms" className='platform-genres'>
       <option value='ALL'>All Platforms</option>
       <option value={4}>PC</option>
       <option value={187}>PS 5</option>
       <option value={18}>PS 4</option>
       <option value={16}>PS 3</option>
       <option value={1}>XBOX One </option>
       <option value={186}>XBOX S/X</option>
       <option value={14}>XBOX 360</option>
       <option value={7}>Nintendo Switch</option>
       <option value={3}>IOS</option>
       <option value={21}>Android</option>
       <option value={5}>MacOS</option>
       <option value={6}>Linux</option>
      </select>
      {/* ////////////// genres  */}
      <select onChange={(e)=>handleGenresChange(e.target.value)} name="Genres" id="Genres" className='platform-genres'>
       <option  value='ALL'>All Genres</option>
       <option  value={4}>Action</option>
       <option  value={51}>Indie</option>
       <option value={3}>Adventure</option>
       <option value={5}>RPG </option>
       <option value={10}>Strategy </option>
       <option value={2}>Shooter</option>
       <option value={40}>Casual</option>
       <option value={14}>Simulation</option>
       <option value={7}>Puzzle</option>
       <option value={11}>Arcade</option>
       <option value={83}>Platformer</option>
       <option value={1}>Racing</option>
       <option value={59}>Massively Multiplayer</option>
       <option value={15}>Sports</option>
       <option value={6}>Fighting</option>
       <option value={19}>Family</option>
       <option value={28}>Board Games</option>
       <option value={34}>Educational</option>
       <option value={17}>Card</option>
      </select>
      <div className="top-Rated">
       <button onClick={()=>{setIsTop(!isTop) ;handleTop()}} className={`${!isTop ? 'top-Rated-btn active-top' : 'top-Rated-btn'}`}>Top</button>
      </div>
      </div>
  </div>
 )
}

export default Search
