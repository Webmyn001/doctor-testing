import React, { useState } from 'react'
import Button from './Button'

import {Link, useLocation} from "react-router-dom"
import Pdf from '../Pdf/Pdf'
import file from "../Pdffiles/Demand and Supply.pdf"
import {BiDownload} from "react-icons/bi"
import {FaBookOpen} from "react-icons/fa"



function UploadAEC() {

    const location = useLocation()
     const data = location.state
     
     console.log(data)

 

  return (
    <div className='min-h-screen bg-[#f5f5f5]'>
        <h1 className='font-bold text-center text-indigo-800 text-xl pt-6'></h1>
        <div className='flex bg-indigo-800 justify-center items-center'>
          <div className='flex flex-col shadow-lg w-[311px] h-fit border-2 border-indigo-800 bg-white absolute top-[160px] items-center rounded-[32px]'>
       
       
        {/*  */}
         <div className=' text-center text-indigo-800 mt-[37.5px]'>
          <h1 className='font-medium text-xl'>{data.CourseCode}</h1>
          <h1 className='font-medium text-xl'>{data.CourseTitle}</h1>
        </div>
        
        
        
         {/*  form */}
         <div className=''>
         <form className='w-[220px] mt-[30.5px]'>

          <h1 className='w-full  text-[15px] font-bold  text-indigo-700 '>{data.Topic}  </h1>
          <p className='w-full  text-[14px] pt-[18px]  text-indigo-700 '> {data.Description}  </p>


             {/* View file= pdf/word and download*/}

             <div className='flex justify-between mt-[15px] items-center'>
                <a className='text-xs  text-indigo-800' href={file} ><span className='flex gap-x-1 justify-center text-xs items-center'><FaBookOpen/>Preview</span></a>
                <a href={file} download={data.Topic}  className={"text-xl p-1 text-indigo-800"}><span className='flex gap-x-1 justify-center text-xs items-center'>Download<BiDownload/></span></a>
                
             </div>

             
      
               {/* Delete button */}
               <div className='flex justify-end  my-[15px]  mb-[15px] items-center'>
             <button className='p-[3px] bg-indigo-800 duration-300 transition-colors hover:bg-red-500 rounded-lg'>delete</button>
               </div>
            </form>
         </div>


         
           </div>
       </div>
    </div>
  )
}

export default UploadAEC