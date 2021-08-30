// Import dependencies
import axios from 'axios'
import { config } from 'vars'

// Service
export const signinService = async (username, password) => {
    try {
        const res = await axios.post(`${config.API_URL}/api/signin`, {
            Headers: {
                'content-type': 'application/json'
            },
            data: {
                username,
                password
            }
        })

        return res.data.status ? 400 : res.data.token

    } catch (err) {
        console.log(err)
    }
}