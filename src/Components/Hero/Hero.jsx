import React from 'react'
import './Hero.css'
import arrow from'../../assets/white-arrow.png'
const Hero = () => {
  return (
    <div className='hero' name='hero'>
        <div className="hero-content">
        <h1>Welcome to Kota Gurukul Academy</h1>
        <p>Unlock your true potential with us! At Kota Gurukul Academy, we transform academic journeys from average to outstanding for students from Std 5th to 12th. Experience exceptional education, expert guidance, and a supportive learning environment for IIT Advanced, NEET, Olympiads, and Foundation courses, helping you achieve <span>"Kam Se Zyada"</span></p>
        <button className='exploreBtn'>Explore More <img className='arrow-icon'src={arrow}/></button>
        </div>
       
    </div>
  )
}

export default Hero