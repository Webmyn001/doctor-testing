import React from 'react'
import {BrowserRouter as Router ,Route, Routes, } from "react-router-dom"

import Navbar from './DOCTOR/header/Navbar'
import Home from './DOCTOR/HomePage/Home'
import Upload from './DOCTOR/Uploads/Upload'
import UploadAEC from './DOCTOR/Uploads/UploadAEC'
import LectureDetails from './DOCTOR/ViewLecture/LectureDetails'
import View from './DOCTOR/ViewLecture/View'


function App() {
  return (
    <div>

    <Router>
            <Navbar/>
       
         <Routes>
               <Route path = "/" exact element= {<Home/>}></Route>
               {/* Upload Lecture Routes */}
               <Route path = "/Upload" exact element= {<Upload/>}></Route>
               <Route path = "/upload/:id" exact element= {<UploadAEC/>}></Route>
               {/* View lecture */}
               <Route path = "/view" exact element= {<View/>}></Route>
               <Route path = "/view/:id" exact element= {<LectureDetails/>}></Route>



               
         </Routes>
         </Router> 


         
      </div>
  )
}

export default App