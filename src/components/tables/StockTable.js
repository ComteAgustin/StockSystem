// Import dependencies
import React from 'react'
import {Link} from 'wouter'
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons'
import useStock from 'hooks/useStock'
// Import components
import {
    TableIcon,
    TableTd,
    TableTr
} from 'styles/tablesStyles'

// Component
const StockTable = ({items = Array}) => {

    // Get function from hook
    const {delArticle} = useStock()

    // Handle delete onClick
    const handleDelete = e => {
        const id = e.target.getAttribute('articleId')
        delArticle(id)
    }

    // Return 
    return (
        <>
            {
                items.map(item => <TableTr key={item.name}>
                    <TableTd>
                        {item.name}
                    </TableTd>
                    <TableTd>
                        {item.measure}
                    </TableTd>
                    <TableTd>
                        {item.stock}
                    </TableTd>
                    <TableTd>
                        <Link to="/stock">
                            <TableIcon icon={faPlus} green />
                        </Link>
                        <TableIcon red icon={faMinus} articleId={item._id} onClick={handleDelete} />
                    </TableTd>
                </TableTr>
                )
            }
        </>
    )
}


// Export 
export default StockTable
