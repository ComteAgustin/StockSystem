// Import dependecies
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faUser, faTimes} from '@fortawesome/free-solid-svg-icons'
// Import Css
import './navbar.css'

// Component
const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar--title">
                <h1>Sistema de <br /> Ventas</h1>
            </div>
            <div className="navbar--main">
                <div></div>
                <div className="menu-account">
                    <ul>
                        <li className="item-menu"><FontAwesomeIcon icon={faUser} /></li>
                        <li className="item-menu"><FontAwesomeIcon icon={faTimes} /></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

// Export 
export default Navbar