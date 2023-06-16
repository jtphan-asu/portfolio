import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from './Hero';
import Footer from '@/components/Footer';

const Layout = ({ children }) => {
  return (
      <>
      <Navbar/>
        <Hero/>
        <main>{children}</main>
      <Footer/>
      </>
    
  )
}

export default Layout