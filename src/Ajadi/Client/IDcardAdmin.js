import React, { useState } from 'react'
import {Link, Navigate, useLocation} from "react-router-dom"

function IDcardAdmin() {

    const location = useLocation()
    const data = location.state

    

  return (
    <div  className='bg-[#f5f5f5] text-gray-900 min-h-screen w-full '>

              <h1 className='pt-5 text-center'>Headings here i dont know what to write here</h1>   

    <div className='flex justify-center items-center '>
        {/* ID CARD */}
        <div className='border-transparent border-[0.2px] top-[250px] 
        bg-gradient-to-r text-white from-indigo-800 to-cyan-600
        absolute rounded-2xl shadow-xl shadow-indigo-800/50  w-[350px] pb-4'>
            <h1 className='text-center rounded-xl'>Ajadi Muslim Youth Forum</h1>
       
    
     
       
        <div className="flex gap-x-6 items-center ">

        {/* image */}
        <div className='pl-2'>
       <img src={data.Image[0].url} alt='#' className='w-[100px] h-[100px] rounded-md object-cover'/>
       </div>
             {/* text */}
             <div className='max-w-[250px]'>
             <h2 className='pt-2'>{data.Name}</h2>
             <h2>{data.Status}</h2>
             <h2>{data.Occupation}</h2>
             <h2>{data.Address}</h2>
             <h2>{data.PhoneNo}</h2>

             </div>
       </div> 
       
       
       
    
            
        </div>
   </div>

    </div>
  )
}

export default IDcardAdmin