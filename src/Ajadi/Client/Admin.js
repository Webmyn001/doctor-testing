import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { Oval, TailSpin } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import image1 from "./Images/genetics.jpg"

function Admin() {
 

const [loading, setloading] =useState(false)
const [FormData, SetFormData] = useState([])

    const getFormData = async  () => {
        axios.get("https://calm-pink-fossa-wear.cyclic.cloud/api/ajadi-form/")
        .then(res => {
          console.log(res.data)
          SetFormData(res.data)
          setloading(true)
        }).catch(err => {
          console.log(err)
        })
       }

       useEffect(() => {
        getFormData()
       
        }, [])

  return (
    <div className='bg-[#f5f5f5] pb-[60px] text-gray-900 w-full min-h-screen'>
    <h1 className='text-center font-semibold font-montserat bg-gradient-to-r text-white from-indigo-800 to-cyan-600 py-[2px]'>Ajadi Muslim Youth Forum Database</h1>
     
     <h1 className='text-center sm:text-xl pt-5 pb-2 font-semibold'>List of registered Youths.</h1>

     <div className='flex justify-center items-center'>
        {/* table */}


  {loading ? <div></div>:<div className="flex min-h-screen justify-center items-center text-xl font-bold"><Oval height="80" width="80" radius="9" color="blue" ariaLabel="loading"/></div>}
  
  { FormData.length === 0 ? 
          <div className={`min-h-screen text-indigo-800 flex ${loading ? "block" : "hidden"} font-montserat justify-center items-center`}>  This List is Empty</div>  :
     <table className="text-center  table-auto ">
            <tbody className="border">
            <tr className="border ">
                <th className="border px-2">S/N</th>
                <th className="border px-2">Avatar</th>
                <th className="border ">Name</th>
                <th className="border px-2">Identity Number</th>


            </tr>
       {FormData.map((info,i)=>
       <tr className=' '>
                      <td className="border">{i+1}.</td>
                      <td className="border flex justify-center items-center w-[70px] h-[70px]"><img src={info.Image} alt="#" className='w-[40px] h-[40px] object-cover rounded-2xl'/></td>
                      <td className="border hover:text-blue-500 hover:underline px-2"><Link to={ {pathname:`/details/${info.Name}`}}  state={info}>{info.Name}</Link></td>
                      <td className="border hover:text-blue-500 hover:underline"><Link to={ {pathname:`/details/${info.Name}`}}  state={info}>{`${info.IdNo+i}`}</Link></td>
                     
           </tr>
       )}
            </tbody>
         </table>
  }

     </div>
    </div>
  )
}

export default Admin