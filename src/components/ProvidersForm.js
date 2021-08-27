// Import dependencies
import React from 'react'
import {Formik} from 'formik'
import {toast} from 'react-toastify'
import {useLocation} from 'wouter'
import {useDispatch} from 'react-redux'
import {createProvider} from 'redux/providersDuck'
import {REGEX} from 'vars'
// Import components
import SelectInput from 'components/selectInput'
import {Toastify} from './toast'
import {
    FormButton,
    FormContainer,
    FormError,
    FormGroup,
    FormInput,
    FormLabel
} from 'styles/formStyles'
import useProviders from 'hooks/useProviders'

// Initial values for formik
const initialValues = {
    name: String,
    documentType: String,
    identification: Number,
    phone: Number
}

// DocumentType Options array
const documentTypeArr = [
    {
        name: 'dni'
    },
    {
        name: 'cuil'
    },
    {
        name: 'cuit'
    }
]

// Component
const ProvidersForm = () => {
    
    // Init hook for navigate
    const [, navigate] = useLocation()

    const {providers} = useProviders()

    // Init redux hook
    const dispatch = useDispatch()

    // Validate
    const validate = (values) => {
        const errors = {}

        if(!REGEX.name.test(values.name)) {
            errors.name = 'Debes ingresar un nombre, solo se aceptan letras y numeros'
        }

        if(values.documentType !== 'dni' && values.documentType !== 'cuil' && values.documentType !== 'cuit') {
            errors.documentType = 'Debes ingresar: dni, cuit o cuil'
        }
        
        if(!REGEX.numbers.test(values.identification)) {
            errors.identification = 'Solo se aceptan numeros'
        }
        
        if(!REGEX.numbers.test(values.phone)) {
            errors.phone = 'Solo se aceptan numeros'
        }

        return errors
    }

    return(
        <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={values => {
            console.log(providers)
            dispatch(createProvider(values))
            toast.success("Proveedor creado")
            

            setTimeout(() => {
                navigate('/')
            }, 3000)
        }}
        >
            {
                ({name, documentType, identification, phone, handleChange}) => (
                    
                    <FormContainer>
                        <Toastify />
                        <FormGroup>
                            <FormLabel for="name">Nombre - Razón social</FormLabel>
                            <FormInput article type="text" name="name" value={name} />
                            <FormError name="name" component="span" />
                        </FormGroup>
                        
                        <FormGroup>
                            <FormLabel for="documentType">Tipo de documento</FormLabel>
                            <SelectInput name="documentType" value={documentType} onChange={handleChange} items={documentTypeArr} />
                            <FormError name="documentType" component="span" />
                        </FormGroup>

                        <FormGroup>
                            <FormLabel for="identification">Numero de documento</FormLabel>
                            <FormInput article type="number" name="identification" value={identification} />
                            <FormError name="identification" component="span" />
                        </FormGroup>

                        <FormGroup>
                            <FormLabel for="phone">Telefono</FormLabel>
                            <FormInput article type="number" name="phone" value={phone} />
                            <FormError name="phone" component="span" />
                        </FormGroup>

                        <FormButton type="submit">Guardar</FormButton>
                    </FormContainer>
                )}
        </Formik>
    )
}

// Export 
export default ProvidersForm