import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import { useNavigate } from 'react-router-dom'

export default function Cart() {

  const { food_list, cartItem, removeFromCart,totalcart,url } = useContext(StoreContext)
  let navigate =useNavigate(false)
  return (
    <div className='mt-[100px] mb-3'>
      <div>
        <div className='grid grid-cols-6 items-center text-grey-500 text-[15px] font-bold'>
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="h-2 " />
        {
          food_list.map((item, index) => {
            if (cartItem[item._id] > 0) {
              return (
                <>
                  <div key={index}>
                    <div className='grid grid-cols-6 items-center text-[15px] m-[10px 0px] text-black '>
                      <img className='w-[50px] m-2' src={url+"/image/"+item.image} alt="" />
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                      <p>{cartItem[item._id]}</p>
                      <p>${item.price * cartItem[item._id]}</p>
                      <p onClick={() => removeFromCart(item._id)} className='cursor-pointer'>X</p>
                    </div>
                    <hr className="h-2  border-none  " />
                  </div>
                </>
              )
            }

          })
        }

      </div>
      <div className='mt-10 flex flex-col justify-between  gap-25  md:flex-row  '>
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
         <button onClick={()=>navigate("/placeorder")} className='bg-orange-700 w-[200px] text-[12px] cursor-pointer rounded-md p-2'>PROCEED TO CHECKOUT</button>
        </div>
       
        <div >
          <div className=' order-1 md:order-2'>
            <p>If you have Promo Code, Enter it here</p>
            <div className=' flex justify-between  mt-3 bg-[#eaeaea] '><input type="text" className='outline-none p-2 rounded-md' placeholder='Promo Code '/>
            <button className='bg-black text-white p-2 rounded-md cursor-pointer' >Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
