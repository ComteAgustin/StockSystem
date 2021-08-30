// Import dependencies
import axios from 'axios'
import { config } from 'vars'

// Service
export const updateDataService = async (data, userid) => {
    try {
        const res = await axios.put(`${config.API_URL}/api/user/${userid}`, {
            Headers: {
                'content-type': 'application/json'
            },
            data
        })

        return res.data.status ? 400 : 200
    } catch (err) {
        console.log(err)
    }
}