// Import dependecies
import React, {useState} from 'react'
import {faArrowLeft, faCalendarAlt, faFileUpload, faShoppingBag, faTruck, faBoxes} from '@fortawesome/free-solid-svg-icons'
// Import component
import {
    ContainerUl,
    DropdownMenu,
    Icon,
    Li,
    NavigationLi,
    NavigationUl,
    SidebarContainer,
    SidebarH3,
    DropdownLink as Link,
    DropdownIcon
} from './styles'
import {
    Container
} from 'styles'

// Component
const Sidebar = () => {

    const [dropdown, setDropdown] = useState(false)

    
    const handleDropdown = () => {
        setDropdown(!dropdown)
    }

    return(
        <SidebarContainer>
            <Container>
                <SidebarH3>
                    Menu de navegación
                </SidebarH3>
                <div>
                    <NavigationUl>
                        <NavigationLi>
                            <Icon icon={faCalendarAlt} />
                            <Link to="/">Dashboard</Link>
                        </NavigationLi>
                        <NavigationLi dropdown id="dropdown" onClick={handleDropdown}>
                            <div>
                                <Icon icon={faFileUpload} />
                                Cargar
                            </div>
                            <Icon arrow={dropdown ? true : false} icon={faArrowLeft} />
                        </NavigationLi>
                        {
                            dropdown ? (
                            <DropdownMenu>
                                <ContainerUl>
                                    <Li>
                                        <Link to="/articles">
                                            <DropdownIcon icon={faShoppingBag} className="icon" />
                                            Articulo
                                        </Link>
                                    </Li>
                                    <Li>
                                        <Link to="/providers">
                                            <DropdownIcon icon={faTruck} className="icon" />
                                            Proveedor
                                        </Link>
                                    </Li>
                                    <Li>
                                        <Link to="/stock">
                                            <DropdownIcon icon={faBoxes} className="icon" />    
                                            Stock
                                        </Link>
                                    </Li>
                                </ContainerUl>
                            </DropdownMenu>) : null
                        }
                    </NavigationUl>
                </div>
            </Container>
        </SidebarContainer>
    )
}

// Export 
export default Sidebar