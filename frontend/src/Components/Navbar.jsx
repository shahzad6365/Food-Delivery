import React, { useContext } from 'react'
import "./component.css"
import { assets } from "../assets/frontend_assets/assets"
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../Context/StoreContext'
export default function Navbar({setShowlogin}) {
    const navigat = useNavigate()
    let [manu,setManu]= useState("home")
    let {totalcart,token,setToken} = useContext(StoreContext)
    const logout=()=>{
        localStorage.removeItem("token")
        setToken("")
        navigat("/")

    }
    return (
        <>
            <div className="navbar h-1 ">
                    <div className="flex justify-between md:w-full px-1 items-center gap-10">
                        <Link to="/"><img onClick={()=>setManu("home")} src={assets.logo} alt="" className='w-[100px] md:w-30' /></Link>

                        <ul
                            tabIndex="-1"
                            className=" hidden md:flex space-x-8 bg-base-100 rounded-box z-1 mt-3 w-52 p-2 cursor-pointer">
                            <Link to='/' onClick={()=>setManu("home")} className={manu==="home"?"text-blue-300 border-b-2":""}>Home</Link>
                            <a href='#manu' onClick={()=>setManu("manu")} className={manu==="manu"?"text-blue-300 border-b-2":""}>Manu</a>
                            <a href='#mobileapp' onClick={()=>setManu("mobile_app")} className={manu==="mobile_app"?"text-blue-300 border-b-2":""}>Mobile_app</a>
                            <a href='#footer' onClick={()=>setManu("contactus")} className={manu==="contactus"?"text-blue-300 border-b-2":""}>Contact_Us</a>
                        </ul>
                        <div className='flex space-x-8 items-center'>
                            <img src={assets.search_icon} alt="" className='h-6' />
                            <div className='relative' ><Link to="/cart"><img onClick={()=>setManu("")} src={assets.basket_icon} alt="" className='h-6' /></Link></div>
                            <div className={totalcart()===0?"":'absolute min-w-2 min-h-2 bg-orange-600 top-6 right-23 md:right-10 rounded-full'}></div>


                            {!token?
                            <button onClick={()=>setShowlogin(true)} className='bg-blue-100 px-1 md:px-3 py-0.5 md:py-1 hover:bg-blue-200 cursor-pointer border rounded-full'>Signin</button>
                                :
                            <><div className='profile'>
                                <img src={assets.profile_icon} alt="" />
                                <ul className='profile-dropdown'>
                                    <li onClick={()=>navigat("/myorders")}>
                                        <img src={assets.bag_icon} alt="" />
                                        <p>Orders</p>
                                    </li>
                                    <hr />
                                    <li onClick={logout}>
                                        <img src={assets.logout_icon} alt="" />
                                        <p>Logout</p>
                                    </li>

                                </ul>
                            
                            </div></>
                            }
                            

                        </div>
                        
                    </div>
            </div>
        </>
    )
}
