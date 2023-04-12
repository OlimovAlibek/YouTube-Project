import React from 'react'
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom'

const NextCard = (props) => {
    
    const {id, data, title, name } = props


    window.location.reload

  return (
    // <div className='videocard min-w-[250px]'>
    //                 <Iframe  className=' rounded-2xl' src={`https://www.youtube.com/embed/${id}`} ></Iframe>
    //                 <h1 key={title} className='text-white text-base mt-[10px]'>{title}</h1>
    //             <div className='spans flex justify-between text-gray-600'>
    //                 <span >{data}</span>
    //                 <Link to={`videos/${id}`}>
    //                     Read More
    //                 </Link>
    //                 <span ></span>
    //             </div>           
    //                 </div>

                //     <div className='videocard min-w=[250px]'>
                //     <Iframe  className=' rounded-2xl' src={`https://www.youtube.com/embed/${id}`} ></Iframe>
                //     <h1 key={title} className='text-white text-base mt-[10px]'>{title}</h1>
                // <div className='spans flex justify-between text-gray-600'>
                    
                //     <span key={data}>{data}</span>
                //     <span key={name}>{name}</span>
                //     <Link to={`videos/${id}`}>
                //          View More
                //      </Link>
                // </div>           
                //     </div>

                    <Link className=' rounded-3xl p-1'  onClick={document.location.reload} to={`/home/videos/${id}`}><div className='nextcard max-sm:pt-[10px]'>
        <Iframe  className='max-w-[250px] max-sm:max-w-[350px] w-[100%] rounded-2xl' src={`https://www.youtube.com/embed/${id}`} ></Iframe>

        <div className='flex flex-col justify-between ml-[10px]'>
        <h1 className='font-semibold text-[20px] max-sm:text-[16px]'>{title}</h1>
        <div>
        <p className='font-normal text-[15px] opacity-[0.4]'>{name}</p>
        <div className='flex justify-between'>
        
                         
                   
        <p className='font-normal text-[15px] opacity-[0.4]'>{data}</p>
        </div>
        </div>
        </div>
        </div></Link>
  )
}

export default NextCard