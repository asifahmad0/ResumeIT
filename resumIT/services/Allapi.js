import axios from 'axios';

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;


const axiosClient=axios.create({
    baseURL:'http://localhost:5432/api',
    method:'post',
    headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${API_KEY}` //VITE_STRAPI_API_KEY=eb4e1980c78403c2ac7a2b95e42c25ce502991b690b75044836e5410494495671270ce6917c16a2bc558fb2cc90715eab04b5b49af54b18a43b9a013bba71700570f189d4fecefc04a893e46caf22696ace79b09da451942d1d88856e6eb3d92665ff04060dc15e2eb28fc76d36443208737420259d513b9211393e1c1e59516
    }
})

const CreateNewResume=(data)=>axiosClient.post('/user-resumes', data);

export default {
    CreateNewResume
}
