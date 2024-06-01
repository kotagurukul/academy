import React from 'react'
import './About.css'
import img from '../../assets/img1.jpeg'
const About = () => {
  return (
    <div className='about' name='about'>
        <div className="about-left">
            <h1>Who We Are?</h1>
            <span>A Premier Educational Hub for Aspiring Scholars</span>
            <p>
                At our Study Centre, we are dedicated to fostering academic excellence and holistic development among students from Std 5th to 12th. Our comprehensive curriculum covers foundational subjects for middle and high school students, alongside specialized coaching for competitive exams like IIT Advanced and NEET.
                We pride ourselves on our team of experienced educators who utilize innovative teaching methodologies to ensure deep understanding and retention of concepts. Our state-of-the-art resources and personalized attention to each student create a conducive learning environment, enabling students to achieve their full potential.
                Whether you are aiming for top ranks in school or preparing for the rigorous demands of IIT and NEET, our Study Centre is your partner in success. Join us to unlock a world of opportunities and step confidently towards a bright future.
            </p>
        </div>
        <div className="about-right">
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default About