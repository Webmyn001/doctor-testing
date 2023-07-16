import React from 'react'
import Button from './Button'

import {Link, useLocation} from "react-router-dom"

function UploadLecture() {

    const location = useLocation()
     const data = location.state
     
     console.log(data)

  return (
    <div className='min-h-screen bg-[#f5f5f5]'>
        <h1 className='font-bold text-center w-full pb-1 text-gray-900 bg-gradient-to-r from-indigo-800 to-cyan-600 pt-1 px-2  text-xl '>Upload New Lecture</h1>
        <div className='flex bg-indigo-800 justify-center items-center'>
          <div className='flex flex-col shadow-lg w-[311px] h-[445px] border-2 border-indigo-800 bg-white absolute top-[160px] items-center rounded-[32px]'>
       
       
        {/*  */}
         <div className=' text-center text-indigo-800 mt-[37.5px]'>
          <h1 className='font-medium text-xl'>{data.CourseCode}</h1>
          <h1 className='font-medium text-xl'>{data.CourseTitle}</h1>
        </div>
        
        
        
         {/*  form */}
         <div className=''>
         <form className='w-[220px] mt-[60.5px]'>

          <input placeholder='Topic or Title'  className='w-full border-b-[1px] focus:outline-0 text-[14px] pb-[3.5px] border-indigo-600 text-indigo-700 '/>
          <textarea placeholder='Description' className='w-full border-b-[1px] focus:outline-0 text-[14px] pb-[3.5px]  border-indigo-600 text-indigo-700 mt-[24px]'/>
          <h3 className='text-xs pt-5 text-indigo-800 text-center'>kindly upload pdf/word document only below</h3>
          <input  type="file" className='w-full border-b-[1px] focus:outline-0 text-[14px] pb-[3.5px]  border-indigo-600  mt-[12px]'/>

      
               {/* Upload button */}
               <div className='flex justify-center items-center'>
             <Button name="Upload"/>
               </div>
            </form>
         </div>


         
           </div>
       </div>
    </div>
  )
}

export default UploadLecture