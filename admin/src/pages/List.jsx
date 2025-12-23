import React, { useEffect, useState } from 'react'
import "./Pages.css"
import axios from 'axios'
import { toast } from 'react-toastify'
export default function List() {
  
  let [list , setList]=useState([])
  let getlist = async()=>{
      await axios.get("http://localhost:4000/api/food/list").then((res)=>{
        setList(res.data.data)
      })

  }
  let removefood=(foodid)=>{
     axios.post(`http://localhost:4000/api/food/remove`,{id:foodid}).then((res)=>{
      toast.success(res.data.message)
       getlist()
      console.log(res)
    })
  }
  useEffect(()=>{
    getlist()
  },[])
  return (
    <div className='list add flex-col'>
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Price</b>
          <b>Category</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <>
            <div className="list-format" key={index}>
              <img src={"http://localhost:4000/image/"+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.category}</p>
              <p className='cursor' onClick={()=>removefood(item._id)}>X</p>
            </div>
            </>
          )
        })}
      </div>
      
    </div>
  )
}
