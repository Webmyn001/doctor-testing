

import {React,useEffect, useState} from "react";
import image1 from "../Images/genetics.jpg"
import image2 from "../Images/image2.jpg"
import image3 from "../Images/image3.jpg"


import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";
import {Link, useLocation} from "react-router-dom"
import {ThreeDots} from "react-loader-spinner"





function ViewCrp511 (props) {


    const location = useLocation()
     const data = location.state
     
    console.log(props.LectureList1)
                
    const ArrayList = props.LectureListCRP511      


     console.log(data)

           

       


             
    useEffect(()=> {
                     AOS.init({duration:2000})

                },[])

       return (
               < >
          <div className="bg-[#f5f5f5] w-full min-h-screen">
          <h1 className="text-center font-bold text-gray-900 bg-gradient-to-r from-indigo-800 to-cyan-600" data-aos="fade-left"> {data.CourseTitle}  {data.CourseCode}</h1>
          {console.log(props)}
          {props.loading ?<div></div>:<div className="flex min-h-screen justify-center items-center text-xl font-bold">loading<ThreeDots height="80" width="80" radius="9" color="blue" ariaLabel="loading"/></div>}
          { ArrayList.length === 0 ? 
          <div className={`min-h-screen text-gray-900 flex ${props.loading ? "block" : "hidden"} justify-center items-center`}>There is No Lecture Available</div>  :
                  ArrayList.map((info,i) => (
                         <div  key={i} className={`flex items-center ${props.loading ? "block" : "hidden"} justify-center `} data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px] transition-all duration-300  border-indigo-800 
                              items-center text-indigo-800 
                             justify-cente w-[300px] md:w-[400px] h-fit  shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/lecturedetails/${info.Link}`}}  state={info}>
                              
                              <div className=" ">
                                <h1 className=" font-bold  text-center pt-1 mt-2">  {data.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center p-2  ">  {data.CourseCode} </h1>
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

     export default ViewCrp511;
