import React, { useEffect, useState } from 'react'
import {AiOutlineCopyright} from "react-icons/ai"
import { IoLogoWhatsapp } from 'react-icons/io'


function Footer() {
    const [date, setDate] = useState(new Date())
   
    useEffect(()=> {
     var timer = setInterval(()=>setDate(new Date()), 1000)
  
     return function cleanup() {
        clearInterval(timer)
     }
    })
  
  return (
    // To be done again, i want to do best footer, to be able to visit mt whatsapp,linkden e.t.c from here
    <div className=" text-center font-bold text-white bg-gradient-to-r from-indigo-800 to-cyan-600  w-full h-[90px] text-base font-sans tracking-wider bg-[#2a2f4f]">
            <div className="flex flex-col justify-center items-center pt-3 ">
                <h1 className="flex items-center font-semibold gap-x-1"> Webmyn <span><AiOutlineCopyright/></span> {date.getUTCFullYear()}</h1>
                <h1>bellomuhyideen0001@gmail.com</h1>
                <a href='https://wa.me/9164028709'>
                   <div className='flex items-center px-4 pt-1 gap-x-1'>
                     <h1 className='text-[#128c7e] text-xl'><IoLogoWhatsapp/></h1>
                      <h1>Whatsapp</h1>
                   </div>
                </a>
            </div>
        </div>
  )
}

export default Footer