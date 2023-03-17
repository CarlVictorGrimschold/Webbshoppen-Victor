import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const [hideMenu, setHideMenu] = useState(true)


  return (
    <footer>
      <div className="container">
      
        <div id="menu" className={hideMenu ? 'hide' : ''}>
          <nav id="menu-links" className="links">
           
          
            <NavLink className="link" to="/facebook"><i className="fa-brands fa-facebook-f"></i></NavLink>
            <NavLink className="link" to="/instagram"><i className="fa-brands fa-instagram"></i></NavLink>
            <NavLink className="link" to="/twitter"><i className="fa-brands fa-twitter"></i></NavLink>
            <NavLink className="link" to="/google"><i className="fa-brands fa-google"></i></NavLink>
            <NavLink className="link" to="/linkedin"><i className="fa-brands fa-linkedin"></i></NavLink>
            
          
          </nav>
          
        <p>© 2023 Fixxo. All Rights Reserved</p>
        
        </div>
        

      </div>
    </footer>
  )
}

export default Footer