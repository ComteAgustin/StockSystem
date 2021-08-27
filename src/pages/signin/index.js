// Import dependencies
import React, {useEffect} from 'react'   
import {Formik} from 'formik'
import {Toastify} from 'components/toast'
import {toast} from 'react-toastify'
import useLogin from 'hooks/useLogin'
import useLocation from 'wouter/use-location'
// Import components
import {
    SigninContainer,
    SinginH2,
    SigninH3,
    SigninRegister,
    SigninInput,
    SigninBtn
} from './styles'
import {
    FormError,
    FormGroup,
    FormContainer
} from 'styles/formStyles'

// Initial Values for formik
const initialValues = {
    username: String,
    password: String
}

// Component
const Signin = () => {

    // Init hook for navigate
    const [, navigate] = useLocation()

    const {signin, isLogged} = useLogin()

    // Verify if the user is logged
    useEffect(() => {
        if(isLogged) navigate('/')
    }, [isLogged])


    // Validate
    const validate = values => {
        const errors = {}

        if(!values.username) {
            errors.username = 'Debes ingresar nombre de usuario'
        }

        if(!values.password) {
            errors.password = 'Debes ingresar contraseña'
        }

        return errors
    }

    return (
        <>
            <SinginH2>Sistema de Ventas</SinginH2>
            <SigninContainer>
                <SigninH3>Inicio de Sesión</SigninH3>
                
                <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={async ({username, password}) => {
                    // Login
                    const res = await signin(username, password)
                    
                    // Verification
                    if(res === 400) toast.error('Credenciales invalidas') 
                    else {
                        toast.success('Inicio de sesion exitoso')
                        setTimeout(() => {
                            navigate('/')
                        }, 3000)
                    }
                    
                }}
                >
                    {
                        ({username, password}) => (
                            <FormContainer>
                                <Toastify/>
                                <FormGroup>
                                    <SigninInput type="text" name="username" placeholder="Ingresar usuario" value={username} />
                                    <FormError name="username" component="span" />
                                </FormGroup>
                                <FormGroup>
                                    <SigninInput type="password" name="password" placeholder="Ingresar contraseña" value={password} />
                                    <FormError name="password" component="span" />    
                                </FormGroup>

                                <SigninBtn>Iniciar Sesion</SigninBtn>
                                <SigninRegister to="/register">Registrarse</SigninRegister>
                            </FormContainer>
                        )
                    }
                </Formik>

            </SigninContainer>
        </>
    )
}

// Export 
export default Signin