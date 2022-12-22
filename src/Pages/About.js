import React from 'react'
import Navbar from '../components/Navbar'
import '../Styles/About.css';
import AboutImage from '../Images/about.svg';
export default function About() {
  return (
    <div>
      <Navbar />
      <div className='landing-content'>
        <div className='landing-text'>
          <h2 className='landing-heading'>About Tats' Hub</h2>
          <div className='about-details'>
            <p>Insert some meaningful text in here</p>
          </div>
        </div>
        <div className='about-image'>
          <img src={AboutImage} alt="Contact" width={600} />
        </div>
      </div>
    </div>
  )
}
