// Import dependencies
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css'

// Export component
export const Toastify = () => {
    return <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
    />
}