import React from 'react'
import channelavatar from "../images/channelavatar.png"
import video1 from "../images/video1.png"
import video2 from "../images/video2.png"
import video3 from "../images/video3.png"
import video4 from "../images/video4.png"
import video5 from "../images/video5.png"
import recchannel from "../images/recchannels.png"
import recommend1 from "../images/recommended1.png"
import recommend2 from "../images/recommended2.png"
import recommend3 from "../images/recommended3.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState, useEffect } from 'react'
import Card from './cards/Card'
import MobileCard from './cards/MobileCard'
import RecomendedCard from './cards/RecomendedCard'




import {IconContext} from "react-icons";
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import {BsFillArrowRightCircleFill} from "react-icons/bs"

import Iframe from 'react-iframe'







const Home = (props) => {

    


    const [endPoint, setEndPoints] = useState(''); 
    const [container, setContainer] = useState([])
    const [container2, setContainer2] = useState([])
    const [container3, setContainer3] = useState([])

    useEffect(() => {
        fetchMe() 
    },[])

    useEffect(() => {
        fetchMe3()
    }, [])

    


const fetchMe = () => {


    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '161b977ddcmshabac1ab30e5a9fbp1cf04bjsn9964ce037e41',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

fetch('https://youtube-v31.p.rapidapi.com/search?channelId=UC_BaxRhNREI_V0DVXjXDALA&part=snippet%2Cid&order=date&maxResults=5', options)
	.then(response => response.json())
	.then(data => {
        setContainer(data.items)
    })
	.catch(err => console.error(err));

} 


// const fetchMe2 = () => {
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '31be749a57mshfda87889ccc91e2p187ebfjsnb135018fb433',
//             'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//         }
//     };
    
//     fetch('https://youtube-v31.p.rapidapi.com/search?channelId=UC3PdiRW5dUA4V70ueeR1eHA&part=snippet%2Cid&order=date&maxResults=5', options)
//         .then(response => response.json())
//         .then(data => {
//             setContainer2(data.items)
//             console.log(data.items);
//         })
//         .catch(err => console.error(err));
// }



const fetchMe3 = () => {


    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '161b977ddcmshabac1ab30e5a9fbp1cf04bjsn9964ce037e41',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

fetch('https://youtube-v31.p.rapidapi.com/search?channelId=UCd8iY-kEHtaB8qt8MH--zGw&part=snippet%2Cid&order=date&maxResults=5', options)
	.then(response => response.json())
	.then(data => {
        setContainer3(data.items)
        console.log(data.items);
    })
	.catch(err => console.error(err));

} 



    const onChangeHandler = (e) => {
        setEndPoints(e.target.value)
    }
    
    const submitHandler = e => {
        e.preventDefault()
    } 



//     document.cookie = "yummy_cookie=choco";
// document.cookie = "tasty_cookie=strawberry";
// console.log(document.cookie);



const [dark, setDark] = useState(false);

const theme = {
  backgroundColor: dark ? 'white' : "#1F2022" ,
  color: dark ? '#1F2022' : 'white'
}
  
  
  


  return (
    <div>

    <div className='Home  inline-block max-w-[1118px] w-[100%] pb-[15px] pb-[27px] mt-[0px] float-right'>
        <div className='channeltop flex justify-between px-[25px]    items-center max-sm:hidden'>
            <div className='flex items-center'>
            <img className='w-[50px] h-[50px] rounded-[50%]' src={'https://yt3.googleusercontent.com/ytc/AGIKgqNlddeFNLTaH76O395jMjsksdKUioCq7EewaDDtusI=s900-c-k-c0x00ffffff-no-rj'}></img>
            <span  className='text-2xl  ml-[20px]'>Porsche</span>
            <button onClick={() => setDark(prevdark => !prevdark)}>e</button>
            </div>
            <div className='flex gap-1 '>
            <IconContext.Provider value={{ color: 'grey', size: '30px'  }}>
                <BsFillArrowLeftCircleFill/>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: 'grey', size: '30px' }}>
                <BsFillArrowRightCircleFill/>
            </IconContext.Provider>
            </div>
        </div>

        <div className='video_wrapper flex mt-[20px] gap-10 pl-[25px]  pr-0 max-sm:hidden overflow-x-scroll ' >

      
        {
            container.map((videos) => {
                return (
                    <Card style={theme} key={videos.id.videoId} id={videos.id.videoId} data={videos.snippet.publishedAt} title={videos.snippet.title} name={videos.snippet.channelTitle}/>

                )
            })
        }
      {/* <div className='videocard min-w-[250px]'>
                <img src={video2} alt='video1'></img>
                <h1 className='text-white text-base mt-[10px]'>A Brief History Of Creation</h1>
                <div className='spans flex justify-between text-gray-600'>
                    <span>80k views</span>
                    <span>3 days ago</span>
                    <span>Dollie Blair</span>
                </div>
            </div> */}
        </div>



       
        
    
      

        <div className='recommended max-sm:hidden mt-[20px]'>
        <div className='recommendtop flex justify-between pr-[25px]'>
        <span style={theme} className='text-2xl text-white ml-[20px]'>Recommended</span>
        <div className='flex gap-1 '>
            <IconContext.Provider value={{ color: 'grey', size: '30px'  }}>
                <BsFillArrowLeftCircleFill/>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: 'grey', size: '30px' }}>
                <BsFillArrowRightCircleFill/>
            </IconContext.Provider>
            </div>
            </div>
        <div className='video_wrapper flex mt-[20px] gap-10 pl-[25px]  pr-0 overflow-x-auto' >
        
        {
            container3.map((videos) => {
                return (
                    <RecomendedCard style={theme} key={videos.id.videoId} id={videos.id.videoId} data={videos.snippet.publishedAt} title={videos.snippet.title} name={videos.snippet.channelTitle}/>

                )
            })
        }
    {/* <div className='videocard min-w-[540px]'>
                <img src={recommend2} alt='video1'></img>
                <h1 className='text-white text-base mt-[10px]'>A Brief History Of Creation</h1>
                <div className='spans flex justify-between text-gray-600'>
                    <span>80k views</span>
                    <span>3 days ago</span>
                    <span>Dollie Blair</span>
                </div>
            </div> */}
   
   
        </div>
        </div>


        <div className='channeltop max-sm:hidden flex justify-between px-[25px] mt-[20px]   items-center'>
            <div className='flex items-center'>
            <img className='w-[50px] h-[50px] rounded-[50%]' src={'https://yt3.googleusercontent.com/VqBhWCENsa_1avwbA6xRI3TLS_oqq7iuD8pzstw9QS6G9zbRvi9Ki8R39Iq4Z9Y2HK9M5PHSag=s900-c-k-c0x00ffffff-no-rj'}></img>
            <span style={theme} className='text-2xl text-white ml-[20px]'>Ferrari</span>
            <span className='text-base text-gray-400 ml-[20px]'>Recommended channel for you</span>
            </div>
            <div className='flex items-center gap-7'>
            <button className='rounded-3xl w-[154px] bg-red-600 text-white h-[40px] hover:bg-white hover:text-red-600 hover: border-red-600 hover:border-2'>Subscribe 2.3m</button>
            <div className='flex gap-1 '>
            <IconContext.Provider value={{ color: 'grey', size: '30px'  }}>
                <BsFillArrowLeftCircleFill/>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: 'grey', size: '30px' }}>
                <BsFillArrowRightCircleFill/>
            </IconContext.Provider>
            </div>
            </div>
        </div>

        <div className='video_wrapper max-sm:hidden flex mt-[20px] gap-10 pl-[25px]  pr-0 overflow-x-scroll' >
        
        {
            container3.map((videos) => {
                return (
                    <Card style={theme} key={videos.id.videoId} id={videos.id.videoId} data={videos.snippet.publishedAt} title={videos.snippet.title} name={videos.snippet.channelTitle}/>

                )
            })
        }
    
    
        </div>
        
        
    </div>

    <div className='video_wrappermobile flex flex-col mt-[20px] gap-10 px-[25px]  ' >
        
    {
            container.map((videos) => {
                return (
                    <MobileCard style={theme} key={videos.id.videoId} id={videos.id.videoId} data={videos.snippet.publishedAt} title={videos.snippet.title} name={videos.snippet.channelTitle}/>

                )
            })
        }

      {/* <div className='videocard w-auto'>
      
                <img className='max-w-[640px] w-[100%]' src={video1} alt='video1'></img>
                <h1 className='text-white text-base mt-[10px]'>A Brief History Of Creation</h1>
                <div className='spans flex justify-between text-gray-600'>
                    <span>80k views</span>
                    <span>3 days ago</span>
                    <span>Dollie Blair</span>
                </div>
            </div> */}
           

        </div>

    </div>
  )
}

export default Home