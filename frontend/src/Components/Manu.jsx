import React from 'react'
import { menu_list } from '../assets/frontend_assets/assets'
export default function Manu({category,setcategory}) {

  return (
    <div className='py-5 space-y-5' id='manu'>
        <h1 className='font-bold text-xl text-[#262626]'>Explore Our manu</h1>
        <p className='text-[#262626] w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita autem
             modi quae et excepturi doloremque facilis. Cumque illum assumenda dolorem similique
             provident consequatur distinctio repellendus, quas sequi ab quam excepturi.</p>
        <div className='flex w-full justify-center m-auto text-center item-center'>
            {menu_list.map((item,index)=> {
                return(
                  
                    <div className='flex  flex-col justify-center space-x-4 gap-4' onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}>
                        <img className={ `cursor-pointer  rounded-full ${category===item.menu_name?"border-3 border-orange-700 p-2":" "} `} src={item.menu_image} alt="" />
                        <p className='font-bold mt-1 text-[#747474] cursor-pointer'>{item.menu_name}</p>
                    </div>
                   
                )
            })
            }
        </div>
        <hr className='mt-10 h-2 bg-[#e2e2e2] '/>
    </div>
  )
}
