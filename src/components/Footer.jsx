import React from 'react'

const Footer = () => {
  return (
    <>
    {//Add horizontal line 
    }
    <hr />

    <div className='footer-container'>

      {//Add copyright symbol and get current date year
      }
      <p>
        &copy; {new Date().getFullYear()} Jonathan's Portfolio
      </p>

      {//Add copyright symbol and get current date year
      }
      <div className='social_icons'>
        <a
          href='https://github.com/jtphan-asu'
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className='fa-brands fa-github'></i>
        </a>
      </div>
    </div>
    </>
  )
}

export default Footer