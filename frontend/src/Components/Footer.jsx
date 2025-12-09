import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

export default function Footer() {
    return (
        <div className='text-white bg-black flex flex-col  items-center gap-4 p-[20px 8vw] pt-[80px]' id='footer'>
            <div className='w-full ml-30 grid grid-cols-3 gap-[80px] '>
                <div className='space-y-10 m-10' >
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sed aliquid iusto perspiciatis aliquam voluptas sint! Inventore in iste fugiat.</p>
                    <div className='flex justify-left gap-3'>
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className='space-y-10 m-10' >
                    <h2 className='font-bold text-[25px] '>COMPANY</h2>
                    <ul className='cursor-pointer '>
                        <li className='hover:text-blue-300'>Home</li>
                        <li className='hover:text-blue-300'>About Us</li>
                        <li className='hover:text-blue-300'>Delivery</li>
                        <li className='hover:text-blue-300'>Privacy policy</li>
                    </ul>
                </div>
                <div className='space-y-10 m-10'>
                    <h2 className='font-bold text-[25px] '>CONTACT US</h2>
                    <ul>
                        <li>+9230000004034</li>
                        <li>tomaoto@gmail.com</li>
                    </ul>
                </div>
                 <hr  className='w-280 h-[2px] bg-gray-500'/>
            </div>
           
            <p className='mb-2' >Copyright © {new Date().getFullYear()} - All right reserved</p>

        </div>
    )
}
