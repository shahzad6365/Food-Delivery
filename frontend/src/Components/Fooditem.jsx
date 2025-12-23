import React, { useContext, useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { StoreContext } from '../Context/StoreContext';


export default function Fooditem({id,name,price,description,image}) {
    const{cartItem,addToCart,removeFromCart,url}=useContext(StoreContext)
    const [count, setcount]=useState(0);
  return (
    <div className='w-full m-auto rounded-sm shadow-[0px 0px 0px #00000015] transition-0.3s animate-fade-in'>
        <div className='relative '>
            <img className='w-full rounded-t-[15px]' src={url+"/image/"+image} alt="" />
            {
                !cartItem[id] ? 
                <img className='w-[35px] absolute bottom-[15px]  right-[15px] rounded-md cursor-pointer' onClick={()=>addToCart(id)} src={assets.add_icon_white}/>
                :
                <div className='absolute bottom-[15px] right-[15px] gap-5 flex items-center bg-white p-1 rounded-full'>
                    <img className='w-[30px]' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItem[id]}</p>
                    <img className='w-[30px]' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className='p-2 '>
            <div className='flex justify-between items-center mb-1'>
                <p className='text-[20px] font-bold'>{name}</p>
                <img className='W-7 ' src={assets.rating_starts} alt="" />
            </div>

            <p className='text-[#676767] text-[12px]'>{description}</p>
            <p  className='text-orange-700 text-[22px] font-bold'>$ {price}</p>
        </div>
    </div>
  )
}
