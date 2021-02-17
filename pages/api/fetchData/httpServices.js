import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = "http://localhost:4000/";

axios.interceptors.response.use(null, error => {
    const clientError =
        error.response && error.response.status >= 400 && error.response.status < 500;

    if (!clientError) {
        console.error(error);
        toast.error("😲!!!Something went wrong with our server!Try again latter");
    }

    return Promise.reject(error);

});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put

};