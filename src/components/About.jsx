import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="about-container">
    <h2>About Me</h2>
    <div className="flex-about">
        <div className="about-text">
            <p>
            I am a recent graduate who obtained a Bacelors of Science in Software Engineering from Arizona State University.
             Arizona State provided rich technical exposure to modern Software Engineering methodologies and quality product development.  
             Ranging from individual projects to a large team computing capstone project,  
             I learned to enjoy building software that creates elegant, clean, and efficient solutions.  
            
            </p>
            <p>
            Alongside computer programming, I also enjoy the challenges that aquarium keeping brings.  Having six different running aquariums, multi-tasking is a key attribute that one must possess to achieve success in this hobby.
            </p>
            </div>
            <div className="about-img">
                <Image src="/images/anemone.jpg" width={500} height={300} alt="Jonathan's About Me" />
            </div>
        </div>
    </div>
  )
}

export default About