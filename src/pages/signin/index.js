// Import dependencies
import React from 'react'   
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { Link } from 'wouter'
// Import Css
import './signin.css'

// Initial Values for formik
const initialValues = {
    username: String,
    password: String
}

// Component
const Signin = () => {

    // Validate
    const validate = values => {
        const errors = {}
        return errors
    }

    return (
        <>
            <h2>Sistema de Ventas</h2>
            <div className="signin">
                <h3>Inicio de Sesión</h3>
                <Formik
                initalValues={initialValues}
                validate={validate}
                onSumbit={() => {

                }}
                >
                    {
                        ({username, password}) => (
                            <Form className="signin-form container">
                                <div className="form-group">
                                    <Field type="text" placeholder="Nombre de usuario" name="username" value={username} className="input-signin" autoFocus />
                                </div>
                                <div class="form-group">
                                    <Field type="text" placeholder="Contraseña" name="password" value={password} className="input-signin" />
                                </div>
            
                                <input type="submit" value="Iniciar Sesión" className="btn" />
                                <Link to="/register">Registrarse</Link>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </>
    )
}

// Export 
export default Signin