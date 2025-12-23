import React, { useContext, useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import axios from 'axios'
import { StoreContext } from '../Context/StoreContext'

export default function Login({ setShowlogin }) {
    const { url, setToken } = useContext(StoreContext)
    const [title, setTitle] = useState("Login")
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const onchange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(data => ({ ...data, [name]: value }))

    }

    const onlogin = async (e) => {
        e.preventDefault()
        let newurl = url
        if (title === "Login") {
            newurl += "/api/user/login"
        } else {
            newurl += "/api/user/register"

        }

        const response = await axios.post(newurl, data)
        if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
            setShowlogin(false)
        } else {
            alert(response.data.message)
        }

    }


    return (
        <div className='absolute z-11 w-full h-full bg-[#00000090] grid'>
            <div>
                <form onSubmit={onlogin} className='  flex  flex-col justify-center  items-center m-auto mt-20 w-[40%]  h-[80%] p-10 gap-3 fadeIn-3s text-[#808080] bg-white border rounded-md' >
                    <div className='flex justify-between items-center gap-90  '>
                        <h2 className='text-[20px] font-bold'>{title}</h2>
                        <img className='w-7 h-7 cursor-pointer hover:bg-gray-200 p-2 rounded-md' onClick={() => setShowlogin(false)} src={assets.cross_icon} alt="" />
                    </div>
                    <div className='flex flex-col gap-y-3 mt-10 w-full '>
                        {title === "Login" ? <></> : <input className='outline-none border p-2 rounded-md text-[12px] w-full ' type="text" name='name' onChange={onchange} value={data.name} placeholder='Enter your name' />}
                        <input className='outline-none border p-2 rounded-md text-[12px] w-full ' type="text" name='email' onChange={onchange} value={data.email} placeholder='Enter your Email' />
                        <input className='outline-none border p-2 rounded-md text-[12px] w-full ' type="text" name='password' onChange={onchange} value={data.password} placeholder='Enter your password' />
                    </div>
                    <button type='submit' className='mt-5 w-full cursor-pointer border bg-orange-600 text-white px-5 py-3 rounded-md'>{title === "SignUp" ? "Register" : "Login"}</button>
                    <div className='flex gap-2'>
                        <input type="checkbox" name="" id="" className='cursor-pointer' />
                        <p>By countinueing, I accept term and condition of privacy</p>
                    </div>
                    {title === "Login" ?
                        <p>Create New Account?<span className=' cursor-pointer text-blue-500' onClick={() => setTitle("SignUp")}>Click here</span></p>
                        :
                        <p>Alraedy have Account? <span className=' cursor-pointer text-blue-500' onClick={() => setTitle("Login")}>Login</span></p>
                    }
                </form>
            </div>

        </div>
    )
}
