// Import dependecies
import React from 'react'
import {Link} from 'wouter'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faTimes} from '@fortawesome/free-solid-svg-icons'
import useLogin from 'hooks/useLogin'
// Import components
import {
    Navbar,
    TitleContainer,
    NavbarMainContainer,
    MenuUl,
    MenuItem
} from './styles'

// Component
const Nav = () => {
    
    const {isLogged, logout} = useLogin() 

    return(
        <Navbar>
            <TitleContainer className="navbar--title">
                <h1>Sistema de <br /> Ventas</h1>
            </TitleContainer>
            <NavbarMainContainer>
                <div></div>
                {
                    isLogged ? (
                        <div>
                            <MenuUl>
                                <MenuItem><Link to="/config"><FontAwesomeIcon icon={faUser} /></Link></MenuItem>
                                <MenuItem last onClick={logout}><FontAwesomeIcon icon={faTimes} /></MenuItem>
                            </MenuUl>
                        </div>
                    ) : null
                }
            </NavbarMainContainer>
        </Navbar>
    )
}

// Export 
export default Nav