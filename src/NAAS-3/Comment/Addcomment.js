import React from 'react'
import Button from './Button'


function Addcomment() {
  return (

    //to Add comment 

    
    <form className='w-[220px] mt-[60.5px]'>

    <input placeholder='Email or Username'  className='w-full border-b-[1px] focus:outline-0 text-[14px] pb-[3.5px] border-[#707070] text-[#1c1d1d] '/>
    <input placeholder='Password' className='w-full border-b-[1px] focus:outline-0 text-[14px] pb-[3.5px]  border-[#707070] text-[#1c1d1d] mt-[24px]'/>
    <div className=' text-[#1c1d1d] pt-[8.5px] text-[14px] flex justify-end'>
     <a href='#' className='mb-[28px]'>Forget Password?</a>
    </div>
     {/* Log in button */}
      <Button name="Log In"/>
     </form>
  )
}

export default Addcomment