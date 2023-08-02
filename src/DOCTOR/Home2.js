import React, { useEffect } from 'react'
import image3 from "./Images/image3.jpg"

import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect"
import { Link } from 'react-router-dom';

import {Swiper, SwiperSlide} from "swiper/react"

import {Autoplay} from "swiper"
import "swiper/css"
import "swiper/css/navigation"






function Home2() {

  useEffect(()=> {
    AOS.init({duration:2000})

},[])
 


 const Courses = 
      [
           {
          courseTitle : "Agriculturtral economics",
          Image : image3,
          Description  : "iut iug hg dfhg if fehgg i fsi fshghgh rs iuhg fhgf fe  frehfr hfei f ff yugri fa gd fg",
           },
            {
            courseTitle : "Agriculturtral economics",
            Image : image3,
            Description  : "iut iug hg dfhg if fehgg i fsi fshghgh rs iuhg fhgf fe  frehfr hfei f ff yugri fa gd fg",
            },

            {
              courseTitle : "Agriculturtral economics",
              Image : image3,
              Description  : "iut iug hg dfhg if fehgg i fsi fshghgh rs iuhg fhgf fe  frehfr hfei f ff yugri fa gd fg",
            },

            {
                courseTitle : "Agriculturtral economics",
                Image : image3,
                Description  : "iut iug hg dfhg if fehgg i fsi fshghgh rs iuhg fhgf fe  frehfr hfei f ff yugri fa gd fg",
            },

            {
                  courseTitle : "Agriculturtral economics",
                  Image : image3,
                  Description  : "iut iug hg dfhg if fehgg i fsi fshghgh rs iuhg fhgf fe  frehfr hfei f ff yugri fa gd fg",
             },

      ]


  return (
    <div className='bg-[#f5f5f5] text-gray-900 w-full min-h-screen '>
  
    <h1 className='text-center font-semibold font-serif bg-gradient-to-r text-white from-indigo-800 to-cyan-600 pt-[12px]'>Home Page</h1>

     {/* container */}
     <div className=' flex flex-col justify-center items-center pt-2 md:flex-row md:justify-between md:px-7 md:py-4
     bg-gradient-to-tr from-[#7cb9e8] to-[#f0f8ff] rounded-b-[50px] drop-shadow-sm'>
      {/* image */}
        <div>
          <img src={image3} className="rounded-full h-[300px] w-[300px] object-cover " data-aos="fade-right" alt='ef'/>
          </div>
       {/* text */}
        <div className='max-w-[300px] px-3 py-4 sm:max-w-[500px]'>
      <h3>
          <Typewriter 
          options={{
            autoStart:true,
            loop:false,
            delay:50,
            strings:"jhiooi  eifh eiufei f eufh efh  aF  kgf a a FYAF A FB A  SUGF  fiug af  fag fdah afg  asfg fa  fasgf afga fjg s  jg aghf  ay f  sfg h a  shg fr g fasgfg fs f hsgfsf g sgfgdsyf fvffsgf a sdfhafiu fahywhrh aui fgffhv  fgdfgg ahf g gsafhfgLHF V AIVBSAhhv"
          }}
          />
            
      </h3>
        </div>
          
     </div>
     {/* recent leture uploaded */}
              <div>
                <Swiper 
                spaceBetween={10}
                centeredSlides={true}
                autoplay= {
                            {
                            delay:3000,
                            disableOnInteraction:false,
                            }
                          }
                modules={[Autoplay]}>

                     {Courses.map((course,i) => (
                      <SwiperSlide key={i} className='flex justify-center text-indigo-800 items-center  h-fit'>
                        <div className='border-2 flex flex-col pb-3 items-center max-w-[300px] sm:max-w-[400px] justify-center border-indigo-800 mt-[30px] rounded-lg bg-white'>
                          <img src={course.Image} alt="em" className='w-[300px] sm:w-[400px] h-[200px] object-cover'/>
                          <h1 className='px-3 font-bold'>{course.courseTitle}</h1>
                          <h1 className='px-3'>{course.Description}</h1>
                        </div>
                      </SwiperSlide>
                     ))}
                     
                     </Swiper>
               </div>
      {/* for more info. */}
      <div className='p-4 text-center bg-gradient-to-tr flex  items-center justify-center from-[#7cb9e8] to-[#f0f8ff] mt-[30px] h-[50px] rounded-t-[50px] drop-shadow-sm'>
        <div className='text-indigo-800 font-medium font-serif'>For more information,
             <Link to="/contact">
               <button className='text-blue-500 '> 
                  <h1 className='px-1'> Click here</h1>
               </button>
            </Link> 
          </div>
        </div>
              
      
    </div>
  )
}

export default Home2