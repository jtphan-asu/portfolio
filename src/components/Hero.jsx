import React from 'react';
import Image from 'next/image';

//Capture User's attention and introduce Jonathan
const Hero = () => {
  return (
    <div className='hero-container'>
        <div>
        <Image className='profile-img' src="/images/profile.jpeg" width={300} height={300} alt="Jonathan's Profile Picture"/>
        
        <div className='hero-text'>
            <h1>Hey, I'm Jonathan 👋</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Consequuntur minus, consectetur, ut deleniti eum laudantium error, 
                accusantium facilis perspiciatis molestias in quibusdam? Repudiandae unde 
                quis cumque tempora odit aperiam nobis.
            </p>
            <div className="social_icons">
                <a
                    href="https://github.com/jtphan-asu"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                >GitHub
                    <i className="fa-brands fa-github"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/jonathan-phan-1584b464/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                > LinkedIn
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Hero