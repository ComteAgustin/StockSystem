// Import dependecies
import React, {useState} from 'react'
import {Link} from 'wouter'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faCalendarAlt, faFileUpload, faShoppingBag, faTruck, faBoxes} from '@fortawesome/free-solid-svg-icons'
// Import Css
import './sidebar.css'

// Component
const Sidebar = () => {

    const [dropdown, setDropdown] = useState(false)

    
    const handleDropdown = () => {
        setDropdown(!dropdown)
        
        const dropdownElement = document.getElementById('dropdown')
        dropdownElement.classList.toggle('active-drop')
    }

    return(
        <div className="sidebar">
            <div className="container">
                <h3>
                    Menu de navegación
                </h3>
                <div className="navigation">
                    <ul className="navigation-ul">
                        <li className="navigation-li">
                            <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                            <Link to="/">Dashboard</Link>
                        </li>
                        <li className="navigation-li dropdown" id="dropdown" onClick={handleDropdown}>
                            <div>
                                <FontAwesomeIcon icon={faFileUpload} className="icon" />
                                Cargar
                            </div>
                            <FontAwesomeIcon icon={faArrowLeft} className="icon icon-arrow" />
                        </li>
                        {
                            dropdown ? (
                            <div className="dropdown-menu">
                                <ul className="dropdown-ul container">
                                    <li className="dropdown-li">
                                        <Link to="/articles" className="dropdown-item">
                                            <FontAwesomeIcon icon={faShoppingBag} className="icon" />
                                            Articulo
                                        </Link>
                                    </li>
                                    <li className="dropdown-li">
                                        <Link to="/providers" className="dropdown-item">
                                            <FontAwesomeIcon icon={faTruck} className="icon" />
                                            Proveedor
                                        </Link>
                                    </li>
                                    <li className="dropdown-li">
                                        <Link to="/stock" className="dropdown-item">
                                            <FontAwesomeIcon icon={faBoxes} className="icon" />    
                                            Stock
                                        </Link>
                                    </li>
                                </ul>
                            </div>) : null
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

// Export 
export default Sidebar