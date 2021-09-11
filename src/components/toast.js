// Import dependencies
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css'

import { injectStyle } from "react-toastify/dist/inject-style";

injectStyle();

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