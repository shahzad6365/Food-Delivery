import React, { useState } from 'react'
import Header from '../Components/Header'
import Manu from '../Components/Manu'
import FoodDisplay from '../Components/FoodDisplay'
import Appdownload from '../Components/Appdownload'

export default function Home() {
    let [category, setcategory]=useState("All")
  return (
    <div>
        <Header/>
        <Manu category={category} setcategory={setcategory}/>
        <FoodDisplay category={category}/>
        <Appdownload/>

    </div>
  )
}
