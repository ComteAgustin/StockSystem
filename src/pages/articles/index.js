// Import dependencies 
import React from 'react'
// Import Components
import ArticlesForm from 'components/ArticlesForm'
import {
    Section,
    SectionBody,
    SectionBodyH2,
    SectionH3,
    SectionH3Span,
    InfoBody,
    InfoContainer,
    InfoH5,
    InfoIcon,
    InfoP

} from 'styles/formCrudStyles'
// Import Css
import 'index.css'

// Component
const Articles = () => {
    return (
        <Section>
            <SectionH3>
                Articulos
                <SectionH3Span>
                    registrar
                </SectionH3Span>
            </SectionH3>
            <SectionBody>
                <SectionBodyH2>
                    Registrar
                </SectionBodyH2>
                <InfoContainer>
                    <InfoBody>
                        <InfoH5>
                            <InfoIcon>I</InfoIcon> Info
                        </InfoH5>
                        <InfoP>Recuerde cargar el stock del articulo que esta cargando</InfoP>
                    </InfoBody>
                </InfoContainer>

                <ArticlesForm />
            </SectionBody>
        </Section>
    )
}

// Export
export default Articles