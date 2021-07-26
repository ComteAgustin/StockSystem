// Import dependencies
import React from 'react'

// Component
const Cart = () => {
    return(
        <div className="cart">
            <div className="container">
                <h3>Realizar Venta</h3>
                <p>Aqui vera todos los articulos</p>


                <div className="summary">
                    <p>Total a pagar:</p>
                    <span>$0</span>
                </div>

                <button className="b-form">Realizar Venta</button>
            </div>
        </div>
    )
}

// Export 
export default Cart 