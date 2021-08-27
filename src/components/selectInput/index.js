// Import dependencies
import React from 'react'
// Import components
import {
    Select,
    Option
} from './styles'

// Component
const SelectInput = ({items = Array, ...rest}) => {

    return(
        <Select component="select" placeholder="Seleccionar" {...rest}>
            <Option disabled selected>
                Seleccionar
            </Option>
            {items.map(item => <Option key={item.name} value={item.name}>
                    {item.name}
                </Option>)}
        </Select>
    )
}

// Export 
export default SelectInput