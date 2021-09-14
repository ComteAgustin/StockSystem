// Import dependencies
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

// Export component
export const Toastify = () => {
    return <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
    />
}