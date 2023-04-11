import { useState, useEffect } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Trending from './components/LittleComponents/Trending'
import Subscriptions from './components/LittleComponents/Subscriptions'
import Library from './components/LittleComponents/Library'
import History from './components/LittleComponents/History'
import WatchLater from './components/LittleComponents/WatchLater'
import Favourites from './components/LittleComponents/Favourites'
import LikedVideos from './components/LittleComponents/LikedVideos'
import Music from './components/LittleComponents/Music'
import Games from './components/LittleComponents/Games'
import ShowMore from './components/LittleComponents/ShowMore'
import SearchVideo from './components/SearchVideo'
import MyFetchMap from './components/MyFetchMap'
import Channel from './components/Channel'
import HomeMy from './components/homeMy/HomeMy'
import SingleArticle from './components/singleArticle/SingleArticle'


function App() {
 
  
  

  return (
    <div >
    
           

      <Navbar />
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/home' element={<Home/>}/>

      <Route path='/trending' element={<Trending/>}/>
      <Route path='/subscriptions' element={<Subscriptions/>}/>
      <Route path='/library' element={<Library/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/watchlater' element={<WatchLater/>}/>
      <Route path='/favourites' element={<Favourites/>}/>
      <Route path='/likedvideos' element={<LikedVideos/>}/>
      <Route path='/music' element={<Music/>}/>
      <Route path='/games' element={<Games/>}/>
      <Route path='/showmore' element={<Channel/>}/> 
      {/* <Route path='/' element={<HomeMy/>}></Route> */}
      <Route path='/videos/:id' element={<SingleArticle/>}></Route>

      </Routes>
      <Sidebar/>
      {/* <Channel/> */}
      {/* <SearchVideo/> */}
      {/* <MyFetchMap/> */}

    {/* <HomeMy/> */}
    
    
    </div>
  )
}

export default App





