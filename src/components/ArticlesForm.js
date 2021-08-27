// Import dependencies
import React from 'react'
import {Formik} from 'formik'
import {useLocation} from 'wouter';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {REGEX} from 'vars'
import {useDispatch} from 'react-redux'
import {createArticle} from 'redux/articlesDuck'
// Import components
import SelectInput from './selectInput'
import {Toastify} from 'components/toast'
import {
    FormContainer,
    FormButton,
    FormError,
    FormInput,
    FormGroup,
    FormLabel
} from 'styles/formStyles' 

// Initial values for formik
const initialValues = {
    name: String,
    measure: String
}

// Measure Select Options
const measures = [{
    name:'cantidad'
},{
    name: 'gramos'
}]

// Component
const ArticlesForm = () => {

    // Init hook for redirect
    const [, navigate] = useLocation()

    // Init Redux hooks 
    const dispatch = useDispatch()
    
    // Validate for form
    const validate = ({name, measure}) => {
        const errors = {}

        if(!REGEX.name.test(name)) {
            errors.name = 'Ingresar nombre de usuario'
        }

        if(measure !== 'cantidad' && measure !== 'gramos') {
            errors.measure = 'Ingresar cantidad o gramos'
        }

        return errors
    }

    // Return JSX
    return(
        <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={values => {
            dispatch(createArticle(values))
            toast.success("Articulo creado")
            
            setTimeout(() => {
                navigate('/')
            }, 3000)
        }}
        >
                {
                    ({name, measure, handleChange}) => (
                        <FormContainer>
                            <Toastify />
                            <FormGroup>
                                <FormLabel for="name" >Nombre del articulo</FormLabel>
                                <FormInput article type="text" name="name" value={name} />
                                <FormError name="name" component="span" />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel for="measure">Medida</FormLabel>
                                <SelectInput type="text" name="measure" value={measure} onChange={handleChange} items={measures} />
                                <FormError name="measure" component="span" />
                            </FormGroup>
                            <FormButton type="submit">Guardar</FormButton>
                        </FormContainer> 
                    )
                }
        </Formik>
    )
}

// Export 
export default ArticlesForm