import React from 'react'
import memeImg from '../assets/memeImg.png'

const Header = () => {
  return (
    <div className='h-32 bg-gradient-to-r from-violet-700 to-fuchsia-500 flex justify-between items-center px-20'> 
        <div className='flex items-center'>
            <img src={memeImg} alt=""  className='h-16'/>
            <h3 className='text-white text-3xl font-semibold'>Meme Generator</h3>
        </div>
        <h4 className='text-white text-2xl '>React Course - Project 3</h4>
    </div>
  )
}

export default Header