import React from 'react'
import Link from "next/link";
import "src/styles/globals.css";

const Navbar = () => {
  return (

    //Create div container for navigation and link
    //to resume
    <div className='navbar-container'>
      <div className="logo">
        <Link href="/" >
          Jonathan's Portfolio
        </Link>
      </div>
        <a href='https://drive.google.com/file/d/1Vr0ALQ1BIYc2pOPF4C8-dXFdXibUn-bK/view?usp=sharing' className="cta-btn">Resume</a>
    </div>
  )
}

export default Navbar;