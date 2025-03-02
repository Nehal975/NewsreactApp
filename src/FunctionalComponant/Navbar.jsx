import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Style.css";

export default function Navbar(props) {
  let [search, setSearch] = useState("");

  function postSearch(e) {
    e.preventDefault();
    props.getSearch(search);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg background">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/" onClick={() => props.getSearch("")}>
            News App
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="bi bi-list text-light fs-2"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link text-light me-3" to="/All" onClick={() => props.getSearch("")}>All</Link></li>
              <li className="nav-item"><Link className="nav-link text-light me-3" to="/Politics" onClick={() => props.getSearch("")}>Politics</Link></li>
              <li className="nav-item"><Link className="nav-link text-light me-3" to="/Crime" onClick={() => props.getSearch("")}>Crime</Link></li>
              <li className="nav-item"><Link className="nav-link text-light me-3" to="/Education" onClick={() => props.getSearch("")}>Education</Link></li>
              <li className="nav-item"><Link className="nav-link text-light me-3" to="/Science" onClick={() => props.getSearch("")}>Science</Link></li>
              <li className="nav-item"><Link className="nav-link text-light me-3" to="/Technology" onClick={() => props.getSearch("")}>Technology</Link></li>
              <li className="nav-item"><Link className="nav-link text-light me-3" to="/Sport" onClick={() => props.getSearch("")}>Sport</Link></li>
              <li className="nav-item"><Link className="nav-link text-light me-3" to="/Cricket" onClick={() => props.getSearch("")}>Cricket</Link></li>

              <li className="nav-item dropdown">
                <a className="nav-link text-light me-3 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Language
                </a>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item" onClick={() => props.getLanguage("hi")}>Hindi</button></li>
                  <li><button className="dropdown-item" onClick={() => props.getLanguage("en")}>English</button></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={postSearch}>
              <input className="form-control me-2" type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-dark" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
