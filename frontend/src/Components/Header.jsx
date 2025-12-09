import React from 'react'
import '../index.css'
export default function Header() {
  return (
    <div className='h-40 m-30 md:h-130  relative  header-bg text-white rounded-md'>
        <div className='absolute flex flex-col items-start md:gap-4 max-w-1/2 bottom-2 md:bottom-10 left-10 md:left-16  header-content'>
            <h2 className='font-bold text-[15px] md:text-6xl'>Order Your favourite Food here</h2>
            <p className='text-[10px] md:text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sed incidunt aliquam et error eligendi architecto! Odio quam tenetur voluptatibus?</p>
            <button className='text-[#747474] text-[10px] md:text-[20px]  md:font-bold  bg-white py-1 px-1 md:py-4 md:px-4 rounded-full'>View Here</button>
        </div>
    </div>
  )
}
