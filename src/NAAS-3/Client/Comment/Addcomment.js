import React from 'react'
import Button from './Button'


function Addcomment() {

   const HandleSubmit =(e)=> {
     e.preventDefault()
      }
  return (

    //to Add comment 

    
    <form className='w-[220px] mt-[50px]' onSubmit={HandleSubmit}>

    <input placeholder='Name'  className='w-full border-b-[1px] focus:outline-0 text-[14px] pb-[3.5px] border-[#707070] text-[#182c25] '/>
    <input placeholder='Department' className='w-full border-b-[1px] focus:outline-0 text-[14px] pb-[3.5px]  border-[#707070] text-[#182c25] mt-[24px]'/>
    <input placeholder='Level' className='w-full border-b-[1px] focus:outline-0 text-[14px] pb-[3.5px]  border-[#707070] text-[#182c25] mt-[24px]'/>
    <textarea placeholder='Your comment ...' className='w-full border-b-[1px] focus:outline-0 text-[14px] pb-[3.5px]  border-[#707070] text-[#182c25] mt-[24px]'/>

    <div className='  pt-[8.5px] text-[14px] flex justify-end'>
    </div>
     {/* Log in button */}
     <div className='flex w-full justify-center items-center'>
      <Button name="Post"/>
    </div>
     </form>
  )
}

export default Addcomment