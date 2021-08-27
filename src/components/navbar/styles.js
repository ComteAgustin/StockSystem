// Import dependencies 
import styled from '@emotion/styled'

// Create Styles

// Navbar
export const Navbar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: var(--background-navbar-color);
    height: 10vh;

    position: fixed
`

// Title Container
export const TitleContainer = styled.div`
    width: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--secondary-font);
`

// Navbar Main Container
export const NavbarMainContainer = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 6px #1f1f1f;
`

// Menu Ul
export const MenuUl = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;
`

// Menu Item
export const MenuItem = styled.li`
    margin-left: 30px;
    font-size: 2em;
    
    ${props => props.last ? `margin-right: 20px;` : null}
    
    :hover {
        transform: scale(1.2, 1.2);
        cursor: pointer;
    }

`