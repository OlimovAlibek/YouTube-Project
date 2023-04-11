import React from 'react'
import bigpic from "../images/onepic.png"
import like from "../images/like.png"
import dislike from "../images/dislike.png"
import share from "../images/share.png"
import dots from "../images/more.png"
import channelpic from "../images/onechannelpic.png"
import nextvideo from "../images/nextvideo.png"
import nextvideo2 from "../images/nextvideo2.png"
import nextvideo3 from "../images/nextvideo3.png"





const Channel = () => {

  


  return (
    <div className='Channel ml-[220px] max-sm:ml-[0px] max-w-[1100px]  container mx-auto pt-[70px] p-[10px]  text-white'>
    <div className='leftpart float-left max-w-[800px] overflow-y-auto'>
    <img width='800px' height='200px' src={bigpic} alt="bigpic" />
    <h1 className='title font-bold text-[36px] mt-[10px] max-sm:text-[20px]'>Dude You Re Getting A Telescope</h1>
    <div className='statistics flex max-sm:block justify-between items-center border-b-[1px] border-[#D8D8D880] pb-[14px] mt-[14px] max-sm:mt-[4px]'>
        <span className='views font-normal text-xl text-[#C2C2C2] max-sm:text-[12px] ' >123k views</span>
        <div className='buttons flex items-center gap-2 max-sm:mt-[10px] '>
            <img src={like} alt="like" />
            <img src={dislike} alt="like" />
            <img src={share} alt="like" />
            <img className='ml-[20px] max-sm:hidden' src={dots} alt="like" />
        </div>
    </div>
    <div className='aboutchannel flex items-start max-sm:items-center mt-[30px] mx-auto  max-sm:px-[20px] border-b-[1px] border-[#D8D8D880] pb-[18px]'>
        <img className='max-w-[50px] w-[100%]' src={channelpic} alt="ava" />
        <div className='textside ml-[12px] '>
        <div className='texttop flex justify-between items-center gap-12 '>
        <div >
            <h2 className='font-bold text-[26px] max-sm:text-[16px]'>Food & Drink</h2>
            <span className='mt-[4px] text-[13px] opacity-[0.4] max-sm:hidden'>Published on 14 Jun 2019</span>
            <span className='mt-[4px] text-[13px] opacity-[0.4]  max-sm:text-[12px] ml-[50px] max-sm:ml-[0px]'>245K subscribed</span>
            </div>
            <button className='rounded-3xl w-[154px] bg-red-600 text-white h-[40px] hover:bg-white hover:text-red-600 hover: border-red-600 hover:border-2 '>Subscribe</button>
            </div>
            <p className='mt-[14px] text-[16px] opacity-[0.6] max-sm:hidden'>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </p>
            <span className='mt-[15px] text-[20px] opacity-[0.4] max-sm:hidden'>Show more</span>
        </div>
    </div>
    </div>
    <div className='rightpart max-sm:pt-[30px] float-right max-sm:float-none max-sm:mx-auto  max-w-[250px] w-[100%] max-sm:max-w-[350px] overflow-y-auto'>
    <div className='flex justify-between items-center'>
    <h1 className='font-bold text-[36px]'>Next</h1>
    <div>
    <label className='font-bold text-[16px]' htmlFor="">AUTOPLAY</label>
    <input className='ml-[5px]' type="checkbox" />
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

        <div className='nextcard max-sm:pt-[10px]' >
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
        </div>

        
    </div>
    </div>
  )
}

export default Channel