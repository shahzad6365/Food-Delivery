import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import Fooditem from './Fooditem'

export default function FoodDisplay({category}) {

    const {food_list}=useContext(StoreContext)
  return (
    <div className='mt-3'>
        <h2 className='font-semibold text-[24px]'>Top Dishes near your</h2>
        <div className='grid grid-cols-1 md:grid-cols-4 mt-3 gap-4 row-gap-3'>
            { food_list.map((item,index)=>{
              if(category==="All" || category===item.category){
                return(<Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.
image}/>)
              }
                
            })}
        </div>

    </div>
  )
}
