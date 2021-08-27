// Import dependencies
import styled from '@emotion/styled'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

// Create styles

// Function for backgrounds colors
const checkColor = props => `background-color: var(--${props.color}-color);` 

// Full Card
export const FullCard = styled.div`
    padding: 5px 0;
    ${checkColor} 
`

// Card Container
export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

// Card
export const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0 10px;
    width: 350px;
    height: 150px;

    ${checkColor}
`

// Card Paragraph
export const P = styled.p`
    margin-top: 30px;
`

// Card Status Span
export const StatusSpan = styled.span`
    font-size: 2.5em;
`

// Card Icon 
const checkIconColors = props => `& path{
    fill: var(--${props.color}-icon-color);
}`

export const Icon = styled(FontAwesomeIcon)`
    font-size: 5em;

    ${checkIconColors}
`   
