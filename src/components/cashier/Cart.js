// Import dependencies
import React from 'react'
// Import Components
import {
    CashierContainer,
    CashierH3,
    SummaryContainer
} from './styles'
import {Container} from 'styles'
import {FormButton} from 'styles/formStyles'

// Component
const Cart = () => {
    // Get functions from hook

    // Return
    return(
        <CashierContainer>
            <Container>
                <CashierH3>Realizar Venta</CashierH3>
                <p>Aqui vera todos los articulos</p>

                <SummaryContainer>
                    <p>Total a pagar:</p>
                    <span>$0</span>
                </SummaryContainer>

                <FormButton>Realizar Venta</FormButton>
            </Container>
        </CashierContainer>
    )
}

// Export 
export default Cart 