import React, { useEffect } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import image1 from "../Images/genetics.jpg"
import image2 from "../Images/image2.jpg"
import image3 from "../Images/image3.jpg"
import {Link} from "react-router-dom";


import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";
import Upload from '../Uploads/Upload'


function Home() {

  useEffect(()=> {
    AOS.init({duration:2000})

},[])

  const UploadList = [
    {
        CourseTitle : "Plant Pathology ",
        CourseCode: "CRP 304",
        Link : "View-AEC",
        image  : image1,
        Topic : " Demand and supply",
        Description : "Headings must have content and the content must be accessible by a screen reader",
    },
    {
        CourseTitle : "Crop Protection and Disease Control",
        CourseCode: "CRP 405",
        Link : "View-CPP",
        image  : image2,
        Topic : " Demand and supply",
        Description : "Headings must have content and the content must be accessible by a screen reader",
    },
    {
        CourseTitle : "Soil Borne and Root Diseases ",
        CourseCode: "CRP 511",
        Link : "View-ANS",
        image  : image3,
        Topic : " Demand and supply",
        Description : "Headings must have content and the content must be accessible by a screen reader",
    },
    {
        CourseTitle : " Plant Disease Control",
        CourseCode: "CRP 512",
        Link : "View-AEC",
        image  : image1,
        Topic : " Demand and supply",
        Description : "Headings must have content and the content must be accessible by a screen reader",
    },
    {
        CourseTitle : "Pests and Microorganisms in Agriculture",
        CourseCode: "CRP 305",
        Link : "View-CPP",
        image  : image2,
        Topic : " Demand and supply",
        Description : "Headings must have content and the content must be accessible by a screen reader",
    },
    {
        CourseTitle : "Principles of Nematology",
        CourseCode: "CPT 503",
        Link : "View-ANS",
        image  : image3,
        Topic : " Demand and supply",
        Description : "Headings must have content and the content must be accessible by a screen reader",
    },
   ]
              
    

   const LatestList = UploadList.slice(0,3)
  return (
    <div className='bg-[#f5f5f5] w-full min-h-screen'>
   <h1 className='text-center font-semibold font-serif bg-gradient-to-r text-gray-900 from-indigo-800 to-cyan-600 pt-[12px]'>Admin Page</h1> 
   <h1 className=' pt-3 px-4 sm:pl-9 font-normal font-serif text-indigo-800'><span className='flex items-center justify-start gap-x-1 ' ><AiFillPlusCircle/>Recent Lectures Uploaded</span></h1>

                                                {/*Plant Pathology (CRP 304)*/}
   <h1 className='text-center font-bold text-gray-900 bg-gradient-to-r from-indigo-800 to-cyan-600 '> Plant Pathology (CRP 304)</h1>

                  {
                        LatestList.map((info,i) => (
                            
                          <div  key={i} className="flex items-center justify-center " data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px]  duration-500 hover:border-indigo-800 
                             hover:bg-indigo-800 items-center hover:text-white hover:drop-shadow-[0px_9px_4px_rgba(23,255,120,0.3)] 
                             justify-cente w-[300px] md:w-[400px] h-[400px] sm:h-[500px] shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/view/${info.Link}`}}  state={info}>
                                <img src={info.image} alt="Sorry! Not Found" className={`"rounded-lg 
                              text-2xl h-[300px] shadow-sm  ${info.image_url=== null? "hidden" : "block" } 
                              sm:w-[400px] md:w-[500px] sm:h-[400px] object-cover w-[200px]"`}/>

                              <div className="  hover:text-white w-full  ">
                                <h1 className=" font-bold  text-center pt-1  mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center pt-2  ">  {info.CourseCode} </h1>
                              </div>
                         </Link>
                            </button>
                            </div>
                        </div>
                        ))
                    }
                             {/* Crop Protection and Disease Control (CRP 405)*/}
   <h1 className=' pt-3 px-4 sm:pl-9 font-normal font-serif text-indigo-800'><span className='flex items-center justify-start gap-x-1 ' ><AiFillPlusCircle/>Recent Lectures Uploaded</span></h1>
 <h1 className='text-center font-bold text-gray-900 bg-gradient-to-r from-indigo-800 to-cyan-600 '> Crop Protection and Disease Control (CRP 405)</h1>
            
                  {
                        LatestList.map((info,i) => (
                            
                          <div  key={i} className="flex items-center justify-center " data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px]  duration-500 hover:border-indigo-800 
                             hover:bg-indigo-800 items-center hover:text-white hover:drop-shadow-[0px_9px_4px_rgba(23,255,120,0.3)] 
                             justify-cente w-[300px] md:w-[400px] h-[400px] sm:h-[500px] shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/view/${info.Link}`}}  state={info}>
                                <img src={info.image} alt="Sorry! Not Found" className={`"rounded-lg 
                              text-2xl h-[300px] shadow-sm  ${info.image_url=== null? "hidden" : "block" } 
                              sm:w-[400px] md:w-[500px] sm:h-[400px] object-cover w-[200px]"`}/>

                              <div className="  hover:text-white w-full  ">
                                <h1 className=" font-bold  text-center pt-1  mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center pt-2  ">  {info.CourseCode} </h1>
                              </div>
                         </Link>
                            </button>
                            </div>
                        </div>
                        ))
                    }
                             {/* Soil Borne and Root Diseases (CRP 511)*/}
   <h1 className=' pt-3 px-4 sm:pl-9 font-normal font-serif text-indigo-800'><span className='flex items-center justify-start gap-x-1 ' ><AiFillPlusCircle/>Recent Lectures Uploaded</span></h1>
    <h1 className='text-center font-bold text-gray-900 bg-gradient-to-r from-indigo-800 to-cyan-600 '>Soil Borne and Root Diseases (CRP 511)</h1>
             
                  {
                        LatestList.map((info,i) => (
                            
                          <div  key={i} className="flex items-center justify-center " data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px]  duration-500 hover:border-indigo-800 
                             hover:bg-indigo-800 items-center hover:text-white hover:drop-shadow-[0px_9px_4px_rgba(23,255,120,0.3)] 
                             justify-cente w-[300px] md:w-[400px] h-[400px] sm:h-[500px] shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/view/${info.Link}`}}  state={info}>
                                <img src={info.image} alt="Sorry! Not Found" className={`"rounded-lg 
                              text-2xl h-[300px] shadow-sm  ${info.image_url=== null? "hidden" : "block" } 
                              sm:w-[400px] md:w-[500px] sm:h-[400px] object-cover w-[200px]"`}/>

                              <div className="  hover:text-white w-full  ">
                                <h1 className=" font-bold  text-center pt-1  mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center pt-2  ">  {info.CourseCode} </h1>
                              </div>
                         </Link>
                            </button>
                            </div>
                        </div>
                        ))
                    }
                             {/* CRP 512*/}
   <h1 className=' pt-3 px-4 sm:pl-9 font-normal font-serif text-indigo-800'><span className='flex items-center justify-start gap-x-1 ' ><AiFillPlusCircle/>Recent Lectures Uploaded</span></h1>
  <h1 className='text-center font-bold text-gray-900 bg-gradient-to-r from-indigo-800 to-cyan-600 '> Plant Disease Control  (CRP512)</h1>
           
                  {
                        LatestList.map((info,i) => (
                            
                          <div  key={i} className="flex items-center justify-center " data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px]  duration-500 hover:border-indigo-800 
                             hover:bg-indigo-800 items-center hover:text-white hover:drop-shadow-[0px_9px_4px_rgba(23,255,120,0.3)] 
                             justify-cente w-[300px] md:w-[400px] h-[400px] sm:h-[500px] shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/view/${info.Link}`}}  state={info}>
                                <img src={info.image} alt="Sorry! Not Found" className={`"rounded-lg 
                              text-2xl h-[300px] shadow-sm  ${info.image_url=== null? "hidden" : "block" } 
                              sm:w-[400px] md:w-[500px] sm:h-[400px] object-cover w-[200px]"`}/>

                              <div className="  hover:text-white w-full  ">
                                <h1 className=" font-bold  text-center pt-1  mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center pt-2  ">  {info.CourseCode} </h1>
                              </div>
                         </Link>
                            </button>
                            </div>
                        </div>
                        ))
                    }

                             {/* Pests and Microorganisms in Agriculture  (CRP305)*/}
   <h1 className=' pt-3 px-4 sm:pl-9 font-normal font-serif text-indigo-800'><span className='flex items-center justify-start gap-x-1 ' ><AiFillPlusCircle/>Recent Lectures Uploaded</span></h1>
