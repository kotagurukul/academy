import React from 'react'
import './Navbar.css'
import logo_png from '../../assets/logo.png'
import { Link } from 'react-scroll';
function Navbar(){
    function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    }
    function hideSidebar(){
      const sidebar = document.querySelector('.sidebar');
      sidebar.style.display = 'none'
    }
  return (
    <div className='navbar'>
        <img src={logo_png}/>
        
        <ul>
          
          <li ><Link className='hide' to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li ><Link className='hide' to='results' smooth={true} offset={-200} duration={500}>Our Results</Link></li>
          <li ><Link className='hide' to='courses' smooth={true} offset={-260} duration={500}>Courses</Link></li>
          <li ><Link className='hide' to='about' smooth={true} offset={0} duration={500}>About Us</Link></li>
          <li ><Link className='hide' to='contact' smooth={true} offset={-100} duration={500}>Admission</Link></li>
          <li ><Link className='hide' to='footer' smooth={true} offset={0} duration={500}>Contact Us</Link></li>
          <i class="fa-solid fa-bars" onClick={showSidebar}></i>
        </ul>
        <ul className='sidebar'>
          <i class="fa-solid fa-x" onClick={hideSidebar}></i>
          <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to='results' smooth={true} offset={-200} duration={500}>Our Results</Link></li>
          <li><Link to='courses' smooth={true} offset={-260} duration={500}>Courses</Link></li>
          <li><Link to='about' smooth={true} offset={0} duration={500}>About Us</Link></li>
          <li><Link to='contact' smooth={true} offset={-100} duration={500}>Admission</Link></li>
          <li><Link to='footer' smooth={true} offset={0} duration={500}>Contact Us</Link></li>
        </ul>
    </div>
  );
}
export default Navbar