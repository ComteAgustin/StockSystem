// Import dependencies
import React from 'react'
import useStock from 'hooks/useStock'
// Import components
import StockTr from 'components/tables/StockTable'
import {
    Table,
    TableContainer,
    TableH2,
    TableTd,
    TableSection,
    TableTr
} from 'styles/tablesStyles'

// Component
const StockTable = () => {

    // Get stock for table
    const {stock} = useStock()

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
                    <TableTr header>
                        <TableTd>
                            Nombre
                        </TableTd>
                        <TableTd>
                            Medida
                        </TableTd>
                        <TableTd>
                            Stock
                        </TableTd>
                        <TableTd>
                            Accion
                        </TableTd>
                    </TableTr>

                    <StockTr items={stock} />

                </Table>
            </TableContainer>
        </TableSection>
    )
}


// Export 
export default StockTable