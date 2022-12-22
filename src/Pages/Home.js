import React from 'react'
import Navbar from '../components/Navbar'
import '../Styles/Home.css';
import Workspace from '../Images/workspace.svg';
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='landing-content'>
        <div className='landing-text'>
          <h2 className='landing-heading'>Tats' Hub</h2>
          <p className='landing-paragraph'>Welcome to <b>Tats' Hub</b> where developers <br />can  work and network in a shared space</p>
        </div>
        <div className='landing-image'>
          <img src={Workspace} alt="Workspace" width={600} />
        </div>
      </div>
    </div>
  )
}
