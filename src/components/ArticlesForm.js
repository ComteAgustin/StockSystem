// Import dependencies
import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {useDispatch} from 'react-redux'
import {createArticle} from 'redux/articlesDuck'

// Initial values for formik
const initialValues = {
    name: String,
    measure: String
}

// Component
const ArticlesForm = () => {

    // Init Redux hooks 
    const dispatch = useDispatch()

    // Validate for form
    const validate = values => {
        const errors = {}
        return errors
    }

    // Return JSX
    return(
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={values => {
                dispatch(createArticle(values))
                console.log('ok')
            }}
            >
                {
                    ({name ,measure}) => (
                        <Form className="form container">
                            <div className="form-group">
                                <label for="name" className="label-form">Nombre del articulo</label>
                                <Field type="text" name="name" className="input-form" value={name} autoFocus />
                                <ErrorMessage className="error" name="name" component="span" />
                            </div>
                            <div className="form-group">
                                <label for="measure" class="label-form">Medida</label>
                                <Field type="text" name="measure" class="input-form" value={measure} />
                                <ErrorMessage className="error" name="measure" component="span" />
                            </div>
                            <button type="submit" className="b-form">Guardar</button>
                        </Form> 
                    )
                }
        </Formik>
    )
}

// Export 
export default ArticlesForm