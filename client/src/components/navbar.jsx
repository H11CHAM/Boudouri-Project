import React from "react";
import './navbar.css'

function Navbar(props){
   return <>
   <nav className="navbar navbar-expand-lg fixed-top ">
    <div className="container-fluid">
       <a href="#" className="navbar-brand">
        
        Hicham
       </a>
       <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-ns-target="navBarNav" aria-controls="navBarNav" aria-expanded="false">
       <span class="navbar-toggler-icon"></span></button>    
            <div className="collapse navbar-collapse">
                <div className="navbar-nav" id="#navbarItemsCont">
                    <a href="#" className="nav-link"></a>
                    <a href="#" className="nav-link"></a>
                    <a href="#" className="nav-link"></a>
                </div>
    
            </div>
            <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

      </div>
   </nav>
   
   
   
   
   
   </>



}
export default Navbar;