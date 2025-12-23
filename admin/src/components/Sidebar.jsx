import React from 'react'
import "./component.css"
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebaroptions">
            <NavLink to="/add" className="sidebaroption">
                <img src={assets.add_icon} alt="" />
                <p>Add Items</p>
            </NavLink>
             <NavLink to="/list" className="sidebaroption">
                <img src={assets.order_icon} alt="" />
                <p>List Items</p>
            </NavLink>
             <NavLink to="/order" className="sidebaroption">
                <img src={assets.order_icon} alt="" />
                <p>Orders</p>
            </NavLink>
        </div>

    </div>
  )
}
