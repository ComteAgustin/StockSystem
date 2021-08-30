// Import dependencies
import React from 'react'
// Import Components
import {
    SectionBodyH2,
    SectionBody,
    SectionH3Span,
    SectionH3,
    Section,
    InfoBody,
    InfoContainer,
    InfoH5,
    InfoIcon,
    InfoP,
} from 'styles/formCrudStyles'
import StockForm from 'components/StockForm'

// Component
const Stock = () => {

    return (
        <Section>
            <SectionH3>
                Stock
                <SectionH3Span>
                    Cargar
                </SectionH3Span>
            </SectionH3>
            <SectionBody>
                <SectionBodyH2>
                    Cargar
                </SectionBodyH2>
                <InfoContainer>
                    <InfoBody>
                        <InfoH5>
                            <InfoIcon>I</InfoIcon> Info
                        </InfoH5>
                        <InfoP>Recuerde registrar articulo y proveedor para cargar stock</InfoP>
                    </InfoBody>
                </InfoContainer>

                <StockForm />

            </SectionBody>
        </Section>
    )

}

// Export 
export default Stock