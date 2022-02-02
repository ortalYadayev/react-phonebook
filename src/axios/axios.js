import axios from 'axios'

const instanceAxios = axios.create({
    baseURL: 'http://localhost:3015/',
    headers: {
        'Accept': 'application/json',
    }
});

export default instanceAxios