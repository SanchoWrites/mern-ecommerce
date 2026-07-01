import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={ navlogo } alt="Logo" className="nav-logo" />

        <div className='navbar-title-group'>
            <p className='navbar-name'>TechMaster</p>
            <p className='nav-admin-panel'>Admin Panel</p>
        </div>
        
        <img src={ navProfile } alt="Profile" className='nav-profile'/>
    </div>
  )
}