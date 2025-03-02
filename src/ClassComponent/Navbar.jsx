import React, { Component } from 'react'
import Home from "./Home";
import { Link } from 'react-router-dom'
import "../Style.css"

export default class Navbar extends Component {
  constructor(){
    super()
    this.state={
      search:[]
    }
  }
  postSearch(e){
    e.preventDefault()
      this.props.getSearch(this.state.search)
    
  }
  render() {
    return (
        <>
        <nav className="navbar navbar-expand-lg background">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to="/" onClick={()=>this.props.search("")}>News App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="bi bi-list text-light fs-2"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          
        </li>
        <li className="nav- link text-light active"><Link className="nav-link text-light me-3" to="/All" onClick={()=>this.props.getSearch("")} >All</Link></li>
        <li className="nav-item"><Link className="nav-link text-light me-3" to="/Politics"onClick={()=>this.props.getSearch("")}>Politics</Link></li>
        <li className="nav-item"><Link className="nav-link text-light me-3" to="/Crime"onClick={()=>this.props.getSearch("")}>Crime</Link></li>
        <li className="nav-item"><Link className="nav-link text-light me-3" to="/Education"onClick={()=>this.props.getSearch("")}>Education</Link></li>
        <li className="nav-item"><Link className="nav-link text-light me-3" to="/Science"onClick={()=>this.props.getSearch("")}>Science</Link></li>
        <li className="nav-item"><Link className="nav-link text-light me-3" to="/Technology"onClick={()=>this.props.getSearch("")}>Technology</Link></li>
        <li className="nav-item"><Link className="nav-link text-light me-3" to="/Sport"onClick={()=>this.props.getSearch("")}>Sport</Link></li>
        <li className="nav-item"><Link className="nav-link text-light me-3" to="/Cricket"onClick={()=>this.props.getSearch("")}>Cricket</Link></li>
        
        <li className="nav-item dropdown">
    
    </li>
        <li className="nav-item dropdown">
    <a className="nav-link text-light me-3 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Language
    </a>
    
    <ul className="dropdown-menu">
        <li><button className="dropdown-item" to="/Business" onClick={()=>this.props.getLanguage("hi")}>Hindi</button></li>
        <li><button className="dropdown-item" to="/Health"onClick={()=>this.props.getLanguage("en")}>English</button></li>

    </ul>
  </li>
        
      </ul>
      <form className="d-flex" role="search" onSubmit={(e)=>this.postSearch(e)}>
        <input className="form-control me-2" type="search" name= 'search' onChange={(e)=>this.setState({search:e.target.value})} placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )
  }
}
