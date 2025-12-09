import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'

export default function Placeoreder() {

  let {totalcart}=useContext(StoreContext)
  return (
    <div>
      <form className='flex items-start justify-between gap-15 mt-[100px] mb-10'>
        <div className='w-1/2 '>
          <p className='text-[30px] font-semibold m-4'>Delivery Information</p>
          <div className='flex gap-4'>
            <input className='w-full mb-2 border p-2 rounded-md outline-orange-600' type="text" placeholder='first_name' />
            <input className='w-full mb-2 border p-2 rounded-md outline-orange-600' type="text" placeholder='last_name' />
          </div >
          <input className='w-full mb-2 border p-2 rounded-md outline-orange-600' type="email" placeholder='Email' />
          <input className='w-full mb-2 border p-2 rounded-md outline-orange-600' type="text" placeholder='street' />
          <div className='flex gap-4'>
            <input className='w-full mb-2 border p-2 rounded-md outline-orange-600' type="text" placeholder='city' />
            <input className='w-full mb-2 border p-2 rounded-md outline-orange-600' type="text" placeholder='street' />
          </div>
          <div className='flex gap-4'>
            <input className='w-full mb-2 border p-2 rounded-md outline-orange-600' type="text" placeholder='Zip code' />
            <input className='w-full mb-2 border p-2 rounded-md outline-orange-600' type="text" placeholder='Country' />
          </div>
          <input className='w-full mb-2 border p-2 rounded-md outline-orange-600' type="text" placeholder='Phone' />

        </div>
        <div className='w-1/2 '>
          <div className=' flex flex-col justify-between  gap-25  md outline-orange-600:flex-row  '>
            <div className=' flex flex-1 flex-col gap-3  '>
              <h2 className='font-bold text-2xl'>Cart Total </h2>
              <div className='flex justify-between ml-2 mr-2 '>
                <p>Subtotal</p>
                <p>${totalcart()}</p>
              </div>
              <hr className='m-2' />
              <div className='flex justify-between ml-2 mr-2 '>
                <p>Delivery Fee</p>
                <p>${totalcart()===0?0:2}</p>
              </div>
              <hr className='m-2' />
              <div className='flex justify-between ml-2 mr-2 '>
                <b >Total</b>
                <b >${totalcart()===0?0:totalcart()+2}</b>
              </div>
              <hr className='m-2' />
              <button  className='bg-orange-700 w-[200px] text-[12px] cursor-pointer rounded-md outline-orange-600 p-2'>PROCEED TO PAYMENT</button>
            </div>
          </div>

        </div>
      </form>
    </div>
  )
}
