import React from 'react'
import Link from "next/link";
import "src/styles/globals.css";

export const Navbar = () => {
  return (

    //Create div container for navigation and link
    //to resume
    <div className='navbar-container'>
      <div className="logo">
        <Link href="/" >
          Jonathan's Portfolio
        </Link>
      </div>

      <div>
        <a href='' className="cta-btn">Resume</a>
      </div>
    </div>
    
  )
}

export default Navbar;