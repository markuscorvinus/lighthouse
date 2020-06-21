import axios from 'axios'

export default axios.create({
    baseURL: process.env.VUE_APP_ROOT_API,
    withCredentials: true,
    timeout: 10000,
    timeoutErrorMessage: "Server took too long to respond",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json', 
    }
});