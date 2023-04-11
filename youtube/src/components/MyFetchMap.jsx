import React from 'react'
import { useState, useEffect } from 'react';


import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/virtual';


const MyFetchMap = () => {


    const [endPoint, setEndPoints] = useState(''); 
    const [container, setContainer] = useState([])

    useEffect(() => {
        fetchMe()
    },[])


const fetchMe = () => {


    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '31be749a57mshfda87889ccc91e2p187ebfjsnb135018fb433',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

fetch('https://youtube-v31.p.rapidapi.com/search?channelId=UCBVjMGOIkavEAhyqpxJ73Dw&part=snippet%2Cid&order=date&maxResults=25', options)
	.then(response => response.json())
	.then(data => {
        setContainer(data.items)
    })
	.catch(err => console.error(err));

} 

    const onChangeHandler = (e) => {
        setEndPoints(e.target.value)
    }
    
    const submitHandler = e => {
        e.preventDefault()
    } 
    

    const slides = Array.from({ length: 2 }).map(
    (el, index) => `Slide ${index + 1}`
  );




  return (
    <div className='MyFetchMap'>
        <form onSubmit={submitHandler}>
        <input type="text" value={endPoint} onChange={onChangeHandler}/>
        <button type='sumbit'>submit</button>
        </form>

        <div className='flex overflow-auto whitespace-nowrap'>
        {

          
            container.map((item) => {
                return (
                  <div >
                    
                    <iframe className='inline mt-3 rounded-2xl'
                    src={`https://www.youtube.com/embed/${item.id.videoId}`}
                    
                    />                
                  </div>
                )
            })
            
        }
        </div>
    </div>

    // <Swiper modules={[Virtual]} spaceBetween={50} slidesPerView={2} virtual>
    //   {slides.map((slideContent, index) => (
    //     <SwiperSlide key={slideContent} virtualIndex={index}>
    //       {container.map((item) => {
    //             return (
                    
    //                 <div className='flex' >
    //                 <iframe  
    //                 src={`https://www.youtube.com/embed/${item.id.videoId}`}/>                
    //                 </div>
    //             )
    //         })}
    //     </SwiperSlide>
    //   ))}
    // </Swiper>
  )
}

export default MyFetchMap