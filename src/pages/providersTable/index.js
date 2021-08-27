import React from 'react'
import useProviders from 'hooks/useProviders'
// Import components
import ProvidersTr from 'components/tables/ProvidersTable'
import {
    Table,
    TableContainer,
    TableH2,
    TableTd,
    TableSection,
    TableTr
} from 'styles/tablesStyles'

// Component
const ProvidersTable = () => {

    // Get providers for table
    const {providers} = useProviders()

    // Return 
    return(
        <TableSection>
            <TableH2>
                Stock
            </TableH2>

            <TableContainer>
                <TableH2>
                    Stock registrado
                </TableH2>
                <Table>
                    <TableTr header providers>
                        <TableTd>
                            Razon social
                        </TableTd>
                        <TableTd>
                            Tipo de docummento
                        </TableTd>
                        <TableTd>
                            Numero de documento
                        </TableTd>
                        <TableTd>
                            Telefono
                        </TableTd>
                        <TableTd>
                            Accion
                        </TableTd>
                    </TableTr>

                    <ProvidersTr items={providers} />

                </Table>
            </TableContainer>
        </TableSection>
    )
}


// Export 
export default ProvidersTable