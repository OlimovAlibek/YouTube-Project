import React from 'react'
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom'

const Card = (props) => {
    
    const {id, data, title, name } = props

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

                    <div className='videocard min-w=[250px]'>
                    <Iframe  className=' rounded-2xl' src={`https://www.youtube.com/embed/${id}`} ></Iframe>
                    <h1 key={title} className='text-white text-base mt-[10px]'>{title}</h1>
                <div className='spans flex justify-between text-gray-600'>
                    
                    <span key={data}>{data}</span>
                    <span key={name}>{name}</span>
                    <Link to={`videos/${id}`}>
                         View More
                     </Link>
                </div>           
                    </div>
  )
}

export default Card