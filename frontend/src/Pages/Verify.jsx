import React, { useContext, useEffect } from 'react'
import "./pages.css"
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../Context/StoreContext';
import axios from 'axios';

export default function Verify() {

  const [sesrcharam, setSearchparam]=useSearchParams();
  const success = sesrcharam.get("success")
  const orderId = sesrcharam.get("orderId")
   const {url}= useContext(StoreContext)
   const navigate = useNavigate()

   const verifypayment = async()=>{
    const response = await axios.post(url+"/api/order/verify",{success,orderId})

    if(response.data.success){
        navigate("/myorders")
    }
    else{
      navigate("/")
    }
   }

   useEffect(()=>{
    verifypayment()

   },[])

  return (
    <div className='verify'>
      <div className="spiner">

      </div>
    </div>
  )
}
