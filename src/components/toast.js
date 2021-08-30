// Import dependencies
import { ToastContainer } from "react-toastify"

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