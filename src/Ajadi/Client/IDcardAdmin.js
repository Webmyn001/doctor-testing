import React, { useState } from 'react'
import {Link, Navigate, useLocation} from "react-router-dom"

function IDcardAdmin() {

    const location = useLocation()
    const data = location.state

    

  return (
    <div  className='bg-[#f5f5f5] text-gray-900 min-h-screen w-full '>

        <div className='pt-[20px] text-center '>
        <h1>Kindly Screenshot your ID Card and send it to<a href='https://wa.me/8139116879'> <span className='text-[#128c7e] text-xl'>this Whatsapp</span></a> for confirmation.</h1> 
        </div>    

    
    <div className='flex justify-center items-center '>
        {/* ID CARD */}
        <div className='border-gray-700 border-[0.2px] top-[250px] absolute rounded-xl w-[370px] pb-4'>
            <h1 className='text-center rounded-xl'>Ajadi Muslim Youth Forum</h1>
       
    
     
       
        <div className="flex gap-x-6 items-center justify-center">

        {/* image */}
        <div className='pl-2'>
       <img src={data.Image} alt='#' className='w-[100px] h-[100px] rounded-sm object-cover'/>
       </div>
             {/* text */}
             <div className='max-w-[250px]'>
             <h2 className='pt-2'>{data.Name}</h2>
             <h2>{data.IdNo}</h2>
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