// Import dependencies
import {useLocation} from 'wouter'
import {useCallback} from 'react';
// Import service
import {signinService} from 'services/signin'

// Hooks
const useLogin = () => {

    // Init hook for navigate
    const [, navigate] = useLocation();

    // Function for the signin
    const signin = useCallback(async(username, password) => {
        // Using service
        const res = await signinService(username, password)

        // Verify
        if(res !== 400) {
            sessionStorage.setItem('token', res)
        }
    
        // Return
        return res
    
    }, []);

    // Function for Logout
    const logout = useCallback(() => {
        // Remove the token from the SessionStorage
        sessionStorage.removeItem('token');
    
        // Navigate to the login
        navigate('/signin');
    }, [navigate])

    // Return
    return {
        signin,
        logout,
        isLogged: Boolean(sessionStorage.getItem('token')),
    }
}

// Export 
export default useLogin