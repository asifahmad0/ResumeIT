
const {default:axios}=require('axios')

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient=axios.create({
    baseURL:'http://localhost:5432/admin/content-manager/collection-types/api::user-resume.user-resume/api',
    method:'post',
    headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${API_KEY}`
    }
})

const CreateNewResume=(data)=>axiosClient.post('/user-resumes', data);

export default {
    CreateNewResume
}