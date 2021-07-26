// Import dependencies
import React, {useEffect} from 'react'
// Import components
import Cards from '../../components/cards-container'
import SellForm from '../../components/SellForm'
import Cart from '../../components/Cart'
// Import css
import 'index.css'
import 'components/form-crud.css'
import './dashboard.css'

// Component
const Home = () => {
    return(
        <div className="section">   
            <h3 className="section-h3 container">
                Dashboard  
                <span>
                    Panel de control
                </span>
            </h3>
            <Cards />

            <div className="cashier container">
                
                <SellForm />

                <Cart />

            </div> 
        </div>
    )
}

// Export 
export default Home
