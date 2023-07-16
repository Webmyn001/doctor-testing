import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router ,Route, Routes, } from "react-router-dom"

import Navbar from './DOCTOR/header/Navbar'
import Home from './DOCTOR/HomePage/Home'
import Upload from './DOCTOR/Uploads/Upload'
import UploadAEC from './DOCTOR/Uploads/UploadLecture'
import LectureDetails from './DOCTOR/ViewLecture/LectureDetails'
import ViewHome from './DOCTOR/ViewLecture/VeiwHome'
import View from './DOCTOR/ViewLecture/View'

import image1 from "./DOCTOR/Images/genetics.jpg"
import image2 from "./DOCTOR/Images/image2.jpg"
import image3 from "./DOCTOR/Images/image3.jpg"

import file from "./DOCTOR/Pdffiles/Introduction to agric.pdf"
import UploadLecture from './DOCTOR/Uploads/UploadLecture'


function App() {


                      //              list from data base
       // Plant Pathology lecture list from database
const ListCRP304 = [
  {
      ID: 1,
      CourseTitle : "Plant Pathology ",
      CourseCode: "CRP 304",
      Link : "View-AEC",
      Topic : " Introduction to Agriculture-1",
      Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
      Document : file
  },
  {
    ID: 1,
    CourseTitle : "Plant Pathology ",
    CourseCode: "CRP 304",
    Link : "View-AEC",
    Topic : " Introduction to Agriculture-2",
    Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
    Document : file
},
{
  ID: 1,
  CourseTitle : "Plant Pathology ",
  CourseCode: "CRP 304",
  Link : "View-AEC",
  Topic : " Introduction to Agriculture-3",
  Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
  Document : file
},
{
  ID: 1,
  CourseTitle : "Plant Pathology ",
  CourseCode: "CRP 304",
  Link : "View-AEC",
  Topic : " Introduction to Agriculture-4",
  Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
  Document : file
},
{
  ID: 1,
  CourseTitle : "Plant Pathology ",
  CourseCode: "CRP 304",
  Link : "View-AEC",
  Topic : " Introduction to Agriculture-5",
  Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
  Document : file
},

]


  // list of crp405 from database
const ListCRP405= [
  {
      ID: 2,
      CourseTitle : "Crop Protection and Disease Control",
      CourseCode: "CRP 405",
      Link : "View-CPP",
      image  : image2,
      Topic : " Introduction to Agriculture-1",
      Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
      Document : file
  },
  {
    ID: 2,
    CourseTitle : "Crop Protection and Disease Control",
    CourseCode: "CRP 405",
    Link : "View-CPP",
    image  : image2,
    Topic : " Introduction to Agriculture-2",
    Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
    Document : file
},
{
  ID: 2,
  CourseTitle : "Crop Protection and Disease Control",
  CourseCode: "CRP 405",
  Link : "View-CPP",
  image  : image2,
  Topic : " Introduction to Agriculture-3",
  Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
  Document : file
},
{
  ID: 2,
  CourseTitle : "Crop Protection and Disease Control",
  CourseCode: "CRP 405",
  Link : "View-CPP",
  image  : image2,
  Topic : " Introduction to Agriculture-4",
  Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
  Document : file
},
{
  ID: 2,
  CourseTitle : "Crop Protection and Disease Control",
  CourseCode: "CRP 405",
  Link : "View-CPP",
  image  : image2,
  Topic : " Introduction to Agriculture-5",
  Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
  Document : file
},
]


        // list of crp511 lecture from database
const ListCRP511 = [
  {  
      ID: 3,
      CourseTitle : "Soil Borne and Root Diseases ",
      CourseCode: "CRP 511",
      Link : "View-ANS",
      image  : image3,
      Topic : " Introduction to Agriculture-1",
      Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
      Document : file
  },
  {
    ID: 3,
    CourseTitle : "Soil Borne and Root Diseases ",
    CourseCode: "CRP 511",
    Link : "View-ANS",
    image  : image3,
    Topic : " Introduction to Agriculture-2",
    Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
    Document : file
},
{
  ID: 3,
  CourseTitle : "Soil Borne and Root Diseases ",
  CourseCode: "CRP 511",
  Link : "View-ANS",
  image  : image3,
  Topic : " Introduction to Agriculture-3",
  Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
  Document : file
},
{
  ID: 3,
  CourseTitle : "Soil Borne and Root Diseases ",
  CourseCode: "CRP 511",
  Link : "View-ANS",
  image  : image3,
  Topic : " Introduction to Agriculture-4",
  Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
  Document : file
},
{
  ID: 3,
  CourseTitle : "Soil Borne and Root Diseases ",
  CourseCode: "CRP 511",
  Link : "View-ANS",
  image  : image3,
  Topic : " Introduction to Agriculture-5",
  Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
  Document : file
},
]


     // list of crp512 from database
const ListCRP512 = [
  {   
      ID: 4,
      CourseTitle : " Plant Disease Control",
      CourseCode: "CRP 512",
      Link : "View-AEC",
      image  : image1,
      Topic : " Introduction to Agriculture-1",
      Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
      Document : file
  },
  {
    ID: 4,
    CourseTitle : " Plant Disease Control",
    CourseCode: "CRP 512",
    Link : "View-AEC",
    image  : image1,
    Topic : " Introduction to Agriculture-2",
    Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
    Document : file
},
{
  ID: 4,
  CourseTitle : " Plant Disease Control",
  CourseCode: "CRP 512",
  Link : "View-AEC",
  image  : image1,
  Topic : " Introduction to Agriculture-3",
  Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
  Document : file
},
{
  ID: 4,
  CourseTitle : " Plant Disease Control",
  CourseCode: "CRP 512",
  Link : "View-AEC",
  image  : image1,
  Topic : " Introduction to Agriculture-4",
  Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
  Document : file
},
{
  ID: 4,
  CourseTitle : " Plant Disease Control",
  CourseCode: "CRP 512",
  Link : "View-AEC",
  image  : image1,
  Topic : " Introduction to Agriculture-5",
  Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
  Document : file
},
]

     // list of crp305 from database

const ListCRP305 = [
  {
      ID: 5,
      CourseTitle : "Pests and Microorganisms in Agriculture",
      CourseCode: "CRP 305",
      Link : "View-CPP",
      image  : image2,
      Topic : " Introduction to Agriculture-1",
      Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
      Document : file
  },
  {
    ID: 5,
    CourseTitle : "Pests and Microorganisms in Agriculture",
    CourseCode: "CRP 305",
    Link : "View-CPP",
    image  : image2,
    Topic : " Introduction to Agriculture-2",
    Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
    Document : file
},
{
  ID: 5,
  CourseTitle : "Pests and Microorganisms in Agriculture",
  CourseCode: "CRP 305",
  Link : "View-CPP",
  image  : image2,
  Topic : " Introduction to Agriculture-3",
  Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
  Document : file
},
{
  ID: 5,
  CourseTitle : "Pests and Microorganisms in Agriculture",
  CourseCode: "CRP 305",
  Link : "View-CPP",
  image  : image2,
  Topic : " Introduction to Agriculture-4",
  Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
  Document : file
},
{
  ID: 5,
  CourseTitle : "Pests and Microorganisms in Agriculture",
  CourseCode: "CRP 305",
  Link : "View-CPP",
  image  : image2,
  Topic : " Introduction to Agriculture-5",
  Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
  Document : file
},
]


  // list of cpt503 from database
const ListCPT503  = [
  {
      ID: 6,
      CourseTitle : "Principles of Nematology",
      CourseCode: "CPT 503",
      Link : "View-ANS",
      image  : image3,
      Topic : " Introduction to Agriculture-1",
      Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
      Document : file
  },
  {
    ID: 6,
    CourseTitle : "Principles of Nematology",
    CourseCode: "CPT 503",
    Link : "View-ANS",
    image  : image3,
    Topic : " Introduction to Agriculture-2",
    Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
    Document : file
},
{
  ID: 6,
  CourseTitle : "Principles of Nematology",
  CourseCode: "CPT 503",
  Link : "View-ANS",
  image  : image3,
  Topic : " Introduction to Agriculture-3",
  Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
  Document : file
},
{
  ID: 6,
  CourseTitle : "Principles of Nematology",
  CourseCode: "CPT 503",
  Link : "View-ANS",
  image  : image3,
  Topic : " Introduction to Agriculture-4",
  Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
  Document : file
},
{
  ID: 6,
  CourseTitle : "Principles of Nematology",
  CourseCode: "CPT 503",
  Link : "View-ANS",
  image  : image3,
  Topic : " Introduction to Agriculture-5",
  Description : "Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock.",
  Document : file
},

 ]
     
   
     
     const [LectureListCPT503, setLectureListCPT503] =useState([])
     const [LectureListCRP305, setLectureListCRP305] =useState([])
     const [LectureListCRP512, setLectureListCRP512] =useState([])
     const [LectureListCRP511, setLectureListCRP511] =useState([])
     const [LectureListCRP405, setLectureListCRP405] =useState([])
     const [LectureListCRP304, setLectureListCRP304] =useState([])



   useEffect(() => {
      setLectureListCPT503(ListCPT503)
      setLectureListCRP304(ListCRP304)
      setLectureListCRP305(ListCRP305)
      setLectureListCRP511(ListCRP511)
      setLectureListCRP405(ListCRP405)
      setLectureListCRP512(ListCRP512)


        }, [])


  return (
    <div>

    <Router>
            <Navbar/>
       
         <Routes>
               <Route path = "/" exact element= {<Home/>}></Route>
               {/* Upload Lecture Routes */}
               <Route path = "/Upload" exact element= {<Upload/>}></Route>
               <Route path = "/upload/:id" exact element= {<UploadLecture/>}></Route>
               {/* View lecture */}
               <Route path = "/view" exact element= {<ViewHome/>}></Route>
               <Route path = "/view/:id" exact element= {
               <View 
               LectureListCPT503={LectureListCPT503} 
               LectureListCRP304={LectureListCRP304}
               LectureListCRP305={LectureListCRP305} 
               LectureListCRP405={LectureListCRP405} 
               LectureListCRP511={LectureListCRP511} 
               LectureListCRP512={LectureListCRP512}
               /> }>

               </Route>
               <Route path = "/lecturedetails/:id" exact element= {<LectureDetails/>}></Route>



               
         </Routes>
         </Router> 


         
      </div>
  )
}

export default App