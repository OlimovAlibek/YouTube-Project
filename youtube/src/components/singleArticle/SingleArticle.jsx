import React from 'react'
import { useParams} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom'
import NextCard from '../cards/NextCard'

import like from "../../images/like.png"
import dislike from "../../images/dislike.png"
import share from "../../images/share.png"
import dots from "../../images/more.png"
import channelpic from "../../images/onechannelpic.png"
import nextvideo from "../../images/nextvideo.png"
import nextvideo2 from "../../images/nextvideo2.png"
import nextvideo3 from "../../images/nextvideo3.png"


const SingleArticle = () => {


    const [container, setContainer] = useState([])
    const [container2, setContainer2] = useState([]);

    const {id} = useParams();


  
  const fetchMe = () => {


const options = {
method: 'GET',
headers: {
'X-RapidAPI-Key': '31be749a57mshfda87889ccc91e2p187ebfjsnb135018fb433',
'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
}
};

fetch(`https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`, options)
.then(response => response.json())
.then(data => {
    setContainer(data.items)
})
.catch(err => console.error(err));

} 

useEffect(() => {
  fetchMe()
}, []);



useEffect(() => {
        fetchMe2()
    }, [])

    


const fetchMe2 = () => {


    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '31be749a57mshfda87889ccc91e2p187ebfjsnb135018fb433',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

fetch('https://youtube-v31.p.rapidapi.com/search?channelId=UCb2HGwORFBo94DmRx4oLzow&part=snippet%2Cid&order=date&maxResults=5', options)
	.then(response => response.json())
	.then(data => {
        setContainer2(data.items)
    })
	.catch(err => console.error(err));

} 




  return (
    <div className='Channel ml-[220px] max-sm:ml-[0px] max-w-[1100px]  container mx-auto pt-[70px] p-[10px]  text-white'>
    {/* <div className='videocard mt-[500px] ml-[300px] min-w=[250px]'>
                    <Iframe  className=' rounded-2xl' src={`https://www.youtube.com/embed/${id}`} ></Iframe>
                    <h1 className='text-white text-base mt-[10px]'></h1>
                <div className='spans flex justify-between text-gray-600'>
                    <Link to={'/'}>Back</Link>
                    <span ></span>
                </div>           
                    </div> */}



        <div >
    <div className='leftpart float-left max-sm:float-none max-w-[800px] overflow-y-auto'>
    <Iframe  className=' rounded-2xl max-w-[800px] w-[100%] h-[400px] max-sm:h-[200px]' src={`https://www.youtube.com/embed/${id}`} ></Iframe>
                    
    {
        container.map((items) => {
            return (
            <>
            
            <h1 className='title font-bold text-[36px] mt-[10px] max-sm:text-[20px]'>{items.snippet.title}</h1>
            <div className='statistics flex max-sm:block justify-between items-center border-b-[1px] border-[#D8D8D880] pb-[14px] mt-[14px] max-sm:mt-[4px]'>
        <span className='views font-normal text-xl text-[#C2C2C2] max-sm:text-[12px] ' >{items.statistics.viewCount} views</span>
        <div className='buttons flex items-center gap-2 max-sm:mt-[10px] '>
            <img src={like} alt="like" />
            <img src={dislike} alt="like" />
            <img src={share} alt="like" />
            <img className='ml-[20px] max-sm:hidden' src={dots} alt="like" />
        </div>
    </div>
    <div className='aboutchannel flex items-start max-sm:items-center mt-[30px] mx-auto  max-sm:px-[20px] border-b-[1px] border-[#D8D8D880] pb-[18px]'>
        <img className='max-w-[50px] w-[100%]' src='https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-youtube-social-media-round-icon-png-image_6315993.png' alt="ava" />
        <div className='textside ml-[12px] '>
        <div className='texttop flex justify-between items-center gap-12 '>
        <div >
            <h2 className='font-bold text-[26px] max-sm:text-[16px]'>{items.snippet.channelTitle}</h2>
            <span className='mt-[4px] text-[13px] opacity-[0.4] max-sm:hidden'>{items.snippet.publishedAt}</span>
            <span className='mt-[4px] text-[13px] opacity-[0.4]  max-sm:text-[12px] ml-[50px] max-sm:ml-[0px]'>245K subscribed</span>
            </div>
            <button className='rounded-3xl w-[154px] bg-red-600 text-white h-[40px] hover:bg-white hover:text-red-600 hover: border-red-600 hover:border-2 '>Subscribe</button>
            </div>
            <p className='mt-[14px] text-[16px] opacity-[0.6] max-sm:hidden'>{items.snippet.description} </p>
            <span className='mt-[15px] text-[20px] opacity-[0.4] max-sm:hidden'>Show more</span>
        </div>
    </div>
    </>
            )
        })
    }
   
    
    </div>
    </div>
    <div className='rightpart text-white max-sm:pt-[30px] float-right max-sm:float-none max-sm:mx-auto  max-w-[250px] w-[100%] max-sm:max-w-[350px] overflow-y-auto'>
    <div className='flex justify-between items-center'>
    <h1 className='font-bold text-[36px]'>Next</h1>
    <div>
    <label className='font-bold text-[16px]' htmlFor="">AUTOPLAY</label>
    <input className='ml-[5px]' type="checkbox" />
    </div>
    </div>
    {
            container2.map((videos) => {
                return (
                    <NextCard key={videos.id.videoId} id={videos.id.videoId} data={videos.snippet.publishedAt} title={videos.snippet.title} name={videos.snippet.channelTitle}/>

                )
            })
        }

        {/* <div className='nextcard max-sm:pt-[10px]' >
        <img className='max-w-[250px] max-sm:max-w-[350px] w-[100%]' src={nextvideo2} alt="dasd" />
        <div className='flex flex-col justify-between ml-[10px]'>
        <h1 className='font-bold text-[24px] max-sm:text-[16px]'>Baby Monitor Technology</h1>
        <div>
        <p className='font-normal text-[15px] opacity-[0.4]'>Dollie Blair</p>
        <div className='flex justify-between'>
        <p className='font-normal text-[15px] opacity-[0.4]'>123k views</p>
        <p className='font-normal text-[15px] opacity-[0.4]'>20/04/2017</p>
        </div>
        </div>
        </div>
        </div>

        <div className='nextcard max-sm:pt-[10px]'>
        <img className='max-w-[250px] max-sm:max-w-[350px] w-[100%]' src={nextvideo} alt="dasd" />
        <div className='flex flex-col justify-between ml-[10px]'>
        <h1 className='font-bold text-[24px] max-sm:text-[16px]'>Baby Monitor Technology</h1>
        <div>
        <p className='font-normal text-[15px] opacity-[0.4]'>Dollie Blair</p>
        <div className='flex justify-between'>
        <p className='font-normal text-[15px] opacity-[0.4]'>123k views</p>
        <p className='font-normal text-[15px] opacity-[0.4]'>20/04/2017</p>
        </div>
        </div>
        </div>
        </div>

        <div className='nextcard max-sm:pt-[10px]'>
        <img className='max-w-[250px] max-sm:max-w-[350px] w-[100%]' src={nextvideo3} alt="dasd" />
        <div className='flex flex-col justify-between ml-[10px]'>
        <h1 className='font-bold text-[24px] max-sm:text-[16px]'>Baby Monitor Technology</h1>
        <div>
        <p className='font-normal text-[15px] opacity-[0.4]'>Dollie Blair</p>
        <div className='flex justify-between'>
        <p className='font-normal text-[15px] opacity-[0.4]'>123k views</p>
        <p className='font-normal text-[15px] opacity-[0.4]'>20/04/2017</p>
        </div>
        </div>
        </div>
        </div>

        <div className='nextcard max-sm:pt-[10px]'>
        <img className='max-w-[250px] max-sm:max-w-[350px] w-[100%]' src={nextvideo2} alt="dasd" />
        <div className='flex flex-col justify-between ml-[10px]'>
        <h1 className='font-bold text-[24px] max-sm:text-[16px]'>Baby Monitor Technology</h1>
        <div>
        <p className='font-normal text-[15px] opacity-[0.4]'>Dollie Blair</p>
        <div className='flex justify-between'>
        <p className='font-normal text-[15px] opacity-[0.4]'>123k views</p>
        <p className='font-normal text-[15px] opacity-[0.4]'>20/04/2017</p>
        </div>
        </div>
        </div>
        </div> */}

        
    </div>
    </div>
        
  )
}

export default SingleArticle