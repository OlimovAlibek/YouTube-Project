import React from 'react'

import hamburger from "../images/hamburger.png"
import youtube from "../images/logowhite.png"
import video from "../images/video.png"
import dots from "../images/dots.png"
import notifications from "../images/notifications.png"
import userlogo from "../images/userimage.png"
import search from "../images/search.png"
import "./Navbar.scss";
import {IconContext} from "react-icons";
import {GiHamburgerMenu} from "react-icons/gi";

import { useState } from 'react'



const Navbar = () => {

  

  return (
    <div className='Navbar  bg-[#1F2022] py-[6px] border-gray-600'>

        <div className='container mx-auto flex items-center '>
             <IconContext.Provider value={{ color: 'white', size: '30px' }}>
                <GiHamburgerMenu className='max-sm:hidden'/>
            </IconContext.Provider>
            <img className='ml-[20px]' src={youtube} alt='youtubelogo'></img>
            <input className='inputmy max-w-[830px] w-[100%] rounded-3xl px-[23px] py-[12px] bg-[#EBEBEB] opacity-[0.1] text-white mx-[40px] max-sm:mx-[10px]' placeholder='Search'></input>
            <div className='flex items-center ml-auto'>
            <img className='max-sm:hidden' src={video} alt='youtubelogo'></img>
            <img className='ml-[15px] max-sm:hidden' src={dots} alt='youtubelogo'></img>
            <img className='ml-[15px] max-sm:hidden' src={notifications} alt='youtubelogo'></img>
            <img  className='ml-[15px] max-sm:ml-[0px] max-sm:w-[70px]' src={userlogo} alt='youtubelogo'></img>
        </div>
            
         </div>
    </div>
  )
}

export default Navbar