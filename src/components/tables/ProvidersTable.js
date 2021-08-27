// Import dependencies
import React from 'react'
import {Link, useLocation} from 'wouter'
import {faMinus, faPlus, faPencilAlt} from '@fortawesome/free-solid-svg-icons'
import useProviders from 'hooks/useProviders'
// Import components
import {
    TableIcon,
    TableTd,
    TableTr
} from 'styles/tablesStyles'

// Component
const ProvidersTable = ({items = Array}) => {

    // Get function from hook
    const {delProvider} = useProviders()

    // Handle delete onClick
    const handleDelete = e => {
        const id = e.target.getAttribute('providerId')
        delProvider(id)
    }

    // Return 
    return (
        <>
            {
                items.map(item => <TableTr key={item.name} providers>
                    <TableTd>
                        {item.name}
                    </TableTd>
                    <TableTd>
                        {item.documentType}
                    </TableTd>
                    <TableTd>
                        {item.identification}
                    </TableTd>
                    <TableTd>
                        {item.phone}
                    </TableTd>
                    <TableTd>
                        <Link to="/edit">
                            <TableIcon icon={faPencilAlt} />
                        </Link>
                        <Link to="/stock">
                            <TableIcon icon={faPlus} green />
                        </Link>
                        <TableIcon red icon={faMinus} providerId={item._id} onClick={handleDelete} />
                    </TableTd>
                </TableTr>
                )
            }
        </>
    )
}


// Export 
export default ProvidersTable
