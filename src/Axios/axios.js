import axios from "axios"
const instance = axios.create({
    baseURL:"https://to-do-backend-1-a2zk.onrender.com/api"
})
export default instance
