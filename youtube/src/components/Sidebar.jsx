import React from 'react'
import "./sidebar.scss"


import user1 from "../images/user1.png"
import user2 from "../images/user2.png"
import user3 from "../images/user3.png"
import user4 from "../images/user4.png"
import user5 from "../images/user5.png"
import user6 from "../images/user6.png"

import { NavLink } from 'react-router-dom';



import {IconContext} from "react-icons";
import { ImHome3 } from "react-icons/im";
import {AiOutlineFire} from "react-icons/ai"
import {MdOutlineSubscriptions} from "react-icons/md"
import {FaRegFolder} from "react-icons/fa"
import {GiAlarmClock} from "react-icons/gi"
import {AiOutlineStar} from  "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"
import {HiOutlineMusicNote} from "react-icons/hi"
import {BiJoystick} from "react-icons/bi"
import {BsChevronDown} from "react-icons/bs"
import {FiSettings} from "react-icons/fi"
import {RiFilePaper2Line} from "react-icons/ri"


const Sidebar = (props) => {



  return (
    <div style={props.style} className='Sidebar  float-left bg-[#1F2022]  w-[225px] max-sm:max-w-[640px] max-sm:w-[100%]  text-white px-[32px] max-sm:px-[22px] py-[22px] max-sm:py-[11px] inline-block  border-gray-600 max-sm:flex max-sm:gap-12'>

        <NavLink className='hover:text-[red]' to={'/home'}>
        <div className='home flex max-sm:flex-col  max-sm:items-center max-sm:justify-center max-sm:pl-3'>
            <IconContext.Provider    value={{ color: 'white', size: '25px', opacity: '0.5px' }}>
                <ImHome3  onMouseOver={({target})=>target.style.color="red"} onMouseOut={({target})=>target.style.color="white"} />
                
            </IconContext.Provider>
            <span className='ml-[13px] max-sm:ml-0 opacity-[0.5] hover:text-[red] hover:opacity-[1] max-sm:text-xs'>Home</span>
        </div>
        </NavLink>

        <NavLink className='hover:text-[red]' to={'/trending'}><div className='home flex  mt-[20px] max-sm:mt-0 max-sm:flex-col  max-sm:items-center max-sm:justify-center'>
        
        <IconContext.Provider value={{ color: 'grey', size: '25px' }}>
                <AiOutlineFire/>
            </IconContext.Provider>
            <span className='ml-[13px] opacity-[0.5] max-sm:ml-0 hover:text-[red] hover:opacity-[1] max-sm:text-xs'>Trending</span>
        </div>
        </NavLink>

        <NavLink className='hover:text-[red]' to={'/subscriptions'}>
        <div className='trending flex mt-[20px] max-sm:mt-0 max-sm:flex-col  max-sm:items-center max-sm:justify-center'>
        <IconContext.Provider value={{ color: 'grey', size: '25px' }}>
                <MdOutlineSubscriptions/>
            </IconContext.Provider>
            <span className='ml-[13px] opacity-[0.5] max-sm:ml-0 hover:text-[red] hover:opacity-[1] max-sm:text-xs'>Subsciptions</span>
        </div>
        </NavLink>

        <NavLink className='hover:text-[red]' to={'/library'}>
        <div className='trending flex mt-[40px] max-sm:mt-0 max-sm:flex-col  max-sm:items-center max-sm:justify-center'>
        <IconContext.Provider value={{ color: 'grey', size: '25px' }}>
                <FaRegFolder/>
            </IconContext.Provider>
            <span className='ml-[13px] opacity-[0.5] max-sm:ml-0 hover:text-[red] hover:opacity-[1] max-sm:text-xs'>Library</span>
        </div>
        </NavLink>

        <NavLink className='hover:text-[red]' to={'/history'}>
        <div className='trending flex mt-[20px] max-sm:mt-0 max-sm:flex-col  max-sm:items-center max-sm:justify-center'>
        <IconContext.Provider value={{ color: 'grey', size: '25px' }}>
                <RiFilePaper2Line/>
            </IconContext.Provider>
            <span className='ml-[13px] opacity-[0.5] max-sm:ml-0 hover:text-[red] hover:opacity-[1] max-sm:text-xs'>History</span>
        </div>
        </NavLink>

        <NavLink className='hover:text-[red]' to={'/watchlater'}>
        <div className='trending flex mt-[20px] max-sm:mt-0 max-sm:flex-col  max-sm:items-center max-sm:justify-center'>
        <IconContext.Provider value={{ color: 'grey', size: '25px' }}>
                <GiAlarmClock/>
            </IconContext.Provider>
            <span className='ml-[13px] opacity-[0.5] max-sm:ml-0 hover:text-[red] hover:opacity-[1] max-sm:text-xs'>Watch Later</span>
        </div>
        </NavLink>

        <NavLink className='hover:text-[red]' to={'/favourites'}>
        <div className='trending flex mt-[20px] max-sm:mt-0 max-sm:flex-col  max-sm:items-center max-sm:justify-center'>
        <IconContext.Provider value={{ color: 'grey', size: '25px' }}>
                <AiOutlineStar/>
            </IconContext.Provider>
            <span className='ml-[13px] opacity-[0.5] max-sm:ml-0 hover:text-[red] hover:opacity-[1] max-sm:text-xs'>Favourites</span>
        </div>
        </NavLink>

        <NavLink className='hover:text-[red]' to={'/likedvideos'}>
        <div className='trending flex mt-[20px] max-sm:mt-0 max-sm:flex-col  max-sm:items-center max-sm:justify-center'>
        <IconContext.Provider value={{ color: 'grey', size: '25px' }}>
                <AiOutlineHeart/>
            </IconContext.Provider>
            <span className='ml-[13px] opacity-[0.5] max-sm:ml-0 hover:text-[red] hover:opacity-[1] max-sm:text-xs'>Liked Videos</span>
        </div></NavLink>

        <NavLink className='hover:text-[red]' to={'/music'}>
        <div className='trending flex mt-[20px] max-sm:mt-0 max-sm:flex-col  max-sm:items-center max-sm:justify-center'>
        <IconContext.Provider value={{ color: 'grey', size: '25px' }}>
                <HiOutlineMusicNote/>
            </IconContext.Provider>
            <span className='ml-[13px] opacity-[0.5] max-sm:ml-0 hover:text-[red] hover:opacity-[1] max-sm:text-xs'>Music</span>
        </div>
        </NavLink>

        <NavLink className='hover:text-[red]' to={'/games'}>
        <div className='trending flex mt-[20px] max-sm:mt-0 max-sm:flex-col  max-sm:items-center max-sm:justify-center'>
        <IconContext.Provider value={{ color: 'grey', size: '25px' }}>
                <BiJoystick/>
            </IconContext.Provider>
            <span className='ml-[13px] opacity-[0.5] max-sm:ml-0 hover:text-[red] hover:opacity-[1] max-sm:text-xs'>Games</span>
        </div>
        </NavLink>
        <NavLink className='hover:text-[red]' to={'/showmore'}>
        <div className='trending flex mt-[20px] max-sm:mt-0 max-sm:flex-col  max-sm:items-center max-sm:justify-center'>
        <IconContext.Provider value={{ color: 'grey', size: '25px' }}>
                <BsChevronDown/>
            </IconContext.Provider>
            <span className='ml-[13px] opacity-[0.5] max-sm:ml-0 hover:text-[red] hover:opacity-[1] max-sm:text-xs'>Show More</span>
        </div>
        </NavLink>



        <div className='subscriptions mt-[50px]'>
        <h3>Subsciptions</h3>
        <div className='flex items-center mt-[20px]'>
            <img src={user1}></img>
            <span className='ml-[13px] opacity-[0.5]'>Gussie Singleton</span>
            </div>
            <div className='flex items-center mt-[20px]'>
            <img src={user2}></img>
            <span className='ml-[13px] opacity-[0.5]'>Nora Francis</span>
            </div>
            <div className='flex items-center mt-[20px]'>
            <img src={user3}></img>
            <span className='ml-[13px] opacity-[0.5]'>Belle Briggs</span>
            </div>
            <div className='flex items-center mt-[20px]'>
            <img src={user4}></img>
            <span className='ml-[13px] opacity-[0.5]'>Eunice Cortez</span>
            </div>
            <div className='flex items-center mt-[20px]'>
            <img src={user5}></img>
            <span className='ml-[13px] opacity-[0.5]'>Emma Hanson</span>
            </div>
            <div className='flex items-center mt-[20px]'>
            <img src={user6}></img>
            <span className='ml-[13px] opacity-[0.5]'>Emma Hanson</span>
            </div>
        </div>
        <div className='trending flex mt-[110px]'>
        <IconContext.Provider value={{ color: 'grey', size: '25px' }}>
                <FiSettings/>
            </IconContext.Provider>
            <span className='ml-[13px] opacity-[0.5]'>Settings</span>
        </div>
        
    </div>
  )
}

export default Sidebar