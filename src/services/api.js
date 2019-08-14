import axios from 'axios';

const api = axios.create({
    baseURL: 'https://help-canta-sys-backend.herokuapp.com/api'
});

export default api;