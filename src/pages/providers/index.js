// Import Dependencies
import React from 'react'
// Import Component
import ProvidersForm from 'components/ProvidersForm'
import {
    Section,
    SectionBody,
    SectionBodyH2,
    SectionH3,
    SectionH3Span
} from 'styles/formCrudStyles'

// Component
const Providers = () => {
    return(
        <Section>
        <SectionH3>
            Proveedores
            <SectionH3Span>
                Registrar
            </SectionH3Span>
        </SectionH3>
        <SectionBody>
            <SectionBodyH2>
                Registrar
            </SectionBodyH2>

        <ProvidersForm />

        </SectionBody>
    </Section>
    )
}

// Export 
export default Providers