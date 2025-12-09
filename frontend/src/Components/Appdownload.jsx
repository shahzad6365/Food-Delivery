import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

export default function Appdownload() {
  return (
    <div className='m-auto mt-[15px] mb-15 hover:z-1 text-[20px] text-center font-bold' id='mobileapp'>
        <p>For better experience Download <br />Tomato App</p>
        <div className='flex justify-center gap-10 mt-6'>
            <img className='w-[120px] mw-[170px] cursor-pointer' src={assets.app_store} alt="" />
            <img className='w-[120px] mw-[170px] cursor-pointer' src={assets.play_store} alt="" />
        </div>
    </div>
  )
}
