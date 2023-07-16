import React, { useEffect } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import image1 from "../Images/genetics.jpg"
import image2 from "../Images/image2.jpg"
import image3 from "../Images/image3.jpg"
import {Link} from "react-router-dom";

import file from "../Pdffiles/Demand and Supply.pdf"
import {BiDownload} from "react-icons/bi"
import {FaBookOpen} from "react-icons/fa"



import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";
import Upload from '../Uploads/Upload'


function Home() {

  useEffect(()=> {
    AOS.init({duration:2000})

},[])

     // to be deleted and to get the info from APP after fetching it from data base

                  // Plant Pathology lecture list from database
const ListCRP304 = [
  {
      CourseTitle : "Plant Pathology ",
      CourseCode: "CRP 304",
      Link : "View-AEC",
      Topic : " Introduction to Agriculture-1",
      Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
      Document : file
  },
  {
    CourseTitle : "Plant Pathology ",
    CourseCode: "CRP 304",
    Link : "View-AEC",
    Topic : " Introduction to Agriculture-2",
    Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
    Document : file
},
{
  CourseTitle : "Plant Pathology ",
  CourseCode: "CRP 304",
  Link : "View-AEC",
  Topic : " Introduction to Agriculture-3",
  Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
  Document : file
},
]


  // list of crp405 from database
const ListCRP405= [
  {
      CourseTitle : "Crop Protection and Disease Control",
      CourseCode: "CRP 405",
      Link : "View-CPP",
      image  : image2,
      Topic : " Introduction to Agriculture-1",
      Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
      Document : file
  },
  {
    CourseTitle : "Crop Protection and Disease Control",
    CourseCode: "CRP 405",
    Link : "View-CPP",
    image  : image2,
    Topic : " Introduction to Agriculture-2",
    Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
    Document : file
},
{
  CourseTitle : "Crop Protection and Disease Control",
  CourseCode: "CRP 405",
  Link : "View-CPP",
  image  : image2,
  Topic : " Introduction to Agriculture-3",
  Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
  Document : file
},
]


        // list of crp511 lecture from database
const ListCRP511 = [
  {
      CourseTitle : "Soil Borne and Root Diseases ",
      CourseCode: "CRP 511",
      Link : "View-ANS",
      image  : image3,
      Topic : " Introduction to Agriculture-1",
      Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
      Document : file
  },
  {
    CourseTitle : "Soil Borne and Root Diseases ",
    CourseCode: "CRP 511",
    Link : "View-ANS",
    image  : image3,
    Topic : " Introduction to Agriculture-2",
    Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
    Document : file
},
{
  CourseTitle : "Soil Borne and Root Diseases ",
  CourseCode: "CRP 511",
  Link : "View-ANS",
  image  : image3,
  Topic : " Introduction to Agriculture-3",
  Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
  Document : file
},
]


     // list of crp512 from database
const ListCRP512 = [
  {
      CourseTitle : " Plant Disease Control",
      CourseCode: "CRP 512",
      Link : "View-AEC",
      image  : image1,
      Topic : " Introduction to Agriculture-1",
      Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
      Document : file
  },
  {
    CourseTitle : " Plant Disease Control",
    CourseCode: "CRP 512",
    Link : "View-AEC",
    image  : image1,
    Topic : " Introduction to Agriculture-2",
    Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
    Document : file
},
{
  CourseTitle : " Plant Disease Control",
  CourseCode: "CRP 512",
  Link : "View-AEC",
  image  : image1,
  Topic : " Introduction to Agriculture-3",
  Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
  Document : file
},
]

     // list of crp305 from database

const ListCRP305 = [
  {
      CourseTitle : "Pests and Microorganisms in Agriculture",
      CourseCode: "CRP 305",
      Link : "View-CPP",
      image  : image2,
      Topic : " Introduction to Agriculture-1",
      Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
      Document : file
  },
  {
    CourseTitle : "Pests and Microorganisms in Agriculture",
    CourseCode: "CRP 305",
    Link : "View-CPP",
    image  : image2,
    Topic : " Introduction to Agriculture-2",
    Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
    Document : file
},
{
  CourseTitle : "Pests and Microorganisms in Agriculture",
  CourseCode: "CRP 305",
  Link : "View-CPP",
  image  : image2,
  Topic : " Introduction to Agriculture-3",
  Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
  Document : file
},
]


  // list of cpt503 from database
const ListCPT503  = [
  {
      CourseTitle : "Principles of Nematology",
      CourseCode: "CPT 503",
      Link : "View-ANS",
      image  : image3,
      Topic : " Introduction to Agriculture-1",
      Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
      Document : file
  },
  {
    CourseTitle : "Principles of Nematology",
    CourseCode: "CPT 503",
    Link : "View-ANS",
    image  : image3,
    Topic : " Introduction to Agriculture-2",
    Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
    Document : file
},
{
  CourseTitle : "Principles of Nematology",
  CourseCode: "CPT 503",
  Link : "View-ANS",
  image  : image3,
  Topic : " Introduction to Agriculture-3",
  Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
  Document : file
},

 ]

    // to get latest lecture uploaded, first 3 lecture uploaded
   const LatestListCPT503 = ListCPT503.slice(0,3)
   const LatestListCRP304 = ListCRP304.slice(0,3)
   const LatestListCRP305 = ListCRP305.slice(0,3)
   const LatestListCRP405 = ListCRP405.slice(0,3)
   const LatestListCRP511 = ListCRP511.slice(0,3)
   const LatestListCRP512 = ListCRP512.slice(0,3)

  return (
    <div className='bg-[#f5f5f5] w-full min-h-screen'>
   <h1 className='text-center font-semibold font-serif bg-gradient-to-r text-gray-900 from-indigo-800 to-cyan-600 pt-[12px]'>Admin Page</h1> 
   <h1 className=' pt-3 px-4 sm:pl-9 font-normal font-serif text-indigo-800'><span className='flex items-center justify-start gap-x-1 ' ><AiFillPlusCircle/>Recent Lectures Uploaded</span></h1>

                                                {/*Plant Pathology (CRP 304)*/}
   <h1 className='text-center font-bold text-gray-900 bg-gradient-to-r from-indigo-800 to-cyan-600 '> Plant Pathology (CRP 304)</h1>

                  {
                        LatestListCRP304.map((info,i) => (
                            
                          <div  key={i} className="flex items-center justify-center " data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px] transition-all duration-300  border-indigo-800 
                              items-center text-indigo-800 
                             justify-cente w-[300px] md:w-[400px] h-fit  shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/lecturedetails/${info.Link}`}}  state={info}>
                              
                              <div className=" ">
                                <h1 className=" font-bold  text-center pt-1 mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center p-2  ">  {info.CourseCode} </h1>
                              </div>
       <div className='text-center'>
                <h1 className=' text-[15px] font-bold px-2 text-indigo-700 '>{info.Topic}  </h1>
                <h3 className='font-mono pb-3 pt-2'>View</h3>
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
                        LatestListCRP405.map((info,i) => (
                            
                          <div  key={i} className="flex items-center justify-center " data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px] transition-all duration-300  border-indigo-800 
                              items-center text-indigo-800 
                             justify-cente w-[300px] md:w-[400px] h-fit  shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/lecturedetails/${info.Link}`}}  state={info}>
                              
                              <div className=" ">
                                <h1 className=" font-bold  text-center pt-1 mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center p-2  ">  {info.CourseCode} </h1>
                              </div>
          
          <div className='text-center'>
                <h1 className=' text-[15px] font-bold px-2 text-indigo-700 '>{info.Topic}  </h1>
                <h3 className='font-mono pb-3 pt-2'>View</h3>
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
                        LatestListCRP511.map((info,i) => (
                            
                          <div  key={i} className="flex items-center justify-center " data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px] transition-all duration-300  border-indigo-800 
                              items-center text-indigo-800 
                             justify-cente w-[300px] md:w-[400px] h-fit  shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/lecturedetails/${info.Link}`}}  state={info}>
                              
                              <div className=" ">
                                <h1 className=" font-bold  text-center pt-1 mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center p-2  ">  {info.CourseCode} </h1>
                              </div>
                              
                        <div className='text-center'>
                <h1 className=' text-[15px] font-bold px-2 text-indigo-700 '>{info.Topic}  </h1>
                <h3 className='font-mono pb-3 pt-2'>View</h3>
                       </div>              

                         </Link>
                            </button>
                            </div>
                        </div>
                        ))
                    }    {/* CRP 512*/}
   <h1 className=' pt-3 px-4 sm:pl-9 font-normal font-serif text-indigo-800'><span className='flex items-center justify-start gap-x-1 ' ><AiFillPlusCircle/>Recent Lectures Uploaded</span></h1>
  <h1 className='text-center font-bold text-gray-900 bg-gradient-to-r from-indigo-800 to-cyan-600 '> Plant Disease Control  (CRP512)</h1>
           
  {
                        LatestListCRP512.map((info,i) => (
                            
                          <div  key={i} className="flex items-center justify-center " data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px] transition-all duration-300  border-indigo-800 
                              items-center text-indigo-800 
                             justify-cente w-[300px] md:w-[400px] h-fit  shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/lecturedetails/${info.Link}`}}  state={info}>
                              
                              <div className=" ">
                                <h1 className=" font-bold  text-center pt-1 mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center p-2  ">  {info.CourseCode} </h1>
                              </div>
        
        <div className='text-center'>
                <h1 className=' text-[15px] font-bold px-2 text-indigo-700 '>{info.Topic}  </h1>
                <h3 className='font-mono pb-3 pt-2'>View</h3>
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
                        LatestListCRP305.map((info,i) => (
                            
                          <div  key={i} className="flex items-center justify-center " data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px] transition-all duration-300  border-indigo-800 
                              items-center text-indigo-800 
                             justify-cente w-[300px] md:w-[400px] h-fit  shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/lecturedetails/${info.Link}`}}  state={info}>
                              
                              <div className=" ">
                                <h1 className=" font-bold  text-center pt-1 mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center p-2  ">  {info.CourseCode} </h1>
                              </div>
                              
                              
          <div className='text-center'>
                <h1 className=' text-[15px] font-bold px-2 text-indigo-700 '>{info.Topic}  </h1>
                <h3 className='font-mono pb-3 pt-2'>View</h3>
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
                        LatestListCPT503.map((info,i) => (
                            
                          <div  key={i} className="flex items-center justify-center " data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px] transition-all duration-300  border-indigo-800 
                              items-center text-indigo-800 
                             justify-cente w-[300px] md:w-[400px] h-fit  shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/lecturedetails/${info.Link}`}}  state={info}>
                              
                              <div className=" ">
                                <h1 className=" font-bold  text-center pt-1 mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center p-2  ">  {info.CourseCode} </h1>
                              </div>
                              
        <div className='text-center'>
                <h1 className=' text-[15px] font-bold px-2 text-indigo-700 '>{info.Topic}  </h1>
                <h3 className='font-mono pb-3 pt-2'>View</h3>
        </div>              

                         </Link>
                            </button>
                            </div>
                        </div>
                        ))
                    }
                    <Footer/>
</div>
)
}

export default Home