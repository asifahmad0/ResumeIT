import axios from 'axios';

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;


const axiosClient=axios.create({
    baseURL:'http://localhost:8000/api/',
    method:'post',
    headers:{
        'Content-Type':'application/json',
        //'Authorization':`Bearer ${API_KEY}` 
    }
})

const CreateNewResume=(data)=>axiosClient.post('resume', data);

export default {
    CreateNewResume
}
