import React, { Component } from 'react'
import { BrowserRouter, Routes,Route,Navigate } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Footer from './Footer'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      language:"hi",
      search:""
    }
    this.getLanguage=this.getLanguage.bind(this)
 
  }
  getLanguage(input){
    this.setState({language:input})
  }
  getSearch=(input) =>{
    this.setState({search: input})
  }
  render() {
    return (
      <BrowserRouter>
      <Navbar getLanguage={this.getLanguage} getSearch={this.getSearch}/>
     
        
      <Routes>
        
  <Route path="/" element={< Home language={this.state.language}  q={this.state.search?this.state.search:"All"} />} />
  <Route path="/All" element={< Home language={this.state.language} q={this.state.search?this.state.search:"All"} />} />
  <Route path="/Politics" element={< Home language={this.state.language} q={this.state.search?this.state.search:"Politics"} />} />
  <Route path="/Crime" element={< Home language={this.state.language} q={this.state.search?this.state.search:"Crime"} />} />
  <Route path="/Education" element={< Home language={this.state.language} q={this.state.search?this.state.search:"Education" }/>} />
  <Route path="/Technology" element={< Home language={this.state.language} q={this.state.search?this.state.search:"Technology" }/>} />
  <Route path="/Science" element={< Home language={this.state.language} q={this.state.search?this.state.search:"Science" }/>} />
  <Route path="/Sport" element={< Home language={this.state.language} q={this.state.search?this.state.search:"Sport" }/>} />
  <Route path="/Cricket" element={< Home language={this.state.language} q={this.state.search?this.state.search:"Cricket"} />} />
  <Route path="/World" element={< Home language={this.state.language} q={this.state.search?this.state.search:"World" }/>} />
  <Route path="/India" element={< Home language={this.state.language} q={this.state.search?this.state.search:"India"} />} />
  <Route path="/Jokes" element={< Home language={this.state.language} q={this.state.search?this.state.search:"Jokes" }/>} />
  </Routes>
   <Footer/>
     </BrowserRouter>
    )
  }
}
