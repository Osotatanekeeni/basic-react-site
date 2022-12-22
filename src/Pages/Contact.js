import React from 'react'
import Navbar from '../components/Navbar'
import '../Styles/Contact.css';
import ContactImage from '../Images/contact.svg';
export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className='landing-content'>
        <div className='landing-text'>
          <h2 className='landing-heading'>Contact Details</h2>
          <div className='contact-details'>
            <p><strong>Email Address: </strong>tatane@africacode.academy</p>
            <p><strong>Phone Number: </strong>09022211724</p>
          </div>
        </div>
        <div className='landing-image'>
          <img src={ContactImage} alt="Contact" width={600} />
        </div>
      </div>
    </div>
  )
}
