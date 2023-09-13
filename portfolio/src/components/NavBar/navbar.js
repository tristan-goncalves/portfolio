import React from 'react'
import './navbar.css'
import logo from "../../assets/efrei-logo.jpg";
import {Link} from "react-scroll"
import contactImg from "../../assets/contact.png"

const Navbar = () => {
  return (
        <nav className="navbar">
            <img src={logo} alt='Logo' className='logo'/>
            <div className='desktopMenu'>
              <Link className='desktopMenuListItem'>Accueil</Link>
              <Link className='desktopMenuListItem'>À propos</Link>
              <Link className='desktopMenuListItem'>Portfolio</Link>
              <Link className='desktopMenuListItem'>Expériences</Link>
            </div>
            <button className='desktopMenuBtn'>
              <img src={contactImg} className='desktopMenuImg'/>Contactez-moi</button>
        </nav>
  )
}

export default Navbar