// Import dependencies
import useLogin from "hooks/useLogin"
import {Redirect, Route} from "wouter"

// Component
export const PrivateRoute = ({component, ...rest}) => {

    const {isLogged} = useLogin()

    // If is logged, render component
    if(isLogged) {
        return <Route {...rest} component={component} />
    } else {
        // If not redirect to signin
        return <Redirect to="/signin" />
    }
}