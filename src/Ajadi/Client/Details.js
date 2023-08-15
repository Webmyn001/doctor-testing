import axios from 'axios'
import React from 'react'
import {Link, useLocation, useNavigate} from "react-router-dom"

function Details() {

    const location = useLocation()
    const data = location.state
    
    const navigate = useNavigate()

    const deleteUser = async (id) => {
      // i want to do yes or no alert here
      alert("This lecture will be deleted")
      try{
        await axios.delete(`https://calm-pink-fossa-wear.cyclic.cloud/api/ajadi-form/${id}`);
        alert("Data deleted.")
        navigate("/");
        window.location.reload()
          }catch (err) 
      {
      console.log(err);
      alert("Unable to delete, Kindly ensure you are connectecd to the internet")
       }
    }

  return (
    <div className='bg-[#f5f5f5]  text-gray-900 w-full min-h-screen'>
    <h1 className='text-center font-semibold font-montserat bg-gradient-to-r text-white from-indigo-800 to-cyan-600 py-[2px]'>Full Details</h1>
<div className='flex justify-center items-center pt-6'>
       <div className='bg-white w-[350px] pb-3  pt-3 rounded-2xl shadow-xl shadow-indigo-800/50 flex flex-col items-center justify-center h-fit'>
        <img src={data.Image[0].url} alt="#" className='w-[150px] h-[150px] rounded-full object-cover'/>
         <h1 className='pt-2 font-semibold '>Name </h1>
         <h1>{data.Name}</h1>

         <h1 className='pt-2 font-semibold '> Identity Number </h1>
         <h1>{data.IdNo}</h1>

         <h1 className='pt-2 font-semibold '> Address </h1>
         <h1>{data.Address}</h1>

         <h1 className='pt-2 font-semibold '> Ocuupation</h1>
         <h1>{data.Occupation}</h1>

         <h1 className='pt-2 font-semibold '>Phone Number</h1>
         <h1>{data.PhoneNo}</h1>
      


                    {/* buttons */}
         <div className='flex justify-between w-full px-5  my-[15px]  mb-[15px] items-center'>
               <Link to={ {pathname:`/Idcard/${data.Name}`}}  state={data}>
             <button className='p-[3px] bg-indigo-800 hover:text-indigo-800 text-white duration-300 transition-colors focus:outline-0 hover:border-[0.5px] border-indigo-800 hover:bg-white  rounded-lg'>ID Card</button>
               </Link>
             <button onClick={()=>deleteUser(data._id)} className='p-[3px] bg-indigo-800 text-white duration-300 transition-colors focus:outline-0 hover:text-indigo-800 hover:border-[1px] hover:bg-white hover:border-red-500 rounded-lg'>delete</button>
               </div>
       </div>
</div>
    </div>
  )
}

export default Details