import React  from 'react'
import './App.css';
import {BrowserRouter as Router,Switch, Route } from "react-router-dom";
import {useGlopalContext} from './Context'
import Navbar from './MainBageContent/Navbar/Navbar'
import Submenu from './MainBageContent/Navbar/SubMenu'
import Loading from './LoadingScreen/Loading'
import Index from './MainBageContent/Index'
import LandingBage from './Landing-Page/LandingBage'
import Error from './Error'
import Apout from './Apout'
import Favorit from './favorit-bage/Favorit'
import GameDetails from '././MainBageContent/GameDetails'

function App() {
const { loading} = useGlopalContext()

if(loading){
  return <Loading/>
}
return<Router>
  <Submenu/>
  <Navbar/>
  <Switch>
    <Route exact path='/'>
    <LandingBage/>
  </Route>
  <Route path='/discover'>
    <Index/>
  </Route>
  <Route path='/apout'>
    <Apout/>
  </Route>
  <Route path='/favorit'>
    <Favorit/>
  </Route>
  <Route path='/game-details/:id' children={<GameDetails/>}>
   
  </Route>
  <Route path='*'>
    <Error/>
  </Route>
  </Switch>
</Router>


}

export default App;
