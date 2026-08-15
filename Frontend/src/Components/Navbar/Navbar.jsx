import React, { useContext, useRef } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
// Import useLocation from react-router-dom
import { Link, useLocation } from 'react-router-dom' 
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'

export const Navbar = () => {

  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();
  
  // Get the current route path
  const location = useLocation(); 

  const dropdown_toggle = (e) =>{
    menuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open')
  }

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={ logo } alt="" />
        <p>TechMaster</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src= { nav_dropdown } alt="" />
      <ul ref={menuRef} className='nav-menu'>
        <li>
          <Link style={{color: 'inherit', textDecoration: 'none'}} to='/'>Shop</Link>
          {location.pathname === "/" ? <hr/> : <></>}
        </li>
        <li>
          <Link style={{color: 'inherit', textDecoration: 'none'}} to='/pc'>Desktops</Link>
          {location.pathname === "/pc" ? <hr/> : <></>}
        </li>
        <li>
          <Link style={{color: 'inherit', textDecoration: 'none'}} to='/laptop'>Laptops</Link>
          {location.pathname === "/laptop" ? <hr/> : <></>}
        </li>
        <li>
          <Link style={{color: 'inherit', textDecoration: 'none'}} to='/pc-builder'>PC Builder</Link>
          {location.pathname === "/pc-builder" ? <hr/> : <></>}
        </li>
      </ul>
      <div className='nav-login-cart'>
        {localStorage.getItem('auth-token')
        ?<button onClick={() => {localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        :<Link to='/login'><button>Login</button></Link>}
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}