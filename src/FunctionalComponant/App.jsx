import React, { useState } from 'react'
import { BrowserRouter, Routes,Route,Navigate } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Footer from './Footer'
export default function App (){
 let[language,setLanguage]=useState("hi")
 let[search,setSearch]=useState("")

 function getLanguage(input) {
  setLanguage(input)
}
  let getSearch=(input)=> {
    setSearch(input)
  }
 
    return (
      <BrowserRouter>
      
      <Navbar getLanguage={getLanguage} getSearch={getSearch}/>
      <Routes>
  <Route path="" element={< Home language={ language}  q={ search? search:"All"} />} />
  <Route path="/All" element={< Home language={ language} q={ search? search:"All"} />} />
  <Route path="/Politics" element={< Home language={ language} q={ search? search:"Politics"} />} />
  <Route path="/Crime" element={< Home language={ language} q={ search? search:"Crime"} />} />
  <Route path="/Education" element={< Home language={ language} q={ search? search:"Education" }/>} />
  <Route path="/Technology" element={< Home language={ language} q={ search? search:"Technology" }/>} />
  <Route path="/Science" element={< Home language={ language} q={ search? search:"Science" }/>} />
  <Route path="/Sport" element={< Home language={ language} q={ search? search:"Sport" }/>} />
  <Route path="/Cricket" element={< Home language={ language} q={ search? search:"Cricket"} />} />
  <Route path="/World" element={< Home language={ language} q={ search? search:"World" }/>} />
  <Route path="/India" element={< Home language={ language} q={ search? search:"India"} />} />
  <Route path="/Jokes" element={< Home language={ language} q={ search? search:"Jokes" }/>} />
  </Routes>
   <Footer/>
     </BrowserRouter>
    )
  }

