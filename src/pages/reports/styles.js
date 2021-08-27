// Import dependencies 
import styled from '@emotion/styled'

// Import components
import {
    SectionBody
} from 'styles/formCrudStyles'

// Styles
export const InsightContainer = styled(SectionBody)`
    margin: 20px 0 0 0;
    padding: 0 10px;
    

    & > h3 {
        color: var(--dark-color);
        text-align: left;
        padding: 20px 0 0 20px;
        font-size: 1.4em;
        font-weight: 200;  
    }

    & > h3 > svg > path {
        fill: var(--dark-color)
    }

`

