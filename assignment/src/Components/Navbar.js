import React from 'react'
import './CSS/navbar.css'
const Navbar = () => {
  return (
    <div className="header">

<nav className="navbar">
            <a href="#home">About Us</a>
            <a href="#features">Menu</a>
            <a href="#categories">Reservation</a>
        </nav>


        <a href="#" className="logo">Touché</a>
        
        <nav className="navbar">
            <a href="#home">About Us</a>
            <a href="#features">Menu</a>
            <a href="#categories">Reservation</a>
        </nav>


{/* 
        <div className="icons">
            <div className="fas fa-bars" id="menu-btn"></div>
            <div className="fas fa-search" id="search-btn"></div>
            <div className="fas fa-user" id="login-btn"></div>
        </div>
        <div action="" className="search-div">
            <input type="search" id="search-box" placeholder="search here..."/>
            <label for="search-box" className="fas fa-search"></label>
        </div>
         */}
    </div>
  )
}

export default Navbar;
