// Import Dependencies
import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
// Import css

// Initial values for formik
const initialValues = {
    name: String,
    documentType: String,
    identification: Number,
    phone: Number
}

// Component
const Providers = () => {

    // Validate
    const validate = (values) => {
        const errors = {}
        return errors
    }

    return(
        <div class="section">
        <h3 class="section-h3 container">
            Proveedores
            <span>
                Registrar
            </span>
        </h3>
        <div class="section--body container">
            <h2 class="container">
                Registrar
            </h2>

            <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={() => {
                alert('asdasd')
            }}
            >
                {
                    ({name, documentType, identification, phone}) => (
                        <Form class="form container">
                            <div class="form-group">
                                <label for="name" class="label-form">Nombre - Razón social</label>
                                <Field type="text" name="name" class="input-form" />
                                <ErrorMessage className="error" name="name" component="span" />
                            </div>
                            <div class="form-group">
                                <label for="documentType" class="label-form">Tipo de documento</label>
                                <Field type="text" name="documentType" class="input-form" />
                                <ErrorMessage className="error" name="documentType" component="span" />
                            </div>

                            <div class="form-group">
                                <label for="identification" class="label-form">Numero de documento</label>
                                <Field type="search" name="identification" class="input-form" />
                                <ErrorMessage className="error" name="identification" component="span" />
                            </div>

                            <div class="form-group">
                                <label for="phone" class="label-form">Telefono</label>
                                <Field type="search" name="phone" class="input-form" />
                                <ErrorMessage className="error" name="phone" component="span" />
                            </div>

                            <button type="submit" class="b-form">Guardar</button>
                        </Form>
                    )}
            </Formik>
        </div>
    </div>
    )
}

// Export 
export default Providers