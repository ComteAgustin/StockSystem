// Import dependencies
import React from 'react'
// Import Css
import './stock.css'
import StockForm from 'components/StockForm'

// Component
const Stock = () => {

    return(
        <div className="section">
            <h3 className="section-h3 container">
                Stock
                <span>
                    Cargar
                </span>
            </h3>
            <div class="section--body container">
                <h2 className="container">
                    Cargar
                </h2>
                <div class="info">
                    <div className="info-body container">
                        <h5>
                            <i>I</i> Info
                        </h5>
                        <p>Recuerde registrar articulo y proveedor para cargar stock</p>
                    </div>
                </div>

                <StockForm />

            </div>
        </div>
    )

}

// Export 
export default Stock