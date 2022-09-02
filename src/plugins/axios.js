import axios from 'axios'

axios.interceptors.request.use((config) => {
    config.baseURL = process.env.VUE_APP_URL;

    return config;
})

