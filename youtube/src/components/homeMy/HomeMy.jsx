import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../cards/Card'


const HomeMy = () => {

    const [container, setContainer] = useState([])



  
  const fetchMe = () => {


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
    setContainer(data.items)
})
.catch(err => console.error(err));

} 

useEffect(() => {
  fetchMe()
}, []);







  return (
    <div>
        {
            container.map((videos) => (
            
                <Card key={videos.id.videoId} id={videos.id.videoId} data={videos.snippet.publishedAt} title={videos.snippet.title} name={videos.snippet.channelTitle}/>
            ))
        }
        
    </div>
  )
}

export default HomeMy