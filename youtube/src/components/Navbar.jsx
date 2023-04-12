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
import { Link } from 'react-router-dom'

import { useState } from 'react'
import "./Navbar.css";


async function searchYouTube(q) {
    q = encodeURIComponent(q);
    const response = await fetch("https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + q, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
        "x-rapidapi-key": '31be749a57mshfda87889ccc91e2p187ebfjsnb135018fb433'
      }
    });
    const body = await response.json();
    console.log(body);
    return body.items.filter(item => item.type === 'video');
  }


const Navbar = (props) => {


  const [query, setQuery] = useState('Alibek');
    const [list, setList] = useState(null);
  
    const search = (e) => {
      e.preventDefault();
      searchYouTube(query).then(setList);
    };


  // const [endPoint, setEndPoints] = useState(''); 



  //  const onChangeHandler = (e) => {
  //       setEndPoints(e.target.value)
  //   }
    
  //   const submitHandler = e => {
  //       e.preventDefault()
  //   } 





  const [dark, setDark] = useState(false);

  const theme = {
    backgroundColor: dark ? '#1F2022' : "white" ,
    color: dark ? 'white' : 'black'
  }
  

  return (
    <div>


    <div style={props.style} className='Navbar max-w-[1400px] w-[100%]  bg-[#1F2022] py-[6px] border-gray-600'>

        <div className='container mx-auto flex items-center '>
             <IconContext.Provider value={{ color: 'white', size: '30px' }}>
                <GiHamburgerMenu className='max-sm:hidden'/>
            </IconContext.Provider>
            <img className='ml-[20px]' src={youtube} alt='youtubelogo'></img>
            <form className='max-w-[830px] w-[100%]' onSubmit={search}>

            <input autoFocus value={query} onChange={e => setQuery(e.target.value)} type='text' className='inputmy max-w-[830px] w-[100%] rounded-3xl px-[23px] py-[12px] bg-[#EBEBEB]  text-white mx-[40px] max-sm:mx-[10px]' placeholder='Search'></input>
            <button className='ml-[40px] max-sm:mr-[10px] max-sm:ml-[5px] border-2 border-r-[red]'>Search</button>
            </form>
            <div className='flex items-center ml-auto z-10'>
            <img className='max-sm:hidden' src={video} alt='youtubelogo'></img>
            <img className='ml-[15px] max-sm:hidden' src={dots} alt='youtubelogo'></img>
            <img className='ml-[15px] max-sm:hidden' src={notifications} alt='youtubelogo'></img>
            <img  className='ml-[15px] max-sm:ml-[0px] max-sm:w-[70px]' src={userlogo} alt='youtubelogo'></img>
        </div>
            
         </div>
    </div>
    <div className='video_wrapper flex gap-10 pl-[25px] pt-[50px]  pr-0  mt-[0px] ml-[255px] max-sm:ml-[0px]' >
        {list &&
          (list.length === 0
            ? <p>No results</p>
            : (
              <ul className="">
                {list.map(item => (
                
                 
                  
                  <Link className=' rounded-3xl p-1' to={item.url}>
                  <div className='videocard max-w-[840px] w-[100%]  flex max-sm:block'>
                  <img className='rounded-2xl max-w-[400px] w-[100%]' src={item.thumbnails[0].url}></img>
                  
                  <div className='w-[300px] ml-[20px]'>
                    <h1 style={props.style}  className='text-white mt-[10px] font-bold text-xl'>{item.title}</h1>
                <div className='spans flex justify-between text-gray-600'>
                    <span>{item.views} views</span>
                    <span >{item.uploadedAt}</span>
                    
                
                </div>  
                <div className='flex items-center max-sm:mt-[5px] mt-[30px] '>
                <img className='rounded-[50%] max-sm:w-[50px]' src={item.author.avatars[0].url}></img>
                <h3 className='ml-[10px]'>{item.author.name}</h3> 
                </div>
                </div></div></Link>
                
                ))}
              </ul>
            )
          )
        }
      </div>

      </div>
    );
  
}

export default Navbar