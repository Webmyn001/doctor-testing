import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'
import image1 from "./Images/genetics.jpg"

function IDcard() {
// to be canceled
    const IDcarddetails = [
        {
            Image:image1,
            Name: "Bello Muhyideen Oladimeji",
            IdNO: "AJDMY/001" ,
            Address: "NO 2 Anwo Street , Ajadi, Ologuneru, Ibadan",
            Occupation: "Student & Website Developer",
            PhoneNo: "09064028709"
        }
    ]
  return (
    <div  className='bg-[#f5f5f5] text-gray-900 min-h-screen w-full '>

        <div className='pt-[20px] text-center '>
        <h1>Kindly Screenshot your ID Card and send it to<a href='https://wa.me/8139116879'> <span className='text-[#128c7e] text-xl'>this Whatsapp</span></a> for confirmation.</h1> 
        </div>    

        
    
    <div className='flex justify-center items-center '>
        {/* ID CARD */}
        <div className='border-gray-700 border-[0.2px] top-[250px] absolute rounded-xl w-[370px] pb-4'>
            <h1 className='text-center rounded-xl'>Ajadi Muslim Youth Forum</h1>
       
    {
        IDcarddetails.map((info,i) => 
       
        <div key={i} className="flex gap-x-6 items-center justify-center">

        {/* image */}
        <div className='pl-2'>
       <img src={info.Image} alt='#' className='w-[100px] h-[100px] rounded-sm object-cover'/>
       </div>
             {/* text */}
             <div className='max-w-[250px]'>
             <h2 className='pt-2'>{info.Name}</h2>
             <h2>{info.IdNO}</h2>
             <h2>{info.Occupation}</h2>
             <h2>{info.Address}</h2>
             <h2>{info.PhoneNo}</h2>

             </div>
       </div> 
       
       )
       
    }
            
        </div>
   </div>

    </div>
  )
}

export default IDcard