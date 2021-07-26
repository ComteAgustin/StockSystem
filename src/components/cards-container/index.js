// Import dependencies
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDollarSign, faBoxes, faTruck, faClone} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'wouter'
// Import css
import 'index.css'
import './cards.css'

// Component
const Cards = () => {

    return(
        <div className="card-container container">
            <div className="card sells">
                <div className="card-info">
                    <span>0</span>
                    <p>Ventas del mes</p>
                </div>                    
                <FontAwesomeIcon className="icon" icon={faDollarSign} />
            </div>

            <div className="fullcard stock">
                <div className="card">
                    <div className="card-info">
                        <span>-</span>
                        <p>Compras/Stock</p>
                    </div>                    
                    <FontAwesomeIcon className="icon" icon={faBoxes} />
                </div>
                <div className="card-bottom">
                    <p><Link to="/">Ver Stock</Link></p>
                </div>
            </div>

            <div className="fullcard providers">
                <div className="card">
                    <div className="card-info">
                        <span>0</span>
                        <p>Proveedores</p>
                    </div>                    
                    <FontAwesomeIcon className="icon" icon={faTruck} />
                </div>
                <div>
                    <p><Link to="/">Ver Proveedores</Link></p>
                </div>
            </div>

            <div className="fullcard reports">
                <div className="card">
                    <div className="card-info">
                        <span>Junio</span>
                        <p>Reportes</p>
                    </div>                    
                    <FontAwesomeIcon className="icon" icon={faClone} />
                </div>
                <div>
                    <p><Link to="/">Mas Informacion</Link></p>
                </div>
            </div>
        </div>
    )
}

// Export 
export default Cards