<h1 className='text-center font-bold text-gray-900 bg-gradient-to-r from-indigo-800 to-cyan-600 '>Pests and Microorganisms in Agriculture  (CRP305)</h1>
            
                  {
                        LatestList.map((info,i) => (
                            
                          <div  key={i} className="flex items-center justify-center " data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px]  duration-500 hover:border-indigo-800 
                             hover:bg-indigo-800 items-center hover:text-white hover:drop-shadow-[0px_9px_4px_rgba(23,255,120,0.3)] 
                             justify-cente w-[300px] md:w-[400px] h-[400px] sm:h-[500px] shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/view/${info.Link}`}}  state={info}>
                                <img src={info.image} alt="Sorry! Not Found" className={`"rounded-lg 
                              text-2xl h-[300px] shadow-sm  ${info.image_url=== null? "hidden" : "block" } 
                              sm:w-[400px] md:w-[500px] sm:h-[400px] object-cover w-[200px]"`}/>

                              <div className="  hover:text-white w-full  ">
                                <h1 className=" font-bold  text-center pt-1  mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center pt-2  ">  {info.CourseCode} </h1>
                              </div>
                         </Link>
                            </button>
                            </div>
                        </div>
                        ))
                    }
                             {/* CPT 503*/}
   <h1 className=' pt-3 px-4 sm:pl-9 font-normal font-serif text-indigo-800'><span className='flex items-center justify-start gap-x-1 ' ><AiFillPlusCircle/>Recent Lectures Uploaded</span></h1>
  <h1 className='text-center font-bold bg-gradient-to-r text-gray-900 from-indigo-800 to-cyan-600 '>Principles of Nematology (CPT503)</h1>
            
                  {
                        LatestList.map((info,i) => (
                            
                          <div  key={i} className="flex items-center justify-center " data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px]  duration-500 hover:border-indigo-800 
                             hover:bg-indigo-800 items-center hover:text-white hover:drop-shadow-[0px_9px_4px_rgba(23,255,120,0.3)] 
                             justify-cente w-[300px] md:w-[400px] h-[400px] sm:h-[500px] shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/view/${info.Link}`}}  state={info}>
                                <img src={info.image} alt="Sorry! Not Found" className={`"rounded-lg 
                              text-2xl h-[300px] shadow-sm  ${info.image_url=== null? "hidden" : "block" } 
                              sm:w-[400px] md:w-[500px] sm:h-[400px] object-cover w-[200px]"`}/>

                              <div className="  hover:text-white w-full  ">
                                <h1 className=" font-bold  text-center pt-1  mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center pt-2  ">  {info.CourseCode} </h1>
                              </div>
                         </Link>
                            </button>
                            </div>
                        </div>
                        ))
                    }
</div>
)
}

export default Home