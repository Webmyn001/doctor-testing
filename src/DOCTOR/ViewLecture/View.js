

import {React,useEffect, useState} from "react";
import {Link} from "react-router-dom";
import image1 from "../Images/genetics.jpg"
import image2 from "../Images/image2.jpg"
import image3 from "../Images/image3.jpg"


import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";





function View (props) {

    
  
    const UploadList = [
        {
            CourseTitle : "Plant Pathology ",
            CourseCode: "CRP 304",
            Link : "View-AEC",
            image  : image1,
            Topic : " Demand and supply-1",
            Description : "Headings must have content and the content must be accessible by a screen reader",
        },
        {
            CourseTitle : "Crop Protection and Disease Control",
            CourseCode: "CRP 405",
            Link : "View-CPP",
            image  : image2,
            Topic : " Demand and supply-2",
            Description : "Headings must have content and the content must be accessible by a screen reader",
        },
        {
            CourseTitle : "Soil Borne and Root Diseases ",
            CourseCode: "CRP 511",
            Link : "View-ANS",
            image  : image3,
            Topic : " Demand and supply-3",
            Description : "Headings must have content and the content must be accessible by a screen reader",
        },
        {
            CourseTitle : " Plant Disease Control",
            CourseCode: "CRP 512",
            Link : "View-AEC",
            image  : image1,
            Topic : " Demand and supply-4",
            Description : "Headings must have content and the content must be accessible by a screen reader",
        },
        {
            CourseTitle : "Pests and Microorganisms in Agriculture",
            CourseCode: "CRP 305",
            Link : "View-CPP",
            image  : image2,
            Topic : " Demand and supply-5",
            Description : "Headings must have content and the content must be accessible by a screen reader",
        },
        {
            CourseTitle : "Principles of Nematology",
            CourseCode: "CPT 503",
            Link : "View-ANS",
            image  : image3,
            Topic : " Demand and supply-6",
            Description : "Headings must have content and the content must be accessible by a screen reader",
        },
       ]
             
              
    
    useEffect(()=> {
                     AOS.init({duration:2000})

                },[])

       return (
               < >
          <div className="bg-[#f5f5f5] w-full min-h-screen">
          <h1 className="font-medium text-center text-indigo-800 pt-4 px-2 text-xl" data-aos="fade-left"> Posted Lectures</h1>
          {
                        LatestList.map((info,i) => (
                            
                          <div  key={i} className="flex items-center justify-center " data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px] transition-all duration-300  border-indigo-800 
                              items-center text-indigo-800 
                             justify-cente w-[300px] md:w-[400px] h-fit  shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/view/${info.Link}`}}  state={info}>
                              
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
                
              </>
              );
                   }

     export default View;
