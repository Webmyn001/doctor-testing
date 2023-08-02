import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import {IoLogoWhatsapp} from "react-icons/io"
import {BsFillTelephoneFill} from "react-icons/bs"

function Contact() {
  return (
    <div className='bg-[#f5f5f5]'>
      <div className='p-4 text-center bg-gradient-to-tr flex  items-center justify-center from-[#7cb9e8] to-[#f0f8ff]  h-[100px] rounded-b-full drop-shadow-sm'></div>
    
    
       <div className=' text-gray-900  flex justify-center items-center w-full min-h-[500px]'>

         <div className='border-l-2 rounded-lg w-[350px] sm:w-[450px] text-indigo-800 h-fit pb-4  border-indigo-800 shadow-xl '>
        <div className='flex justify-center items-center font-bold text-indigo-800'>
          <h1>Contact us</h1>
        </div>
        <h1 className=' text-center text-xs px-2 pt-4'>Cick on any of the following link below to contact us for more information.</h1>
      <div className='pt-[10px] '>
        <a href='https://wa.me/8139116879'>
        <div className='flex items-center px-4 pt-2  gap-x-2'>
          <h1 className='text-[#128c7e] text-xl'><IoLogoWhatsapp/></h1>
          <h1>Whatsapp</h1>
        </div>
        </a>

        <a href="mailto:bellooladimeji53@gmail.com">
        <div className='flex items-center px-4 pt-2 gap-x-2'>
          <h1 className='text-[#c71610] text-xl'><AiOutlineMail/></h1>
          <h1>Bellooladimeji2019@gmail.com</h1>
        </div>
       </a>

      <a href='tel:+2348139116879'>
        <div className='flex items-center px-4 pt-2 pb-2 gap-x-2'>
          <h1 className='text-[#0ebe2c] text-xl'><BsFillTelephoneFill/></h1>
          <h1>Telephone Number : 08139116879</h1>
        </div>
       </a>

      </div>
      
      </div>
    
    
       </div>



       <div className='p-4 text-center bg-gradient-to-tr flex  items-center justify-center from-[#7cb9e8] to-[#f0f8ff]  h-[100px] rounded-t-full drop-shadow-sm'></div>
      
  </div>
  )
}

export default Contact