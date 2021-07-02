import axios from 'axios';


export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization : 'Client-ID HdA_qZEge0GDlnDQjikjQICKYxVYM4epG6W_40P64Tg'
    }
});