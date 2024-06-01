import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import sentai from '../../assets/sentlogo.png'
import founder from '../../assets/dhrumilphoto.png'
const Footer = () => {
  return (
    <div className='footers' name='footer'>
      <div className="footer">
        <div className="f1">
                <img src={logo} alt="" />
                <div className="address">
                <i class="fa-solid fa-location-dot"></i> 
                <p>G-3, Link Resi Plaza,Building no-2, Opp-HDFC bank,Link Road,Bharuch-392 001</p>
                </div>
                <div className="email">
                <i class="fa-solid fa-envelope"></i>
                <p>Gurukulstudycentre2003@gmail.com</p>
                </div>
                <div className="phone">
                <i class="fa-solid fa-phone"></i>
                <p>+91 99982 69050</p>
                </div>
        </div>
         
        <div className="f2">
            <h2>Why Kota Gurukul Academy?</h2>
            <p>At Kota Gurukul Academy, we transform academic journeys from average to outstanding for students from Std 5th to 12th. Experience exceptional education, expert guidance, and a supportive learning environment for IIT Advanced, NEET, Olympiads, and Foundation courses, helping you achieve "Kam Se Zyada"</p>
        </div>
      </div>
      <div className="footer-last">
        <div>
        <div className="fl1">
        <img src={sentai}/> 
          <div className="copyright">
       
            <p>Designed & Developed by</p>

            <p> SentIImenta AI</p>
          </div>
          <div className="social social1">
            <a href="https://www.linkedin.com/company/sentiimenta-ai/" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-linkedin"></i>
           </a>
            <a href="http://www.sentiimenta.ai.wordpress.com/" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-globe"></i>
            </a>
            <a href="https://www.instagram.com/sentiimenta.ai?igsh=YnkybWxvemVuMHBr" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="fl2">
        <img src={founder}/> 
          <div className="copyright">
     
          <p>SentIImenta AI Founder & CEO </p>
          <p>Dhrumil Patel</p>
          </div>
          <div className="social">
          <a href="mailto:mlengineer.dhrumil@gmail.com">
            <i class="fa-solid fa-envelope"></i>
            </a>
          <a href="https://www.linkedin.com/in/itechdp?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-linkedin"></i>
           </a>
            <a href="https://www.instagram.com/itechdp.ai?igsh=MWd6ZWJuenQ5Z29vOA==" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        </div>
        
          <div className="fl3">
            <h2>Let us do your AI-ML and Data Science Projects </h2>
            <p>Contact No: <a href="tel: +917802032338">+917802032338</a></p>
            <p>Email: <a href="mailto:mlengineer.dhrumil@gmail.com">mlengineer.dhrumil@gmail.com</a></p>
          </div>
      </div>

    </div>
  )
}

export default Footer