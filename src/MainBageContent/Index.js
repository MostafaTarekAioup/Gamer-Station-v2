import React ,{useEffect , useState} from 'react'
import AllGamesCard from './AllGamesCards'
import Search from './search/Search'
import { FaAngleUp} from "react-icons/fa";
const Index = () => {
const [istoTop , setIsTOTop] = useState(false)
const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
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
 return<>
 <main className='main-Discover-content' >
  <div className="discover-content">
     <br />
   <Search/>
   <AllGamesCard/>
   <div onClick={scrollToTop} className={`${istoTop ?'to-top-page to-top-page-active'  :  'to-top-page'}`}>
   <FaAngleUp/>
 </div>
  </div>
 </main>
 </>
}

export default Index
